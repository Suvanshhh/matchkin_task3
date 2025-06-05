const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

async function sendOTP(email, otp) {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Your OTP for Matchkin',
      text: `Your OTP is: ${otp}`
    });
  } catch (error) {
    console.error('Error sending OTP email:', error);
    throw error;
  }
}


module.exports = sendOTP;
