import React from 'react'  
import GamesItems from './GamesItems'
import { useNavigate } from "react-router-dom";

const Games = () => {
  const navigate = useNavigate();

  return (
    <>  
      {/* Hundreds-games-wrap */}
      <section className="Hundreds-games-wrap">
        <div className="games_wrap">
          <div className="theme-container">
            <div className="row">
              <div className="col-lg-6 ">
                <div className="Hundreds-games-content">
                  <div className="repeat mb-32">
                    <h4 className="f48 mb-8">Hundreds of games</h4>
                    <p className="f20 ">
                      We cover endless events and markets in top speed. Fast
                      settlements and instant payouts guarenteed.
                    </p>
                  </div>
                  <div className="repeat mb-32">
                    <h4 className="f48 mb-8">Fastest checkout</h4>
                    <p className="f20 ">
                      We cover endless events and markets in top speed. Fast
                      settlements and instant payouts guarenteed.
                    </p>
                  </div>
                  <div className="repeat  ">
                    <h4 className="f48 mb-8">Over 50,000 players</h4>
                    <p className="f20 ">
                      We cover endless events and markets in top speed. Fast
                      settlements and instant payouts guarenteed.
                    </p>
                  </div>
                  <button
                  onClick={() => navigate("/login")}
                    type="button"
                    className="themebtn-red btn-w288 mt-24 mt-40"
                  >Play for Free
                  </button>
                </div>
              </div>
            </div>
            {/* games-card-img */}
             <GamesItems />
          </div>
        </div>
      </section>
    </> 
  )
}

export default Games