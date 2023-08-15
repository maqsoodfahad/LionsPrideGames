import React, { useEffect, useState } from "react";
import Andrew from "../../../assets/HomeAssets/assets/images/Andrew.png";
// import Andrew from '../../../assets/HomeAssets/assets/images/Andrew.png'
import { Formik, useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import Toast from "../../../components/Layout/Toastify/Toastify";
import { getUser } from "../../../store/api/userEdit";
import { UpdateUser } from "../../../store/api/userEdit";
import * as Yup from "yup";
import "yup-phone";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import { SpinnerDotted } from "spinners-react";
import GetStorage from "../../../services/storage";
import { useNavigate } from "react-router-dom";

const initialValues = {
  username: "",
  email: "",
  firstname: "",
  lastname: "",
  dateofbirth: "",
  phone: "",
};
const phoneRegExp =
  /^[+]?[\d]{0,3}[-\s]?[(]?[\d]{1,4}[)]?[-\s]?[\d]{1,6}[-\s]?[\d]{1,6}$/;
const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Required"),
  username: Yup.string()
    .min(4, "username have atleast 4 characters")
    .required("Required"),
  firstname: Yup.string().required("Required"),
  lastname: Yup.string().required("Required"),
  dateofbirth: Yup.date().max(new Date(), "Check the Date Format"),
  phone: Yup.string()
    .test("phone-validation", "Please enter a valid number", function (value) {
      const phoneNumber = parsePhoneNumberFromString(value);
      return phoneNumber && phoneNumber.isValid();
    })
    .required("Phone number is required"),
});
const EditProfile = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const [image, setImage] = useState();
  const user = useSelector((state) => state.editUser.user) || {};

  const formikProps = useFormik({ initialValues, validationSchema, onSubmit });
  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    touched,
    setFieldValue,
    setFieldError,
  } = formikProps;
  useEffect(() => {
    const {
      email = "",
      username = "",
      phone = "",
      firstname = "",
      lastname = "",
      dateofbirth = "",
    } = user;
    setFieldValue("email", email);
    setFieldValue("phone", phone);
    setFieldValue("username", username);
    setFieldValue("firstname", firstname);
    setFieldValue("lastname", lastname);
    setFieldValue("dateofbirth", dateofbirth);
  }, [user]);
  useEffect(() => {
    dispatch(getUser({}));
  }, [dispatch]);
  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handleClickChangeAvatar = (e) => {
    e.preventDefault();
    document.getElementById("imageInput").click();
  };
  async function onSubmit(values) {
    setLoading(true);

    dispatch(
      UpdateUser({
        body: { ...values, image },
        onSuccess: (res) => {
          setLoading(false);
          Toast.success("User updated successfully");
        },
        onError: (error) => {
          setLoading(false);
          const msg = error.response.data.message;
          if (msg.endsWith("already taken.")) {
            if (msg.includes("Username"))
              setFieldError("username", "Username is already taken");
            if (msg.includes("Email"))
              setFieldError("email", "Email is already taken");
            if (msg.includes("Phone"))
              setFieldError("phone", "Phone is Already taken");
          }
          Toast.error(error.response.data.message);
        },
      })
    );
  }
  return (
    <>
      <div className="theme-container Editprofile   z-9">
        <form className="fomBox" onSubmit={handleSubmit}>
          <div className="ChangeAvatar">
            <img
              src={image ? URL.createObjectURL(image) : user.image || Andrew}
              alt="Andrew"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleAvatarChange}
              style={{ display: "none" }}
              id="imageInput"
            />
            <button
              onClick={handleClickChangeAvatar}
              className="btnChangeAvatar"
            >
              <span>Change Avatar</span>
            </button>
          </div>
          <div className="main-wrap-form">
            <div className="input_wrap form-floating">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="@abacchio"
                onBlur={handleBlur("username")}
                value={values.username}
                onChange={handleChange("username")}
              />
              <label for="floatingInput">Username</label>
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
                id="floatingInput"
                placeholder="@abacchio"
                onChange={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
              <label for="floatingInput">Email Address</label>
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
                id="floatingInput"
                placeholder="Eone"
                onChange={handleChange("firstname")}
                onBlur={handleBlur("firstname")}
                value={values.firstname}
              />
              <label for="floatingInput">First Name</label>
            </div>
            {errors.firstname && touched.firstname ? (
              <div style={{ color: "red" }}>
                <small>{errors.firstname}</small>
              </div>
            ) : null}
            <div className="input_wrap form-floating">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="Abacchio"
                onChange={handleChange("lastname")}
                onBlur={handleBlur("lastname")}
                value={values.lastname}
              />
              <label for="floatingInput">Last Name</label>
            </div>
            {errors.lastname && touched.lastname ? (
              <div style={{ color: "red" }}>
                <small>{errors.lastname}</small>
              </div>
            ) : null}
            <div className="input_wrap form-floating">
              <input
                type="date"
                className="form-control"
                id="floatingInput"
                placeholder="93/11/10"
                onChange={handleChange("dateofbirth")}
                onBlur={handleBlur("dateofbirth")}
                value={values.dateofbirth}
              />
              <label for="floatingInput">Birth Date</label>
            </div>
            {errors.dateofbirth && touched.dateofbirth ? (
              <div style={{ color: "red" }}>
                <small>{errors.dateofbirth}</small>
              </div>
            ) : null}

            <div className="input_wrap form-floating">
              <input
                type="tel"
                className="form-control"
                id="floatingInput"
                placeholder="+1 314 889 3397"
                onBlur={handleBlur("phone")}
                onChange={(e) => {
                  let val = e.target.value;
                  val = val ? "+" + val.replaceAll("+", "") : "";
                  handleChange("phone")(val);
                }}
                value={values.phone}
              />
              <label for="floatingInput">Phone</label>
            </div>
            {errors.phone && touched.phone ? (
              <div style={{ color: "red" }}>
                <small>{errors.phone}</small>
              </div>
            ) : null}

            <div className="support_btn d-flex align-items-center  ">
              <button className="themebtn-dark box-black mr-16" type="button">
                Cancel
              </button>
              <button
                disabled={loading ? true : false}
                className="themebtn-red box-red "
                type="submit"
              >
                {loading ? (
                  <SpinnerDotted style={{ height: "40", color: "red" }} />
                ) : (
                  "       Save changes"
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditProfile;
