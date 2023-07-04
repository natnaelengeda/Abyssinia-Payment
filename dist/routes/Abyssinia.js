"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Abyssinia_1 = require("../controllers/Abyssinia");
const router = express_1.default.Router();
router.get("/", Abyssinia_1.Payment);
router.post('/notify', Abyssinia_1.Notify);
module.exports = router;
