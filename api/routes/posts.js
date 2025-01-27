import express from "express";
import { getPosts, addPost, deletePost } from "../controller/post.js"; // Update this line

const router = express.Router();

router.get("/", getPosts);
router.post("/", addPost);
router.delete("/:id", deletePost);

export default router;
