import React, { useState } from "react";
import { requestOTP } from "../api";

export default function OTPRequestForm({ onRequested }) {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("client");
  const [message, setMessage] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await requestOTP(email, role);
      setMessage("OTP sent to your email.");
      onRequested(email, role);
    } catch (err) {
      setMessage("Error sending OTP.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        required
        onChange={e => setEmail(e.target.value)}
      />
      <select value={role} onChange={e => setRole(e.target.value)}>
        <option value="client">Client</option>
        <option value="consultant">Consultant</option>
      </select>
      <button type="submit">Request OTP</button>
      <div>{message}</div>
    </form>
  );
}
