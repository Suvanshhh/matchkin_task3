const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const matchRoutes = require("./routes/matchRoutes");

const app = express();
app.use(
  cors({
    origin: process.env.FRONTEND_URL, // Set this env variable to your frontend’s deployed URL
  })
);
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api", matchRoutes);

app.get("/health", (req, res) => res.status(200).send("OK"));

connectDB();

const PORT = process.env.PORT || 4000;
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

process.on("SIGTERM", () => {
  console.log("SIGTERM received, shutting down gracefully");
  server.close(() => {
    console.log("Server closed");
    process.exit(0);
  });
});
