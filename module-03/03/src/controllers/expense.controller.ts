import { Request, Response, NextFunction } from "express";
import { QueryError } from "mysql2";

import { IExpense, Expense } from "../models/expense.model";
import db from "../db";

export async function GetExpensesController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    db.query("select * from expense", (err: QueryError, result: Expense[]) => {
      if (err) {
        throw err;
      }

      res.status(200).send({
        message: "Success",
        data: result,
      });
    });
  } catch (err) {
    next(err);
  }
}

export async function GetExpenseController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { id } = req.params;
    db.query<IExpense[]>(
      "select * from expense where id = ?",
      [id],
      (err: QueryError | null, result: Expense[]) => {
        if (err) {
          throw err;
        }

        res.status(200).send({
          message: "Success",
          data: result,
        });
      }
    );
  } catch (err) {
    next(err);
  }
}
