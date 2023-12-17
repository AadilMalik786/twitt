import React, { useState } from "react";
import "./style.scss";
import Image from "../image/Img";
import twitterimage from "../../assets/twitterimage.png";
import { useLocation, useNavigate } from "react-router-dom";
import ContentWrapper from "../contentwrapper/ContentWrapper";
import { useSelector } from "react-redux";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";
// import { useEffect } from "react";

const LoginSecond = () => {
  const navigate = useNavigate();
  console.log(navigate);
  const [passwordSlide, setPasswordSlide] = useState(false);
  const [passwordBorder, setPasswordBorder] = useState(false);
  const [password, setPassword] = useState("");
  const recievedData = useSelector((state) => state.reducerSendSigninData);
  const PasswordBorderChange = () => {
    setPasswordBorder(true);
  };
  const InputFocusOutline = () => {
    setPasswordBorder(true);
    setPasswordSlide(true);
  };
  const InputBlurOutline = () => {
    setPasswordBorder(false);
    setPasswordSlide(false);
  };

  const signIn = async (e) => {
    e.preventDefault();
    // setShowLoginOne(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        recievedData.data,
        password
      );
      console.log(userCredential);
      navigate("/signin/newsfeed", { replace: true });
    } catch (error) {
      console.error(error);
    }
  };

 
  return (
        <>
          <div className="login-wrapper"></div>
          <div className="Login-parent-container">
            <div className="Login_subParent-container">
              <ContentWrapper>
                <div className="x-image-logo-parent">
                  <div className="login-onclick-x-wrapper">
                    <span
                      onClick={() => navigate("/")}
                      className="login-cross-icon"
                    >
                      x
                    </span>
                  </div>
                  <div className="login-logox-container">
                    <Image
                      src={twitterimage}
                      className="image-component-logox"
                    />
                  </div>
                </div>
                
                <div className="overflow-loginin">
                  <h1>Enter your password</h1>
                  <div className="pass-word-in2">
                    <input
                      className="second-input-pass"
                      value={recievedData.data}
                      readOnly
                    />
                  </div>
                  <label
                    className={`password-lable ${
                      passwordBorder && "password-outline"
                    }`}
                    onClick={PasswordBorderChange}
                  >
                    <div className="user-name-in1">
                      <div className="username-transition-parent">
                        <span
                          className={`password-slide-s1 ${
                            passwordSlide && "password-trans"
                          }`}
                        >
                          Password
                        </span>
                      </div>
                      <input
                        className="first-input-login"
                        type="password"
                        onFocus={InputFocusOutline}
                        onBlur={InputBlurOutline}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </label>
                </div>
                <ContentWrapper>
                  <button className="Login-button" onClick={signIn}>
                    Log in
                  </button>
                </ContentWrapper>
              </ContentWrapper>
            </div>
          </div>
        </>

  );
};
export default LoginSecond;
