import type { Request, Response, NextFunction } from "express";
import { ZodType } from "zod";
import { createError } from "@common/utils/ApiError";

export interface RequestValidators {
  body?: ZodType<object>;
  query?: ZodType<object>;
  params?: ZodType<object>;
}

export const validate = (validators: RequestValidators) => {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      if (validators.params) {
        req.validatedParams = await validators.params.parseAsync(req.params);
      }
      if (validators.body) {
        if (!req.body || Object.keys(req.body).length === 0) {
          return next(createError.badRequest("Request body cannot be empty"));
        }
        req.validatedBody = await validators.body.parseAsync(req.body);
      }
      if (validators.query) {
        req.validatedQuery = await validators.query.parseAsync(req.query);
      }
      next();
    } catch (error) {
      next(error);
    }
  };
};
