import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import './styles.css'

const Post = () => {
  const [post, setPost] = useState([]);
  const [command, setCommand] = useState([]);

  const param = useParams()

  axios.get(`https://jsonplaceholder.typicode.com/posts/${param.id}`).then((res) => {
    console.log(res.data);
    setPost(res.data);
  });

  const getCommand = () => {
    axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${param.id}`).then((res) => {
      setCommand(res.data);
    });
  }

  useEffect(() => getCommand(), [])

  return (
    <div className="post">
      <p className="title">
        {post.title}
      </p>
      <p className="body">
        {post.body}
      </p>
      {command.map((commands) => (
        <div
          key={commands.id}
          className='cardPost'
        >
          <p className="title">
            {commands.name}
          </p>
          <p className="email">
            {commands.email}
          </p>
          <p className="body">
            {commands.body}
          </p>
        </div>
      ))}
    </div>
  )
};

export default Post;
