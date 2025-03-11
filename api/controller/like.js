import { db } from "../connect.js";
import jwt from "jsonwebtoken";

// GET Likes
export const getLikes = (req, res) => {
  const q = "SELECT userId FROM likes WHERE postId = ?";
  db.query(q, [req.query.postId], (err, data) => {
    if (err) return res.status(500).json(err);
    
    // Ensure we always return likedUsers and likeCount
    return res.status(200).json({
      likedUsers: data ? data.map((like) => like.userId) : [],
      likeCount: data ? data.length : 0,
    });
  });
};

// ADD Like
export const addLike = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const checkQuery = "SELECT COUNT(*) AS likeCount FROM likes WHERE userId = ? AND postId = ?";
    db.query(checkQuery, [userInfo.id, req.body.postId], (err, result) => {
      if (err) return res.status(500).json(err);
      
      if (result[0].likeCount > 0) {
        return res.status(200).json("Already liked"); // 
      }

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
    db.query(q, [userInfo.id, req.body.postId], (err, data) => {
    
      if (err) return res.status(500).json(err);
      return res.status(200).json("Like removed successfully");
    });
  });
};
