import React from 'react' 
import Hottest from '../../../assets/HomeAssets/assets/images/hottest-gambling.png' 
import { useNavigate } from "react-router-dom";

const HottestGambling = () => {
  const navigate = useNavigate();
  return (
    <> 
      {/* Safe Betting */}
      <section className="Safe-Betting-wrap  ">
        <div className="theme-container">
          <div className="row">
            <div className="col-lg-6 Safe-Betting-left">
              <h6 className="f32 mb-8">Safe Gaming</h6>
              <h1 className="f48 mb-8">Hottest Sweepstakes slots and online games</h1>
              <p className="f20 text-left">
                We cover endless events and markets in top speed. Fast settlements
                and instant payouts guarenteed.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="safe-betting-img">
                <img
                  src={Hottest}
                  alt="hottest-gambling"
                  className="img-fluid"
                />
              </div>
              <div className="Safe-Betting-right">
                <h6 className="f32 mb-8">Don’t miss it</h6>
                <h1 className="f48 mb-8">$8000 welcome bonus for new players</h1>
                <p className="f20 text-left">
                  We cover endless events and markets in top speed. Fast settlements
                  and instant payouts guarenteed.
                </p>
                <button className="themebtn-red  mt-32" type="button"
                onClick={() => navigate("/signup")}>
                  Join now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </> 
  )
}

export default HottestGambling