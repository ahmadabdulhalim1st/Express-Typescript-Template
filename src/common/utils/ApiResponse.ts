import type { Response } from "express";
import { APP } from "@/config/env.js";
export class ApiResponse {
  static success(res: Response, { statusCode, message = "Success", data, token }: { statusCode: number; message?: string; data?: any; token?: any }): any {
    return res.status(statusCode).json({
      success: true,
      message,
      data,
      ...(token && { token }),
    });
  }

  static failure(res: Response, { statusCode, message, error, stack }: { statusCode: number; message?: string; error?: any; stack?: any }) {
    return res.status(statusCode).json({
      success: false,
      message,
      ...(error && { error }),
      ...(APP.IS_DEV && { stack }),
    });
  }
}
