const otpMap = new Map();

function setOTP(email, otp, ttlSeconds = 300) {
  const expiresAt = Date.now() + ttlSeconds * 1000;
  otpMap.set(email, { otp, expiresAt });
  setTimeout(() => {
    if (otpMap.get(email)?.expiresAt <= Date.now()) otpMap.delete(email);
  }, ttlSeconds * 1000);
}

function verifyOTP(email, otp) {
  const entry = otpMap.get(email);
  if (!entry) return false;
  if (entry.otp === otp && Date.now() <= entry.expiresAt) {
    otpMap.delete(email);
    return true;
  }
  return false;
}

module.exports = { setOTP, verifyOTP };
