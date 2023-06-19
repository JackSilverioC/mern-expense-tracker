import { Router } from "express";
import {
  addExpense,
  getExpenses,
  deleteExpense
} from "../controllers/expense.controller.js";

const router = Router();

router.get("/get-expenses", getExpenses);
router.post("/add-expense", addExpense);
router.delete("/delete-expense/:id", deleteExpense);

export default router;
