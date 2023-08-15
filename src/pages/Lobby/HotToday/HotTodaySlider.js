import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import dil from "../../../assets/HomeAssets/assets/images/Lobby/dil-border.svg";
import dil_fill from "../../../assets/HomeAssets/assets/images/Lobby/dil-fill.svg";
import game_card1 from "../../../assets/HomeAssets/assets/images/Lobby/game_card1.png";
import game_card2 from "../../../assets/HomeAssets/assets/images/Lobby/game_card2.png";
import game_card3 from "../../../assets/HomeAssets/assets/images/Lobby/game_card3.png";
import game_card4 from "../../../assets/HomeAssets/assets/images/Lobby/game_card4.png";
import game_card5 from "../../../assets/HomeAssets/assets/images/Lobby/game_card5.png";
import game_card6 from "../../../assets/HomeAssets/assets/images/Lobby/game_card6.png";
import game_card7 from "../../../assets/HomeAssets/assets/images/Lobby/game_card7.png";
import { useDispatch, useSelector } from "react-redux";
import { FavoriteApi, RemoveFavoriteApi } from "../../../store/api/favorite";
import Toast from "../../../components/Toastify/Toastify";

export const HotTodaySlider = ({ value }) => {
  const [likedCard, setLikedCard] = useState([]);
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

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        {filterHotToday.map((item, index) => {
          return (
            <div key={index} className="item-wrap">
              <div
                className={`game-card ${
                  favoritesMap[item.gameId] ? "like" : ""
                }`}
              >
                <div className="img-game">
                  <Link to={`/games/${item.gameId}`}>
                    <img src={item.image} alt="game_card1" />
                  </Link>
                  <button
                    className={`img_icon ${
                      favoritesMap[item.gameId] ? "like" : ""
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
          );
        })}
      </Slider>
    </>
  );
};

export default HotTodaySlider;
