import React, { useState } from "react";
import loginImg from "../assets/images/loginimg.png";

import logo from "../assets/images/logo1.png";
import eyes from "../assets/images/eyes.png";
import eyes2 from "../assets/images/eyes2.png";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { setCredational } from "../store/ui/loginUi";
import { newPassword } from "../store/api/auth";
import { useNavigate, useParams } from "react-router-dom";
import http from "../services/http";

import back from "../assets/images/back.png";
import Toast from "../components/Toastify/Toastify";
import { updateValue } from "../store/ui/userData";

import * as Yup from "yup";
import HeaderCreation from "../components/Layout/Header/HeaderCreation2";
export default function NewPassword() {
  const navigate = useNavigate();
  const { id } = useParams();

  let email = localStorage.getItem("email");
  // ShowToast("success", "code has been sent");

  const [error, setError] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const dispatch = useDispatch();
  const onSubmit = async (values) => {
    dispatch(updateValue(values.password));

    // dispatch(setCredational(values));
    dispatch(
      newPassword({
        id: id,
        body: {
          password: values.password,
          // confirmPassword: values.confirmPassword,
          email: email,
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

          navigate("/continue-password");
        },

        onError: (error) => {
          if (error.response) {
            if (error.response.data.errors) {
              for (let key in error.response.data.errors) {
                setError(error.response.data.errors[key]);
              }
            } else if (error.response.data) {
              setError(error.response.data);
            }
          }
        },
      })
    );
  };

  const initialValues = {
    confirmPassword: "",
    password: "",
  };
  const validationSchema = Yup.object({
    password: Yup.string().required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "The passwords do not mach")
      .required("Required"),
  });
  const formdata = () => {
    return (
      <>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
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
                <h1 className="welcome-bk">Choose New Password</h1>
                <h1 className="forgot-bk text-center">
                  Almost done. Enter and confirm your new password
                </h1>
                <div className="login-field">
                  <div className="form-floating mb_1 login-label">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="form-control login-form-control"
                      id="floatingPassword"
                      placeholder="Password"
                      onChange={handleChange("password")}
                      onBlur={handleBlur("password")}
                      value={values.password}
                    />
                    <img
                      src={showPassword ? eyes2 : eyes}
                      className="showeye"
                      onClick={togglePasswordVisibility}
                    />
                    <label htmlFor="floatingPassword login-label">
                      Password
                    </label>
                  </div>
                  {errors.password && touched.password ? (
                    <div style={{ color: "red" }}>
                      <small>{errors.password}</small>
                    </div>
                  ) : null}
                  <div className="form-floating  login-label">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="form-control login-form-control"
                      id="floatingPassword"
                      placeholder="Confirm Password"
                      onChange={handleChange("confirmPassword")}
                      onBlur={handleBlur("confirmPassword")}
                      value={values.confirmPassword}
                    />
                    <img
                      src={showPassword ? eyes2 : eyes}
                      className="showeye"
                      onClick={togglePasswordVisibility}
                    />
                    <label htmlFor="floatingPassword login-label">
                      Confirm Password
                    </label>
                  </div>
                  {errors.confirmPassword && touched.confirmPassword ? (
                    <div style={{ color: "red" }}>
                      <small>{errors.confirmPassword}</small>
                    </div>
                  ) : null}

                  {error ? (
                    <>
                      <div
                        style={{
                          color: "red",
                          textAlign: "center",
                        }}
                      >
                        <small>{error}</small>
                      </div>
                    </>
                  ) : null}
                  <button
                    className="signin newpassword-btn"
                    onClick={handleSubmit}
                  >
                    Reset password
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
      <div className="login-body">
        <HeaderCreation />
        <div className="wrap-login-body mt2">{formdata()}</div>
      </div>
    </>
  );
}
