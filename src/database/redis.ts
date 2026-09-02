import { createClient } from "redis";
import { REDIS } from "@config/env";
export const redisClient = createClient({ username: REDIS.USERNAME, password: REDIS.PASSWORD, socket: { host: REDIS.HOST, port: REDIS.PORT } });
redisClient.on("error", (error) => console.log("Redis Client Error", error));
redisClient.on("connect", () => console.log("Redis Client Connected"));

export const connectRedis = async () => await redisClient.connect();

export const disconnectRedis = () => redisClient.destroy();
