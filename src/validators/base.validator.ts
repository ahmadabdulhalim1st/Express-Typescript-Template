import * as z from "zod";
import { ObjectId } from "bson";

export const isValidId = z.custom<string>(
  (value: any) => value instanceof ObjectId || ObjectId.isValid(value),
);
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
export const passwordSchema = z
  .string()
  .min(8, { error: "password must be at least 8 chars" })
  .max(100, { error: "password can be at  most 100 chars" })
  .regex(passwordRegex, {
    error:
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character (@$!%*?&)",
  });
export const userBase = z.object({
  name: z
    .string()
    .min(5, { error: "name must be at least 5 chars" })
    .max(50, { error: "name must be at most 50 chars" })
    .trim(),
  email: z.email(),
  password: passwordSchema,
  role: z.enum(["user", "admin"]),
  id: z.string().min(1).max(255),
});

export const queryBase = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().min(1).max(100).default(10),
  search: z.string().toLowerCase().min(5).optional(),
  createdFrom: z.date().optional(),
  createdTo: z.date().optional(),
  sortBy: z.enum(["createdAt", "updatedAt", "name"]).default("createdAt"),
  sortOrder: z.enum(["asc", "desc"]).default("desc"),
});
