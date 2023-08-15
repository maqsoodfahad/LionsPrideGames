import React, { useEffect, useState } from "react";
import LobbyHeader from "../../components/Layout/Header/HeaderLobby";
import Footer from "../../components/Layout/Footer/Footer";
import LobbyBanner from "./../../assets/HomeAssets/assets/images/Lobby/lobby_banner.png";
import search from "./../../assets/HomeAssets/assets/images/search.svg";
import NewGames from "./NewGames/NewGames";
import HotToday from "./HotToday/HotToday";
import YourFavorites from "./YourFavorites/YourFavorites";
import { useDispatch, useSelector } from "react-redux";
import { LobbyGamesapi } from "../../store/api/lobbyGames";
import { getFavoriteApi } from "../../store/api/favorite";
import { LobbyFiltersGames } from "../../store/api/lobbydilters";
import Papular from "./Popular/Papular";
import Jackpot from "./Jackpot/Jackpot";
import Slots from "./Slots/Slots";
import Favorites from "./Favourites/Favourites";
import QuickSearchLobby from "./QuickSearchLobby/QuickSearchLobby";
import AtoZ from "./AtoZ/AtoZ";
import { useNavigate } from "react-router-dom";
const Lobby = () => {
  const tabs = ["A/Z", "Popular", "Jackpot", "Favorites", "Slots"];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const { lobbyGamesFil } = useSelector((state) => state.filterLobbyGames);
  const { value = [] } = useSelector((state) => state.lobbyGamesResp);
  useEffect(() => {
    lobbyFetchData();
    dispatch(LobbyFiltersGames({}));
  }, []);

  useEffect(() => {
    setLoading(true);

    dispatch(
      getFavoriteApi({
        onSuccess: (res) => {
          setLoading(false);
        },
      })
    );
  }, [dispatch]);

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
    const filteredResults = lobbyGamesFil.filter((item) =>
      item.details.name.toLowerCase().startsWith(searchTerm.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  const handleButtonClick = (value) => {
    setActiveTab(value === activeTab ? null : value);
    setSearchTerm("");
  };

  const lobbyFetchData = async () => {
    setLoading(true);
    dispatch(
      LobbyGamesapi({
        onSuccess: (res) => {
          setLoading(false);
        },
        onError: (error) => {
          console.clear();
          setLoading(false);
        },
      })
    );
  };

  const getRandomIndex = () => {
    const randomIndex = Math.floor(Math.random() * value.length);
    const item = value[randomIndex];
    navigate(`/games/${item.gameId}`);
  };
  return (
    <>
      <section className="banner-wrap lobby-bg HeaderLobby-wrap dsf">
        <LobbyHeader />
        <div className="theme-container mt-60 z-9">
          <div className="LobbyBanner-wrap" style={{ position: "relative" }}>
            <img
              src={LobbyBanner}
              alt="GamsPlay"
              className="img-fluid LobbyBanner"
            />

            <div className="lobby-banner-winning">
              <h1>Dive into our New Games</h1>
              <p>
                Ignite Your Winning Streak!
                <br />
                Click to Play a Surprise Game and Win Instantly{" "}
              </p>
              <button
                type="button"
                className="themebtn-red btn-w288 mt-24 mx-auto clr-btn-brown"
                onClick={getRandomIndex}
              >
                Try your luck now
              </button>
            </div>
          </div>
          <div className="Search_wrap">
            <div className="tabs_button">
              <ul>
                {tabs.map((tab) => (
                  <li key={tab}>
                    <button
                      onClick={() => handleButtonClick(tab)}
                      type="button"
                      className={`btn_tabs ${
                        !searchTerm && activeTab === tab ? "active" : ""
                      }`}
                    >
                      {tab}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="search_wrap">
              <div className="form-group icon_wrap">
                <input
                  onChange={handleSearch}
                  type="text"
                  className="form-control"
                  placeholder="Quick search"
                />
                <div className="icon">
                  <img src={search} alt="search" className="search" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="main_lobby">
        <div className="inner">
          {searchTerm ? (
            <QuickSearchLobby quickSearch={searchResults} />
          ) : activeTab === "A/Z" ? (
            <AtoZ AtoZ={lobbyGamesFil} aToZState={activeTab === "A/Z"} />
          ) : activeTab === "Popular" ? (
            <Papular popularGames={lobbyGamesFil} />
          ) : activeTab === "Jackpot" ? (
            <Jackpot jackpotGames={lobbyGamesFil} />
          ) : activeTab === "Favorites" ? (
            <Favorites />
          ) : activeTab === "Slots" ? (
            <Slots slotsGames={lobbyGamesFil} />
          ) : (
            <>
              <YourFavorites loading={loading} />
              <NewGames loading={loading} />
              <HotToday loading={loading} />
            </>
          )}

          <div className="theme-container">
            <div className="claim_now">
              <h1 className="f64 mb-24">Welcome to the Lion's Den!</h1>
              <p className="f20">
                Congratulations on joining Lion's Pride! We're delighted to have
                you in our pride. Begin your thrilling gaming journey with a
                roaring Welcome Bonus
              </p>
              <button
                type="button"
                className="themebtn-red btn-w288 mt-24 mx-auto"
              >
                Claim now
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Lobby;
