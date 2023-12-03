import React, { useState } from "react";
import { useEffect } from "react";
import ReactDom from "react-dom";
import "./style.scss";
import Image from "../image/Img";
import twitterimage from "../../assets/twitterimage.png";
import { Outlet, useNavigate } from "react-router-dom";
import ContentWrapper from "../contentwrapper/ContentWrapper";
// import SignIn from "../signin";
// import Modal from "../Model";

const LoginSecond = ({ userName }) => {
  const [passwordSlide, setPasswordSlide] = useState(false);
  const [passwordBorder, setPasswordBorder] = useState(false);
  const navigate = useNavigate();
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
  const Navigation = (type) => {
    navigate("/signin/newsfeed");
  };
  return (
    <>
      <div className="login-wrapper"></div>
      <div className="Login-parent-container">
        <div className="Login_subParent-container">
            <ContentWrapper>
          <div className="x-image-logo-parent">
            <div className="login-onclick-x-wrapper">
              <span onClick={() => navigate(-2)} className="login-cross-icon">
                x
              </span>
            </div>
            <div className="login-logox-container">
              <Image src={twitterimage} className="image-component-logox" />
            </div>
          </div>
          {/* <div style={{  }}>helo</div> */}
          <div className="overflow-loginin">
              <h1>Enter your password</h1>            
              <div className="pass-word-in2">
                <input
                  className="second-input-pass"
                  type="text"
                  readOnly
                  value={userName}
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
                  />
                </div>
              </label>
          </div>
          <ContentWrapper>
            <button className="Login-button" onClick={Navigation}>
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
