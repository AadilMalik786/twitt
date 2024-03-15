import React from "react";
import { useState } from "react";
import { Avatar } from "@mui/material";
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
import "./style.scss"
import Img from "../image/Img";
const UserCard=({text,name,image,video,user})=>{
    const [anchorEl, setAnchorEl] = useState(null);
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

        <div className="user-first-container">
          <div className="avatar-user-photo" >
            <Avatar />
          </div>
          <div>
            <div className="user-text-two-container">
              <div className="user-text-two">
                <div style={{color:"white"}}>{name}</div>
                <div>
                  <VerifiedIcon className="verified-icon-user" />
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
              <div className="three-dots-user">
                <Button
                  style={{ height: "10px" }}
                  id="demo-positioned-button"
                  aria-controls={open ? "demo-positioned-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  <MoreHorizIcon style={{color:"white"}}/>
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
            <div className="tweet-card-section-user">
              <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{width:"80%"}}>  <p className="tweet-card-section-post-user">{text}</p></div>
                {image && <div className="post-image-usercard-parent"><Img src={image} className="post-image-user" /></div>}
                {video && (
                  <div className="video-usercard" ><video controls style={{objectFit:"cover"}} className="video-user">
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  </div>
                )}
              </div>
            </div>
            <div className="icon-container-parent-user">
              <div className="icon-container-child-first-user">
                <ChatBubbleIcon className="real-icon-child-main-user" />
                <p>566</p>
              </div>
              <div className="icon-container-child-first-user">
                <RepeatIcon className="real-icon-child-main-user" />
                <p>566</p>
              </div>
              <div className="icon-container-child-first-user">
                <FavoriteIcon className="real-icon-child-main-user" />
                <p>566</p>
              </div>
              <div className="icon-container-child-first-user">
                <BarChartIcon className="real-icon-child-main-user" />
                <p>566</p>
              </div>
              <div>
                <div>
                  <BookmarkIcon className="bookmark-file-upload-user" />
                  <FileUploadIcon className="bookmark-file-upload-user" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        
        </>
    )
}
export default UserCard;