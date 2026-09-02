import {
  userBase,
  queryBase,
  passwordSchema,
} from "@validators/base.validator";
import * as z from "zod";

const booleanFromString = z
  .enum(["true", "false"])
  .transform((value) => value === "true");

export const signUpSchema = userBase
  .omit({ role: true, id: true })
  .extend({ confirmPassword: z.string() })
  .refine(
    (data) => {
      return data.password === data.confirmPassword;
    },
    { error: "Password do not match!", path: ["confirmPassword"] },
  )
  .strict();

export const signInSchema = userBase
  .pick({ email: true })
  .extend({ password: z.string().min(1, { error: "Password is required" }) })
  .strict();

export const signOutSchema = z
  .object({
    confirmText: z.literal("SIGNOUT").optional(),
  })
  .strict();
export const forgetPasswordSchema = userBase.pick({ email: true });
export const resetPassworSchema = z.object({
  token: z.string().min(1, { error: "Token is required" }),
  newPassword: passwordSchema,
});
