import mongoose from "mongoose";
import { betterAuth } from "better-auth";
import { connectDB } from "@database/mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { APP, BETTER_AUTH } from "@config/env";

let dbInstance: import("mongodb").Db;
let clientInstance: import("mongodb").MongoClient;

const getMongodbInstances = async () => {
  if (!dbInstance || !clientInstance) {
    await connectDB();
    clientInstance = mongoose.connection.getClient();
    dbInstance = clientInstance.db();
    console.log("✅ MongoDB instances initialized for better-auth");
  }
  return { db: dbInstance, client: clientInstance };
};

export const { db, client } = await getMongodbInstances();

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client,
  }),

  emailAndPassword: {
    enabled: true,
  },

  session: {
    expiresIn: 60 * 60 * 24 * 24,
    updateAge: 60 * 60 * 24,
    deferSessionRefresh: true,
  },

  trustedOrigins: [...APP.ORIGINS],
  baseURL: BETTER_AUTH.BASE_URL,
  basePath: "api/v1/auth",
  secret: BETTER_AUTH.SECRET,
});
