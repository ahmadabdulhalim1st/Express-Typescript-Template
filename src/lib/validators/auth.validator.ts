import { userBase, queryBase } from "@lib/validators/base.validator";
import * as z from "zod";
const booleanFromString = z.enum(["true", "false"]).transform((value) => value === "true");
export const userQuerySchema = queryBase.extend({
  verified: booleanFromString.optional(),
  fields: z.enum(["name", "email", "role", "createdAt"]).optional(),
  role: z.enum(["User", "Admin"]).optional(),
});
export const userParamSchema = userBase.pick({ id: true });
