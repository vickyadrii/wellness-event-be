import { Router } from "express";

// All routes
import homeRoute from "./homeRoute";
import authRoutes from "./authRoutes";

const router = Router();

router.use("/", homeRoute);
router.use("/auth", authRoutes);

export default router;
