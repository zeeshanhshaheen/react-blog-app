import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    const result = await axios.get("http://localhost:3003/posts");
    console.log(result);
    setPost(result.data.reverse());
  };
  return (
    <div className="container mt-4">
      <h1>All Posts</h1>
      {posts.map((post, index) => (
        <div>
          <div className="card mt-5">
            <div className="card-header d-flex justify-content-between">
              <h3>{post.title}</h3>
              <Link
                className="btn btn-dark btn-small"
                to={`/showpost/${post.id}`}
              >
                View Post
              </Link>
            </div>
            <div className="card-body">
              <p className="card-text">{post.author}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
