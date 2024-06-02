import { Router } from "express";

// All routes
import homeRoute from "./homeRoute";
import authRoutes from "./authRoutes";
import eventRoutes from "./eventRoutes";

const router = Router();

router.use("/", homeRoute);
router.use("/api/auth", authRoutes);
router.use("/api/events", eventRoutes);

export default router;
