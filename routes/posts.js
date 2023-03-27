import express from "express";
import { getPosts, createdPost } from "../controllers/posts.js";

const router = express.Router();

router.get("/", getPosts);
router.get("/", createdPost);

export default router;
