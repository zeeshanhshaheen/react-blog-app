import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ViewPost = () => {
  const [post, setPost] = useState({
    title: "",
    author: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadPost();
  }, []);

  const loadPost = async () => {
    const res = await axios.get(`http://localhost:3003/posts/${id}`);
    setPost(res.data);
  };
  return (
    <div className="container py-4">
      <div>
        <div className="card mt-5">
          <div className="card-header">
            <h3>{post.title}</h3>
          </div>
          <div className="card-body">
            <p className="card-text">{post.author}</p>
          </div>
        </div>
      </div>
      <Link className="btn btn-dark mt-5" to="/">
        back to Home
      </Link>
    </div>
  );
};

export default ViewPost;
