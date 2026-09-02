import { log } from "console";
import dotenv from "dotenv";
const envFile = `.env.${process.env.NODE_ENV || "development"}.local`;
dotenv.config({ path: envFile });
const config = {
  APP: {
    PORT: Number(process.env.PORT) || 5500,
    ENV: process.env.NODE_ENV || "development",
    IS_DEV: envFile.includes("development"),
    IS_PRD: envFile.includes("production"),
    ORIGINS: new Set(
      (process.env.ALLOWED_ORIGINS || "http://localhost:5173").split(","),
    ),
  },
  DATABASE: {
    URI: process.env.DATABASE_URL as string,
    NAME: process.env.DB_NAME as string,
  },
  REDIS: {
    USERNAME: process.env.REDIS_USERNAME as string,
    PASSWORD: process.env.REDIS_PASSWORD as string,
    HOST: process.env.REDIS_HOST as string,
    PORT: Number(process.env.REDIS_PORT),
  },
  BETTER_AUTH: {
    SECRET: process.env.BETTER_AUTH_SECRET as string,
    BASE_URL: process.env.BETTER_AUTH_URL as string,
    API_KEY: process.env.BETTER_AUTH_API_KEY as string,
  },
} as const;

export const { APP, DATABASE, REDIS, BETTER_AUTH } = config;
