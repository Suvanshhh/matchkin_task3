const User = require('../models/User');
const { setOTP, verifyOTP } = require('../utils/otpStore');
const jwt = require('jsonwebtoken');
const sendOTP = require('../utils/mailer');
require('dotenv').config();

exports.requestOTP = async (req, res) => {
  const { email, role } = req.body;
  let user = await User.findOne({ email });
  if (!user) user = await User.create({ email, role });
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  setOTP(email, otp);
  await sendOTP(email, otp);
  res.json({ message: 'OTP sent' });
};

exports.verifyOTP = async (req, res) => {
  const { email, otp } = req.body;
  if (!verifyOTP(email, otp)) return res.status(400).json({ message: 'Invalid or expired OTP' });
  const user = await User.findOneAndUpdate({ email }, { verified: true }, { new: true });
  const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });
  res.json({ token, role: user.role });
};
