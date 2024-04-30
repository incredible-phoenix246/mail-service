import { Sendorder } from "../controllers/emailcontroller";
import express, { Router } from "express";

const router: Router = express.Router();

router.post("/ods/sendorder", Sendorder);


module.exports = router;