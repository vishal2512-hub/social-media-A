// controllers/messageController.js
import { db } from "../connect.js";

// Get messages for a conversation
export const getMessages = async (req, res) => {
  try {
    const messages = await db.query(
      `SELECT m.*, u.username, u.profilePic 
       FROM messages m 
       JOIN users u ON m.sender_id = u.id
       WHERE m.conversation_id = ?
       ORDER BY m.created_at ASC`,
      [req.params.conversationId]
    );
    res.status(200).json(messages);
  } catch (err) {
    res.status(500).json({ message: "Error retrieving messages", error: err });
  }
};

// Send a message
export const sendMessage = async (req, res) => {
  try {
    const { conversationId, senderId, text } = req.body;

    // Insert message into the messages table
    await db.query(
      `INSERT INTO messages (conversation_id, sender_id, text, created_at) 
       VALUES (?, ?, ?, NOW())`,
      [conversationId, senderId, text]
    );

    res.status(200).json({ message: "Message sent successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error sending message", error: err });
  }
};
