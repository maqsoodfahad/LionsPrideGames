import React, { useEffect, useState } from "react";
import img1 from "../../assets/HomeAssets/assets/images/senal.png";
import { useDispatch } from "react-redux";
import { getGameWraper } from "../../store/api/gameWraper";
import { useNavigate, useParams } from "react-router-dom";
import { SpinnerDotted } from "spinners-react";
import HeaderLobby from "../../components/Layout/Header/HeaderLobby";
import HeaderLobbyNoMV from "../../components/Layout/Header/HeaderLobbyNoMV";
const Games = () => {
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
    <>
      {/* <section className="banner-wrap Games-bg">
        <HeaderLobby />
        <div className="game-setting">
          <div className='theme-container z-9'>
            <div className='game-wrap  '>
              {loading ? (
                <div style={{ margin: "auto", width: "0%" }}>
                  <SpinnerDotted style={{ height: "60", color: "red" }} />

                </div>
              ) :
                <>
                  <iframe
                    src={link}
                    allowFullScreen
                    className="custom-iframe"
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden' }}
                    scrolling="no"
                  />

                </>
              }

              <div className="iframe_btn_wrap d-flex bkloby" >
                <button type="submit" onClick={() => navigate("/lobby")} className="btn_iframe">
                  <img src={img1} alt="senal" /> Back to Lobby
                </button>

              </div>
            </div>
          </div>
        </div>
      </section> */}
      <div className="games_bg_wrapper">
        <HeaderLobbyNoMV />
        <div className="theme-container cus-game-wrap-padding-top">
          {loading ? (
            <div style={{ margin: "auto", width: "0%" }}>
              <SpinnerDotted style={{ height: "60", color: "red" }} />
            </div>
          ) : (
            <>
              <div className="game_wrapper_bg_innner">
                <iframe
                  className="iframe"
                  width="100%"
                  height='100%'
                  scrolling="no"
                  src={link}
                  frameborder="0"
                  style={{ overflow: "hidden" }}
                ></iframe>
              </div>
              <div className="iframe_game_btn_wrapper_inner_MV">
              <div className="iframe_game_btn_wrapper_inner_MV_inner">
                  <div
            className="iframe_game_btn_wrapper"
            onClick={() => {
              navigate("/");
            }}
          >
            <div className="iframe_game_btn_wrapper_inner">
              <div className="img_back">
                <img src={img1} alt="back" />
              </div>
              <div className="back_text">Back to Lobby</div>
            </div>
          </div>
          </div>
          </div>
            </>
          )}
          {/* <div className="game_wrapper_bg_innner">
            <iframe
              className="iframe"
              scrolling="no"
              src={link}
              style={{ overflow: "hidden" }}
            ></iframe>
          </div> */}
      
        </div>
      </div>
    </>
  );
};

export default Games;
