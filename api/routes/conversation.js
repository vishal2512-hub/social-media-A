import express from "express";
import { getConversation, createConversation, checkConversation } from "../controller/conversations.js";

const router = express.Router();

// Routes
router.get("/:conversationId", getConversation); // Get a specific conversation
router.post("/", createConversation); // Create a new conversation
router.get("/check/:userId1/:userId2", checkConversation); // Check if conversation exists

export default router;