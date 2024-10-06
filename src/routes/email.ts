import {
  Sendorder,
  SendSubscribe,
  SendOtp,
  sendWcfOtp,
} from "../controllers/emailcontroller";
import express, { Router } from "express";

const router: Router = express.Router();

router.post("/ods/sendorder", Sendorder);
router.post("/mrgrace/sub", SendSubscribe);
router.post("/devlink/sendotp", SendOtp);
router.post("/wcf/welcome", sendWcfOtp);

export default router
