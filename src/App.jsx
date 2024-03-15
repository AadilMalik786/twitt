import React from "react";
import Home from "./components/Home/Home";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SignIn from "./components/signin";
import SignUp from "./components/signup";
import "./index.scss";
import { useState,useEffect } from "react";
import NewsFeed from "./components/Newsfeed/NewsFeed";
import LoginSecond from "./components/LoginSecond/LoginSecond";
import Customize from "./components/customize/Customize";
import ConfirmSignUp from "./components/confirmsignup/ConfirmSignUp";
import CreatePass from "./components/createpassw/CreatePass";
import Verify from "./components/verifycode/Verify";
import { auth } from "./firebase/firebase";


const App = () => {
  
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      console.log(user);
    });

    return () => unsubscribe();
  }, []);
  return (
    <>
      {/* <Practice/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="signin" element={<SignIn />}>
              <Route path="login" element={<LoginSecond />} />
            </Route>
            <Route path="signup" element={<SignUp />}>
              <Route path="cus" element={<Customize />}>
                <Route path="con" element={<ConfirmSignUp />}>
                  <Route path="verify" element={<Verify />}>
                    <Route path="pass" element={<CreatePass />} />
                  </Route>
                  <Route path="pass" element={<CreatePass />} />
                </Route>
              </Route>
            </Route>
          </Route>
          {user?<Route path="/*" element={<NewsFeed />} />:<Route path="/" element={<Home />}/>}
          
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
