import { Request, Response, NextFunction } from "express";

function masukMiddleware(req: Request, res: Response, next: NextFunction) {
  try {
    const { user } = req.query;
    if (!user) throw new Error("Unauthorized");
    console.log("masuk middleware", user);

    next();
  } catch (err) {
    next(err);
  }
}

export default masukMiddleware;
