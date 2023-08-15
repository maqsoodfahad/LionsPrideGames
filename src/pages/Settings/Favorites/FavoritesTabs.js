import React, { useState, useEffect } from "react";
import dil from "../../../assets/HomeAssets/assets/images/Lobby/dil-border.svg";
import dil_fill from "../../../assets/HomeAssets/assets/images/Lobby/dil-fill.svg";
import game_card1 from "../../../assets/HomeAssets/assets/images/Lobby/game_card1.png";
import game_card2 from "../../../assets/HomeAssets/assets/images/Lobby/game_card2.png";
import game_card3 from "../../../assets/HomeAssets/assets/images/Lobby/game_card3.png";
import game_card4 from "../../../assets/HomeAssets/assets/images/Lobby/game_card4.png";
import game_card5 from "../../../assets/HomeAssets/assets/images/Lobby/game_card5.png";
import { Link } from "react-router-dom";
import { RemoveFavoriteApi } from "../../../store/api/favorite";
import { useDispatch, useSelector } from "react-redux";
import { getFavoriteApi } from "../../../store/api/favorite";
import Toast from "../../../components/Toastify/Toastify";
import { SpinnerDotted } from "spinners-react";

const FavoritesTabs = () => {
  const { gamesMap = {} } = useSelector((state) => state.lobbyGamesResp);
  const [loading] = useState(false);
  const dispatch = useDispatch();

  const handleButtonClick = (gameId) => {
    dispatch(
      RemoveFavoriteApi({
        id: gameId,
        onSuccess: (res) => {
          // setLoading(false);
          Toast.success("Game removed from favorites ", {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        },

        onError: (error) => {
          // setLoading(false);
          // if (error.response) {
          //   if (error.response.data.errors) {
          //     for (let key in error.response.data.errors) {
          //       setError(error.response.data.errors[key]);
          //     }
          //   } else if (error.response.data.message) {
          //     setError(error.response.data.message);
          //   }
          // }
        },
      })
    );
  };
  useEffect(() => {
    dispatch(
      getFavoriteApi({
        onSuccess: (res) => {},

        onError: (error) => {
          // if (error.response) {
          //   if (error.response.data.errors) {
          //     for (let key in error.response.data.errors) {
          //       setError(error.response.data.errors[key]);
          //     }
          //   } else if (error.response.data.message) {
          //     setError(error.response.data.message);
          //   }
          // }
        },
      })
    );
  }, [dispatch]);

  const { value = [] } = useSelector((state) => state.favoritesGamesResp);

  return (
    <>
      <div className="card_wrap_itme vew_all">
        {value.length === 0 ? (
          <>
            <div className="empty_duck">
              <h1 className="empty_du_h1">
                Empty Deck? Time to Deal Some Favorites!
              </h1>
              <p className="empty_du_p">
                You haven't added any favourite games yet. Browse our collection
                and add some to start your lucky streak!
              </p>
            </div>
          </>
        ) : (
          <>
            {" "}
            {loading ? (
              <SpinnerDotted style={{ height: "40", color: "red" }} />
            ) : (
              <>
                {value?.map((gameId) => {
                  if (!gamesMap[gameId]) return "";
                  return (
                    <div key={gameId} className="wrap_item_card">
                      <div className="item-wrap">
                        <div className="game-card">
                          <div className="img-game">
                            <Link to={`/games/${gameId}`}>
                              <img
                                src={gamesMap[gameId].image}
                                alt="game_card"
                              />
                            </Link>
                            <button
                              className={"img_icon  liked"}
                              onClick={() => handleButtonClick(gameId)}
                            >
                              <img src={dil} alt="dil" className="heart" />
                              <img
                                src={dil_fill}
                                alt="dil"
                                className="heartfill"
                              />
                            </button>
                          </div>
                          <Link to={`/games/${gameId}`}>
                            <h6>{gamesMap[gameId].details.name}</h6>
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default FavoritesTabs;
