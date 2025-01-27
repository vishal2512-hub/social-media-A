import moment from "moment/moment.js";
import { db } from "../connect.js";
import jwt from "jsonwebtoken";

export const getPosts = async (req, res) => {
  // Extract the token from cookies
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  // Verify the token
  jwt.verify(token, "secretkey", async (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    // Get the userId from the query string
    const userId = req.query.userId;

    // SQL query to get posts
    const q = `SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p 
               JOIN users AS u ON (u.id = p.userId)
               LEFT JOIN relationships AS r ON (p.userId = r.followedUserId) 
               WHERE (r.followerUserId = ? OR p.userId = ?) OR ? IS NULL
               ORDER BY p.createdAt DESC`;

    // Define values for the query
    const values = userId ? [userId, userId, userId] : [null, null, null];

    try {
      const data = await new Promise((resolve, reject) => {
        db.query(q, values, (err, data) => {
          if (err) reject(err);
          resolve(data);
        });
      });
      return res.status(200).json(data); // Return posts data
    } catch (err) {
      return res.status(500).json(err); // Handle errors
    }
  });
};


export const addPost = (req, res) => {
    // Correctly retrieve the token from cookies
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("Not logged in!");
  
    jwt.verify(token, "secretkey", (err, userInfo) => {
      if (err) return res.status(403).json("Token is not valid!");

      console.log(req.body.desc, userInfo.id)
      
      const q = "INSERT INTO posts(`desc`, `img`, `createdAt`, `userId`) VALUES (?, ?,?,?)";
      const values = [
        req.body.desc,
        req.body.img || null, // Handle cases where no image is uploaded
        moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
        userInfo.id
      ]
  
      db.query(q, values, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("Post has been created.");
      });
    });
  };


export const deletePost = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q = "DELETE FROM posts WHERE `id`=? AND `userId` = ?";

    db.query(q, [req.params.id, userInfo.id], (err, data) => {
      if (err) return res.status(500).json(err);
      if (data.affectedRows > 0)
        return res.status(200).json("Post has been deleted.");
      return res.status(403).json("You can delete only your post");
    });
  });
};
