import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import './styles.css'

const PostUpdate = () => {
  const [post, setPost] = useState([]);
  const [title, setTitle] = useState(post.title)
  const [body, setBody] = useState(post.body)

  const param = useParams()

  axios.get(`https://jsonplaceholder.typicode.com/posts/${param.id}`).then((res) => {
    console.log(res.data);
    setPost(res.data);
  });

  return (
    <div className="post">
      <p className="title">
        Title :
      </p>
      <input 
        type="text"
        value={post.title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <p className="title">
        Body :
      </p>
      <input 
        type="text"
        value={post.body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button>Simpan</button>
    </div>
  )
};

export default PostUpdate;
