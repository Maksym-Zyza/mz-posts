import React from "react";
import MyButton from "../UI/button/MyButton";
import { useState } from "react";

import MyInput from "../UI/input/MyInput";
import css from "./PostForm.module.css";

const PostForm = ({ create, remove }) => {
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    e.preventDefault();

    const newPost = { ...post, id: Date.now() };
    console.log(newPost);
    create(newPost);

    setPost({ title: "", body: "" });
  };

  return (
    <div>
      <form className={css.form}>
        {/* Управляемий компонент */}
        <MyInput
          type="text"
          placeholder="Post title"
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
        ></MyInput>
        {/* Неуправляемий/Неконтролируемий компонент */}
        <MyInput
          type="text"
          placeholder="Post description"
          value={post.body}
          onChange={(e) => setPost({ ...post, body: e.target.value })}
        ></MyInput>
        <MyButton onClick={addNewPost}>Create post</MyButton>
      </form>
    </div>
  );
};

export default PostForm;
