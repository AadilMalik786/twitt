import React from "react";
import "./style.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ContentWrapper from "../contentwrapper/ContentWrapper";
import { useSelector } from "react-redux";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../firebase/firebase"

const CreatePass = () => {
  const receivedData =useSelector((state)=>state.reducerSendEmail);
  const receivedMobile = useSelector((state)=>state.reducerPhone)
  console.log(receivedMobile.data);
  
  const[password,setPassword]=useState('');
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
 

  const SignUp=(e)=>{
    e.preventDefault();
      if(receivedData.data && receivedData.data.includes("@")){
        createUserWithEmailAndPassword(auth,receivedData.data,password)
         .then((userCredential)=>{
            console.log(userCredential);
            navigate("/home")
        }).catch((error)=>{
            console.log(error);
        })

      }
      else{
        createUserWithEmailAndPassword(auth,`${receivedMobile.data}@gmail.com`,password)
        .then((userCredential)=>{
               console.log(userCredential);
               navigate("/home")
           }).catch((error)=>{
               console.log(error);
           })
      }

      }
  return (
    <>
      <div className="createpassword-model-wrpapper"></div>
      <div className="create-container">
        <div className="subparent-create-container-login">
          <div className="top-heading-signup-confirm">
            <div>Step 4 of 5</div>
          </div>
          <div className="overflow-loginin">
            <ContentWrapper>
              <h1>You'll need a Password</h1>
              <div className="pass-word-in2">
                Make sure its 8 character or more.
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
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    onFocus={InputFocusOutline}
                    onBlur={InputBlurOutline}
                  />
                </div>
              </label>
            <button className="Login-button" onClick={SignUp}>
                Log in
              </button>
            </ContentWrapper>
            
          </div>
        </div>
      </div>
    </>
  );
};
export default CreatePass;
