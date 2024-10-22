import { Request, Response, NextFunction } from "express";

function GetAllUser(req: Request, res: Response, next: NextFunction) {
  try {
    res.status(200).send({
      message: "Get users success",
    });
  } catch (err) {
    next(err);
  }
}

function GetUserDetail(req: Request, res: Response, next: NextFunction) {
  try {
    const { uuid } = req.params;

    if (uuid === "5") {
      throw new Error("ID Tidak boleh 5");
    }

    res.status(200).send({
      message: "Get user detail success",
      data: uuid,
    });
  } catch (err) {
    next(err);
  }
}

export { GetAllUser, GetUserDetail };
