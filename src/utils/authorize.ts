import type { NextFunction, Request, Response } from "express";
import { createError } from "@utils/ApiError";
type Role = "admin" | "user";
export const authorize =
  (...roles: Role[]) =>
  (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
      return next(createError.unauthorized("Authentication required."));
    }

    if (!roles.includes(req.user.role)) {
      return next(createError.forbidden("You are not authorized to access this resource."));
    }
    next();
  };
