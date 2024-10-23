import { Router } from "express";

import {
  GetExpenseController,
  GetExpensesController,
} from "../controllers/expense.controller";

const router = Router();

// get list expense
router.get("/expenses", GetExpensesController);

// get detail expense
router.get("/expenses/:id", GetExpenseController);

// create expense
router.post("/expenses");

// edit expense
router.put("/expenses/:id");

// delete expense

router.delete("/expenses/:id");

export default router;
