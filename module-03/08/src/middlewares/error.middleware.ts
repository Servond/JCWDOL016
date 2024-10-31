import { Request, Response, NextFunction } from "express";

export default function ErrorMiddleware(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.status(500).send({
    message: err.message,
  });
}
