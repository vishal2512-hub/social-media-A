import { db } from "../connect.js";
import jwt from "jsonwebtoken";

export const getRelationships = (req, res) => {
  const q = "SELECT followerUserId FROM relationships WHERE followerUserId = ?";

  db.query(q, [req.query.followerUserId], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data.map((relationship) => relationship.followerUserId));
  });
};


export const addRelationship = (req, res) => {
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("Not logged in!");
  
    jwt.verify(token, "secretkey", (err, userInfo) => {
      if (err) return res.status(403).json("Token is not valid!");
  
      const q = "INSERT INTO likes(`userId`, `postId`) VALUES (?, ?)";
      
      // Don't wrap these in an array since the query already expects individual values
      db.query(q, [userInfo.id, req.body.postId], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("Post has been Liked");
      });
    });
};


  export const deleteRelationship = (req, res) => {
      const token = req.cookies.accessToken;
      if (!token) return res.status(401).json("Not logged in!");
    
      jwt.verify(token, "secretkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");
    
        const q = "DELETE FROM likes WHERE `userId` = ? AND `postId` = ?";
    
        db.query(q, [userInfo.id , req.query.postid], (err, data) => {
          if (err) return res.status(500).json(err);
        return res.status(200).json("Post has been disliked");
        });
      });
    };