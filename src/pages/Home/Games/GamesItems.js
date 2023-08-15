import React from 'react' 
import Img1 from '../../../assets/HomeAssets/assets/images/games/img1.png' 
import Img2 from '../../../assets/HomeAssets/assets/images/games/img2.png' 
import Img3 from '../../../assets/HomeAssets/assets/images/games/img3.png' 
import Img4 from '../../../assets/HomeAssets/assets/images/games/img4.png' 
import Img5 from '../../../assets/HomeAssets/assets/images/games/img5.png' 
import Img6 from '../../../assets/HomeAssets/assets/images/games/img6.png' 
import Img7 from '../../../assets/HomeAssets/assets/images/games/img7.png' 
import Img8 from '../../../assets/HomeAssets/assets/images/games/img8.png' 
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const GamesItems = () => {
  const navigate = useNavigate();
  return (
    <>  
      {/* Hundreds-games-wrap */} 
            {/* games-card-img */}
            <div className="games-card-img">
              <div className="game-wrap-row ">
                <div className="game-card">
                <Link>
                    <div className="img-game"> 
                      <img src={Img1} alt="img1" />
                    </div>
                    <h6>Mochimon</h6>
                  </Link>
                </div>
                <div className="game-card">
                <Link>
                    <div className="img-game"> 
                      <img src={Img2} alt="img1" />
                    </div>
                    <h6>Hot Pepper!</h6>
                  </Link>
                </div>
                <div className="game-card">
                <Link>
                    <div className="img-game">
                      
                      <img src={Img3} alt="img1" />
                    </div>
                    <h6>Gates of Olympus</h6>
                  </Link>
                </div>
                <div className="game-card mb_none_img">
                <Link>
                    <div className="img-game"> 
                      <img src={Img4} alt="img1" />
                    </div>
                    <h6>Gates of Olympus</h6>
                  </Link>
                </div>
                <div className="game-card">
                <Link>
                    <div className="img-game"> 
                      <img src={Img5} alt="img1" />
                    </div>
                    <h6>Mochimon</h6>
                  </Link>
                </div>
                <div className="game-card">
                <Link>
                    <div className="img-game"> 
                      <img src={Img6} alt="img1" />
                    </div>
                    <h6>Hot Pepper!</h6>
                  </Link>
                </div>
                <div className="game-card">
                <Link>
                    <div className="img-game"> 
                      <img src={Img7} alt="img1" />
                    </div>
                    <h6>Gates of Olympus</h6>
                  </Link>
                </div>
                <div className="game-card mb_none_img">
                <Link>
                    <div className="img-game"> 
                      <img src={Img8} alt="img1" />
                    </div>
                    <h6>Gates of Olympus</h6>
                  </Link>
                </div>
              </div>
            </div> 

          <div className="support_btn d-flex align-items-center mb_none_btn">
            <button
            onClick={() => navigate("/login")}
            className="themebtn-red box-red mr-16" type="button">
              Play for Free
            </button>
            <button className="themebtn-dark box-black" type="button">
              All Games
            </button>
          </div>  
    </> 
  )
}

export default GamesItems