import { db } from "../connect.js";
import jwt from "jsonwebtoken";

// GET Likes
export const getLikes = (req, res) => {
  const q = "SELECT userId FROM likes WHERE postId = ?";
  db.query(q, [req.query.postid], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data.map((like) => like.userId)); // Ensure correct array format
  });
};

// ADD Like (Prevent Duplicates)
export const addLike = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    // Check if the like already exists
    const checkQuery = "SELECT * FROM likes WHERE userId = ? AND postId = ?";
    db.query(checkQuery, [userInfo.id, req.body.postId], (err, result) => {
      if (err) return res.status(500).json(err);
      if (result.length > 0) return res.status(409).json("Already liked");

      // Insert new like
      const insertQuery = "INSERT INTO likes(`userId`, `postId`) VALUES (?, ?)";
      db.query(insertQuery, [userInfo.id, req.body.postId], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("Like added successfully");
      });
    });
  });
};

// DELETE Like
export const deleteLike = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q = "DELETE FROM likes WHERE userId = ? AND postId = ?";
    db.query(q, [userInfo.id, req.query.postid], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Like removed successfully");
    });
  });
};
