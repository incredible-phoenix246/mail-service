import { sendEmail } from "../services/mailer";
import { compileOrder } from "../compiler/order";
import { RequestHandler } from "express";
import { BadRequestError } from "../middlewares";

const Sendorder: RequestHandler = async (req, res, next) => {
  try {
    const { email, name } = req.body;
    const odsLink = process.env.ODSLINK;
    await sendEmail(
      {
        from: "OGUN DIGITAL SUMMIT 24",
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

export { Sendorder };
