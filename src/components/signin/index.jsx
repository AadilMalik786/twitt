import React from "react";
import "./style.scss";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
import Image from "../image/Img";
import twitterimage from "../../assets/twitterimage.png";
import ReactDOM from "react-dom";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { InputData } from "../../action/actions";
import { useLocation } from "react-router-dom";


const SignIn = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);
  
console.log("signin");
  console.log(showLogin);
  // const [userName, setUserName] = useState("");
  const [slide, setSlide] = useState(false);
  // const [input,setInput]=useState("");
  const dispatch = useDispatch();

  const [phoneborder, setPhoneBorder] = useState(false);

 
  const phoneborderchange = () => {
    setPhoneBorder(true);
    setSlide(true);
    // if (phoneRedOutline) {
    //   setPhoneRedOutline(true);
    //   setPhoneBorder(false);
    // }
  };
  const phoneslide = () => {
    // setPhoneSlide(true);
    setPhoneBorder(true);
  };

  const phoneblur = (e) => {
    // setPhoneSlide(false);
    setSlide(false);
    setPhoneBorder(false);
  };
  const Next = () => {
    setShowLogin(true);
    // console.log(showLogin);
    navigate("login");
  };

  const PhoneEmailValue = (e) => {
    const input = e.target.value;
      dispatch(InputData(input));
    console.log(typeof(input));
  };


  const handleBackNavigation = () => {
    // Check if the current location is the expected one
    if (location.pathname === "/signin") {
      // If yes, navigate to a different route
      console.log(location.pathname);
      navigate("/");
    }
   
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    // Set up an event listener for popstate (back/forward button)
    window.addEventListener("popstate", handleBackNavigation);

    return () => {
      document.body.style.overflowY = "scroll";

      // Clean up the event listener when the component is unmounted
      window.removeEventListener("popstate", handleBackNavigation);
    };
  }, []);

  return ReactDOM.createPortal(
    <>
      {showLogin ? (
        ""
       ) : (
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
              <div className="googletext">Sign in with Google</div>
            </button>
            <button className="apple">
              <div className="applefont">
                <AiFillApple />
              </div>
              <div className="appletext">Sign in with Apple</div>
            </button>
            <div className="horizontal_line-container">
              <hr className="line" />
              <span>or</span>
              <hr className="line" />
            </div>
            <div className="firstin">
              <label
                className={`phone-lable-signin ${
                  phoneborder && "phone-outline"
                }`}
                onClick={phoneborderchange}
              >
                <div className="second_phone-input-container-signin">
                  <div className="phone-email-transition-container-signin">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span
                        className={`trans-signin ${
                          slide && "animation-signin"
                        }`}
                      >
                        Phone, email, or username
                      </span>
                    </div>
                  </div>

                  <input
                    // type="tel"
                    className="second_phone-input-one"
                    onChange={PhoneEmailValue}
                    onFocus={phoneslide}
                    onBlur={phoneblur}
                    name="email"
                  />
                </div>
              </label>
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
          </div>
        </>
      )}
    <Outlet/>
    </>,
    document.querySelector(".myPortalModalDiv")
    );
};
export default SignIn;
