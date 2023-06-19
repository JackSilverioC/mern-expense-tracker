import { Router } from "express";
import {
  addIncome,
  deleteIncome,
  getIncomes
} from "../controllers/income.controller.js";

const router = Router();

router.get("/get-incomes", getIncomes);
router.post("/add-income", addIncome);
router.delete("/delete-income/:id", deleteIncome);

export default router;
