import nodemailer from "nodemailer";

const email = process.env.EMAIL;
const pass = process.env.PASS;

export const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  // requireTLS: true,
  auth: {
    user: email, // generated ethereal user
    pass, // generated ethereal password
  },
  debug: true,
  logger: true,
});

export const mailOptions = {
  from: email,
  to: "shaheemsha097@gmail.com",
};
