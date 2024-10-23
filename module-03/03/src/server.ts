import express, { Application } from "express";
import db from "./db";
import errorMiddleware from "./middlewares/error.middleware";

import expenseRoute from "./routes/expense.route";

const app: Application = express();

// middleware
app.use(express.json());

// route

// expense
app.use("/expense-management", expenseRoute);

// error handling
app.use(errorMiddleware);

db.getConnection((err, connection) => {
  if (err) {
    return console.log(err);
  }

  console.log("Connection to DB Success");
});

export default app;
