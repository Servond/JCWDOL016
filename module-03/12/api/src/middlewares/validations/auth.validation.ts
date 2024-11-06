import { Request, Response, NextFunction } from "express";
import { body, validationResult } from "express-validator";

export const RegisterValidation = [
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid email format"),
  body("name")
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 3 })
    .withMessage("Name must be 3 characters minimum"),
  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 3 })
    .withMessage("Password must be 3 characters minimum")
    .matches(/^(?=.*[\d])(?=.*[!@#$%^&*])[\w!@#$%^&*]{6,16}$/)
    .withMessage(
      "Password need to have atleast 1 number and special characters"
    ),
  (req: Request, res: Response, next: NextFunction) => {
    try {
      const errors = validationResult(req);
      console.log(errors);

      if (!errors.isEmpty()) throw new Error(errors.array()[0].msg);

      next();
    } catch (err) {
      next(err);
    }
  },
];

export const LoginValidation = [
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid email format"),
  body("password").notEmpty().withMessage("Password is required"),

  (req: Request, res: Response, next: NextFunction) => {
    try {
      const errors = validationResult(req);
      console.log(errors);

      if (!errors.isEmpty()) throw new Error(errors.array()[0].msg);

      next();
    } catch (err) {
      next(err);
    }
  },
];
