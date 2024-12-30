import React from 'react';
import './leftbar.scss'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

const Leftbar = () => {
  return (
    <div className="leftBar">
    <div className="container">
      <div className="menu">
        <div className="item">
        <HomeOutlinedIcon/>
          <span>Home</span>
        </div>
        <div className="item">
        <ExploreOutlinedIcon/>
         <span>Explorer</span>
        </div>
        <div className="item">
        <MessageOutlinedIcon/>
          <span>Messages</span>
        </div>
        <div className="item">
        <NotificationsActiveOutlinedIcon/>
          <span>Notification</span>
        </div>
        <div className="item">
        <AddCircleOutlineOutlinedIcon/>
          <span>Create</span>
        </div>
        <div className="item">

         <img
            // src={"/upload/" .profilePic}
            alt=""
            />
          {/* <span>VISHAL</span> */}
            </div>
      </div>
    </div>
  </div>
  )
}
export default Leftbar
