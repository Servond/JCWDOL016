import express, { Application } from "express";
import { PORT as port } from "./utils/envConfig";

import ErrorMiddleware from "./middlewares/error.middleware";

import branchRouter from "./routes/branch.route";

const PORT = Number(port) || 8000;

const app: Application = express();

app.use(express.json());

app.use("/branch-management", branchRouter);
// app.use("/student-management")

app.use(ErrorMiddleware);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
