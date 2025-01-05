/* eslint-disable no-undef */
import React from "react";
import "./leftbar.scss";
import "../../style.scss";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import PlayCircleFilledOutlinedIcon from '@mui/icons-material/PlayCircleFilledOutlined';
const Leftbar = () => {
  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="item">
            <HomeOutlinedIcon fontSize="large" />
            <Link to="/">
              <span>Home</span>
            </Link>
          </div>
          <div className="item">
            <ExploreOutlinedIcon fontSize="large" />
            <span>Explore</span>
          </div>
          <div className="item">
            <PlayCircleFilledOutlinedIcon fontSize="large"/>
            <span>Reels</span>
          </div>
          <div className="item">
            <SendOutlinedIcon fontSize="large" />
            <Link to="/chat">
              <span>Messages</span>
            </Link>
          </div>
          <div className="item">
            <NotificationsActiveOutlinedIcon fontSize="large" />
            <span>Notification</span>
          </div>
          <div className="item">
            <AddCircleOutlineOutlinedIcon fontSize="large" />
            <span>Create</span>
          </div>
          <div className="item">
            <MenuOutlinedIcon fontSize="large"/>
            <span>Menu</span>
          </div>
          <div className="item">
            <img
              // src={"/upload/" .profilePic}
              alt=""
            />
            <span>VISHAL</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Leftbar;
