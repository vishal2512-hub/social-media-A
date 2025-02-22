import { db } from "../connect.js";

// Get conversations for a user
export const getConversations = async (req, res) => {
  try {
    const conversations = await db.query(
      `SELECT c.*, u.id AS userId, u.username, u.profilePic 
       FROM conversations c 
       JOIN conversation_members cm ON c.id = cm.conversation_id
       JOIN users u ON (cm.user_id != ? AND cm.user_id = u.id)
       WHERE cm.conversation_id IN (
         SELECT conversation_id 
         FROM conversation_members 
         WHERE user_id = ?)
      `,
      [req.params.userId, req.params.userId]
    );
    res.status(200).json(conversations);
  } catch (err) {
    res.status(500).json({ message: "Error retrieving conversations", error: err });
  }
};

// Create new conversation
export const createConversation = async (req, res) => {
  try {
    const { senderId, receiverId } = req.body;

    // Create the conversation
    const result = await db.query(
      "INSERT INTO conversations (created_at) VALUES (NOW())"
    );
    const conversationId = result.insertId;

    // Add members to the conversation
    await db.query(
      "INSERT INTO conversation_members (conversation_id, user_id) VALUES (?, ?), (?, ?)",
      [conversationId, senderId, conversationId, receiverId]
    );

    res.status(200).json({ message: "Conversation created successfully", conversationId });
  } catch (err) {
    res.status(500).json({ message: "Error creating conversation", error: err });
  }
};
