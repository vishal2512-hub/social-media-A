/* eslint-disable react/jsx-no-undef */
import React, { useState } from "react";
import "./Post.scss";
import ShareIcon from "@mui/icons-material/Share";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import MoreHorizTwoToneIcon from "@mui/icons-material/MoreHorizTwoTone";
import { Link } from "react-router-dom";
import Comments from "../comment/Comments";

const Post = ({ post }) => {
  const [commentOpen, setcommentOpen] = useState(false);
  const like = false;

  if (!post) {
    return <div></div>;
  }

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userinfo">
            {post.img && <img src={post.img} alt="Post" />}
            <div className="detail">
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{post.name}</span>
              </Link>
            </div>
          </div>
          <MoreHorizTwoToneIcon />
        </div>
        <div className="content">
          <img src={post.img} alt="" />
        </div>
        <div className="info">
          <div className="item">
            {like ? (
              <FavoriteBorderOutlinedIcon />
            ) : (
              <FavoriteIcon style={{ color: "red" }} />
            )}
          </div>
          <div className="item" onClick={() => setcommentOpen(!commentOpen)}>
            <TextsmsOutlinedIcon />
          </div>
          <div className="item">
            <ShareIcon />
          </div>
        </div>
        <div className="lower">
          12 likes

          <div className="caption">
            <h3>{post.name}</h3>
            {post.desc}
          </div>
          <div>View all comment</div>
          <div onClick={() => setcommentOpen(!commentOpen)}>
            <input type="text" placeholder="write a comment" />
          </div>
        </div>

        {commentOpen && <Comments />}
      </div>
    </div>
  );
};

export default Post;
