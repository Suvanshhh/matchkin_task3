import React, { useState } from "react";
import { verifyOTP } from "../api";

export default function OTPVerifyForm({ email, onVerified }) {
  const [otp, setOTP] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await verifyOTP(email, otp);
      localStorage.setItem("token", res.data.token);
      setMessage("Verified! You are logged in.");
      onVerified();
    } catch (err) {
      setMessage("Invalid or expired OTP.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        required
        onChange={e => setOTP(e.target.value)}
      />
      <button type="submit">Verify OTP</button>
      <div>{message}</div>
    </form>
  );
}
