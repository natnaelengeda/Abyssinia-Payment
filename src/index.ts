import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
const app = express();

dotenv.config();
app.use(bodyParser.json());

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
