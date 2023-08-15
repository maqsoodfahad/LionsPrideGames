import { React, useEffect, useState } from "react";
import logo from "./../../../assets/HomeAssets/assets/images/logo.svg";
import LogoWhite from "./../../../assets/HomeAssets/assets/images/logo-white.png";
import Close from "./../../../assets/HomeAssets/assets/images/close.svg";
import menu from "./../../../assets/HomeAssets/assets/images/menu.svg";
import Andrew from "./../../../assets/HomeAssets/assets/images/Lobby/Andrew.png";
import { Link, useLocation } from "react-router-dom";
import Menu from "./../../../assets/HomeAssets/assets/images/menu.svg";
import Edit from "./../../../assets/HomeAssets/assets/images/EditProfile/edit.png";
import Accounts from "./../../../assets/HomeAssets/assets/images/EditProfile/account.png";
import Deposits from "./../../../assets/HomeAssets/assets/images/EditProfile/Deposits.png";
import Gethelp from "./../../../assets/HomeAssets/assets/images/EditProfile/Gethelp.png";
import Logout from "./../../../assets/HomeAssets/assets/images/EditProfile/Logout.png";
import notifaction from "./../../../assets/HomeAssets/assets/images/notifaction.png";
import searchNav from "./../../../assets/HomeAssets/assets/images/searchNav.png";
import coin from "./../../../assets/HomeAssets/assets/images/coin.png";
import circal from "./../../../assets/HomeAssets/assets/images/circal-icon.svg";
import search from "./../../../assets/HomeAssets/assets/images/search.svg";
import crossnotifaction from "./../../../assets/HomeAssets/assets/images/cross-notifaction.png";
import DadoLobby from "./../../../assets/HomeAssets/assets/images/dado_lobby.png";
import pluz from "./../../../assets/HomeAssets/assets/images/pluz.png";
import { useNavigate } from "react-router-dom";
import GetStorage from "../../../services/storage";
import { getUser } from "../../../store/api/userEdit";
import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";
import { getUserSearches } from "../../../store/ui/GamesSearch.slice";
import Notifications from "./Notifications/Notifications";
import { setSearchText } from "../../../store/ui/GamesSearch.slice";

const HeaderLobby = ({}) => {
  const { userSearchesList } = useSelector((state) => state.userGamesSearch);
  const { pathname } = useLocation();
  const closeOutside = useRef(null);
  const closeOutsideMob = useRef(null);
  const [name, setName] = useState("");
  const [menuVisible, setMenuVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { username, image } = useSelector((state) => state?.editUser?.user);
  const { searchText } = useSelector((state) => state.userGamesSearch);
  const toggleProfile = () => {
    setIsVisible(!isVisible);
  };

  const handleOpenClick = () => {
    setMenuVisible(true);
  };
  const handleCloseClick = () => {
    setMenuVisible(false);
  };
  useEffect(() => {}, [searchText]);
  const handleKeyPress = (event) => {
    let checkText = searchText;
    if (event.key === "Enter") {
      if (checkText.length == 0) {
        dispatch(getUserSearches((checkText = "a")));
        navigate(`/search/?searchterm=${(checkText = "a")}`);
      } else {
        dispatch(getUserSearches(searchText));

        navigate(`/search/?searchterm=${searchText}`);
      }
    }
  };

  const handleChange = (event) => {
    dispatch(setSearchText(event.target.value));
  };

  useOutsideAlerter(closeOutside, () => setIsVisible(false));
  useOutsideAlerter(closeOutsideMob, () => setMenuVisible(false));

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

  const [showNotifications, setShowNotifications] = useState(false);
  const [showNotificationsSec, setShowNotificationsSec] = useState(true);

  const handleNotificationsClick = () => {
    setShowNotifications(!showNotifications);
  };

  const handleNotificationsClose = () => {
    setShowNotifications(false);
  };

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const signOutUser = () => {
    try {
      GetStorage.remove("xAuthToken");
      GetStorage.remove("user");

      navigate("/");
    } catch (e) {}
  };
  return (
    <>
      {" "}
      <header className="header-wrap headerLobby">
        <div className="theme-container">
          <div className="lobby_nav">
            <div className="profile-wrap" ref={closeOutside}>
              <button className="btnMenu mr-8" onClick={toggleProfile}>
                {" "}
                <img src={menu} alt="menu" />{" "}
              </button>{" "}
              {isVisible && (
                <div>
                  <div className="user-profile">
                    <div className="user-name">
                      {" "}
                      <img src={image ? image : Andrew} alt="Andrew" />
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
                {" "}
                <img
                  src={LogoWhite}
                  alt="logo-white"
                  className="logo-white"
                />{" "}
                <img src={logo} alt="logo" className="logo-dark" />{" "}
              </Link>
              <div className="right_sider">
                <div className="list_nav">
                  <ul className="d-flex">
                    <Link
                      onClick={(e) => e.preventDefault()}
                      className={`search_wrap_sceond ${
                        isActive ? "active" : ""
                      }`}
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
                          value={searchText}
                          className="search_box"
                          onChange={handleChange}
                          placeholder="Search games"
                          onKeyPress={handleKeyPress}
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
                      className="notifaction_btn"
                      onClick={handleNotificationsClick}
                    >
                      {" "}
                      <span className="iconNav  mr-27">
                        <img src={notifaction} alt="notifaction" />
                      </span>
                    </Link>
                  </ul>
                </div>
                <div className="coinprice mr-16">
                  {" "}
                  <span className="pricebox">
                    <img src={coin} alt="coin" /> 32,262
                  </span>{" "}
                </div>
                <button className="btnGetCoins">
                  <a
                    target="_blank"
                    href="https://www.lionsprideenterainment.com/"
                  >
                    Get Coins
                  </a>
                </button>
              </div>
            </nav>
          </div>
        </div>
        {showNotifications && (
          <Notifications handleNotificationsClose={handleNotificationsClose} />
        )}
      </header>{" "}
      <div className="mobile_menu_wrap " ref={closeOutsideMob}>
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
                      onChange={handleChange}
                      onKeyPress={handleKeyPress}
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
                  <Link to={"/billing-history"}>
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
              <div className="mobile_notiffaction ">
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
          // ref={closeOutsideMob}
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

export default HeaderLobby;

function useOutsideAlerter(ref, cb) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        cb?.();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}
