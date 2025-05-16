// backend/routes/conversation.js
import express from "express";
import {
  findOrCreateConversation,
  getConversation,
  getUserConversations,
} from "../controller/conversations.js";

const router = express.Router();

// Route to find or create a conversation between two users
router.get("/findOrCreate/:userId1/:userId2", findOrCreateConversation);

// Route to get a specific conversation by ID
router.get("/:conversationId", getConversation);

// Route to get all conversations of a specific user
router.get("/:userId", getUserConversations);

export default router;
