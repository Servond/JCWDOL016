import { Request, Response, NextFunction } from "express";
import { transporter } from "../lib/mail";
import { PrismaClient } from "@prisma/client";
import { genSalt, hash, compare } from "bcrypt";
import { sign } from "jsonwebtoken";

import { SECRET_KEY, BASE_WEB_URL } from "../utils/envConfig";
import { User } from "../custom";
import path from "path";
import handlebars, { template } from "handlebars";
import fs from "fs";

const prisma = new PrismaClient();

async function Register(req: Request, res: Response, next: NextFunction) {
  try {
    const { email, password, name } = req.body;

    const findUser = await prisma.user.findUnique({
      where: { email },
    });

    if (findUser) throw new Error("Email Sudah ada");

    const findRoleUser = await prisma.role.findUnique({
      where: { name: "user" },
    });

    if (!findRoleUser) throw new Error("Role tidak ada");

    const salt = await genSalt(10);
    const hashPassword = await hash(password, salt);

    const templatePath = path.join(
      __dirname,
      "../templates",
      "register-mail.hbs"
    );
    const templateSource = fs.readFileSync(templatePath, "utf-8");
    const compiledTemplate = handlebars.compile(templateSource);

    await prisma.$transaction(async (prisma) => {
      await prisma.user.create({
        data: {
          email,
          name,
          password: hashPassword,
          roleId: findRoleUser.id,
        },
      });

      const payload = {
        email,
      };

      const token = sign(payload, SECRET_KEY as string, { expiresIn: "1hr" });
      const verificationUrl = BASE_WEB_URL + `/verify/${token}`;
      const html = compiledTemplate({
        emailUser: email,
        name,
        verificationUrl,
      });

      await transporter.sendMail({
        to: email,
        subject: "Registration",
        html,
      });
    });

    res.status(200).send({
      message: "Register Success",
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
      include: {
        role: true,
      },
    });

    if (!findUser) throw new Error("Invalid email or password");
    if (!findUser.isVerified)
      throw new Error("Please verify your account first");
    const isValid = await compare(password, findUser.password);

    if (!isValid) throw new Error("Invalid email or password");

    const payload = {
      email,
      name: findUser.name,
      role: findUser.role.name,
    };

    const token = sign(payload, SECRET_KEY as string, { expiresIn: "1d" });

    res.status(200).cookie("access_token", token).send({
      message: "success",
    });
  } catch (err) {
    next(err);
  }
}

async function GetUserLogin(req: Request, res: Response, next: NextFunction) {
  try {
    const { email } = req.user as User;

    const data = await prisma.user.findUnique({
      where: { email },
      select: {
        email: true,
        name: true,
        role: {
          select: {
            name: true,
          },
        },
      },
    });

    res.status(200).send({
      message: "Success",
      data,
    });
  } catch (err) {
    next(err);
  }
}

async function GetUsers(req: Request, res: Response, next: NextFunction) {
  try {
    const data = await prisma.user.findMany({
      select: {
        email: true,
        name: true,
        role: {
          select: {
            name: true,
          },
        },
      },
    });

    res.status(200).send({
      message: "Success",
      data,
    });
  } catch (err) {
    next(err);
  }
}

async function UpdateAvatar(req: Request, res: Response, next: NextFunction) {
  try {
    const { email } = req.user as User;
    const { file } = req;

    if (!file) {
      throw new Error("No file uploaded");
    }

    await prisma.user.update({
      where: {
        email,
      },
      data: {
        avatar: file?.filename,
      },
    });

    res.status(200).send({
      message: "Success",
    });
  } catch (err) {
    next(err);
  }
}

async function VerifyUser(req: Request, res: Response, next: NextFunction) {
  try {
    const { email } = req.user as User;

    await prisma.user.update({
      where: { email },
      data: {
        isVerified: true,
      },
    });

    res.status(200).send({
      message: "Verify Success",
    });
  } catch (err) {
    next(err);
  }
}

export { Register, Login, GetUserLogin, GetUsers, VerifyUser, UpdateAvatar };
