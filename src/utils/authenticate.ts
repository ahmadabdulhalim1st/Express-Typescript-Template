import type { Request, Response, NextFunction } from "express";
import { auth } from "@utils/auth";
import { fromNodeHeaders } from "better-auth/node";
import { createError } from "@utils/ApiError";
export const authenticate = () => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const session = await auth.api.getSession({
      headers: fromNodeHeaders(req.headers),
    });
    if (!session) {
      return next(createError.unauthorized());
    }
    req.user = session.user;
    req.session = session.session;
    next();
  };
};
