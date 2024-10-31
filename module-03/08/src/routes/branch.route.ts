import { Router } from "express";

import {
  CreateBranch,
  GetBranches,
  GetBranch,
  UpdateBranch,
  DeleteBranch,
} from "../controllers/branch.controller";

const router = Router();

// insert branch to database
router.post("/branches", CreateBranch);

// find branch list in database
router.get("/branches", GetBranches);

// find branch by id
router.get("/branches/:id", GetBranch);

// update branch by id
router.patch("/branches/:id", UpdateBranch);

// delete branch by id
router.delete("/branches/:id", DeleteBranch);

export default router;
