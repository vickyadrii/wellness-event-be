import { createEvent, deleteEvent, getEvents, updateEvent } from "@/controllers/eventController";
import { authMiddleware } from "@/middleware/authMiddleware";
import { Router } from "express";

const router = Router();

router.post("/", authMiddleware, createEvent);
router.get("/", authMiddleware, getEvents);
router.put("/:id", authMiddleware, updateEvent);
router.delete("/:id", authMiddleware, deleteEvent);

export default router;
