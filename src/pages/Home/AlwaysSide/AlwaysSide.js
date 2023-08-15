import React from 'react' 
import Support from '../../../assets/HomeAssets/assets/images/support-img.png' 
import { useNavigate } from "react-router-dom";
const AlwaysSide = () => {
  const navigate = useNavigate();

  return (
    <>  
  {/* Always-Your-Side */}
    <section className="Always-Your-Side  ">
      <div className="theme-container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="content-Always pb-200">
              <h6 className="f32 mb-8">24/7 Support</h6>
              <h5 className="f48 mb-16">Always by Your Side</h5>
              <p className="f20">
                We cover endless events and markets in top speed. Fast settlements
                and instant payouts guarenteed.
              </p>
              <div className="support_btn d-flex align-items-center">
                <button className="  themebtn-red box-red mr-16" type="button"
                         onClick={() => navigate("/signup")}
                
                >
                  Join now
                </button>
                <button className="  themebtn-dark box-black" type="button">
                  Open chat
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="support-img">
              <img
                src={Support}
                alt="support-img"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>  
    </>
  )
}

export default AlwaysSide