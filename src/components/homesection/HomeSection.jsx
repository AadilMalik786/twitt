import React, { useEffect, useState } from "react";
import "./style.scss";
import SettingsIcon from "@mui/icons-material/Settings";
import { Avatar, Button } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
// import { onAuthStateChanged } from "firebase/auth";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import GifBoxIcon from "@mui/icons-material/GifBox";
import BallotIcon from "@mui/icons-material/Ballot";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import PlaceIcon from "@mui/icons-material/Place";
import TweetCard from "../tweetcards/TweetCard";
import { db } from "../../firebase/firebase";
import Img from "../image/Img";
import { auth } from "../../firebase/firebase";
import { Navigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

import {
  collection,
  onSnapshot,
  addDoc,
  // getDocs,
  // query,
  // where,
} from "firebase/firestore";
import { storage } from "../../firebase/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import { NavigationSlider } from "../Navigation/NavigationSlider";
const validationSchema = Yup.object().shape({
  content: Yup.string().required("Tweet text is required"),
});
const HomeSection = ({ name, userId, email }) => {
  // console.log();
  const [posts, setPosts] = useState([]);
  const [uploadImage, setUploadImage] = useState(true);
  // const [selectImage, setSelectImage] = useState("");
  const [nav, setNav] = useState(innerWidth < 500);
  // const [selectVideo, setSelectVideo] = useState("");
  const [sideBar, setSideBar] = useState(false);
  const [slide, setSlide] = useState(false);
  const navigate = useNavigate();

  // console.log(email);
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "post"), (snapshot) => {
      const newDataList = snapshot.docs.map((doc) => doc.data());
      setPosts(newDataList);
    });

    return () => unsubscribe();
  }, []);

  var handleSubmit = async (values) => {
    // console.log("values", values);
    // Save other form data to the Firestore collection

    try {
      if (values.image || values.content || values.video) {
        // Create a storage reference for the image
        if (values.image) {
          setUploadImage(true);
          const imageStorageRef = ref(storage, `image/${values.image.name}`);
          await uploadBytes(imageStorageRef, values.image);
          values.imageURL = await getDownloadURL(imageStorageRef);
        }

        // Create a storage reference for the video
        if (values.video) {
          const videoStorageRef = ref(storage, `videos/${values.video.name}`);
          await uploadBytes(videoStorageRef, values.video);
          values.videoURL = await getDownloadURL(videoStorageRef);
        }

        // Get the download URL
        // const downloadURL = await getDownloadURL(storageRef);

        const newPost = {
          profileName: name,
          userName: userId,
          postText: values.content,
          avatar: "URL to the avatar",
          image: values.imageURL || null,
          video: values.videoURL || null,
          Id:Math.random().toString(36).substr(2, 9)
          
        };
        // const dynamicCollectionName = `posts_${currentDate.getFullYear()}_${currentDate.getMonth() + 1}_${currentDate.getDate()}`;

        const docRef = await addDoc(collection(db, "post"), newPost);
        // console.log("Document written with ID: ", docRef.id);
      }
    } catch (error) {
      console.error("Error adding document: ", error);
    }

    // Clear the form values after submission

    formik.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      content: "",
      image: "",
      video: "",
    },
    onSubmit: handleSubmit,
    validationSchema,
  });

  const handleSelectImage = (event) => {
    // setUploadImage(true);
    // const imageUrl = event.target.files[0];
    // formik.setFieldValue("image", imageUrl);
    // setSelectImage(imageUrl);
    // setUploadImage(false);
    setUploadImage(true);

    const selectedFile = event.target.files[0];

    if (selectedFile) {
      if (selectedFile.type.includes("image")) {
        // Selected file is an image
        formik.setFieldValue("image", selectedFile);
        formik.setFieldValue("video", null); // Clear the video field
      } else if (selectedFile.type.includes("video")) {
        // Selected file is a video
        formik.setFieldValue("video", selectedFile);
        formik.setFieldValue("image", null); // Clear the image field
      }
    }

    setUploadImage(false);
  };

  const HandleSize = () => {
    setNav(innerWidth < 500);
  };

  useEffect(() => {
    window.addEventListener("resize", HandleSize);

    return () => {
      window.removeEventListener("resize", HandleSize);
    };
  }, []);

  const x = (e) => {
    setSlide(true);
    e.stopPropagation();
  };

  const HandleCloseSlide = (e) => {
    // const targetlist=e.target.classList;
    // if(!(targetlist.contains("avtar-navig-mobile-slide"))){
    setSlide(false);
    console.log("execute");
    // }
  };

  return (
    <>
      {/* <div className="homesection-container">
        <div className="homesection-second-container">
          <div
            className="navig-stick-navbar"
            style={{
              position: "fixed",
              backdropFilter: "blur(5.5px)",
              background: "rgba(0, 0, 0, 0.25)",
            }}
          >
            <div className="foryou">For you</div>
            <div className="following">Following</div>
            <div className="setting">
              <SettingsIcon />
            </div>
          </div>
        </div>
      </div> */}

      {nav ? (
        <div className="homesection-container" onClick={HandleCloseSlide}>
          <div className="homesection-second-container-mobile">
            <div
              className="navig-stick-navbar-mobile"
              // onClick={()=>setSlide(false)}
              style={{
                position: "fixed",
                backdropFilter: "blur(5.5px)",
                background: "rgba(0, 0, 0, 0.25)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  gap: "100px",
                }}
              >
                <div>
                  <Avatar className="avtar-navig-mobile-slide" onClick={x}>
                    {/* <Modal/> */}
                  </Avatar>
                </div>
                <div className="logo">
                  <svg
                    height="30"
                    width="30"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    fill="white"
                    className="logo-real-navigation"
                  >
                    <g>
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                    </g>
                  </svg>
                </div>
                <div style={{ color: "white" }} className="setting">
                  <SettingsIcon />
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div style={{ color: "white" }} className="following">
                  Following
                </div>
                <div style={{ color: "white" }} className="foryou">
                  For you
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="homesection-container">
          <div className="homesection-second-container">
            <div
              className="navig-stick-navbar"
              style={{
                position: "fixed",
                backdropFilter: "blur(5.5px)",
                background: "rgba(0, 0, 0, 0.25)",
              }}
            >
              <div className="foryou">For you</div>
              <div className="following">Following</div>
              <div className="setting">
                <SettingsIcon />
              </div>
            </div>
          </div>
        </div>
      )}

      <div
        className={
          slide ? "sidebar-container-parent siding" : "sidebar-container-parent"
        }
        style={{overflowY:"auto"}}
      >
        <div className="logo-plus-mobile-symbol">
          <div className="mobile-logo">
            <Avatar />
          </div>

          <div style={{ marginRight: "10px" }}>+</div>
        </div>
        <div style={{ paddingLeft: "10px" }}>
          <div>{name}</div>
          <div>{userId}</div>

          <div style={{ display: "flex",marginTop:"20px" }}>
            <div style={{ display: "flex" }}>
              <div>1</div>
              <div>following</div>
            </div>
            <div style={{ display: "flex" }}>
              <div>0</div>
              <div>follower</div>
            </div>
          </div>
        </div>

        <div
          style={{
            // height: "500px",
            display: "flex",
            flexDirection: "column",
            // justifyContent: "space-around",
            // backgroundColor:"blue",
            gap:"50px"
            // overflowY:"auto"
            
          }}
        >
          {NavigationSlider.map((item, index) => (
            <div key={index} className="navigation-e1230">
              {item.title === "Profile" ? (
                <NavLink
                  style={{
                    display: "flex",
                    paddingLeft: "10px",
                    alignItems: "center",
                    gap: "20px",
                    textDecoration: "none",
                    color:"white"
                  }}
                  className="navigation-item"
                  to={`/profile/${userId}`}
                  // activeClassName="active"
                  // onClick={handleClose}
                >
                  <p className="nav-item-icon"> {item.icon}</p>
                  <p className="nav-item-title">{item.title}</p>
                </NavLink>
              ) : (
                <NavLink
                  style={{
                    display: "flex",
                    paddingLeft: "10px",
                    alignItems: "center",
                    gap: "20px",
                    textDecoration: "none",
                    color:"white"
                  }}
                  to={item.path}
                  // activeClassName="active"
                  // onClick={handleClose}

                  className="navigation-item"
                >
                  <p className="nav-item-icon"> {item.icon}</p>
                  <p className="nav-item-title">{item.title}</p>
                </NavLink>
              )}
            </div>
          ))}
        </div>
      </div>

      <section
        className="homesection-third-container"
        onClick={() => setSlide(false)}
      >
        <div style={{ display: "flex", gap: "10px", marginLeft: "10px" }}>
          <Avatar style={{ zIndex: "0" }} />
          <div className="happen-whats" style={{ width: "100%" }}>
            <form action="" onSubmit={formik.handleSubmit}>
              <div>
                <input
                  type="text"
                  name="content"
                  placeholder="What is happening"
                  style={{
                    outline: "none",
                    border: "none",
                    backgroundColor: "transparent",
                  }}
                  {...formik.getFieldProps("content")}
                />
                {formik.errors.content && formik.touched.content && (
                  <span style={{ color: "red" }}>{formik.errors.content}</span>
                )}
              </div>
              {/* <div> */}

              {/* </div> */}
              <div className="icon-photo-gif-parent">
                <div className="gallery-container-parent">
                  <div className="photo-folder">
                    <label>
                      <InsertPhotoIcon />
                      <input
                        type="file"
                        name="imagefile"
                        className="image-input-field"
                        style={{ display: "none" }}
                        onChange={handleSelectImage}
                      />
                    </label>
                  </div>
                  <div className="gif-folder">
                    <GifBoxIcon />
                  </div>
                  <div className="poll-folder">
                    <BallotIcon />
                  </div>
                  <div className="emoji-folder">
                    <SentimentSatisfiedAltIcon />
                  </div>
                  <div className="schedule-folder">
                    <PendingActionsIcon />
                  </div>
                  <div className="location-folder">
                    <PlaceIcon />
                  </div>
                </div>
                <div className="post-button">
                  <Button type="submit" variant="contained">
                    Post
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section className="fourth-container" onClick={() => setSlide(false)}>
        {posts.length > 0 &&
          posts.map((post, index) => (
            <TweetCard
              key={`${post.userName}-${index}`}
              profileName={post.profileName}
              userName={post.userName}
              postText={post.postText}
              avatar={post.avatar}
              image={post.image}
              email={email}
              video={post.video}
              Id={post.Id}
            />
          ))}
      </section>
    </>
  );
};
export default HomeSection;
