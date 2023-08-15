import React from 'react' 
import Google from '../../../assets/HomeAssets/assets/images/join-icon/google_icon.png'
import Facebook from '../../../assets/HomeAssets/assets/images/join-icon/fb.png'
import Apple from '../../../assets/HomeAssets/assets/images/join-icon/apple_icon.png'
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="theme-container">
      <div className="banner-inner br-16">
        <div className="banner-content">
          <h1 className="f48">
            Experience the Ultimate Thrill
            <span className="mb-show">with these games</span>
          </h1>
          <p  className="f24">
            Win big, live bigger, and get your heart racing at our online playground
          </p>
          <button  onClick={() => navigate("/login")} type="button" className="themebtn-red btn-w288 mt-24">
            Play for Free
          </button>
          <div className="join-with-wrap">
            <h1>or join with</h1>
            <div className="join-button">
              <button className="btn-join"> 
                <img
                  src={Google}
                  alt="google_icon"
                />
                <span>Google</span>
              </button>
              <button className="btn-join"> 
                <img src={Facebook} alt="facebook" />
                <span>Facebook</span>
              </button>
              <button className="btn-join"> 
                <img
                  src={Apple}
                  alt="apple"
                />
                <span>Apple ID</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Banner