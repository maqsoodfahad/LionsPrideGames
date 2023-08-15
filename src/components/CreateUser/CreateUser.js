import React, { useState } from "react";
import Steps from "../Elements/Steps";
import validation from "./Validation";
import "../../index.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signinUser } from "../../store/api/auth";
import Div from "../Elements/Div";
import StepOne from "./StepOne";
import PasswordComponent from "./PasswordComponent";
import PhoneComponent from "./Phonecomponent";
import UserComponent from "./UserComponent";
import BirthdayComponent from "./BirthdayComponent";
import FinalStep from "./FinalStep";
import MVSteps from "./MVSteps";
import Toast from "../Layout/Toastify/Toastify";
import SignupHeader from "../Layout/Header/SignupHeader";
export default function CreateTest() {
  const dispatch = useDispatch();
  const [stepCount, setStepCount] = useState(1);
  const [loader, setLoader] = useState({});
  const navigate = useNavigate();
  const [stepCountSec, setStepCountSec] = useState(1);
  const [errors, setErrors] = useState({});
  const [formData, SetFormData] = useState({
    email: "",
    password: "",
    confirm_password: "",
    username: "",
    birthday: "",
    phone: "",
  });
  const HandleNextbtn = async (e, step, stepSec = -1) => {
    e.preventDefault();
    if (loader[step]) return;
    setLoader((prev) => ({ ...prev, [step]: true }));
    const validationErrors = await validation(formData, step, stepCountSec);
    if (Object.keys(validationErrors).length === 0) {
      if (stepSec > -1) setStepCountSec((prev) => prev + 1);
      else setStepCount((prev) => prev + 1);
    }
    setErrors(validationErrors);
    setLoader((prev) => ({ ...prev, [step]: false }));
  };
  const HandleBackbtn = () => {
    setStepCount(stepCount - 1);
  };
  const HandleBackbtnSec = () => {
    setStepCountSec(stepCountSec - 1);
  };
  const handleFormValue = (e) => {
    const { name, value } = e.target;
    let val = value;

    if (name === "phone") {
      val = val ? "+" + val.replaceAll("+", "") : "";
    }

    SetFormData((preData) => ({ ...preData, [name]: val }));
    errors[name] &&
      setErrors((preError) => ({ ...preError, [name]: undefined }));
  };
  const handleSubmitUser = (e) => {
    e.preventDefault();
    if (loader.final) return;
    setLoader((prev) => ({ ...prev, final: true }));

    dispatch(
      signinUser({
        body: {
          email: formData.email,
          password: formData.password,
          phone: formData.phone,
          username: formData.username,
          dateofbirth: formData.birthday,
        },
        onSuccess: (res) => {
          Toast.success("User Signed-up Successfully");
          setTimeout(() => {
            navigate("/login");
          }, 1000);

          setLoader((prev) => ({ ...prev, final: false }));
        },
        onError: (error) => {
          Toast.error("Someting went wrong");
          setLoader((prev) => ({ ...prev, final: false }));
        },
      })
    );
  };
  const handleKeyPress = (e) => {};
  const uncontrolled = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <SignupHeader />

      <section className="wrapper-create-user">
        <Div className="create-user">
          <Div className="create-user-form">
            <Div className={"form-left"}>
              <Div className="steps-box">
                <Steps stepCount={stepCount} />
              </Div>
              <MVSteps stepCount={stepCount} />
            </Div>
            <Div className={"form-right"}>
              <form className="form">
                {stepCount === 1 && (
                  <StepOne
                    disabled={loader[stepCount]}
                    stepCount={stepCount}
                    formData={formData}
                    handleFormValue={handleFormValue}
                    errors={errors}
                    uncontrolled={uncontrolled}
                    HandleNextbtn={(e) => HandleNextbtn(e, stepCount)}
                    handleKeyPress={handleKeyPress}
                  />
                )}
                {stepCount === 2 && (
                  <PasswordComponent
                    stepCount={stepCount}
                    formData={formData}
                    errors={errors}
                    handleFormValue={handleFormValue}
                    HandleBackbtn={HandleBackbtn}
                    HandleNextbtn={(e) => HandleNextbtn(e, stepCount)}
                    handleKeyPress={handleKeyPress}
                  />
                )}
                {stepCount === 3 && stepCountSec === 1 && (
                  <PhoneComponent
                    stepCount={stepCount}
                    formData={formData}
                    errors={errors}
                    handleFormValue={handleFormValue}
                    HandleBackbtn={HandleBackbtn}
                    HandleNextbtnSec={(e) =>
                      HandleNextbtn(e, stepCount, stepCountSec)
                    }
                    handleKeyPress={handleKeyPress}
                    disabled={loader[stepCount]}
                  />
                )}
                {stepCount === 3 && stepCountSec === 2 && (
                  <UserComponent
                    stepCount={stepCount}
                    formData={formData}
                    errors={errors}
                    handleFormValue={handleFormValue}
                    HandleBackbtnSec={HandleBackbtnSec}
                    HandleNextbtnSec={(e) =>
                      HandleNextbtn(e, stepCount, stepCountSec)
                    }
                    handleKeyPress={handleKeyPress}
                    disabled={loader[stepCount]}
                  />
                )}
                {stepCount === 3 && stepCountSec === 3 && (
                  <BirthdayComponent
                    stepCount={stepCount}
                    formData={formData}
                    errors={errors}
                    handleFormValue={handleFormValue}
                    HandleBackbtnSec={HandleBackbtnSec}
                    HandleNextbtn={(e) => HandleNextbtn(e, stepCount)}
                    handleKeyPress={handleKeyPress}
                  />
                )}
                {stepCount === 4 && (
                  <FinalStep
                    handleSubmitUser={handleSubmitUser}
                    handleKeyPress={handleKeyPress}
                    HandleBackbtn={HandleBackbtn}
                    disabled={loader.final}
                  />
                )}
              </form>
            </Div>
          </Div>
        </Div>
      </section>
    </div>
  );
}
