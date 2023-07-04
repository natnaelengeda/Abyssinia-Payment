"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Index_1 = require("../controllers/Index");
const router = express_1.default.Router();
router.get("/", Index_1.Index);
module.exports = router;
