import React from "react";
import "./style.scss";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
import Img from "../image/Img";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Avatar } from "@mui/material";
import { useState, useEffect } from "react";
import { db } from "../../firebase/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";
import ProfileCard from "../profiletwittercard/ProfileCard";

const Profile = ({ name, userId }) => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userRef = collection(db, "post");
        const querySnapshot = await getDocs(
          query(userRef, where("userName", "==", userId))
        );
        const userPostsArray = [];
        querySnapshot.forEach((doc) => {
          const postData = doc.data();
          userPostsArray.push(postData);
        });
        setUserData(userPostsArray);
        console.log(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [userId]);

  const pr =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2jtRW4OgVL_Qe0p5Q8MEye6bS1_OIC4Gwsw&usqp=CAU";

  return (
    <>
      <div className="profile-container">
        <div
          className="navbar-parent-container-profiles"
          style={{
            position: "fixed",
            backdropFilter: "blur(5.5px)",
            background: "rgba(0, 0, 0, 0.25)",
          }}
        >
          <div className="profile-container-second">
            <div className="arrow-back" onClick={() => navigate(-1)}>
              <KeyboardBackspaceIcon />
            </div>
            <section className="navbar-container">
              <h2
                className="user-name"
                style={{ overflow: "hidden", whiteSpace: "nowrap",color:"white" }}
              >
                {name}
              </h2>
              <div className="post-number" style={{color:"#2f3336"}}>{userData.length} Post</div>
            </section>
          </div>
        </div>
      </div>
      <div className="photo-container-profile">
        <div className="photo-block">
          <Img className="profile-saver-profile" />
        </div>
      </div>
      <section className="setprofile-container-parent">
        <div className="setprofile-container-profile">
          <div className="profile-logo">
            <Avatar src={pr} style={{ height: "120px", width: "120px" }} />
          </div>
          <div className="setup-profile-button">
            <button>set up Profile</button>
          </div>
        </div>
      </section>

      <section className="description-parent-container">
        <div style={{paddingLeft:"20px"}}>
        <h2 className="profile-Name">{name}</h2>
        <div className="profile-userName">{userId}</div>
        <div className="profile-joindate-container">
          <div>
            <CalendarMonthIcon />
          </div>
          <div className="profile-join-date"> october 2024</div>
        </div>
        <div className="follower-following-parent">
          <div className="following-data-container">
            <div className="following-count">1</div>
            <div className="following-profile">following</div>
          </div>
          <div className="follower-data-container">
            <div className="follower-count">0</div>
            <div className="follower-profile">follower</div>
          </div>
        </div>
        </div>
        {/* <TweetCard/> */}
        {userData.map((post, index) => (
          <div key={index}>
            <ProfileCard
              dp={pr}
              text={post.postText}
              name={post.profileName}
              user={post.userName}
              video={post.video}
              image={post.image}
            />
          </div>
        ))}
      </section>
    </>
  );
};
export default Profile;
