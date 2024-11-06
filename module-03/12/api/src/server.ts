import express, { Application } from "express";
import { PORT as port, BASE_WEB_URL } from "./utils/envConfig";
import cors from "cors";

import ErrorMiddleware from "./middlewares/error.middleware";

import authRouter from "./routes/auth.route";

const PORT = Number(port) || 8000;

const app: Application = express();

app.use(
  cors({
    origin: BASE_WEB_URL || "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());

app.use("/auth", authRouter);

app.use(ErrorMiddleware);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
