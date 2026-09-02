# Express TypeScript Starter API

A production-ready, modular REST API template built with **Express**, **TypeScript**, **Mongoose (MongoDB)**, **Redis**, and **Better Auth**.

---

## 🏗️ Folder Structure

```text
src/
├── common/             # Shared utilities, middlewares, types, and validators
│   ├── middlewares/    # Express global middlewares (auth, rate limits, errors)
│   ├── types/          # Global TypeScript definitions & Express request overrides
│   ├── utils/          # Helper functions and standardized API response tools
│   └── validators/     # Shared Zod validation schemas
│
├── config/             # Application environment & configuration constants
│   ├── constants/      # App-wide static constants & status codes
│   ├── cors.origins.ts # CORS allowed origins & settings
│   └── env.ts          # Zod-validated process.env definitions
│
├── database/           # Connection drivers and database settings
│   ├── mongodb.ts      # Mongoose MongoDB connection lifecycle
│   ├── options.ts      # Mongo connection driver settings
│   └── redis.ts        # ioredis client initialization
│
├── lib/                # Third-party integrations & library setups
│   └── auth.ts         # Better Auth instance & Mongoose adapter integration
│
├── modules/            # Feature-driven domain modules
│   └── auth/           # Auth controllers, services, and route definitions
│
├── routes/             # Express API route registry
├── app.ts              # Express application setup & middleware assembly
└── server.ts           # HTTP server startup & database initialization
