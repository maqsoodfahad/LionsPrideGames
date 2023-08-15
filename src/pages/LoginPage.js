import React, { useState } from "react";
import loginImg from "../assets/images/loginimg.png";

import logo from "../assets/images/logo1.png";
import eyes from "../assets/images/eyes.png";
import eyes2 from "../assets/images/eyes2.png";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { setCredational } from "../store/ui/loginUi";
import { login } from "../store/api/auth";
import Toast from "../components/Toastify/Toastify";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { SpinnerDotted } from "spinners-react";
import HeaderCreation from "../components/Layout/Header/HeaderCreation";

export default function LoginPage() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const dispatch = useDispatch();
  const onSubmit = async (values) => {
    setLoading(true);
    dispatch(setCredational(values));

    dispatch(
      login({
        body: {
          email: values.email,
          password: values.password,
        },
        onSuccess: (res) => {
          navigate("/lobby");

          setLoading(false);

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
        },

        onError: (error) => {
          setLoading(false);

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
  };

  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
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
                <h1 className="welcome-bk">Welcome back!</h1>
                <div className="login-field">
                  <div className="form-floating mb_1 login-label">
                    <input
                      type="email"
                      className="form-control login-form-control"
                      id="floatingInput"
                      placeholder="email"
                      onChange={handleChange("email")}
                      onBlur={handleBlur("email")}
                      value={values.email}
                    />
                    <label htmlFor="floatingInput">Email </label>
                    {errors.email && touched.email ? (
                      <div style={{ color: "red" }}>
                        <small>{errors.email}</small>
                      </div>
                    ) : null}
                  </div>

                  <div className="form-floating login-label">
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

                  <div className="login-bottom">
                    <label className="container-2">
                      Remember me
                      <input type="checkbox" name="radio" />
                      <span className="checkmark"></span>
                    </label>
                    <h1 onClick={() => navigate("/forgot-password")}>
                      Forgot password
                    </h1>
                  </div>

                  <button
                    className="signin"
                    disabled={loading ? true : false}
                    onClick={handleSubmit}
                  >
                    {loading ? (
                      <SpinnerDotted style={{ height: "40", color: "red" }} />
                    ) : (
                      "         Sign In"
                    )}
                  </button>
                  <p className="signin-des">New to LionsPride? </p>
                  <p
                    className="signin-des text-yellow"
                    onClick={() => navigate("/signup")}
                  >
                    {" "}
                    Sign up here
                  </p>
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
