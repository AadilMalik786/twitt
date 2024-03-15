import React from "react";
import { useState } from "react";
import { Avatar } from "@mui/material";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import "./styletwo.scss";
import VerifiedIcon from "@mui/icons-material/Verified";
import { Button, Menu, MenuItem } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BarChartIcon from "@mui/icons-material/BarChart";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import FileUploadIcon from "@mui/icons-material/FileUpload";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Img from "../image/Img";

const ProfileCard=({text,name,user,image,video,dp})=>{
    const [anchorEl, setAnchorEl] = useState(null);
    // const [show,setShow] = useState(false);
    const open = Boolean(anchorEl);
    console.log("tweetcard");
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return(
        <>
        <div className="tweet-card-container">
        {/* <div className="icon-retweet"></div> */}

        <div className="profile-first-container">
          <div className="avatar-profile-photo" >
            <Avatar src={dp}/>
          </div>
          <div>
            <div className="profile-text-two-container-profile">
              <div className="profile-text-two">
                <div style={{color:"white"}}>{name}</div>
                <div>
                  <VerifiedIcon className="verified-icon" />
                </div>
                <div
                  style={{
                    height: "22px",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    color:"#252628"
                  }}
                >
                  {user}
                </div>
              </div>
              <div className="three-dots-profile">
                <Button
                  style={{ height: "10px" }}
                  id="demo-positioned-button"
                  aria-controls={open ? "demo-positioned-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  <MoreHorizIcon style={{color:"white"}} />
                </Button>
                <Menu
                  id="demo-positioned-menu"
                  aria-labelledby="demo-positioned-button"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                >
                  <div style={{display:"flex",flexDirection:"column"}}>
                  <MenuItem onClick={handleClose}>Delete</MenuItem>
                  <MenuItem onClick={handleClose}>Edit</MenuItem>
                  </div>
                </Menu>
              </div>
            </div>
            <div className="tweet-card-section">
              <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{width:"80%"}}>   <p className="tweet-card-section-post-profilecar">{text}</p></div>
                {image &&<div className="post-image-profilecard-parent"> <Img src={image} className="post-image-profilecard" /></div>}
                {video && (
                  <div className="video-profilecard" ><video controls style={{objectFit:"cover"}} className="video-profilecard">
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video></div>
                )}
              </div>
            </div>
            <div className="icon-container-parent-profilecard">
              <div className="icon-container-child-first">
                <div className="bubble-message-icon">
                  <ChatBubbleIcon className="real-icon-child-main" />
                </div>
                <p style={{height:"20px"}}>566</p>
              </div>

              <div className="icon-container-child-second">
                <div className="retweet-icon-twitter">
                  <RepeatIcon className="real-icon-child-main" />
                </div>
                <p style={{height:"20px"}}>566</p>
              </div>

              <div className="icon-container-child-third">
                <div className="love-like-icon">
                <FavoriteIcon className="real-icon-child-main" />
                </div>
                <p>566</p>
              </div>
              <div className="icon-container-child-fourth">
                <div className="peaple-views">
                <BarChartIcon className="real-icon-child-main" />
                </div>
                <p>566</p>
              </div>
              {/* <div> */}
                <div className="bookmark-download-grand-parent">
                  <div className="bookmark-parent-tweeter">
                  <BookmarkIcon className="bookmark-file-upload" />
                  </div>
                  <div className="download-parent-tweeter"> 
                  <FileUploadIcon className="bookmark-file-upload" />
                  </div>
                </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>

        </>
    )
}
export default ProfileCard;