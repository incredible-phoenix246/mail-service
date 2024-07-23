import { sendEmail } from "../services/mailer";
import { compileOrder } from "../compiler/order";
import { compileSub } from "../compiler/sub";
import { compilerOtp, welcome } from "../compiler/welcome";
import { RequestHandler } from "express";

const Sendorder: RequestHandler = async (req, res, next) => {
  try {
    const { email, name } = req.body;
    const odsLink = process.env.ODSLINK;
    await sendEmail(
      {
        from: `OGUN DIGITAL SUMMIT 24 <order@ogundigitalsummit.com>`,
        to: email,
        subject: "Order Confirmation",
        html: compileOrder(name, odsLink),
      },
      "ODS"
    );
    res.status(200).json({ message: "Email sent successfully." });
  } catch (error) {
    console.error("Error in email middleware:", error.message);
    res.status(500).json({ error: "Error sending email" });
  }
};

const SendSubscribe: RequestHandler = async (req, res, next) => {
  try {
    const { name, email } = req.body;
    await sendEmail(
      {
        from: `WELCOME FROM MR GRACE <welcome@mrgrace.com>`,
        to: email,
        subject: "Thank you fro contacting us",
        html: compileSub(name),
      },
      "Mr_Grace"
    );
    res.status(200).json({ message: "Email sent successfully." });
  } catch (error) {
    console.error("Error in email middleware:", error.message);
    res.status(500).json({ error: "Error sending email" });
  }
};

const SendOtp: RequestHandler = async (req, res, next) => {
  try {
    const { name, email, otp } = req.body;
    await sendEmail(
      {
        from: `WELCOME TO DEVLINKS <welcome@devlinks.com>`,
        to: email,
        subject: "Verify your email",
        html: compilerOtp(parseInt(otp), name),
      },
      "ODS"
    );
    res.status(200).json({ message: "Email sent successfully." });
  } catch (error) {
    console.error("Error in email middleware:", error.message);
    res.status(500).json({ error: "Error sending email" });
  }
};

export { Sendorder, SendSubscribe, SendOtp };
