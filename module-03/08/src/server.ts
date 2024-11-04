import express, { Application } from "express";
import { PORT as port } from "./utils/envConfig";
import cors from "cors";

import ErrorMiddleware from "./middlewares/error.middleware";

import branchRouter from "./routes/branch.route";
import authRouter from "./routes/auth.route";

const PORT = Number(port) || 8000;

const app: Application = express();

app.use(cors());
app.use(express.json());

app.use("/branch-management", branchRouter);
app.use("/auth-management", authRouter);

app.use(ErrorMiddleware);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
