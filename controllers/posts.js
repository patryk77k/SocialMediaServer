import PostMessage from "../models/postMessage.js";

export const getPosts = (req, res) => {
  try {
    const postMessage = PostMessage.find();
  } catch (error) {}
};

export const createdPost = (req, res) => {
  res.send("Post Creation");
};
