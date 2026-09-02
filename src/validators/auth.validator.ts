import { userBase, queryBase } from "@validators/base.validator";
import * as z from "zod";

export const userQuerySchema = queryBase.extend({
  verified: z.coerce.boolean().optional(),
  fields: z.enum(["name", "email", "role", "createdAt"]).optional(),
  role: z.enum(["User", "Admin"]).optional(),
});
export const userParamSchema = userBase.pick({ id: true });
