import nodemailer from "nodemailer";
import { NODEMAILER_EMAIL, NODEMAILER_PASS } from "../utils/envConfig";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: NODEMAILER_EMAIL,
    pass: NODEMAILER_PASS,
  },
});
