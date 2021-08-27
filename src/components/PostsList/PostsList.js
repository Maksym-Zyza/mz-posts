import React from "react";
import PostItem from "../PostItem/PostItem";
import uniqid from "uniqid";
import css from "./PostsList.module.css";

function PostsList({ posts, title, remove }) {
  if (!posts.length) {
    return <h1 className={css.nothing}>Posts not found!</h1>;
  }

  return (
    <div className={css.conteiner}>
      <h1 className={css.title}>{title}</h1>
      {posts.map((post, index) => (
        <PostItem
          number={index + 1}
          post={post}
          key={uniqid()}
          remove={remove}
        />
      ))}
    </div>
  );
}

export default PostsList;
