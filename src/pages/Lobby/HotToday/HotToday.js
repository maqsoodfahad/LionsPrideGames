import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HotTodaySlider } from "./HotTodaySlider";
import HotTodayAll from "./HotTodayAll";
import { SpinnerDotted } from "spinners-react";
import { useDispatch, useSelector } from "react-redux";
// import HotTodaySlider from "../HotToday/HotTodaySlider";
// import NewGamsAll from "../HotToday/HotTodaySlider";

const HotToday = ({ loading }) => {
  const [showHotToday, setShowHotToday] = useState(true);
  const [showSlider, setShowSlider] = useState(true);
  const { value = [] } = useSelector((state) => state.lobbyGamesResp);

  const handleHotTodayClick = () => {
    setShowSlider(!showSlider);
  };

  const linkText = showSlider ? "View All" : "View Less";

  return (
    <>
      <div className="theme-container">
        <div className="head_lobby d-flex justify-content-between align-items-center">
          <h1>Hot Today</h1>
          <Link id="HotToday_slider" onClick={handleHotTodayClick}>
            {linkText}
          </Link>
        </div>
      </div>
      {showHotToday && (
        <>
          <div className={showSlider ? "HotToday_slider" : ""}>
            {loading && value.length === 0 ? (
              <div style={{ margin: "auto", width: "0%" }}>
                <SpinnerDotted style={{ height: "40", color: "red" }} />
              </div>
            ) : (
              <>
                {showSlider ? (
                  <HotTodaySlider value={value} />
                ) : (
                  <div className="theme-container">
                    <HotTodayAll value={value} />
                  </div>
                )}
              </>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default HotToday;
