import React from 'react'
import H1 from '../Elements/H1'
import { FloatingLabel, Form } from 'react-bootstrap'
import Div from '../Elements/Div'
import { Link } from 'react-router-dom'
import ButtonSpinner from '../Spinners/ButtonSpinner'
export default function UserComponent({
    formData,
    errors,
    handleFormValue,
    HandleBackbtnSec,
    HandleNextbtnSec,
    handleKeyPress,
    disabled = false,

}) {
    return (

        <Div className='create-user-right'>
            <div className='field-wrap'>
                <Div className='field-h-box'>
                    <H1 className='f-36-semibold'>Create username</H1>
                    <span className='f-16-font-medium password-reset-span'>The name others see on Lion's Pride Gaming. <br /> Example: Luckygame</span>
                </Div>
                <Div className='input-box'>
                    <FloatingLabel className='input-box-field' controlId="floatingPassword" label="Username">
                        <Form.Control onKeyDown={handleKeyPress} type="Username" name='username' autoComplete='off' value={formData.username} onChange={handleFormValue} placeholder="Username" />
                    </FloatingLabel>
                    <div className='error-box'>
                        <span className='f-14-font span-Email-error'>{errors.username && <>{errors.username}</>}</span>
                    </div>
                </Div>
            </div>
            <div className='btn-wrap'>
                <Div className='create-box-btn create-user-btn-wrap'>
                    <button type='button' onClick={HandleBackbtnSec} className='next-btn  create-btns'>Back</button>
                    <button onClick={HandleNextbtnSec} className='cannel-btn create-btns'>
                    { disabled ? <><ButtonSpinner disabled={disabled}/> </>:"Next"}

                        </button>
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
