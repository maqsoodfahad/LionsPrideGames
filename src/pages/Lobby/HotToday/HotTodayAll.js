import React, { useState } from "react";
import dil from "../../../assets/HomeAssets/assets/images/Lobby/dil-border.svg";
import dil_fill from "../../../assets/HomeAssets/assets/images/Lobby/dil-fill.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Toast from "../../../components/Toastify/Toastify";
import { FavoriteApi, RemoveFavoriteApi } from "../../../store/api/favorite";

const NewGamsAll = ({ value }) => {
  const dispatch = useDispatch();
  const favorites =
    useSelector((state) => state.favoritesGamesResp.value) || [];
  const favoritesMap = favorites.reduce((acc, gameId) => {
    acc[gameId] = true;
    return acc;
  }, {});

  const handleButtonClick = (gameId) => {
    if (favoritesMap[gameId])
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
        })
      );
    else
      dispatch(
        FavoriteApi({
          body: {
            gameId,
          },
          onSuccess: (res) => {
            Toast.success(res.data.message, {
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
        })
      );
  };
  const filterHotToday = value.filter((item) => item.hotToday);

  return (
    <>
      <div className="card_wrap_itme vew_all">
        {filterHotToday?.map((item) => {
          return (
            <div key={item._id} className="wrap_item_card">
              <div className="item-wrap">
                <div className="game-card">
                  <div className="img-game">
                    <Link to={`/games/${item.gameId}`}>
                      <img src={item.image} alt="game_card" />
                    </Link>
                    <button
                      className={`img_icon ${
                        favoritesMap[item.gameId] ? "liked" : "disliked"
                      }`}
                      onClick={() => handleButtonClick(item.gameId)}
                    >
                      <img src={dil} alt="dil" className="heart" />
                      <img src={dil_fill} alt="dil" className="heartfill" />
                    </button>
                  </div>
                  <Link to={`/games/${item.gameId}`}>
                    <h6>{item.details.name}</h6>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default NewGamsAll;
