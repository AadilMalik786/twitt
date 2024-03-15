import React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
import Img from "../image/Img";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { db } from "../../firebase/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";
import "./styleone.scss";
import UserCard from "../usercard/UserCard";
const Users = () => {
  const navigate = useNavigate();
  const { data } = useSelector((state) => state.UserProfile);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userRef = collection(db, "post");
        const querySnapshot = await getDocs(
          query(userRef, where("userName", "==", data.userName))
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
  }, [data.profileName]);

  return (
    <>
      <div className="profile-container">
        <div
          className="navbar-parent-container-user"
          style={{
            position: "fixed",
            backdropFilter: "blur(5.5px)",
            background: "rgba(0, 0, 0, 0.25)",
          }}
        >
          <div className="profile-container-seconds">
            <div className="arrow-backs" onClick={() => navigate(-1)}>
              <KeyboardBackspaceIcon style={{color:'white'}}/>
            </div>
            <section className="navbar-container">
              <h2
                className="user-name"
                style={{ overflow: "hidden", whiteSpace: "nowrap",color:"white" }}
              >
                {data.profileName}
              </h2>
              <div className="post-number" style={{color:"#252628"}}>{userData.length} post</div>
            </section>
          </div>
        </div>
      </div>
      <div className="photo-container-profile">
        <div className="photo-block">
          <Img className="profile-saver" />
        </div>
      </div>
      <section className="setprofile-container-parent-user">
        <div className="setprofile-container-user">
          <div className="profile-logo">
            <Avatar style={{ height: "120px", width: "120px" }} />
          </div>
          <div className="setup-profile-button">
            <button>Follow</button>
          </div>
        </div>
      </section>

      <section className="description-parent-container">
        <div style={{ paddingLeft: "30px" }}>
          <h2 className="profile-Name">{data.profileName}</h2>
          <div className="profile-userName">{data.userName}</div>
          <div className="profile-joindate-container">
            <div>
              <CalendarMonthIcon />
            </div>
            <div className="profile-join-date"> joined October 2023</div>
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
        {userData.map((value, index) => (
          <div key={index} style={{}}>
            <UserCard
              text={value.postText}
              video={value.video}
              image={value.image}
              name={value.profileName}
              user={value.userName}
            />
          </div>
        ))}
      </section>
    </>
  );
};
export default Users;
