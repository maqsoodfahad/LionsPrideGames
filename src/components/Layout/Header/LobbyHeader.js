import { React, useEffect, useRef, useState } from "react";
import logo from "./../../../assets/HomeAssets/assets/images/logo.svg";
import LogoWhite from "./../../../assets/HomeAssets/assets/images/logo-white.png";
import Close from "./../../../assets/HomeAssets/assets/images/close.svg";
import menu from "./../../../assets/HomeAssets/assets/images/menu.svg";
import Andrew from "./../../../assets/HomeAssets/assets/images/Lobby/Andrew.png";
import { Link } from "react-router-dom";
import Menu from "./../../../assets/HomeAssets/assets/images/menu.svg";
import Edit from "./../../../assets/HomeAssets/assets/images/EditProfile/edit.png";
import Accounts from "./../../../assets/HomeAssets/assets/images/EditProfile/account.png";
import Deposits from "./../../../assets/HomeAssets/assets/images/EditProfile/Deposits.png";
import Gethelp from "./../../../assets/HomeAssets/assets/images/EditProfile/Gethelp.png";
import Logout from "./../../../assets/HomeAssets/assets/images/EditProfile/Logout.png";
import notifaction from "./../../../assets/HomeAssets/assets/images/notifaction.png";
import searchNav from "./../../../assets/HomeAssets/assets/images/searchNav.png";
import search from "./../../../assets/HomeAssets/assets/images/search.svg";
import coin from "./../../../assets/HomeAssets/assets/images/coin.png";
import circal from "./../../../assets/HomeAssets/assets/images/circal-icon.svg";
import { useNavigate } from "react-router-dom";
import GetStorage from "../../../services/storage";
import { getUser } from "../../../store/api/userEdit";
import { useSelector, useDispatch } from "react-redux";
import Notifications from "./Notifications/Notifications";
import crossnotifaction from "./../../../assets/HomeAssets/assets/images/cross-notifaction.png";
import DadoLobby from "./../../../assets/HomeAssets/assets/images/dado_lobby.png";
import pluz from "./../../../assets/HomeAssets/assets/images/pluz.png";

