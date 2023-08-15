import React, { useState, useEffect, useRef } from "react";
import HeaderLobby from "./../../components/Layout/Header/HeaderLobby";
import img1 from "../../assets/HomeAssets/assets/images/senal.png";
import { useDispatch } from "react-redux";
import { getGameWraper } from "../../store/api/gameWraper";
import { useNavigate, useParams } from "react-router-dom";
import { SpinnerDotted } from "spinners-react";
export default function GamesTest() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [link, setlink] = useState("");
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    lobbyFetchData();
  }, []);

  const lobbyFetchData = async () => {
    setLoading(true);
    dispatch(
      getGameWraper({
        body: {
          game_id: id,
        },
        onSuccess: (res) => {
          setLoading(false);

          setlink(res?.data?.data?.link);
        },

        onError: (error) => {
          // console.clear();

          setLoading(false);
        },
      })
    );
  };
  return (
    <div>
      <div className="games_bg_wrapper">
        <HeaderLobby />
        <div className="theme-container cus-game-wrap-padding-top">
          <div className="game_wrapper_bg_innner">
            <iframe
              className="iframe"
              scrolling="no"
              src={link}
              style={{ overflow: "hidden" }}
            ></iframe>
          </div>
          <div
            className="iframe_game_btn_wrapper"
            onClick={() => {
              navigate("/");
            }}
          >
            <div className="iframe_game_btn_wrapper_inner">
              <div className="img_back">
                <img src={img1} alt="" />
              </div>
              <div className="back_text">Back to Lobby</div>
            </div>

            {/* <button type="submit" onClick={(j) => navigahhjjhjjhjjjhhjhjhjjkjkjkte("/lobby")} className="btn_iframe">
                <img src={img1} alt="senal" /> 
                <p>Back to Lobby</p>
              </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
