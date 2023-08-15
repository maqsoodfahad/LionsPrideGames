import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Layout/Header/Header";
import Footer from "../../components/Layout/Footer/Footer";
import search from "./../../assets/HomeAssets/assets/images/search.svg";

import { useDispatch, useSelector } from "react-redux";
import { LobbyGamesapi } from "../../store/api/lobbyGames";
import { SpinnerDotted } from "spinners-react";
import { UnAuthLobbyFiltersGames } from "../../store/api/lobbydilters";
import CategoriesFilter from "../Lobby/CategoriesFilter/CategoriesFilter";
const AllGames = () => {
  const { value = [] } = useSelector((state) => state.lobbyGamesResp);

  const filterHotToday = value.filter((item) => item.hotToday);
  const { lobbyGamesFil } = useSelector((state) => state.filterLobbyGames);

  const tabs = ["A/Z", "Popular", "Jackpots", "Slots"];
  const dispatch = useDispatch();
  const [showAllNewGames, setShowAllNewGames] = useState(false);
  const [showAllHotGames, setShowAllHotGames] = useState(false);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    lobbyFetchData();
  }, []);

  const lobbyFetchData = async () => {
    setLoading(true);
    dispatch(
      LobbyGamesapi({
        onSuccess: (res) => {
          setLoading(false);
        },

        onError: (error) => {
          setLoading(false);
        },
      })
    );
  };

  const toggleViewAllNewGames = () => {
    setShowAllNewGames((prevState) => !prevState);
  };

  const toggleViewAllHotGames = () => {
    setShowAllHotGames((prevState) => !prevState);
  };
  const handleSearch = (event) => {
    const searchTerm = event.target.value;

    setSearchTerm(searchTerm);
    const filteredResults = value.filter((item) =>
      item.details.name.toLowerCase().startsWith(searchTerm.toLowerCase())
    );
    setSearchResults(filteredResults);
  };
  const handleButtonClick = (value) => {
    setActiveTab(value === activeTab ? null : value);
    setSearchTerm("");
  };
  const visibleNewGameCards = showAllNewGames ? value : value.slice(0, 5);
  const visibleHotGameCards = showAllHotGames
    ? filterHotToday
    : filterHotToday.slice(0, 5);

  const newGameCardElements = visibleNewGameCards.map((card) => (
    <div key={card._id} className="wrap_item_card">
      <div className="item-wrap">
        <div className="game-card">
          <div className="img-game">
            <Link to="">
              <img src={card.image} alt="game_card" />
            </Link>
          </div>
          <Link to="">
            <h6>{card.details.name}</h6>
          </Link>
        </div>
      </div>
    </div>
  ));

  const hotGameCardElements = visibleHotGameCards.map((card) => (
    <div key={card._id} className="wrap_item_card">
      <div className="item-wrap">
        <div className="game-card">
          <div className="img-game">
            <Link to="">
              <img src={card.image} alt="game_card" />
            </Link>
          </div>
          <Link to="">
            <h6>{card.details.name}</h6>
          </Link>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <section className="banner-wrap HeaderLobby-wrap pb-5">
        <Header />
        <div className="theme-container Editprofile mt-60 z-9 mbtop all-games">
          <h1 className="f36 text_lt">All Games</h1>
          <div className="Search_wrap a_to_z">
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

        {searchTerm || activeTab ? (
          <CategoriesFilter
            value={value}
            tabState={activeTab}
            searchTerm={searchTerm}
            searchResults={searchResults}
          />
        ) : (
          <div className="theme-container">
            <div className="NewGames_card">
              <div className="head_lobby d-flex justify-content-between align-items-center">
                <h1>New Games</h1>
                <Link
                  onClick={toggleViewAllNewGames}
                  className={showAllNewGames ? "view-less" : ""}
                >
                  {showAllNewGames ? "View less" : "View all"}
                </Link>
              </div>
              {loading && value.length === 0 ? (
                <div style={{ margin: "auto", width: "0%" }}>
                  <SpinnerDotted style={{ height: "40", color: "red" }} />
                </div>
              ) : (
                <div className="card_wrap_itme vew_all">
                  {newGameCardElements}
                </div>
              )}
            </div>
            <div className="HotecardElements">
              <div className="head_lobby d-flex justify-content-between align-items-center">
                <h1>Hot Today</h1>
                <Link
                  onClick={toggleViewAllHotGames}
                  className={showAllHotGames ? "view-less" : ""}
                >
                  {showAllHotGames ? "View less" : "View all"}
                </Link>
              </div>
              {loading && value.length === 0 ? (
                <div style={{ margin: "auto", width: "0%" }}>
                  <SpinnerDotted style={{ height: "40", color: "red" }} />
                </div>
              ) : (
                <div className="card_wrap_itme vew_all">
                  {hotGameCardElements}
                </div>
              )}
            </div>
            <div className="theme-container d-block d-sm-none">
              <div className="claim_now">
                <h1 className="f64 mb-24">Welcome to the Lion's Den!</h1>
                <p className="f20">
                  Congratulations on joining Lion's Pride! We're delighted to
                  have you in our pride. Begin your thrilling gaming journey
                  with a roaring Welcome Bonus
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
        )}
      </section>
      <Footer />
    </>
  );
};

export default AllGames;
