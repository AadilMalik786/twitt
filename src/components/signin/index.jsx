import React from "react";
import "./style.scss";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
import Image from "../image/Img";
import twitterimage from "../../assets/twitterimage.png";
import ReactDOM from "react-dom";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [userName, setUserName] = useState("");
  const [mobileError,setMobileError]=useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  const SendUserName = (e) =>{
    setUserName(e.target.value);
    const stringNumber = e.target.value;
    const phoneRegex = /^[0-9]{10}$/;
    if (phoneRegex.test(stringNumber)) {
      const number = parseInt(stringNumber);
      setMobileError(false);
    }
    
    else{
      setMobileError(true);
    }
  } 

  const Next=()=>{
    setShowLogin(true);
    navigate("Login")
  }
  

  return ReactDOM.createPortal(
        <>
          {showLogin?"":
          <>
          <div className="sign-in-wrapper"></div>
          <div className="sign-in-topmost-parent-firstchild">
            <div className="image-logo">
              <div className="onclick-x-wrapper">
                <span onClick={() => navigate(-1)} className="cross-icon">
                  x
                </span>
              </div>
              <div className="logox-container">
                <Image src={twitterimage} className="logox" />
              </div>
            </div>
            <div className="below_logo-x">sign in to x</div>
            <button className="google">
              <div className="googlefont">
                <FcGoogle />
              </div>
              <div className="googletext">Sign up with Google</div>
            </button>
            <button className="apple">
              <div className="applefont">
                <AiFillApple />
              </div>
              <div className="appletext">Sign up with Apple</div>
            </button>
            <div className="horizontal_line-container">
              <hr className="line" />
              <span>or</span>
              <hr className="line" />
            </div>
            <div className="firstin">
              <input
                type="email"
                placeholder="Phone,email,or username"
                onChange={SendUserName}
                
              />
            </div>
            <div>
              <button className="signinnext" onClick={Next}>
                <span>next</span>
              </button>
            </div>
            <div>
              <button className="forgot">
                <span>forgot password</span>
              </button>
            </div>
            <div className="account">Don't have an account?Sign up</div>
          {mobileError && <div>Mobile is not valid</div>}
          </div>
        </>
    }
    <Outlet/>
    </>,
    document.querySelector(".myPortalModalDiv")
  );
};
export default SignIn;
