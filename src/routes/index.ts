import { Router } from "express";

// All routes
import homeRoute from "./homeRoute";
import authRoute from "./authRoute";

const router = Router();

router.use("/", homeRoute);
router.use("/auth", authRoute);

export default router;
