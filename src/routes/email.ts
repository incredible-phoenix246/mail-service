import { Sendorder, SendSubscribe } from "../controllers/emailcontroller";
import express, { Router } from "express";

const router: Router = express.Router();

router.post("/ods/sendorder", Sendorder);
router.post("/mrgrace/sub", SendSubscribe);

module.exports = router;
