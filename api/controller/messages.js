// backend/controller/messages.js
import { db } from "../connect.js";

// ✅ Get messages
export const getMessages = async (req, res) => {
  try {
    const { conversationId } = req.params;

    // Ensure conversationId is a valid number
    const parsedConversationId = parseInt(conversationId, 10);
    if (isNaN(parsedConversationId)) {
      return res.status(400).json({ message: "Invalid conversation ID" });
    }

    // Fetch messages for the conversation
    const [messages] = await db.promise().query(
      `SELECT m.id, m.text, m.created_at, m.sender_id, u.username AS sender_username
       FROM messages m
       JOIN users u ON m.sender_id = u.id
       WHERE m.conversation_id = ?
       ORDER BY m.created_at ASC`,
      [parsedConversationId]
    );

    // Ensure messages is always an array
    if (!messages) {
      return res.status(200).json([]);
    }

    res.status(200).json(messages);
  } catch (err) {
    console.error("Error in getMessages:", err);
    res.status(500).json({ message: "Error fetching messages", error: err.message });
  }
};

// ✅ Send message
export const sendMessage = (req, res) => {
  const { conversationId, senderId, text } = req.body;
  const q = `
    INSERT INTO messages (conversation_id, sender_id, text, created_at) 
    VALUES (?, ?, ?, NOW())
  `;
  db.query(q, [conversationId, senderId, text], (err) => {
    if (err) {
      console.error("Error in sendMessage:", err);
      return res.status(500).json("Error sending message.");
    }
    res.status(200).json("Message sent successfully.");
  });
};