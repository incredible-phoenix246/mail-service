import { sendEmail } from "../services/mailer";
import { compileOrder } from "../compiler/order";
import { RequestHandler } from "express";
import { BadRequestError } from "../middlewares";

const Sendorder: RequestHandler = async (req, res, next) => {
  try {
    const { to, name } = req.body;
    const odsLink = process.env.ODSLINK;
    // const finalemail = {
    //   from: "OGUN DIGITAL SUMMIT 24",
    //   to,
    //   subject: "Order Confirmation",
    //   html: compileOrder(name, odsLink),
    // };
    await sendEmail(
      {
        from: "OGUN DIGITAL SUMMIT 24",

        subject: "Order Confirmation",
        html: compileOrder(name, odsLink),
      },
      "ODS",
      to
    );
    res.status(200).json({ message: "Email sent successfully." });
  } catch (error) {
    console.error("Error in email middleware:", error.message);
    throw new BadRequestError("Error sending email");
  }
};

export { Sendorder };
