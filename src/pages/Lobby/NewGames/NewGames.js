import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NewGamesSlider } from './NewGamesSlider';
import NewGamsAll from './NewGamsAll';
import { useDispatch, useSelector } from "react-redux";
import { SpinnerDotted } from "spinners-react";

const NewGames = ({ loading }) => {
  const [showNewGames, setShowNewGames] = useState(true);
  const [showSlider, setShowSlider] = useState(true);
  const { value = [] } = useSelector((state) => state.lobbyGamesResp)

  const handleNewGamesClick = () => {
    setShowSlider(!showSlider);
  };

  const linkText = showSlider ? 'View All' : 'View Less';

  return (
    <>
      <div className="theme-container">
        <div className="head_lobby d-flex justify-content-between align-items-center">
          <h1>New Games</h1>
          <Link id="NewGames_slider" onClick={handleNewGamesClick}>
            {linkText}
          </Link>
        </div>
      </div>
      {showNewGames && (
        <>
          <div className={showSlider ? "NewGames_slider" : ""}>

            {loading && value.length === 0 ? (
              <div style={{ margin: "auto", width: "0%" }}>
                <SpinnerDotted style={{ height: "40", color: "red" }} />

              </div>
            ) :
              <>

                {showSlider ? <NewGamesSlider value={value} /> : <div className="theme-container"><NewGamsAll value={value} /></div>}
              </>
            }


          </div>
        </>
      )}
    </>
  );
};

export default NewGames;
