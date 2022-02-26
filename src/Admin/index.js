import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './styles.css'
import { HeartIcon } from '@heroicons/react/solid'
import { useSelector } from "react-redux";
import { selectLoginList } from "../store/loginSlice";


const Admin = () => {
  const [post, setPost] = useState([]);
  const [postDetail, setPostDetail] = useState('')
  const userId = useSelector(selectLoginList)
  console.log(userId[0].id);

  const getPost = () => {
    axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId[0].id}`).then((res) => {
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

export default Admin;
