import type { Request, Response, NextFunction } from "express";
import { ApiError, createError } from "@/utils/ApiError";
import { HTTP_MESSAGES, HTTP_STATUS } from "@/constants/httpResponse";
import { ApiResponse } from "@/utils/ApiResponse";
import z, { ZodError } from "zod";
import { APIError, isAPIError } from "better-auth/api";
export const errorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let configuredError = error;
  if (isAPIError(error) || error instanceof APIError) {
    configuredError = error;
    configuredError.cause = error.body;
    configuredError.stack = error.errorStack;
  }
  if (error instanceof ZodError) {
    const zError = error.issues.map((err) => ({
      path: err.path.join("."),
      message: err.message,
    }));

    configuredError = createError.badRequest("Validation error");
    configuredError.cause = zError;
  }

  ApiResponse.failure(res, {
    statusCode:
      configuredError?.statusCode ||
      HTTP_STATUS.SERVER_ERROR.INTERNAL_SERVER_ERROR,
    message: configuredError?.message || HTTP_MESSAGES[500],
    error: configuredError?.cause,
    stack: configuredError?.stack,
  });
};

export const notFoundHandler = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  next(createError.notFound(`Route ${req.originalUrl} not found`));
};
