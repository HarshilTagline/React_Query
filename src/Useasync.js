import React, { useState, useEffect } from "react";
import axios from "axios";
const fun = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/photos",
});
export default function Useasync() {
  const [post, setpost] = useState(null);

  useEffect(() => {
    async function getPost() {
      const response = await fun.get("/6");
      setpost(response.data);
    }
    getPost();
  }, []);

  async function deletePost() {
    const response = await fun.delete("/5");
    setpost(response.data);
    alert("deleted");
  }
  if (!post) return "null";
  return (
    <div>
      {console.log(post)}
      <img src={post.url} alt={""} height="50" width="100" />
      <li key={post.id}>
        <b>{post.title}</b>
      </li>
      <button onClick={deletePost}>Delete</button>
    </div>
  );
}
