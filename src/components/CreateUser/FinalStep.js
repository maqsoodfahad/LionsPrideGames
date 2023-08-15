import React from 'react'
import H1 from '../Elements/H1'
import Div from '../Elements/Div'
import { Link } from 'react-router-dom'
import ButtonSpinner from '../Spinners/ButtonSpinner'
export default function FinalStep({ handleSubmitUser, HandleBackbtn,disabled }) {
    return (
        <Div className='create-user-right final-step-mb-15 create-user-right-finalstep'>
            <div className='field-wrap'>

                <Div className='field-h-box'>
                    <H1 className='f-36-semibold'>In order to join, I agree to the following </H1>
                </Div>
                <Div className='terms-condition'>
                    <p>Terms and Conditions<Link className='terms-link'> learn more </Link></p>
                    <p>Safe gaming Terms<Link className='terms-link'> learn more</Link></p>
                </Div>
            </div>
            <div className='btn-wrap'>
                <Div className='create-box-btn create-btn-wrap-mt'>
                    {/* <Div className='create-box-btn create-box-btn-phone-mt'> */}
                    <button type='button' onClick={HandleBackbtn} className='next-btn  create-btns'>Back</button>
                    <button type='submit' onClick={handleSubmitUser} className='cannel-btn create-btns'>
                    { disabled ? <><ButtonSpinner disabled={disabled}/> </>:"Sign me Up"} </button>
                </Div>
                {/* <button onClick={handleSubmitUser} className='confirm-signup-btn'>I confirm, Sign me Up</button> */}
                {/* </Div> */}
            </div>
        </Div>
    )
}
