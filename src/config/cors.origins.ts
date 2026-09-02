import type { CorsOptions } from "cors";
import { APP } from "@config/env";
export const corsOptions: CorsOptions = {
  origin: (requestOrigin, callback) => {
    if (!requestOrigin || APP.ORIGINS.has(requestOrigin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed"));
    }
  },
  methods: ["GET", "POST", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};
