import React from "react";
import "./style.scss";
import { IoMdArrowBack } from "react-icons/io";
import { Outlet, useNavigate } from "react-router-dom";
import ContentWrapper from "../contentwrapper/ContentWrapper";
import { useDispatch, useSelector } from "react-redux";
import { FaCircleCheck } from "react-icons/fa6";
import { SendData } from "../../action/actions";

const ConfirmSignUp = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const receivedName = useSelector((state) => state.reducerName);
  const receivedPhone = useSelector((state) => state.reducerPhone);
  const receivedMonth = useSelector((state) => state.reducerMonth);
  const receivedDay = useSelector((state) => state.reducerDay);
  const receivedYear = useSelector((state) => state.reducerYear);
  const receivedEmail = useSelector((state) => state.ChangeEmail);
  const receivedEmailInput=useSelector((state)=>state.reducerEmail)
  console.log(receivedEmail);
  console.log(receivedName);

  
  const Next = async () => {
    try {
      // Dispatch the SendData action, assuming it returns a Promise
      await dispatch(SendData(receivedEmailInput.data));
  
      // After the data has been sent successfully, navigate to "pass"
      navigate("pass");
    } catch (error) {
      // Handle any errors that might occur during data sending
      console.error('Error sending data:', error);
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
                {
                  receivedEmail.variable ?<div
                  onClick={() => navigate(-2)}
                  className="first_name-input-confirm-signup"
                 >
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
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
                </div>:<div
                  onClick={() => navigate(-2)}
                  className="first_name-input-confirm-signup"
                 >
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
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
                }
                
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
            <button
              className="confirm-signup-button"
              onClick={Next}
            >
              Sign up
            </button>
          </ContentWrapper>
        </div>
      </div>
      <Outlet />
    </>
  );
};
export default ConfirmSignUp;
