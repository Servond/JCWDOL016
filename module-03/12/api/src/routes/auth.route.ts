import { Router, Request, Response, NextFunction } from "express";
import {
  Login,
  Register,
  GetUserLogin,
  GetUsers,
  UpdateAvatar,
  VerifyUser,
} from "../controllers/auth.controller";
import { VerifyToken, AdminGuard } from "../middlewares/auth.middleware";

import { SingleUploader } from "../utils/uploader";

import {
  RegisterValidation,
  LoginValidation,
} from "../middlewares/validations/auth.validation";

export class AuthRoute {
  private router: Router = Router();

  constructor() {
    this.routes();
  }

  private routes(): void {
    this.router.post("/register", RegisterValidation, Register);

    this.router.post("/login", LoginValidation, Login);

    // router.get("/me", VerifyToken, GetUserLogin);

    this.router.get("/users", VerifyToken, AdminGuard, GetUsers);

    this.router.get("/verify", VerifyToken, VerifyUser);

    // uploader
    this.router.patch(
      "/avatar",
      VerifyToken,
      SingleUploader("AVT", "/avatar"),
      UpdateAvatar
    );
  }

  public getRoute(): Router {
    return this.router;
  }
}
