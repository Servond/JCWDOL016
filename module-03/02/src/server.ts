import express, { Application } from "express";
import { PORT as port } from "./config";

import masukMiddleware from "./middlewares/masuk.middleware";
import errorMiddleware from "./middlewares/error.middleware";

import userRoute from "./routes/user.route";

const PORT = Number(port) || 8000;

const app: Application = express();

// middleware
app.use(express.json());
// app.use(masukMiddleware);

// route
app.use("/user-management", userRoute);

// error handling middleware
app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
