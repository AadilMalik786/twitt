import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
import Img from "../image/Img";
import twitterimage from "../../assets/twitterimage.png";
import "./home.scss";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="home-container">
        <div className="home-container-parent-compo" >
          <div className="home-first-container">
            <Img src={twitterimage} className="twitter-main-image" />
          </div>
          <div className="home-second-container">
            <h1 className="heading-second-container-first-child">
              Happening now
            </h1>
            <p className="home-second-container-second-child">Join today.</p>
            <button className="signup-with-google-button">
              <div className="google_icon-fcGoogle">
                <FcGoogle />
              </div>
              <div className="googletext">Sign up with Google</div>
            </button>
            <button className="signup-with-apple-button">
              <div className="apple_icon-aiApple">
                <AiFillApple />
              </div>
              <div className="appletext">Sign up with Apple</div>
            </button>
            <p className="text-between_horizontal-line">
              <hr className="horizontal_line" />
              <span>or</span>
              <hr className="horizontal_line" />
            </p>

            <button
              className="create_Account-button"
              onClick={() => navigate("signup")}
            >
              Create Account
            </button>

            <p className="text_inside-create-button">
              By signing up, you agree to the <a href="">Terms of Service</a>{" "}
              and{" "}
              <a href="">
                {" "}
                Privacy <br /> Policy
              </a>
              , including <a href=""> Cookie Use.</a>
            </p>
            <p className="already-account">Already have an account?</p>
            <button
              className="Signin-button"
              onClick={() => navigate("signin")}
            >
              <span>Sign in</span>
            </button>
          </div>
        </div>
        <footer>
          <ul>
            <li>About</li>
            <li>Download the X app</li>
            <li>Help Center</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
            <li>Accessibility</li>
            <li>Ads info</li>
            <li>Blog</li>
            <li>Status</li>
            <li>Careers</li>
            <li>Brand Resources</li>
            <li>Advertising</li>
            <li>Marketing</li>
            <li>X for Business</li>
            <li >Developers</li>
            <li >Directory</li>
            <li >Settings</li>
            <li>&copy; 2023 x corp.</li>
          </ul>
        </footer>
      </div>
      <Outlet />
    </>
  );
};
export default Home;
