import React from 'react';
import Div from '../Elements/Div';
import H1 from '../Elements/H1';
import { FloatingLabel, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ButtonSpinner from '../Spinners/ButtonSpinner';
export default function PhoneComponent({
  formData,
  errors,
  handleFormValue,
  HandleBackbtn,
  HandleNextbtnSec,
  handleKeyPress,
  disabled = false,
}) {
  return (
    <Div className='create-user-right'>
      <div className='field-wrap'>
        <Div className='field-h-box'>
          <H1 className='f-36-semibold'>What's your Phone?</H1>
          <span className='f-16-font-medium password-reset-span'>Example: 1245653434 / +1312423545</span>
        </Div>
        <Div className='input-box'>
          <FloatingLabel className='input-box-field' controlId="floatingPassword" label="Mobile Number">
            <Form.Control onKeyDown={handleKeyPress} className='hide-arrows' autoComplete='off'  type="tel" value={formData.phone} name='phone' onChange={handleFormValue} placeholder="Mobile Number" />
          </FloatingLabel>
          <div className='error-box'>
            <span className='f-14-font span-Email-error'>{errors.phone && <>{errors.phone}</>}</span>
          </div>
        </Div>
      </div>
      <div className='btn-wrap'>
        <Div className='create-box-btn create-box-btn-phone-mt'>
          <button type='button' onClick={HandleBackbtn} className='next-btn  create-btns'>Back</button>
          <button onClick={HandleNextbtnSec} className='cannel-btn create-btns'>
          { disabled ? <><ButtonSpinner disabled={disabled}/> </>:"Next"}
          </button>
        </Div>
        <Div className='terms-condition'>
          <Div className='mtop-35'>
            <p>Already a member ?<Link className='terms-link mtop-10' to="/login" > Sign In here </Link></p>
          </Div>
        </Div>
      </div>
    </Div>
  );
}
