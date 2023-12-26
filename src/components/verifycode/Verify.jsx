import React from "react";
import "./style.scss";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import ContentWrapper from "../contentwrapper/ContentWrapper";
import { useDispatch, useSelector } from "react-redux";
import { updateDataPhone } from "../../action/actions";
// import { useSelector } from "react-redux";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import {auth} from "../../firebase/firebase"

const Verify = () => {
 
  const [passwordSlide, setPasswordSlide] = useState(false);
  const [passwordBorder, setPasswordBorder] = useState(false);
  const mobileData=useSelector((state)=>state.reducerPhone);
  const [code,setCode]= useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
 


  const SignUp = (e) => {
    window.confirmationResult.confirm(code)
      .then(res => {
        console.log(res);
        console.log("code confirm");
        dispatch(updateDataPhone(mobileData.data))
        navigate("pass")
      })
      .catch(error => {
        console.log(error);
      });
  }
  return (
    <>
      <div className="createpassword-model-wrpapper"></div>
      <div className="create-container">
        <div className="subparent-create-container">
          <div className="top-heading-signup-confirm">
            <div>Step 4 of 5</div>
          </div>
          <div className="overflow-loginin">
            <ContentWrapper>
              <h1>We sent you a code</h1>
              <div className="pass-word-in2">
                {`Enter it below to verify ${mobileData.data}`}
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
                      Waiting for sms to arrive
                    </span>
                  </div>
                  <input
                    className="first-input-login"
                    type="text"
                    // value={password}
                    onChange={(e)=>setCode(e.target.value)}
                    onFocus={InputFocusOutline}
                    onBlur={InputBlurOutline}
                  />
                </div>
              </label>
            <button className="Login-button" onClick={SignUp}>
                Next
              </button>
            </ContentWrapper>
            
          </div>
        </div>
      </div>
      <Outlet/>
    </>
  );
};
export default Verify;
