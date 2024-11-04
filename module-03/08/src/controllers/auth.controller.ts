import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import { genSalt, hash, compare } from "bcrypt";
import { sign } from "jsonwebtoken";

import { SECRET_KEY } from "../utils/envConfig";

const prisma = new PrismaClient();

async function Register(req: Request, res: Response, next: NextFunction) {
  try {
    const { email, password } = req.body;
    const findUser = await prisma.user.findUnique({
      where: { email },
    });

    if (findUser) throw new Error("Email Sudah ada");

    const salt = await genSalt(10);
    console.log(salt);
    const hashPassword = await hash(password, salt);

    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashPassword,
      },
    });

    res.status(200).send({
      message: "success",
      data: newUser,
    });
  } catch (err) {
    next(err);
  }
}

async function Login(req: Request, res: Response, next: NextFunction) {
  try {
    const { email, password } = req.body;

    const findUser = await prisma.user.findUnique({
      where: { email },
    });

    if (!findUser) throw new Error("Invalid Email");

    const isValid = await compare(password, findUser.password);

    if (!isValid) throw new Error("Invalid password");

    const payload = {
      email,
      role: findUser.role,
    };

    const token = sign(payload, SECRET_KEY as string, { expiresIn: "1d" });

    res.status(200).send({
      message: "success",
      access_token: token,
    });
  } catch (err) {
    next(err);
  }
}

export { Register, Login };
