import express from "express"
import { addPost, deletePost, getPost, updatePost, getPosts } from "../controllers/post.js"

const router = express.Router()

router.get("/", getPosts)
router.get("/:id", getPost)
router.post("/", addPost)
router.delete("/:id", deletePost)
router.update("/:id", updatePost)

export default router