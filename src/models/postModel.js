const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  categories: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }],
  images: [{ type: String }],
});

const Post = mongoose.model("posts", postSchema);
module.exports = Post;
