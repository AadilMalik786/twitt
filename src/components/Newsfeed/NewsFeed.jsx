import React from "react";
import "./style.scss"
// import HomePage from "../homepage/HomePage";
import Navigation from "../Navigation/Navigation";
import HomeSection from "../homesection/HomeSection";
import TrendingPart from "../righttrending/TrendingPart";
import { onAuthStateChanged} from "firebase/auth";
import { collection,getDocs, query, where  } from "firebase/firestore";
import { auth,db } from "../../firebase/firebase";
import { useEffect,useState } from "react";
import { Route, Routes } from "react-router-dom";
import Profile from "../profile/Profile";
import Users from "../users/Users";
import { NavigationMobileMenu } from '../navigationmobile/NavigationMobileMenu';
import { NavLink } from "react-router-dom";
import LogOut from "../logout/Logout";

const NewsFeed = () => {
  const [userData,setUserData] = useState("");
  console.log("newsfeed");
  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        const fetchData = async () => {
          const userQuery = query(collection(db, 'posts'), where('Email', '==', user.email));
          // console.log(userQuery);
          const userSnapshot = await getDocs(userQuery);
          // console.log(userSnapshot);

          if (!userSnapshot.empty) {
            const userData = userSnapshot.docs[0].data();
            setUserData(userData);
          }
        };
        
        fetchData();
      }
    });
    console.log(userData);

    return () => unsubscribe(); // Cleanup subscription on component unmount
  }, []);
  // const navigationComponent = ;

  return (
    <>
      <div className="grid-container">
        <div className="grid-item-one"><Navigation name={userData.profileName} userId={userData.userName} /></div>
        <div className="grid-item-two">
          
        <Routes>
          
          {/* <Route path="/" element={<HomeSection email={userData.Email} name={userData.profileName} userId={userData.userName}/>}/> */}
          <Route path="/home" element={<HomeSection email={userData.Email} name={userData.profileName} userId={userData.userName}/>}/>
          <Route path="/profile/:id" element={<Profile name={userData.profileName} userId={userData.userName}/>}/>
          <Route path="/users" element={<Users/>}/>
          <Route path="/logout" element={<LogOut/>}/>
        </Routes>
        <div className="navigation-mobile-main-parent" >
            {NavigationMobileMenu.map((item, index) => (
              <div key={index} >
                {item.title === "Profile" ? (
                  <NavLink
                    className="navigation-item-mobile"
                    to={`/profile/${userData.userName}`}
                    // activeClassName="active"
                    // onClick={handleClose}
                  >
                    <p className="nav-item-icon-mobile"> {item.icon}</p>
                    {/* <p className="nav-item-title-mobile">{item.title}</p> */}
                  </NavLink>
                ) : (
                  <NavLink
                    to={item.path}
                    // activeClassName="active"
                    // onClick={handleClose}
                    className="navigation-item-mobile"
                  >
                    <p className="icon-single-mobile-menu"> {item.icon}</p>
                    {/* <p className="nav-item-title-mobile">{item.title}</p> */}
                  </NavLink>
                )}
              </div>
            ))}
          </div>

        </div>
        <div className="grid-item-three" ><TrendingPart/></div>
      </div>
    </>
  );
};
export default NewsFeed;
