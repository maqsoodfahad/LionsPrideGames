import React, { useState, useEffect, useMemo } from "react";
import dil from "../../assets/HomeAssets/assets/images/Lobby/dil-border.svg";
import dil_fill from "../../assets/HomeAssets/assets/images/Lobby/dil-fill.svg";
import game_card1 from "../../assets/HomeAssets/assets/images/Lobby/game_card1.png";
import cross from "../../assets/HomeAssets/assets/images/cross-notifaction.png";
import { Link, useSearchParams } from "react-router-dom";
import HeaderLobby from "../../components/Layout/Header/HeaderLobby";
import Footer from "../../components/Layout/Footer/Footer";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { LobbyFiltersGames } from "../../store/api/lobbydilters";
import { useDispatch } from "react-redux";
import storage from "../../services/storage";
import { useNavigate } from "react-router-dom";

import {
  deleteRresentSearch,
  getUserSearches,
  setSearchText,
} from "../../store/ui/GamesSearch.slice";
import Header from "../../components/Layout/Header/Header";
import { LobbyGamesapi } from "../../store/api/lobbyGames";
import { FavoriteApi, RemoveFavoriteApi } from "../../store/api/favorite";
import Toast from "../../components/Toastify/Toastify";

const SearchResults = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const searchterm = searchParams.get("searchterm") || "";
  const { searched, searchText } = useSelector(
    (state) => state.userGamesSearch
  );
  const { lobbyGamesFil } = useSelector((state) => state.filterLobbyGames);
  const { value = [] } = useSelector((state) => state.lobbyGamesResp);

  const { userSearchesList } = useSelector((state) => state.userGamesSearch);
  const [likedCard, setLikedCard] = useState([]);
  const filteredResults = useMemo(() => {
    return value.filter((item) =>
      item.details.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [searched, value]);

  // useEffect(() => {
  //   dispatch(LobbyFiltersGames({}));
  // }, []);

  useEffect(() => {
    dispatch(setSearchText(searchterm));
    dispatch(getUserSearches(searchterm));
  }, [searchterm]);
  useEffect(() => {
    lobbyFetchData();
  }, []);

  const lobbyFetchData = async () => {
    dispatch(
      LobbyGamesapi({
        onSuccess: (res) => {},
      })
    );
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

  const handleUpdateValue = (value) => {
    dispatch(setSearchText(value));
    dispatch(getUserSearches(value));
    navigate(`/search/?searchterm=${value}`);
  };
  const handleDeleteRecent = (e, value) => {
    e.stopPropagation();
    dispatch(deleteRresentSearch(value));
  };
  const token = storage.get("xAuthToken");
  return (
    <>
      <section className="banner-wrap  HeaderLobby-wrap lobby_page">
        {token ? <HeaderLobby /> : <Header />}

        <div className="theme-container mt-60 z-9">
          <div className="search_result">
            <div className="item_text">
              <h1 className="f20">
                <span>{filteredResults.length}</span> result for
              </h1>
            </div>
            <div className="item_neme_button">
              {userSearchesList?.map((item, key) => (
                <button
                  onClick={() => handleUpdateValue(item)}
                  key={key}
                  className="btn_select"
                >
                  {" "}
                  {item}
                  <img
                    src={cross}
                    onClick={(e) => handleDeleteRecent(e, item)}
                    alt="cross"
                  />
                </button>
              ))}
            </div>
          </div>
          <div className="card_wrap_itme vew_all">
            {filteredResults?.map((item, index) => (
              <div key={`${item.id}-${index}`} className="wrap_item_card">
                <div className="item-wrap">
                  <div className="game-card">
                    {token ? (
                      <>
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
                      </>
                    ) : (
                      <>
                        <div className="img-game">
                          <Link>
                            <img src={item.image} alt="game_card" />
                          </Link>
                        </div>
                        <Link>
                          <h6>{item.details.name}</h6>
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SearchResults;
