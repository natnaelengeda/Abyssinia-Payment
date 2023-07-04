"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
dotenv_1.default.config();
app.use(body_parser_1.default.json());
const port = process.env.PORT || 8000;
const env = process.env.NODE_ENV || "development";
const Index = require('./routes/Index');
const Abyssinia = require('./routes/Abyssinia');
app.set('view engine', 'ejs');
app.use('/', Index);
app.use('/Abyssinia', Abyssinia);
app.listen(port, () => {
    console.log(`Server Started on Port ${port} - ${env}`);
});
