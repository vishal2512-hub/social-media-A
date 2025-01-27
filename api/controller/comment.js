import { db } from '../connect.js';
import jwt from "jsonwebtoken";
import moment from 'moment/moment.js';

export const getComments = (req, res) => {
    const q = `SELECT c.*, u.id AS userId, name, profilePic FROM comments AS c 
    JOIN users AS u ON (u.id = c.userId)
    WHERE c.postId =? ORDER BY c.createdAt DESC`;

    // Define values for the query

    db.query(q, [req.query.postId],(err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(data); // Return comments data
    });
}



export const addComment = (req, res) => {
  console.log("Received comment request:", req.body); // Log the received data
  console.log("Cookies:", req.cookies); // Log cookies to check auth token

  const token = req.cookies.accessToken;
  if (!token) {
    console.log("No token found"); // Log auth issues
    return res.status(401).json("Not logged in!");
  }

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) {
      console.log("Token verification failed:", err); // Log token verification issues
      return res.status(403).json("Token is not valid!");
    }

    const q = "INSERT INTO comments(`desc`, `createdAt`, `userId`, `postid`) VALUES (?)";
    const values = [
      req.body.desc,
      moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
      userInfo.id,
      req.body.postid
    ];
    
    console.log("Executing query with values:", values); // Log query values

    db.query(q, [values], (err, data) => {
      if (err) {
        console.error("Database error:", err); // Log database errors
        return res.status(500).json(err);
      }
      console.log("Comment added successfully:", data); // Log successful insertion
      return res.status(200).json("Comment has been created.");
    });
  });
};