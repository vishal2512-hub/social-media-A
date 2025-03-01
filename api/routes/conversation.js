// routes/conversations.js
import express from "express";
import { getConversation, createConversation , checkConversation} from "../controller/conversations.js";

const router = express.Router();

// Get conversations for a user
router.get("/:userId", getConversation);
// Add to routes/conversations.js
router.get("/check/:senderId/:receiverId", checkConversation);
// Create new conversation
router.post("/", createConversation);

export default router;
