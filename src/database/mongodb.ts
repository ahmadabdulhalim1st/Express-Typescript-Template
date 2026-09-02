import mongoose from "mongoose";
import { DATABASE } from "@config/env";
mongoose.connection.on("connected", () => {
  console.log("✅ MongoDB connected");
});

mongoose.connection.on("disconnected", () => {
  console.warn("⚠️ MongoDB disconnected");
});

mongoose.connection.on("error", (err) => {
  console.error("❌ MongoDB error:", err.message);
  process.exit(1);
});

export const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) return;
  await mongoose.connect(DATABASE.URI);
};

export const disconnectDB = async () => {
  await mongoose.disconnect();
};
