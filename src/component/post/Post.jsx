/* eslint-disable react/jsx-no-undef */
import React, { useState } from "react";
import "./Post.scss";
import ShareIcon from '@mui/icons-material/Share';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import MoreHorizTwoToneIcon from "@mui/icons-material/MoreHorizTwoTone";
import { Link } from "react-router-dom";
import Comments from "../comment/Comments";


const Post = ({ post }) => {

  const [commentOpen ,setcommentOpen] = useState(false)
  const like = false;

  if (!post) {
    return <div>Error: Post data not found.</div>;
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
          <p>{post.desc}</p>
          <img src={post.img} alt="" />
        </div>
        <div className="info">
          <div className="item">
            {like ? <FavoriteBorderOutlinedIcon/> :<FavoriteIcon style={{color:"red"}}/>}
            12 Likes
          </div>
          <div className="item"  onClick={()=>setcommentOpen(!commentOpen)}>
            <TextsmsOutlinedIcon/>
          2 comments
          </div><div className="item">
            <ShareIcon/>
          </div>
        </div>
        {commentOpen && <Comments />}
      </div>
    </div>
  );
};

export default Post;
