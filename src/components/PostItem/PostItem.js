import React from "react";
import MyButton from "../UI/MyButton/MyButton";
import css from "./PostItem.module.css";

const PostItem = ({ post, number, remove }) => {
  return (
    <div>
      <div className={css.post}>
        <div className={css.post_content}>
          <strong>
            {number}. {post.title}
          </strong>
          <div className={css.post_title}>{post.body}</div>
        </div>
        <div className={css.post_btn}>
          <MyButton
            onClick={() => {
              remove(post);
            }}
          >
            Delete
          </MyButton>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
