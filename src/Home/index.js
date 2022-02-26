import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './styles.css'
import { HeartIcon } from '@heroicons/react/solid'


const Home = () => {
  const [post, setPost] = useState([]);
  const [postDetail, setPostDetail] = useState('')

  const getPost = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setPost(res.data);
    });
  }

  useEffect(() => getPost(), [])

  console.log(postDetail);

  return (
    <div className="home">
      {post.map((posts) => (
        <div
          key={posts.id}
          onClick={() => setPostDetail(posts.id)}
          className='cardHome'
        > 
          <Link to={`post/${posts.id}`} className="left">
            <p className="title">{posts.title}</p>
            <p className="body">{posts.body}</p>
          </Link>
          <div className="right">
            <HeartIcon className="icon" />
          </div>
        </div>
      ))}
    </div>
  )
};

export default Home;
