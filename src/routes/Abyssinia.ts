import express from 'express';
import { Notify, Payment } from '../controllers/Abyssinia';


const router = express.Router();

router.get("/", Payment);
router.post('/notify', Notify);


module.exports = router;