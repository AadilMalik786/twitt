import React from "react";
import "./style.scss";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import ContentWrapper from "../contentwrapper/ContentWrapper";

const ConfirmSignUp = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="confirm-modal-wrapper"></div>
      <div className="confirm-container">
        <div className="confirm-subparent-container">
          <div className="top-heading-signup-confirm">
            <div onClick={() => navigate(-1)}>
              <IoMdArrowBack />
            </div>
            <div>Step 3 of 5</div>
          </div>
          <ContentWrapper>
            <h2 className="confirm-heading-signup">Create your account</h2>

            <label className="label-click-confirm">
              <div
                onClick={() => navigate(-2)}
                className="first_name-input-confirm-signup"
              >
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span className="input-placeholder">Name</span>
                </div>
                <input className="first-name-input"  />
              </div>
            </label>
            <label className="label-click-confirm">
              <div
                onClick={() => navigate(-2)}
                className="first_name-input-confirm-signup"
              >
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span className="input-placeholder">Phone</span>
                </div>
                <input className="first-name-input" />
              </div>
            </label>
            <label className="label-click-confirm">
              <div
                onClick={() => navigate(-2)}
                className="first_name-input-confirm-signup"
              >
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span className="input-placeholder" >Date of Birth</span>
                </div>
                <input className="first-name-input" />
              </div>
            </label>
            <div className="confirm-policy">
              By signing up, you agree to the <a href="">Terms of Service</a>{" "}
              and <a href="">Privacy Policy</a>, including{" "}
              <a href=""> Cookie Use</a>. X may use your contact information,
              including your email address and phone number for purposes
              outlined in our Privacy Policy, like keeping your account secure
              and personalizing our services, including ads.{" "}
              <a href=""> Learn more </a>. Others will be able to find you by
              email or phone number, when provided, unless you choose otherwise{" "}
              <a href=""> here</a>.
            </div>
            <button className="confirm-signup-button">Sign up</button>
          </ContentWrapper>
        </div>
      </div>
    </>
  );
};
export default ConfirmSignUp;
