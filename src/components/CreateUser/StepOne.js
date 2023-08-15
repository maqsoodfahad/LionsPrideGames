import React from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import H1 from "../Elements/H1";
import Div from "../Elements/Div";
import { Link } from "react-router-dom";
import ButtonSpinner from "../Spinners/ButtonSpinner";
const StepOne = ({
  formData,
  handleFormValue,
  errors,
  uncontrolled,
  HandleNextbtn,
  stepCount,
  disabled = false,
}) => {
  return (
    <div className="create-user-right">
      <div className="field-wrap">
        <div className="field-h-box field-h-box-h1-step-one">
          <H1 className="f-36-semibold">What's your email?</H1>
        </div>
        <div className="input-box">
          <FloatingLabel
            className="input-box-field"
            controlId="floatingPassword"
            label="Email"
          >
            <Form.Control
              value={formData.email}
              name="email"
              onChange={handleFormValue}
              autoComplete="off"
              type="Email"
              placeholder="Email"
            />
          </FloatingLabel>
          <div className="error-box">
            <span className="f-14-font span-Email-error">
              {errors.email && <>{errors.email}</>}
            </span>
          </div>
        </div>
      </div>
      <div className="btn-wrap">
        <div className="create-box-btn create-box-btn-stepOne">
          <button type="button" className="next-btn create-btns">
            Back
          </button>
          <button onClick={HandleNextbtn} disabled={disabled} className="cannel-btn create-btns">
            { disabled ? <><ButtonSpinner disabled={disabled}/> </>:"Next"}
          </button>
        </div>
        {stepCount === 4 ? (
          " "
        ) : (
          <Div className="terms-condition">
            <Div className="mtop-35">
              <p>
                Already a member ?
                <Link className="terms-link mtop-10" to="/login">
                  {" "}
                  Sign In here{" "}
                </Link>
              </p>
            </Div>
          </Div>
        )}
      </div>
    </div>
  );
};

export default StepOne;
