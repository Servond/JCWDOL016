import express, { Request, Response, Application } from "express";

export class Server {
  private app: Application;
  private PORT: number;

  constructor() {
    this.PORT = 8080;
    this.app = express();
    this.routes();
  }

  private routes() {
    this.app.get("/api", (req: Request, res: Response) => {
      res.status(200).send("connected");
    });
  }

  public start() {
    this.app.listen(this.PORT, () => {
      console.log(`Server started on port ${this.PORT}`);
    });
  }
}