const LobbyHeader = () => {
  const [isActive, setIsActive] = useState(false);
  const handleSearchClickOne = () => {
    setIsActive(true);
  };
  const handleCloseClickOne = () => {
    setIsActive(false);
  };

  const [isPayActive, setIsPayActive] = useState(false);

  const handleNotificationClick = () => {
    setIsPayActive(!isPayActive);
  };

  let user2 = localStorage.getItem("user");

  const [showSearchInput, setShowSearchInput] = useState(false);
  const [username, setusername] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getUser({
        onSuccess: (res) => {
          setusername(res.data.data.username);
        },
      })
    );
  }, [dispatch]);

  const navigate = useNavigate();

  const [isVisible, setIsVisible] = useState(false);

  const [menuVisible, setMenuVisible] = useState(false);

  const handleSearchButtonClick = () => {
    setShowSearchInput(!showSearchInput);
  };

  const handleOpenClick = () => {
    setMenuVisible(true);
  };
  const handleCloseClick = () => {
    setMenuVisible(false);
  };

  const toggleProfile = () => {
    setIsVisible(!isVisible);
  };

  const token = GetStorage.get("xAuthToken");
  const user = GetStorage.get("user");
  const signOutUser = () => {
    try {
      GetStorage.remove("xAuthToken");
      GetStorage.remove("user");

      navigate("/");
    } catch (e) {}
  };

  return (
    <>
      {" -"}
      <header className="header-wrap  lobbyHeader">
        <div className="theme-container">
          <div className="lobby_nav">
            <div className="profile-wrap">
              <button className="btnMenu mr-8" onClick={toggleProfile}>
                {" "}
                <img src={menu} alt="menu" />{" "}
              </button>{" "}
              {isVisible && (
                <div>
                  <div className="user-profile">
                    <div className="user-name">
                      {" "}
                      <img src={Andrew} alt="Andrew" />
                      <div className="user-content">
                        <h6 className="f16">{username}</h6>
                        <Link className="f12">Diamond user</Link>
                      </div>
                    </div>
                    <ul>
                      <li>
                        <Link to="/lobby">
                          {" "}
                          <img src={DadoLobby} alt="DadoLobby" />
                          Lobby{" "}
                        </Link>
                      </li>
                      <li>
                        <Link to="/settings">
                          <img src={Accounts} alt="Edit" />
                          Accounts
                        </Link>
                      </li>

                      <li>
                        <Link to="/billing-history">
                          <img src={Deposits} alt="Deposits" />
                          Deposits
                        </Link>
                      </li>
                      <li>
                        <Link>
                          <img src={Gethelp} alt="Gethelp" />
                          Get help
                        </Link>
                      </li>
                      <li onClick={() => signOutUser()}>
                        <Link>
                          <img src={Logout} alt="Logout" />
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              )}{" "}
            </div>
            <nav
              className="navbar navbar-expand navbar-light bgdark br-16 w-100"
              id="navbar_top"
            >
              <Link className="navbar-brand mr-27" to="/lobby">
                <img src={LogoWhite} alt="logo-white" className="logo-white" />
                <img src={logo} alt="logo" className="logo-dark" />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto   mb-lg-0 mb-none">
                  <li className="nav-item">
                    <Link className="nav-link f24 text-white" to="/lobby">
                      Games
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link f24 text-white" to="/about">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link f24 text-white" to="/contact">
                      Contact
                    </Link>
                  </li>
                </ul>
                <form className="d-flex  align-items-center ml_auto  ">
                  <div className="right_sider">
                    <div className="coinprice mr-16">
                      {" "}
                      <span className="pricebox">
                        <img src={coin} alt="coin" /> 32,262
                      </span>{" "}
                    </div>
                    <button className="btnGetCoins" type="button">
                      <a
                        target="_blank"
                        href="https://www.lionsprideenterainment.com/"
                      >
                        Get Coins
                      </a>
                    </button>
                  </div>

                  <div className="search-wrap">
                    {showSearchInput && (
                      <input
                        id="search-field"
                        className="search-input"
                        type="text"
                        name="s"
                        defaultValue=""
                        aria-required="false"
                        autoComplete="off"
                        placeholder="Search games, bonuses..."
                      />
                    )}
                    <button
                      type="button"
                      className="search_btn"
                      onClick={handleSearchButtonClick}
                    >
                      <span className="screen-reader-text" />
                      <img src={search} alt="search" />
                    </button>
                  </div>
                </form>
              </div>
            </nav>
          </div>
        </div>
      </header>{" "}
      <div className="mobile_menu_wrap ">
        <div
          className="menu_list profile_wrap mobile-menu second_menu"
          style={{ display: menuVisible ? "block" : "none" }}
        >
          <div className="profile-mabile">
            <div className="list_nav">
              <ul className="d-flex">
                <Link
                  className={`search_wrap_sceond ${isActive ? "active" : ""}`}
                >
                  <span
                    className="iconNav searchNav mr-16"
                    onClick={handleSearchClickOne}
                  >
                    <img src={searchNav} alt="searchNav" />
                  </span>
                  <div className="form_search">
                    <input
                      type="text"
                      className="search_box"
                      placeholder="Search games"
                    />
                    <img src={search} className="icon_search" />
                    <Link
                      className="close_search"
                      onClick={handleCloseClickOne}
                    >
                      <img src={crossnotifaction} className="icon_search" />
                    </Link>
                  </div>
                </Link>
                <Link
                  className="notifaction_btn_mb"
                  onClick={handleNotificationClick}
                >
                  <span className="iconNav   ">
                    <img src={notifaction} alt="notifaction" />
                  </span>
                </Link>
              </ul>
            </div>
            <div className="profile_header">
              <div className="user-name">
                {" "}
                <img src={Andrew} alt="Andrew" />
                <div className="user-content">
                  <h6 className="f16">@abacchio</h6>
                  <Link className="f12 mb-0">Diamond user</Link>
                </div>
              </div>
              <div className="coinprice  ">
                <span className="pricebox">
                  <img src={coin} alt="coin" /> 32,262{" "}
                  <img src={pluz} alt="pluz" className="pluz_icon" />
                </span>
              </div>
            </div>
            <div className={`user-profile ${isPayActive ? "active" : ""}`}>
              <ul>
                <li>
                  <Link to="/lobby">
                    {" "}
                    <img src={DadoLobby} alt="DadoLobby" />
                    Lobby{" "}
                    <span className="circal">
                      <img src={circal} alt="circal" />
                    </span>{" "}
                  </Link>
                </li>
                <li>
                  <Link to="/settings">
                    {" "}
                    <img src={Accounts} alt="Edit" />
                    Settings{" "}
                    <span className="circal">
                      <img src={circal} alt="circal" />
                    </span>{" "}
                  </Link>
                </li>
                <li>
                  <Link>
                    <img src={Edit} alt="Accounts" />
                    Accounts{" "}
                    <span className="circal">
                      <img src={circal} alt="circal" />
                    </span>{" "}
                  </Link>
                </li>
                <li>
                  <Link>
                    <img src={Deposits} alt="Deposits" />
                    Deposits{" "}
                    <span className="circal">
                      <img src={circal} alt="circal" />
                    </span>{" "}
                  </Link>
                </li>
                <li>
                  <Link>
                    <img src={Gethelp} alt="Gethelp" />
                    Get help{" "}
                    <span className="circal">
                      <img src={circal} alt="circal" />
                    </span>{" "}
                  </Link>
                </li>
                <li onClick={() => signOutUser()}>
                  <Link>
                    <img src={Logout} alt="Logout" />
                    Logout{" "}
                    <span className="circal">
                      <img src={circal} alt="circal" />
                    </span>{" "}
                  </Link>
                </li>
              </ul>
              <div className="mobile_notiffaction">
                <Notifications />
              </div>
            </div>
          </div>
        </div>
        <button
          className="BtnOpen"
          onClick={handleOpenClick}
          style={{ display: menuVisible ? "none" : "inline" }}
        >
          <img src={Menu} alt="open" />
          <span>Menu</span>
        </button>
        <button
          className="BtnClose"
          onClick={handleCloseClick}
          style={{ display: menuVisible ? "inline-block" : "none" }}
        >
          <img src={Close} alt="close" />
        </button>
      </div>
    </>
  );
};

export default LobbyHeader;
