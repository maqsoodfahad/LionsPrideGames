import React from 'react'
import { Link } from 'react-router-dom'
import logo from './../../../assets/HomeAssets/assets/images/logo.svg' 
import support from './../../../assets/HomeAssets/assets/images/support.png' 

 
const Footer = () => {
  return (
    <>
  {/* footer-wrap */}
  <footer>
    <div className="footer-wrap">
      <div className="theme-container">
        <div className="row col-rev">
          <div className="col-lg-8">
            <div className="row">
              <div className="col-sm-6">
                <ul className="footer-list">
                  <li>
                    <Link>Terms and Conditions</Link>
                  </li>
                  <li>
                    <Link>Affiliate Terms</Link>
                  </li>
                  <li>
                    <Link>Privacy</Link>
                  </li>
                  <li>
                    <Link>Responsible Gaming</Link>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6">
                <ul className="footer-list">
                  <li>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                  <li>
                    <Link to="/about">About us</Link>
                  </li>
                  <li>
                    <Link>Withdrawal Policy</Link>
                  </li>
                  <li>
                    <Link>Blog</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4   text-end">
            <div className="footer-log">
              {" "}
              <img
                src={logo}
                className="logo_footer"
                alt="logo"
              />{" "}
            </div>
            <button className="btn btnsupport">
              <img src={support} alt="support" />
              Live support
            </button>
          </div>
        </div>
        <div className="footer-bottom mb_none">
          <p className="  text-white">
            Copyright © 2023 Lion’s Pride Games • All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  </footer>
  <div className="footer_second bg_lit">
    <p className="text-white">
      Copyright © 2023 Lion’s Pride Games • All Rights Reserved
    </p>
  </div>
</>

  )
}

export default Footer