import React from "react";
import "./style.scss";
import { IoMdArrowBack } from "react-icons/io";
import { Outlet, useNavigate } from "react-router-dom";
import ContentWrapper from "../contentwrapper/ContentWrapper";
import { useDispatch, useSelector } from "react-redux";
import { FaCircleCheck } from "react-icons/fa6";
import { SendData } from "../../action/actions";
import { updateDataPhone, SendName } from "../../action/actions";
import { auth } from "../../firebase/firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/firebase";

const ConfirmSignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const receivedName = useSelector((state) => state.reducerName);
  const receivedPhone = useSelector((state) => state.reducerPhone);
  const receivedMonth = useSelector((state) => state.reducerMonth);
  const receivedDay = useSelector((state) => state.reducerDay);
  const receivedYear = useSelector((state) => state.reducerYear);
  const receivedEmail = useSelector((state) => state.ChangeEmail);
  
  const receivedEmailInput = useSelector((state) => state.reducerEmail);
  const receivedPhoneRed = useSelector((state)=>state.reducerPhone)
  console.log(receivedPhoneRed);
  console.log(receivedPhone);

  const sendOtp = () => {
    const appvarifier = new RecaptchaVerifier(auth, "abc", {
      size: "invisible",
    });
    signInWithPhoneNumber(auth, receivedPhone.data, appvarifier)
      .then((res) => {
        console.log(res);
        window.confirmationResult = res;
        console.log("otp send");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  

  const Next = async () => {
    if (receivedEmail.variable) {
      console.log(receivedEmail.variable);
      dispatch(SendData(receivedEmailInput.data));
      dispatch(SendName(receivedName.data));
      try {
        // const x =Math.random();
        // console.log(x);

        const random = Math.random().toFixed(5);
        // const randomNumber = Math.ceil(random);

        // Convert the number to a string
        const numberString = random.toString();

        // Find the index of the decimal point
        const decimalIndex = numberString.indexOf(".");
        console.log(decimalIndex);
        // Extract the substring after the decimal point
        const digitsAfterDecimal = numberString.substring(decimalIndex + 1);
        const newPost = {
          profileName: receivedName.data,
          userName: `@${receivedName.data.replace(/\s/g, "")}${digitsAfterDecimal}`,
          Email: receivedEmailInput.data,
          DOB: `${receivedMonth.data} ${receivedDay.data}, ${receivedYear.data}`,

        };

        const docRef = await addDoc(collection(db, "posts"), newPost);
        console.log("Document written with ID: ", docRef.id);
        // setUser(user)
        navigate("pass");
      } catch (error) {
        console.error("Error adding document: ", error);
      }
      // console.log("email");
    } else {
      sendOtp();
      dispatch(updateDataPhone(receivedPhoneRed.data));
   

      try {
        // const x =Math.random();
        // console.log(x);

        const random = Math.random().toFixed(5);
        // const randomNumber = Math.ceil(random);

        // Convert the number to a string
        const numberString = random.toString();

        // Find the index of the decimal point
        const decimalIndex = numberString.indexOf(".");
        console.log(decimalIndex);
        // Extract the substring after the decimal point
        const digitsAfterDecimal = numberString.substring(decimalIndex + 1);
        const newPost = {
          profileName: receivedName.data,
          userName: `@${receivedName.data.replace(/\s/g, "")}${digitsAfterDecimal}`,
          phone: receivedPhoneRed.data,
          Email:`${receivedPhoneRed.data}@gmail.com`,
          DOB: `${receivedMonth.data} ${receivedDay.data}, ${receivedYear.data}`,
        };

        const docRef = await addDoc(collection(db, "posts"), newPost);
        console.log("Document written with ID: ", docRef.id);
        // setUser(user)
        navigate("verify");
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    }
  };

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
            <div className="overflow-confirm">
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
                  <input
                    className="first-name-input"
                    value={receivedName.data}
                    readOnly
                    style={{ color: "white" }}
                  />
                  <div className="checkbox-green">
                    <FaCircleCheck />
                  </div>
                </div>
              </label>
              <label className="label-click-confirm">
                {receivedEmail.variable ? (
                  <div
                    onClick={() => navigate(-2)}
                    className="first_name-input-confirm-signup"
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span className="input-placeholder">email</span>
                    </div>
                    <input
                      className="first-name-input"
                      type="tel"
                      value={receivedEmailInput.data}
                      readOnly
                    />
                    <div className="checkbox-green">
                      <FaCircleCheck />
                    </div>
                  </div>
                ) : (
                  <div
                    onClick={() => navigate(-2)}
                    className="first_name-input-confirm-signup"
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span className="input-placeholder">Phone</span>
                    </div>
                    <input
                      className="first-name-input"
                      type="tel"
                      value={receivedPhone.data}
                      readOnly
                    />
                    <div className="checkbox-green">
                      <FaCircleCheck />
                    </div>
                  </div>
                )}
              </label>
              <label className="label-click-confirm">
                <div
                  onClick={() => navigate(-2)}
                  className="first_name-input-confirm-signup"
                >
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <span className="input-placeholder">Date of Birth</span>
                  </div>
                  <input
                    className="first-name-input"
                    value={`${receivedMonth.data} ${receivedDay.data}, ${receivedYear.data}`}
                    readOnly
                  />
                  <div className="checkbox-green">
                    <FaCircleCheck />
                  </div>
                </div>
              </label>
            </div>
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
            <button className="confirm-signup-button" onClick={Next}>
              Sign up
            </button>
          </ContentWrapper>
        </div>
      </div>
      <div id="abc"></div>
      <Outlet />
    </>
  );
};
export default ConfirmSignUp;
