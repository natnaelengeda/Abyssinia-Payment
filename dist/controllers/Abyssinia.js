"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notify = exports.Payment = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const uuid_1 = require("uuid");
const crypto_1 = __importDefault(require("crypto"));
dotenv_1.default.config();
const Payment = (req, res) => {
    const env = process.env;
    const access_key = env.ABSYISSINIA_ACCESS_KEY;
    const profile_id = env.ABSYISSINIA_PROFILE_ID;
    const secret_key = env.ABSYISSINIA_SECRET_KEY;
    const amount = 10;
    const HMAC_SHA256 = 'sha256';
    const payment = {
        access_key: access_key,
        profile_id: profile_id,
        transaction_uuid: (0, uuid_1.v4)(),
        signed_field_names: "access_key,profile_id,transaction_uuid,signed_field_names,unsigned_field_names,signed_date_time,locale,transaction_type,reference_number,amount,currency",
        unsigned_field_names: "",
        signed_date_time: new Date().toISOString().split('.')[0] + "Z",
        locale: "en",
        transaction_type: "authorization",
        reference_number: (0, uuid_1.v4)(),
        amount: amount.toFixed(2),
        currency: "USD"
    };
    const sign = (params) => {
        return signData(buildDataToSign(params), secret_key);
    };
    const signData = (data, secretKey) => {
        const hmac = crypto_1.default.createHmac(HMAC_SHA256, secretKey);
        hmac.update(data);
        return hmac.digest('base64');
    };
    const buildDataToSign = (params) => {
        const signedFieldNames = params['signed_field_names'].split(',');
        const dataToSign = signedFieldNames.map((field) => `${field}=${params[field]}`);
        return commaSeparate(dataToSign);
    };
    const commaSeparate = (dataToSign) => {
        return dataToSign.join(',');
    };
    const signature = sign(payment);
    console.log({ payment, signature });
    res.render("cybersource", { payment, signature });
    const car = {
        access_key: '71e4dce7c50d36cd8dc14c8c1422f45b',
        profile_id: 'BA95B0FF-D5DA-404A-8AA6-3940ED090BB6',
        transaction_uuid: 'cd4fb5ca-a563-463a-a9b9-1a213f5ed029d-88',
        signed_field_names: 'access_key,profile_id,transaction_uuid,signed_field_names,unsigned_field_names,signed_date_time,locale,transaction_type,reference_number,amount,currency',
        unsigned_field_names: '',
        signed_date_time: '2023-06-29T13:27:02Z',
        locale: 'en',
        transaction_type: 'authorization',
        reference_number: '2668c5e1-4689-49f2-92ff-7c14d8843140',
        amount: '534.41',
        currency: 'USD'
    };
    const asdf = 'XWC2/ApXSOKY8m2I1TgoiFLhqTpg++J/UYLKvSdzbAo=';
};
exports.Payment = Payment;
const Notify = (req, res) => {
    console.log(req.body);
    // res.send('OK');
};
exports.Notify = Notify;
