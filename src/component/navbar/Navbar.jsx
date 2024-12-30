import React, { useContext } from 'react'
import './navbar.scss'
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { DarkmodeContext } from '../../Context/DarkModeContext';
import { Authcontext } from '../../Context/AuthContext';


const Navbar = () => {

  const { toggle , darkMode} = useContext(DarkmodeContext);
  const { currentUser} = useContext(Authcontext);
  
  return (
    
    <div className="navbar">
      <div className="left">
        <span>INSTAMATE</span>
        <HomeOutlinedIcon />
        {darkMode ? (<WbSunnyOutlinedIcon onClick={toggle}/>) 
        : (<DarkModeOutlinedIcon onClick={toggle} />)}
        <GridViewOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" name="" id="" />
        </div>
      </div>
      <div className="right">
        <PersonOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />
        <img src={currentUser.profilepic} alt="Profile" className="image" />
        <span>guest</span>
      </div>
    </div>
  )
}

export default Navbar
