export const HTTP_STATUS = Object.freeze({
  SUCCESS: Object.freeze({
    OK: 200,
    CREATED: 201,
    ACCEPTED: 202,
    NO_CONTENT: 204,
  }),

  CLIENT_ERROR: Object.freeze({
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    CONFLICT: 409,
    UNPROCESSABLE_ENTITY: 422,
    TOO_MANY_REQUESTS: 429,
  }),

  SERVER_ERROR: Object.freeze({
    INTERNAL_SERVER_ERROR: 500,
    NOT_IMPLEMENTED: 501,
    BAD_GATEWAY: 502,
    SERVICE_UNAVAILABLE: 503,
  }),
});

export const HTTP_MESSAGES = Object.freeze({
  200: "OK",
  201: "Created",
  204: "No Content",

  400: "Bad Request",
  401: "Unauthorized",
  403: "Forbidden",
  404: "Not Found",
  409: "Conflict",
  422: "Unprocessable Entity",
  429: "Too Many Requests",

  500: "Internal Server Error",
  502: "Bad Gateway",
  503: "Service Unavailable",
});
