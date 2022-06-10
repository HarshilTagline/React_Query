import React, { useState, useEffect } from "react";
import axios from "axios";
export default function Post() {
  const [Post, setPost] = useState(null);

  // const URL="https://jsonplaceholder.typicode.com/posts"
  const path = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts",
  });

  useEffect(() => {
    path
      .get(`/50`)
      .then((response) => setPost(response.data))
      .catch((err) => console.error(err));
  }, []);

  const createPost = () => {
    path
      .post("", {
        title: "created",
        body: "this is post method example.",
      })
      .then((response) => setPost(response.data))
      .catch((err) => console.error(err));
  };
  const updatePost = () => {
    path
      .put("/50", {
        title: "updated",
        body: "this is put method example.",
      })
      .then((response) => setPost(response.data))
      .catch((err) => console.error(err));
  };
  const deletePost = () => {
    path
      .delete("/50")
      .then((response) => setPost(response.data))
      .then(() => alert("post deleted"))
      .catch((err) => console.error(err));
  };
  if (!Post) return "null";
  return (
    <div>
      {console.log(Post)}
      <li key={Post.id}>
        <b>{Post.title}</b>
        <p>{Post.body}</p>
      </li>
      <button onClick={createPost}>Create</button>
      <button onClick={updatePost}>Update</button>
      <button onClick={deletePost}>Delete</button>
    </div>
  );
}
