interface ResponseAction {
  created?: boolean;
  updated?: boolean;
  deleted?: boolean;
  retrieved?: boolean;
  listRetrieved?: boolean;
  notFound?: boolean;
}

export const MESSAGES = {
  RESPONSE: (col: string, action: ResponseAction) => {
    if (action.created) return `${col} created successfully`;
    if (action.notFound) return `${col} not found`;
    if (action.updated) return `${col} updated successfully`;
    if (action.deleted) return `${col} deleted successfully`;
    if (action.retrieved) return `${col} retrieved successfully`;
    if (action.listRetrieved) return `${col} list retrieved successfully`;

    return "operation completed successfully";
  },
  AUTH: {
    LOGGED_IN: "User logged in successfully",
    LOGGED_OUT: "User logged out successfully",
    INVALID_PASSWORD:
      "Password must be at least 8 characters, one lowercase letter, one uppercase letter, one digit and one special character",
    PASSWORDS_DO_NOT_MATCH: "Passwords do not match",
    INVALID_CREDENTIALS: "Incorrect email or password",
    UNAUTHORIZED: "You are not logged in! Please log in to get access.",
    INVALID_TOKEN: "Invalid token",
    FORBIDDEN: "You do not have permission to perform this action",
    PASSWORD_RESET_LINK_SENT: "Password reset link sent successfully",
    TOKEN_EXPIRED: "Token has expired",
    EXPIRED_OR_INVALID_TOKEN: "Invalid or expired token",
    INCORRECT_PASSWORD: "Incorrect password",
    ACCOUNT_PERMANENTLY_DELETED:
      "Your account has been permanently deleted. Please contact support for further assistance.",
  },

  VALIDATION: {
    INVALID_ID: "Invalid ID format",
    MISSING_REQUIRED_FIELD: "Missing required field",
    INVALID_PHONE: "Invalid phone format",
    INVALID_EMAIL: "Invalid email format",
    INVALID_PAYMENT_METHOD: "Invalid payment method",
  },

  COMMON: {
    INTERNAL_ERROR: "An unexpected error occurred",
    NOT_FOUND: "Resource not found",
    UNAUTHORIZED: "You are not authorized to perform this action",
    INVALID_REQUEST: "Invalid request",
    SUCCESS: "Operation completed successfully",
    FAILED: "Operation failed",
  },
};
