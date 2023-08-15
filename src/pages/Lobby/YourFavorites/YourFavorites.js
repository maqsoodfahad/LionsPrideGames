import { React, useState } from "react";
import { Link } from "react-router-dom";
import YourFavoritesAll from "./YourFavoritesAll";
import YourFavoritesSlider from "./YourFavoritesSlider";
import { useDispatch, useSelector } from "react-redux";
import { SpinnerDotted } from "spinners-react";
const NewGames = ({ loading }) => {
  const [showNewGames, setShowNewGames] = useState(true);
  const [showSlider, setShowSlider] = useState(true);
  const { value = [] } = useSelector((state) => state.favoritesGamesResp);

  const handleFavoritesClick = () => {
    setShowSlider(!showSlider);
  };

  const linkText = showSlider ? "View All" : "View Less";

  return (
    <>
      {value.length == 0 ? null : (
        <>
          {" "}
          <div className="theme-container">
            <div className="head_lobby d-flex justify-content-between align-items-center">
              <h1>Your Favorites</h1>

              <Link id="Favorites_slider" onClick={handleFavoritesClick}>
                {value.length > 6 ? linkText : null}
              </Link>
            </div>
          </div>
          {showNewGames && (
            <>
              <div className={showSlider ? "YourFavoritesSlider" : ""}>
                {loading && value.length === 0 ? (
                  <div style={{ margin: "auto", width: "0%" }}>
                    <SpinnerDotted style={{ height: "40", color: "red" }} />
                  </div>
                ) : (
                  <>
                    {showSlider ? (
                      <YourFavoritesSlider value={value} />
                    ) : (
                      <div className="theme-container">
                        <YourFavoritesAll value={value} />
                      </div>
                    )}
                  </>
                )}
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default NewGames;
