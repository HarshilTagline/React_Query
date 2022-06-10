import React, { useState, useEffect } from "react";
import axios from "axios";
export default function Axios() {
  const [Post, setPost] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments?postId=56")
      .then((response) => setPost(response.data))
      .catch((err) => console.error(err));
  }, []);
  if (!Post) return null;
  return (
    <div>
      {console.log(Post)}
      {Post.map((comment) => {
        return <li key={comment.id}>{comment.body}</li>;
      })}
    </div>
  );
  // return (
  //     <div>
  //         {console.log(Post)}
  //        <li key={Post.id}>{Post.title}</li>
  //     </div>
  // )

  // return (

  //     <div>
  //         {console.log(Post)}
  //        {Post.map(post => { return <li key={post.id}>{post.title}</li>})}
  //     </div>
  // )
  //   return (
  //     <div>
  //       {console.log(Post)}
  //       {Post.map(comments => { return <li key={comments.id}>Comment:"<i>{comments.body}"</i> given by :<b>{comments.name}</b></li>})}
  //     </div>
  //   );
}
