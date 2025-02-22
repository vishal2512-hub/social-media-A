// routes/conversations.js
import express from "express";
import { getConversations, createConversation } from "../controller/conversations.js";

const router = express.Router();

// Get conversations for a user
router.get("/:userId", getConversations);

// Create new conversation
router.post("/", createConversation);

export default router;
