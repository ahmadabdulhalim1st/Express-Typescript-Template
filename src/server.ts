import { app } from "@app";
import { APP } from "@config/env";
import { connectDB } from "@database/mongodb";
import { connectRedis } from "@database/redis";
import http from "node:http";

let server: http.Server | undefined;
const startServer = async () => {
  try {
    await connectDB();
    await connectRedis();
    server = app.listen(APP.PORT, () => {
      console.log(`🚀 Server running at http://localhost:${APP.PORT}`);
    });
  } catch (error: any) {
    console.log(`❌ Startup failed: ${error.message}`);
    process.exit(1);
  }
};

process.on("unhandledRejection", (reason) => {
  console.error("❌ Unhandled Rejection", reason);

  server?.close(() => {
    return process.exit(1);
  });
  process.exit(1);
});

process.on("uncaughtException", (error) => {
  console.error("❌ Uncaught Exception", { name: error, message: error });

  server?.close(() => {
    return process.exit(1);
  });
  process.exit(1);
});

startServer();
