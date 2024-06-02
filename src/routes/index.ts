import { Router } from "express";

// All routes
import homeRoute from "./homeRoute";

const router = Router();

router.use("/", homeRoute);

export default router;
