import React, { useCallback, useState } from "react";
import Image from "../image/Img";
import twitterimage from "../../assets/twitterimage.png";
import { useNavigate } from "react-router-dom";
import ContentWrapper from "../contentwrapper/ContentWrapper";
import { useSelector } from "react-redux";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { Eye } from "lucide-react";
import { EyeOff } from "lucide-react";
import "./style.scss";
// import { useEffect } from "react";

const LoginSecond = React.memo(() => {
  const navigate = useNavigate();
  const [passwordSlide, setPasswordSlide] = useState(false);
  const [passwordBorder, setPasswordBorder] = useState(false);
  const [password, setPassword] = useState("");
  const recievedData = useSelector((state) => state.reducerSendSigninData);
  const [passkey, setPassKey] = useState(true);

  const HandleEye=(e)=>{
    setPassKey(!passkey);
    
  }

  const PasswordBorderChange = useCallback(() => {
    setPasswordBorder(true);
  }, [passwordBorder]);

  const InputFocusOutline = useCallback(() => {
    setPasswordBorder(true);
    setPasswordSlide(true);
  }, [passwordBorder, passwordSlide]);

  const InputBlurOutline = useCallback(() => {
    setPasswordBorder(false);
    setPasswordSlide(false);
  }, [passwordBorder, passwordSlide]);

  const signInEmail = useCallback(
    async (e) => {
      e.preventDefault();
      // setShowLoginOne(true);

      if (recievedData.data.includes("@")) {
        try {
          const userCredential = await signInWithEmailAndPassword(
            auth,
            recievedData.data,
            password
          );
          // console.log(userCredential);
          navigate("/home", { replace: true });
        } catch (error) {
          console.error(error);
        }
      } else {
        e.preventDefault();
        // setShowLoginOne(true);
        try {
          const userCredential = await signInWithEmailAndPassword(
            auth,
            `${recievedData.data}@gmail.com`,
            password
          );
          // console.log(userCredential);
          navigate("/home", { replace: true });
        } catch (error) {
          console.error(error);
        }
      }
    },
    [navigate, password, recievedData]
  );

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
                <Image src={twitterimage} className="image-component-logox" />
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
                      type={passkey ? "password" : "text"}
                      onFocus={InputFocusOutline}
                      onBlur={InputBlurOutline}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    {
                      passkey?<div style={{position:"absolute",right:"5px",top:"25px"}}>
                      <Eye onClick={HandleEye} />
                    </div>:<div style={{position:"absolute",right:"5px",top:"25px"}}>
                      <EyeOff onClick={HandleEye}/>
                    </div>
                    }
                    
                  
                </div>
              </label>
            </div>
            {/* <ContentWrapper > */}
            <button className="Login-button" onClick={signInEmail}>
              Log in
            </button>
          </ContentWrapper>
          {/* </ContentWrapper> */}
        </div>
      </div>
    </>
  );
});
export default LoginSecond;
