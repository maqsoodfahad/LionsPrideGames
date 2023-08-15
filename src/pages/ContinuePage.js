import React, { useState } from "react";
import loginImg from "../assets/images/loginimg.png";
import logo from "../assets/images/logo1.png";
import back from "../assets/images/back.png";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { setCredational } from "../store/ui/loginUi";

import { login } from "../store/api/auth";
import Toast from "../components/Toastify/Toastify";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import HeaderCreation from "../components/Layout/Header/HeaderCreation2";
export default function ContinuePage() {
  const [error, setError] = useState("");
  const value = useSelector((state) => state.userData.value);
  let email2 = localStorage.getItem("email");
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const initialValues = {
    email: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
  });
  const formdata = () => {
    return (
      <>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          // onSubmit={onSubmit}
        >
          {({
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            errors,
            touched,
          }) => (
            <>
              <div className="login-form">
                <div className="login-logo">
                  <img src={logo} />
                </div>

                <div className="login-field">
                  <h1 className="welcome-bk ">Password Updated</h1>
                  <h1 className="forgot-bk text-center">
                    Your password has been successfully reset. Click below to
                    log in magically.
                  </h1>

                  <button
                    className="signin mt-resend"
                    onClick={() => {
                  

                      dispatch(
                        login({
                          body: {
                            email: email2,
                            password: value,
                          },
                          onSuccess: (res) => {
     

                      
                            Toast.success(res.data.message, {
                              position: "top-right",
                              autoClose: 5000,
                              hideProgressBar: false,
                              closeOnClick: true,
                              pauseOnHover: true,
                              draggable: true,
                              progress: undefined,
                              theme: "dark",
                            });
                            navigate("/");
                          },

                          onError: (error) => {
               

                            if (error.response) {
                              if (error.response.data.errors) {
                                for (let key in error.response.data.errors) {
                                  setError(error.response.data.errors[key]);
                                  Toast.error(error.response.data.errors[key], {
                                    position: "top-right",
                                    autoClose: 5000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    theme: "dark",
                                  });
                                }
                              } else if (error.response.data.message) {
                                setError(error.response.data.message);

                                Toast.error(error.response.data.message, {
                                  position: "top-right",
                                  autoClose: 5000,
                                  hideProgressBar: false,
                                  closeOnClick: true,
                                  pauseOnHover: true,
                                  draggable: true,
                                  progress: undefined,
                                  theme: "dark",
                                });
                              }
                            }
                          },
                        })
                      );
                    }}
                  >
                    Continue
                  </button>

                  <div className="back">
                    <img src={back} onClick={() => navigate("/login")} />
                    <h1 onClick={() => navigate("/login")}>Back to log In</h1>
                  </div>
                </div>
              </div>
            </>
          )}
        </Formik>
      </>
    );
  };
  return (
    <>
      {/* <div className="wrap-login-page ">
        <div className="left-side-login dis-none"></div>
        <div className="center-side-login">
          <img className="center-side-login-img dis-none" src={loginImg} />
          <img className="center-side-login-img desk-none" src={mobileImg} />

          {formdata()}
        </div>
        <div className="right-side-login dis-none"></div>
      </div> */}
      <div className="login-body">
        <HeaderCreation/>
        <div className="wrap-login-body mt6">{formdata()}</div>
      </div>
    </>
  );
}
