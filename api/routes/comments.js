import express from "express";
import { addComment, getComments } from "../controller/comment.js"; // Update this line
const router = express.Router()

router.get("/",getComments)
router.get("/",addComment)

export default router;