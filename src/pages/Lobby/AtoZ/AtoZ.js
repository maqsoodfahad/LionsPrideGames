import React, { useState } from "react";
import dil from "../../../assets/HomeAssets/assets/images/Lobby/dil-border.svg";
import dil_fill from "../../../assets/HomeAssets/assets/images/Lobby/dil-fill.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FavoriteApi, RemoveFavoriteApi } from "../../../store/api/favorite";
import Toast from "../../../components/Toastify/Toastify";

export default function AtoZ({ AtoZ, aToZState }) {
  const [likedCard, setLikedCard] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [searchWord, setSearchWord] = useState("");
  const [quickSearchResult, setQuickSearchResult] = useState(AtoZ);
  const dispatch = useDispatch();

  const letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const handleSearchItemChange = (letter, index) => {
    setSearchItem(letter);
    setSearchWord(index);
  };

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

  const filteredData = AtoZ.filter((item) =>
    item.details.name.toLowerCase().startsWith(searchItem.toLowerCase())
  );

  return (
    <div>
      <div className="theme-container">
        {aToZState ? (
          <div className="filter_list">
            <ul>
              {letters.map((letter, index) => (
                <li key={index}>
                  <button
                    className={`${searchWord === index ? "active" : ""}`}
                    onClick={() => handleSearchItemChange(letter, index)}
                  >
                    {letter}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
        <div className="card_wrap_itme vew_all padd-top-56px">
          {filteredData.length === 0 ? (
            <h1 className="no_games_found_h1">Search Not Found</h1>
          ) : (
            filteredData.map((item, index) => (
              <div key={`${item.id}-${index}`} className="wrap_item_card">
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
            ))
          )}
        </div>
      </div>
    </div>
  );
}
