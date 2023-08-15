import { React, useState } from "react";
import logo from "./../../../assets/HomeAssets/assets/images/logo.svg";
import LogoWhite from "./../../../assets/HomeAssets/assets/images/logo-white.png";
import Menu from "./../../../assets/HomeAssets/assets/images/menu.svg";
import Close from "./../../../assets/HomeAssets/assets/images/close.svg";
import search from "./../../../assets/HomeAssets/assets/images/search.svg";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
const SatelliteHeader = () => {
  const navigate = useNavigate();

  const [showSearchInput, setShowSearchInput] = useState(false);

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

  return (
    <>
      <header className="header-wrap">
        <div className="theme-container">
          <nav
            className="navbar navbar-expand navbar-light bgdark br-16"
            id="navbar_top"
          >
            <Link className="navbar-brand mr-27" href="/home">
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
                  <Link className="nav-link f24 text-white" to="/games">
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
                <button
                  className="themebtn-dark"
                  type="button"
                  onClick={() => navigate("/login")}
                >
                  Sign in
                </button>
                <button
                  className="themebtn-red ml-16"
                  type="button"
                  onClick={() => navigate("/signup")}
                >
                  Join now
                </button>
                {/* search-wrap */}
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
      </header>

      <div className="mobile_menu_wrap">
        <div
          className="menu_list mobile-menu"
          style={{ display: menuVisible ? "block" : "none" }}
        >
          <ul className="footer-list">
            <li>
              <Link to="/games">Games</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact"> Contact</Link>
            </li>
          </ul>
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

export default SatelliteHeader;
