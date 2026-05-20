import { Router } from "express";
import { protectRoute } from "../middleware/auth";
import {
  getChats,
  getOrCreateChat,
} from "../controllers/chatController copy 3";

const router = Router();

router.use(protectRoute);

router.get("/", getChats);
router.post("/with/:participantId", getOrCreateChat);

export default router;
