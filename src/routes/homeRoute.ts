import { getDefaultRoute } from "@/controllers/homeController";
import { Router } from "express";

const router = Router();

router.get("/", getDefaultRoute);

export default router;
