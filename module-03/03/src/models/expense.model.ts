import { RowDataPacket } from "mysql2";

export type Expense = {
  id: number;
  title: string;
  nominal: number;
  type: string;
  category: string;
  date: Date;
};

export interface GetExpenses {
  dateFrom?: string;
  dateTo?: string;
  category?: string;
}

export type IExpense = Expense & RowDataPacket;
