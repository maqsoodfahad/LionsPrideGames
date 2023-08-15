import React, { useState } from "react";
import Header from "../../components/Layout/Header/Header";
import Andrew from "./../../assets/HomeAssets/assets/images/Andrew.png";
import * as Yup from "yup";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import LobbyHeader from "../../components/Layout/Header/HeaderLobby";
import { contactapi } from "../../store/api/contactus";
import { SpinnerDotted } from "spinners-react";

const Contact = () => {
  const dispatch = useDispatch();
  let xAuthToken = localStorage.getItem("xAuthToken");

  const [loading, setLoading] = useState(false);

  const [success, setsuccess] = useState("");
  const [Error, setError] = useState("");
  const initialValues = {
    email: "",
    message: "",
    username: "",
    subject: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("The email you entered is not valid")
      .required("Required"),
    message: Yup.string().required("Required"),
    username: Yup.string().required("Required"),
    subject: Yup.string().required("Required"),
  });
  const onSubmit = async (values) => {
    // dispatch(setCredational(values));
    setLoading(true);
    dispatch(
      contactapi({
        body: values,
        onSuccess: (res) => {
          setsuccess(res.data.message);
          setLoading(false);
        },

        onError: (error) => {
          setLoading(false);

          if (error.response) {
            if (error.response.data.errors) {
              for (let key in error.response.data.errors) {
                setError(error.response.data.errors[key]);
              }
            } else if (error.response.data.message) {
              setError(error.response.data.message);
            }
          }
        },
      })
    );
  };
  return (
    <>
      <section className="banner-wrap HeaderLobby-wrap ">
        {xAuthToken ? (
          <>
            <LobbyHeader />
          </>
        ) : (
          <>
            <Header />
          </>
        )}

        <div className="theme-container Editprofile mt-60 z-9 mbtop">
          <h1 className="  f48 support-clr">Contact</h1>
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
                <form className="fomBox">
                  <div className="ChangeAvatar">
                    <img src={Andrew} alt="Andrew" />
                    <button className="btnChangeAvatar">
                      <span>Change Avatar</span>
                    </button>
                  </div>
                  <div className="main-wrap-form">
                    <div className="input_wrap form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="Name"
                        placeholder="@abacchio"
                        onChange={handleChange("username")}
                        onBlur={handleBlur("username")}
                        value={values.username}
                      />
                      <label htmlFor="Name">Name</label>
                    </div>
                    {errors.username && touched.username ? (
                      <div style={{ color: "red" }}>
                        <small>{errors.username}</small>
                      </div>
                    ) : null}
                    <div className="input_wrap form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="Email"
                        placeholder="@abacchio"
                        onChange={handleChange("email")}
                        onBlur={handleBlur("email")}
                        value={values.email}
                      />
                      <label htmlFor="Email">Email Address</label>
                    </div>
                    {errors.email && touched.email ? (
                      <div style={{ color: "red" }}>
                        <small>{errors.email}</small>
                      </div>
                    ) : null}
                    <div className="input_wrap form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="Subject"
                        placeholder="Eone"
                        onChange={handleChange("subject")}
                        onBlur={handleBlur("subject")}
                        value={values.subject}
                      />
                      <label htmlFor="Subject">Subject</label>
                    </div>
                    {errors.subject && touched.subject ? (
                      <div style={{ color: "red" }}>
                        <small>{errors.subject}</small>
                      </div>
                    ) : null}
                    <div className="input_wrap form-floating">
                      <textarea
                        className="form-control"
                        rows={5}
                        placeholder="Ask for help"
                        id="Message"
                        onChange={handleChange("message")}
                        onBlur={handleBlur("message")}
                        value={values.message}
                      ></textarea>
                      <label htmlFor="Message">Message</label>
                    </div>
                    {errors.message && touched.message ? (
                      <div style={{ color: "red" }}>
                        <small>{errors.message}</small>
                      </div>
                    ) : null}
                    <button
                      className="themebtn-red box-red w-100 mt-100"
                      type="button"
                      disabled={loading ? true : false}
                      onClick={handleSubmit}
                    >
                      {loading ? (
                        <SpinnerDotted style={{ height: "40", color: "red" }} />
                      ) : (
                        " Send message"
                      )}
                    </button>
                    <div className="error_wrap">
                      {success ? (
                        <>
                          <span className="errorbox boxSucess">{success}</span>
                        </>
                      ) : null}

                      {Error ? (
                        <>
                          <span className="errorbox boxWrong">
                            The email you entered is not valid
                          </span>
                        </>
                      ) : null}
                    </div>
                  </div>
                </form>
              </>
            )}
          </Formik>
        </div>
      </section>
    </>
  );
};

export default Contact;
