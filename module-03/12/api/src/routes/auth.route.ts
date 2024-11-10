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

const router = Router();

router.post("/register", RegisterValidation, Register);

router.post("/login", LoginValidation, Login);

// router.get("/me", VerifyToken, GetUserLogin);

router.get("/users", VerifyToken, AdminGuard, GetUsers);

router.get("/verify", VerifyToken, VerifyUser);

// uploader
router.patch(
  "/avatar",
  VerifyToken,
  SingleUploader("AVT", "/avatar"),
  UpdateAvatar
);

export default router;
