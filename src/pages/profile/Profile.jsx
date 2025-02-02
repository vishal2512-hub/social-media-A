/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../component/Posts/Posts";

const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://th.bing.com/th/id/R.00c7f7fee9c3cb5f4642bb642b38dd0e?rik=vhIPXJ3dG5UWPQ&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f05%2fFree-Really-Cool-Wallpapers.jpg&ehk=8VNa06%2fdkgxdvY7MOPJS8G%2b%2fmlu4UOve0ESFpj0ORvY%3d&risl=&pid=ImgRaw&r=0"
          className="cover"
        />
        <img
          src="https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          className="profilePic"
        />
      </div>
      <div className="profilecontainer">
        <div className="uInfo">
          <div className="left">
            <a href="http://facebook.com">
              <FacebookTwoToneIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <InstagramIcon fontSize="large" />
            </a>
            
            <a href="http://facebook.com">
              <LinkedInIcon fontSize="large" />
            </a>
          </div>
          <div className="center">
            <span>Vishal</span>
            <div className="info">
              <div className="item">
                <PlaceIcon/>
                <span>India</span>
              </div>
              <div className="item">
                <LanguageIcon/>
                <span>lama dev</span>
              </div>
            </div>
              <button>follow</button>
          </div>
          <div className="right">
            <EmailOutlinedIcon/>
            <MoreVertIcon/>
          </div>
        </div>
        <Posts/>
      </div>
    </div>
  );
};

export default Profile;

//        <img src="https://th.bing.com/th/id/R.00c7f7fee9c3cb5f4642bb642b38dd0e?rik=vhIPXJ3dG5UWPQ&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f05%2fFree-Really-Cool-Wallpapers.jpg&ehk=8VNa06%2fdkgxdvY7MOPJS8G%2b%2fmlu4UOve0ESFpj0ORvY%3d&risl=&pid=ImgRaw&r=0" alt="" />
//<img src="https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" className="profilePic" />
