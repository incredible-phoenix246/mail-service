import nodemailer, { Transporter, SentMessageInfo } from "nodemailer";
import { BadRequestError } from "../middlewares";
import "dotenv/config";

const { SMTP_EMAIL, SMTP_PASSWORD, MRGRACE_SMTP_PASSWORD, MRGRACE_SMTP_EMAIL } =
  process.env;

const transporters: Record<string, Transporter<SentMessageInfo>> = {
  // list of all availalbe transporters
  ODS: nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  }),
  Mr_Grace: nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: MRGRACE_SMTP_EMAIL,
      pass: MRGRACE_SMTP_PASSWORD,
    },
  }),
};

const sendEmail = async (emailContent: any, transporterName: string) => {
  try {
    // Get the transporter based on the name provided
    const transporter = transporters[transporterName];

    if (!transporter) {
      throw new BadRequestError(
        "No email transporter configured for the specified service."
      );
    }

    await transporter.sendMail(emailContent);
    console.log("Email sent successfully.");
    return { message: "Email sent successfully." };
  } catch (error) {
    console.error("Error sending email:", error.message);
    throw new BadRequestError("Error sending email");
  }
};

export { sendEmail };
