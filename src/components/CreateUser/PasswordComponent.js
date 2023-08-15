import React, { useState } from 'react';
import Div from '../Elements/Div';
import H1 from '../Elements/H1';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import PasswordEye from '../../assets/images/password-eye.png';
const PasswordComponent = ({ formData, errors, handleFormValue, handleKeyPress, HandleBackbtn, HandleNextbtn, stepCount }) => {
  const [imageShow, setImageShow] = useState(false)
  const [imageShow2, setImageShow2] = useState(false)
  const ShowPassword = () => {
    setImageShow(!imageShow)
  }
  const ShowPassword2 = () => {
    setImageShow2(!imageShow2)
  }
  return (
    <Div className='create-user-right pass_wrap'>
      <div className='field-wrap'>
        <Div className='field-h-box'>
          <H1 className='f-36-semibold'>Set password</H1>
          <span className='f-16-font-medium password-reset-span'>Must contain at least 6 characters, including letters and 1 digit special character (!,%,#)</span>
        </Div>
        <Div className='input-box mbtm-16'>
          <FloatingLabel className='input-box-field input-box-field-eyeShow star-password' controlId="Password" label="Password">
            <Form.Control onKeyDown={handleKeyPress}
              type={imageShow ? " text" : "password"} value={formData.password} name='password' autoComplete='off' onChange={handleFormValue} placeholder="Password" />
          </FloatingLabel>
          <img className='eyeShow-img' onClick={ShowPassword} src={PasswordEye} />
        </Div>
        <Div className='input-box'>
          <FloatingLabel className='input-box-field input-box-field-eyeShow star-password' controlId="floatingPassword" label="Confirm Password">
            <Form.Control onKeyDown={handleKeyPress} type={imageShow2 ? " text" : "password"} autoComplete='off' value={formData.confirm_password} name='confirm_password' onChange={handleFormValue} placeholder="Confirm Password" />
          </FloatingLabel>
          <img className='eyeShow-img' onClick={ShowPassword2} src={PasswordEye} />
          
          <div className='error-box'>
            <span className='f-14-font span-Email-error'>{errors.password}</span>
          </div>
        </Div>
      </div>
      <div className='btn-wrap'>
        <Div className='create-box-btn create-box-password'>
          <button type='button' onClick={HandleBackbtn} className='next-btn create-btns'>Back</button>
          <button onClick={HandleNextbtn} className='cannel-btn create-btns'>Next</button>
        </Div>
        <Div className='terms-condition'>
          <Div className='mtop-35'>
            <p>Already a member ?<Link className='terms-link mtop-10' to="/login"> Sign In here </Link></p>
          </Div>
        </Div>
      </div>
    </Div>
  );
}

export default PasswordComponent;
