import express from "express";
import cors from "cors";
import morgan from "morgan";
import incomeRoutes from "./routes/income.routes.js";
import expenseRoutes from "./routes/expense.routes.js";
import { FRONTEND_URL } from "./config.js";

const app = express();

//middlewares
app.use(
  cors({
    origin: [FRONTEND_URL, "*", "http://localhost:4173"],
    credentials: true
  })
);
app.use(morgan("dev"));
app.use(express.json());

//routes
app.use("/api", incomeRoutes);
app.use("/api", expenseRoutes);

export default app;
