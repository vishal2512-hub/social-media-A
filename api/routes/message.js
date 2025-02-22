// routes/messages.js
import express from "express";
import { getMessages, sendMessage } from "../controller/messages.js";

const router = express.Router();

// Get messages for a conversation
router.get("/:conversationId", getMessages);

// Send a message
router.post("/", sendMessage);

export default router;
