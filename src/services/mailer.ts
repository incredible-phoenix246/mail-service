import nodemailer, { Transporter, SentMessageInfo } from "nodemailer";
import { BadRequestError } from "../middlewares";
import "dotenv/config";

const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

const transporters: Record<string, Transporter<SentMessageInfo>> = {
  // list of all availalbe transporters
  ODS: nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  }),
};

const sendEmail = async (
  emailContent: any,
  transporterName: string,
  reciepients: string
) => {
  try {
    // Get the transporter based on the name provided
    console.log({ email: SMTP_EMAIL, password: SMTP_PASSWORD });
    const transporter = transporters[transporterName];

    if (!transporter) {
      throw new BadRequestError(
        "No email transporter configured for the specified service."
      );
    }

    await transporter.sendMail({
      to: reciepients,
    });
    console.log("Email sent successfully.");
    return { message: "Email sent successfully." };
  } catch (error) {
    console.error("Error sending email:", error.message);
    throw new BadRequestError("Error sending email");
  }
};

export { sendEmail };
