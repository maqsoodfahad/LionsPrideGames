import React, { useState } from "react";
import dil from "../../../assets/HomeAssets/assets/images/Lobby/dil-border.svg";
import dil_fill from "../../../assets/HomeAssets/assets/images/Lobby/dil-fill.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function CategoriesFilter({
  tabState,
  searchTerm,
  searchResults,
}) {
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

  const { value = [] } = useSelector((state) => state.lobbyGamesResp);
  const [likedCard, setLikedCard] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [searchWord, setSearchWord] = useState("");
  const handleSearchItemChange = (letter, index) => {
    setSearchItem(letter);
    setSearchWord(index);
  };

  const jackpotsData = value.filter((item) => {
    if (tabState) return item[tabState.toLowerCase()];

    return true;
  });

  const handleButtonClick = (cardId) => {
    if (likedCard.includes(cardId)) {
      setLikedCard(likedCard.filter((id) => id !== cardId));
    } else {
      setLikedCard([...likedCard, cardId]);
    }
  };
  const filteredData = value.filter((item) =>
    item.details.name.toLowerCase().startsWith(searchItem.toLowerCase())
  );
  return (
    <div>
      <div className="theme-container">
        {tabState === "A/Z" ? (
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
        <div className="card_wrap_itme vew_all">
          {tabState === "A/Z" ? (
            <>
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
                              likedCard.includes(item._id)
                                ? "liked"
                                : "disliked"
                            }`}
                            onClick={() => handleButtonClick(item._id)}
                          >
                            <img src={dil} alt="dil" className="heart" />
                            <img
                              src={dil_fill}
                              alt="dil"
                              className="heartfill"
                            />
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
            </>
          ) : null}

          {searchTerm ? (
            <>
              {" "}
              {searchResults?.map((item, index) => (
                <div key={`${item.id}-${index}`} className="wrap_item_card ">
                  <div className="item-wrap">
                    <div className="game-card">
                      <div className="img-game">
                        <Link>
                          <img src={item.image} alt="game_card" />
                        </Link>
                      </div>
                      <Link>
                        <h6>{item.details.name}</h6>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}{" "}
            </>
          ) : (
            <>
              {" "}
              {jackpotsData?.map((item, index) => (
                <div key={`${item.id}-${index}`} className="wrap_item_card  ">
                  <div className="item-wrap">
                    <div className="game-card">
                      <div className="img-game">
                        <Link>
                          <img src={item.image} alt="game_card" />
                        </Link>
                      </div>
                      <Link>
                        <h6>{item.details.name}</h6>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}{" "}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
