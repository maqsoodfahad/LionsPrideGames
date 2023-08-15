import React from 'react'
import H1 from '../Elements/H1'
import { FloatingLabel, Form } from 'react-bootstrap'
import Div from '../Elements/Div'
import { Link } from 'react-router-dom'
export default function BirthdayComponent({
    formData,
    errors,
    handleFormValue,
    HandleBackbtnSec,
    HandleNextbtn,
    handleKeyPress
}) {
    return (
    
            <Div className='create-user-right'>
                   <div className='field-wrap'>

                <Div className='field-h-box'>
                    <H1 className='f-36-semibold'>Birthday</H1>
                </Div>
                <Div className='input-box'>
                    <FloatingLabel className='input-box-field' controlId="floatingPassword" label="Format MM-DD-YY">
                        <Form.Control 
                        onKeyDown={handleKeyPress} className='date-calendar-hide' type="date"  autoComplete='off' name='birthday' format="dd-mm-yyyy" value={formData.birthday} onChange={handleFormValue} placeholder="Birthday" />
                    </FloatingLabel>
                    <div className='error-box'>
                        <span className='f-14-font span-Email-error'>{errors.birthday && <>{errors.birthday}</>}</span>
                    </div>               
                     </Div>
                     </div>
                     <div className='btn-wrap'>
                <Div className='create-box-btn birthday-btn-wrap'>
                    <button type='button' onClick={HandleBackbtnSec} className='next-btn  create-btns'>Back</button>
                    <button onClick={HandleNextbtn} className='cannel-btn create-btns'>Next</button>
                </Div>
                <Div className='terms-condition'>
                    <Div className='mtop-35'>
                        <p>Already a member ?<Link className='terms-link mtop-10' to="/login"> Sign In here </Link></p>
                    </Div>
                </Div>
                </div>
            </Div>
     
    )
}
