export class ApiError extends Error {
  constructor(
    public readonly statusCode: number,
    message: string,
  ) {
    super(message);
    this.statusCode = statusCode;
    this.name = "ApiError";
    Error.captureStackTrace(this, this.constructor);
  }
}

export const createError = {
  notFound: (message = "Resource not found") => {
    return new ApiError(404, message);
  },

  badRequest: (message = "Bad request") => {
    return new ApiError(400, message);
  },

  unauthorized: (message = "Unauthorized") => {
    return new ApiError(401, message);
  },

  forbidden: (message = "Forbidden") => {
    return new ApiError(403, message);
  },

  conflict: (message = "Conflict") => {
    return new ApiError(409, message);
  },

  tooManyRequests: (message = "Too many requests") => {
    return new ApiError(429, message);
  },
  internal: (message = "Internal server error") => {
    return new ApiError(500, message);
  },
  serviceUnavailable: (message = "Service unavailable") => {
    return new ApiError(503, message);
  },
};
