import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const AddPost = () => {
  let history = useHistory();
  const [post, setPost] = useState({
    title: "",
    author: "",
  });
  const { title, author } = post;
  const onInputChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3003/posts", post);
    history.push("/");
  };

  return (
    <div>
      {/* <h1>Add</h1> */}
      <div className="container mt-5">
        <h2 className="text-center mb-4">Create New Post</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Add Title..."
              name="title"
              value={title}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <textarea
              type="text"
              className="form-control form-control-lg"
              placeholder="Say Something..."
              rows="5"
              name="author"
              value={author}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <button className="btn btn-dark btn-block">Add Post</button>
        </form>
      </div>
    </div>
  );
};

export default AddPost;
