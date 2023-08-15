import React, { useEffect, useState } from 'react'
import HeaderLobby from '../../components/Layout/Header/HeaderLobby'
import Andrew from './../../assets/HomeAssets/assets/images/Andrew.png'
import { Formik, useFormik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import Toast from '../../components/Layout/Toastify/Toastify';
import storage from '../../services/storage';
import get from '../../services/storage'
import { getUser } from '../../store/api/userEdit';
import { UpdateUser } from '../../store/api/userEdit';
import * as Yup from "yup";
import "yup-phone";
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import { SpinnerDotted } from "spinners-react";

const initialValues = {
  username: "",
  email: "",
  firstName: "",
  lasteName: "",
  birthday: "",
  phone: "",
  userAvatar: Andrew,
}
const phoneRegExp = /^[+]?[\d]{0,3}[-\s]?[(]?[\d]{1,4}[)]?[-\s]?[\d]{1,6}[-\s]?[\d]{1,6}$/;

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Required"),
  username: Yup.string().required("Required"),
  firstName: Yup.string().required("Required"),
  lasteName: Yup.string().required("Required"),
  birthday: Yup.date().max(new Date(), "Check the Date Format"),
  phone: Yup.string()
  .test('phone-validation', 'Please enter a valid number', function (value) {
    const phoneNumber = parsePhoneNumberFromString(value);
    return phoneNumber && phoneNumber.isValid();
  })
  .required('Phone number is required'),
});

const EditProfile = () => {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch()
  const [avatar, setAvatar] = useState(Andrew)
  const user = useSelector((state) => state.editUser.user) || {};
  const formikProps = useFormik({ initialValues, validationSchema, onSubmit })
  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    touched,
    setFieldValue,
    setFieldError
  } = formikProps;

  useEffect(() => {
    const { email = "", username = "", phone = "" } = user;
    setFieldValue("email", email)
    setFieldValue("phone", phone)
    setFieldValue("username", username)
  }, [user])

  useEffect(() => {
    dispatch(getUser({}))
  }, [dispatch])

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const avatarURL = reader.result;
      setAvatar(avatarURL);
    };

    reader.readAsDataURL(file);
  };

  const handleClickChangeAvatar = (e) => {
    e.preventDefault()
    document.getElementById('avatarInput').click();
  };

  async function onSubmit(userEdit) {
    setLoading(true);
  
    dispatch(UpdateUser({
      body: {
        email: userEdit.email,
        password: userEdit.password,
        phone: userEdit.phone,
        username: userEdit.username,
        dateofbirth: userEdit.birthday,
        // avatar:avatar
      },
      onSuccess: (res) => {
        setLoading(false);

        if (res?.status === 200) {
          Toast.success('User updated successfully', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          })
        }
      },
      onError: (error) => {
        setLoading(false);

        setFieldError("username", "gdfgdfg")
        setFieldError("email", "sorry")
        Toast.error(error.response.data.message)
      }
    }))

  }

  return (
    <>
      <section className="banner-wrap HeaderLobby-wrap">
        <HeaderLobby />
        <div className="theme-container Editprofile mt-60 z-9">
          <h1 className='blu f48'>Edit profile</h1>
          <form className='fomBox' onSubmit={handleSubmit}>
            <div className='ChangeAvatar'>
              <img src={avatar} alt='Andrew' />
              {/* {avatar== null ?<>
                  <img src={Andrew } alt='Andrew' />
                  
                  </>:<>
                  <img src={avatar} alt='Andrew' />
                  </>} */}
              <input
                type='file'
                accept='image/*'
                onChange={handleAvatarChange}
                style={{ display: 'none' }}
                id='avatarInput'
              />
              <button onClick={handleClickChangeAvatar} className='btnChangeAvatar'><span>Change Avatar</span></button>
            </div>
            <div className='main-wrap-form'>
              <div className="input_wrap form-floating">
                <input type="text"
                  onBlur={handleBlur("username")}
                  value={values.username}
                  onChange={handleChange("username")}

                  className="form-control" placeholder="@abacchio" />
                <label htmlFor="floatingInput">Username</label>
              </div>  {errors.username && touched.username ? (
                <div style={{ color: "red" }}>
                  <small>{errors.username}</small>
                </div>
              ) : null}
              <div className="input_wrap form-floating">
                <input type="email"
                  onChange={handleChange("email")}

                  onBlur={handleBlur("email")}
                  value={values.email}
                  className="form-control" placeholder="@abacchio" />
                <label htmlFor="floatingInput">Email Address</label>
              </div>
              {errors.email && touched.email ? (
                <div style={{ color: "red" }}>
                  <small>{errors.email}</small>
                </div>
              ) : null}
              <div className="input_wrap form-floating">
                <input type="text"
                  onChange={handleChange("firstName")}
                  onBlur={handleBlur("firstName")}
                  value={values.firstName}
                  className="form-control" placeholder="Eone" />
                <label htmlFor="floatingInput">First Name</label>
              </div>
              {errors.firstName && touched.firstName ? (
                <div style={{ color: "red" }}>
                  <small>{errors.firstName}</small>
                </div>
              ) : null}
              <div className="input_wrap form-floating">
                <input type="text"
                  onChange={handleChange("lasteName")}
                  onBlur={handleBlur("lasteName")}
                  value={values.lasteName}
                  className="form-control" placeholder="Abacchio" />
                <label htmlFor="floatingInput">Last Name</label>
              </div>
              {errors.lasteName && touched.lasteName ? (
                <div style={{ color: "red" }}>
                  <small>{errors.lasteName}</small>
                </div>
              ) : null}
              <div className="input_wrap form-floating">
                <input
                  onChange={handleChange("birthday")}
                  onBlur={handleBlur("birthday")}
                  value={values.birthday}
                  type="date" className="form-control" placeholder="93/11/10" />
                <label htmlFor="floatingInput">Birth Date</label>
              </div>
              {errors.birthday && touched.birthday ? (
                <div style={{ color: "red" }}>
                  <small>{errors.birthday}</small>
                </div>
              ) : null}

              <div className="input_wrap form-floating">
                <input
                  onBlur={handleBlur("phone")}
                  onChange={handleChange("phone")}

                  value={values.phone}
                  type="tel" className="form-control" placeholder="+1 314 889 3397" />
                <label htmlFor="floatingInput">Phone</label>
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
                <button type="submit" 
                 disabled={loading ? true : false}
                className="themebtn-red box-red ">
                {loading ? (
                    <SpinnerDotted style={{ height: "40", color: "red" }} />
                  ) : (
                    "   Save changes"
                  )}
                 
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default EditProfile




