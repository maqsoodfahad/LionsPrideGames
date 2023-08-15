import React from 'react'
import logo from "../../../assets/images/headercreationlogo.png"
import { useNavigate } from 'react-router-dom'
export default function HeaderCreation2() {
  const navigate =useNavigate();
    return (
    <div className='creation-header'>
        <div onClick={() => navigate("/")} className='creation-header-img'>
        <img src={logo}/>
        </div>
        <div className='creation-header-btn w27'>
        <button className="themebtn-dark mr4" type="button"
              onClick={() => navigate("/login")}
              >
                Sign in
              </button>
              <button className="themebtn-red " type="button"
              onClick={() => navigate("/signup")}
              >
                Join now
              </button>
        </div>
         </div>
  )
}
