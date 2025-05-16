// backend/routes/message.js
import express from "express";
import { getMessages, sendMessage } from "../controller/messages.js";

const router = express.Router();

router.get("/:conversationId", getMessages);
router.post("/", sendMessage);

export default router;