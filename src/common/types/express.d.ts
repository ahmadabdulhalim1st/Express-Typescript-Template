import type { Request } from "express";
import RequestValidators from "@common/middlewares/validation";
declare global {
  namespace Express {
    interface Request {
      user?: any;
      session?: any;
      validatedQuery: z.infer<typeof RequestValidators>;
      validatedBody: z.infer<typeof RequestValidators>;
      validatedParams: z.infer<typeof RequestValidators>;
    }
  }
}

export {};
