import express, { Application } from "express";
import { PORT as port, BASE_WEB_URL } from "./utils/envConfig";
import cors from "cors";

import ErrorMiddleware from "./middlewares/error.middleware";

import { AuthRoute } from "./routes/auth.route";

export default class Server {
  private app: Application;
  private PORT: number;

  constructor() {
    this.PORT = Number(port) || 8000;
    this.app = express();
    this.middleware();
    this.routes();
    this.handleError();
  }

  private middleware(): void {
    this.app.use(
      cors({
        origin: BASE_WEB_URL || "http://localhost:3000",
        credentials: true,
      })
    );
    this.app.use(express.json());
  }

  private routes(): void {
    this.app.use("/auth", new AuthRoute().getRoute());
  }

  private handleError(): void {
    this.app.use(ErrorMiddleware);
  }

  public start(): void {
    this.app.listen(this.PORT, () => {
      console.log(`Server started on port ${this.PORT}`);
    });
  }
}
