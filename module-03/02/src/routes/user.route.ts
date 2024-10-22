import { Router } from "express";
import { GetAllUser, GetUserDetail } from "../controllers/user.controller";
import masukMiddleware from "../middlewares/masuk.middleware";

const router = Router();

router.use(masukMiddleware);

// Get All User
//GET localhost:8080/user-management/users
router.get("/users", GetAllUser);

// Get Detail User
//GET localhost:8080/user-management/users/5
router.get("/users/:uuid", GetUserDetail);

export default router;
