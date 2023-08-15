import React from "react";
import signupLogo from '../../../assets/images/signup_logo.png'
import { useNavigate } from "react-router-dom";
export default function SignupHeader() {
  const navigate = useNavigate()
  const HandleNaviagte = () =>
  {
    navigate('/login')
  }

  return (
    <div>
      <div className="signup_header_conatiner">
        <div className="theme-container">
          <div className="signup_header">
            <div className="signup_logo">
              <img src={signupLogo} alt="logo" />
            </div>
            <div className="signup_btn">
              <button onClick={HandleNaviagte} className="signup_btn_button">
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
