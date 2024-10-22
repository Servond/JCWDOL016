import { Request, Response, NextFunction } from "express";

function errorMiddleware(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.status(500).send({
    message: err.message,
  });
}

export default errorMiddleware;
