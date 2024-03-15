import React, { useEffect } from "react";
import { Avatar } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import VerifiedIcon from "@mui/icons-material/Verified";
import { Button, Menu, MenuItem } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BarChartIcon from "@mui/icons-material/BarChart";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./style.scss";
import Img from "../image/Img";
import { getDocs } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { query } from "firebase/firestore";
import { doc } from "firebase/firestore";
import { where } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { SendNameUserName } from "../../action/actions";
import { deleteDoc } from "firebase/firestore";

const TweetCard = React.memo(({
  profileName,
  userName,
  postText,
  avatar,
  image,
  email,
  video,
  Id
  
}) => {
  // const [user, setUser] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  // const [show,setShow] = useState(false);
  const open = Boolean(anchorEl);
  console.log("tweetcard");
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = async() => {
    setAnchorEl(null);
    };

    
    

    const HandleDelete= async()=>{
      console.log("delete");
            // 

              try {
                const userRef = collection(db, "post");
        const querySnapshot = await getDocs(
          query(userRef, where("Id", "==", Id))
        );
        querySnapshot.forEach(async(doc) => {
          const docRef = doc.ref;
            await deleteDoc(docRef);
          console.log("Document successfully deleted!");
          setAnchorEl(null);
        });
      
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }
  

 

  const handleAvatarClick = async () => {
    try {
      const userRef = collection(db, "posts");
      const querySnapshot = await getDocs(
        query(userRef, where("userName", "==", userName))
      );
      // const querySnapshotOne = await getDocs(query(userRef, where("Email", "==", email)));
      // console.log();
      querySnapshot.forEach((doc) => {
        const userData = doc.data();
        console.log(userData);
        console.log("User Data:", userData);
        // Perform actions with userData
        // setData(userData);

        dispatch(SendNameUserName(userData));
        if (userData.Email === email) {
          // setShow(true)
          // dispatch(sendBoolean(true))
          navigate(`/profile/${userName}`);
        } else {
          // console.log("user");
          navigate("/users");
        }
      });
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  

  return (
    <>
      <div className="tweet-card-container" >
        {/* <div className="icon-retweet"></div> */}

        <div className="profile-first-container">
          <div className="avatar-profile-photo" onClick={handleAvatarClick}>
            <Avatar className="avatar-profile-photo-avatar" src={avatar} />
          </div>
          <div>
            <div className="profile-text-two-container">
              <div className="profile-text-two">
                <div style={{ color: "white",cursor:"pointer" }} onClick={handleAvatarClick} >{profileName}</div>
                <div onClick={handleAvatarClick}>
                  <VerifiedIcon className="verified-icon"  />
                </div>
                <div onClick={handleAvatarClick}
                  style={{
                    height: "22px",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    color: "#252628",
                    cursor:"pointer"
                  }}
                >
                  {userName}
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
                  <MoreHorizIcon style={{ color: "white" }} />
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
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <MenuItem onClick={HandleDelete}>Delete</MenuItem>
                    <MenuItem onClick={handleClose}>Edit</MenuItem>
                  </div>
                </Menu>
              </div>
            </div>
            <div className="tweet-card-section">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ width: "80%" }}>
                  {" "}
                  <p className="tweet-card-section-post">{postText} </p>
                </div>

                {image && (
                  <div className="post-image-tweet-parent">
                    <Img src={image} className="post-image-tweetcards" />
                  </div>
                )}
                {video && (
                  <div className="video-tweetcard">
                    <video
                      style={{ objectFit: "cover" }}
                      controls
                      autoPlay
                      loop
                      className="video"
                    >
                      <source src={video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                )}
              </div>
            </div>
            <div className="icon-container-parent-twitter">
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
  );
});
export default TweetCard;
