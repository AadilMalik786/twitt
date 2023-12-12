import React, { useState } from "react";
import "./style.scss";
import { Outlet, useNavigate } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import ContentWrapper from "../contentwrapper/ContentWrapper";
import { IoIosCheckmark } from "react-icons/io";

const Customize = () => {
  const [show, setShow] = useState(false);
  const ToggleCheckBox = () => {
    setShow((prevShow) => !prevShow);
  };
  const navigate = useNavigate();
  
  return (
    <>
      <div className="modal-wrappers"></div>
      <div className="customize-container">
        <div className="custom-sub-container">
          <div className="top-heading-customize-block">
            <div onClick={() => navigate(-1)}>
              <IoMdArrowBack />
            </div>
            <div>Step 2 of 5</div>
          </div>
          <div className="overflow-customize">
            <ContentWrapper>
              <h1 className="customize-sub-heading">
                Customize your experience
              </h1>
              <div className="Track-x">
                Track where you see X content across the web
              </div>
              <div className="checkbox-parent">
                <div className="checkbox-first-child">
                  X uses this data to personalize your experience. This web
                  browsing history will never be stored with your name, email,
                  or phone number.
                </div>
                {/* <div className="toggle-checkbox"> */}
                <div
                  className={`checkbox-icon ${show ? "hideborder" : ""}`}
                  onClick={ToggleCheckBox}
                >
                  <IoIosCheckmark />
                </div>
                {/* </div> */}
              </div>
              <div className="policy-statement">
                By signing up, you agree to our <a href="">Terms</a>,{" "}
                <a href="">Privacy Policy</a> , and <a href="">Cookie Use</a>. X
                may use your contact information, including your email address
                and phone number for purposes outlined in our Privacy Policy.{" "}
                <a href="">Learn more</a>
              </div>
              
            </ContentWrapper>
          </div>
          <ContentWrapper>
            <button onClick={() => navigate("con")} className="next-button">
                Next
              </button>
              </ContentWrapper>
        </div>
      </div>
      <Outlet/>
    </>
  );
};
export default Customize;
