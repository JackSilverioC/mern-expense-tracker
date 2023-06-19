import { config } from "dotenv";

config();

export const PORT = process.env.PORT || 3000;
export const MONGODB_URL =
  process.env.MONGODB_URL || "mongodb://localhost/expensedb";

export const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";
