import {
  Sendorder,
  SendSubscribe,
  SendOtp,
} from "../controllers/emailcontroller";
import express, { Router } from "express";

const router: Router = express.Router();

router.post("/ods/sendorder", Sendorder);
router.post("/mrgrace/sub", SendSubscribe);
router.post("/devlink/sendotp", SendOtp);

module.exports = router;
