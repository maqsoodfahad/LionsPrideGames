import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import dil from "../../../assets/HomeAssets/assets/images/Lobby/dil-border.svg";
import dil_fill from "../../../assets/HomeAssets/assets/images/Lobby/dil-fill.svg";
// import game_card1 from '../../../assets/HomeAssets/assets/images/Lobby/game_card1.png';
// import game_card2 from '../../../assets/HomeAssets/assets/images/Lobby/game_card2.png';
// import game_card3 from '../../../assets/HomeAssets/assets/images/Lobby/game_card3.png';
// import game_card4 from '../../../assets/HomeAssets/assets/images/Lobby/game_card4.png';
// import game_card5 from '../../../assets/HomeAssets/assets/images/Lobby/game_card5.png';
// import game_card6 from '../../../assets/HomeAssets/assets/images/Lobby/game_card6.png';
// import game_card7 from '../../../assets/HomeAssets/assets/images/Lobby/game_card7.png';
import { useDispatch, useSelector } from "react-redux";
import { RemoveFavoriteApi } from "../../../store/api/favorite";
import Toast from "../../../components/Toastify/Toastify";

export const YourFavoritesSlider = ({ value }) => {
  const dispatch = useDispatch();
  const { gamesMap = {} } = useSelector((state) => state.lobbyGamesResp);

  const handleButtonClick = (gameId) => {
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
  };

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
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
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
      {value.length > 6 ? (
        <>
          {" "}
          <Slider {...settings}>
            {value?.map((gameId) => {
              if (!gamesMap[gameId]) return "";
              return (
                <div key={gameId} className="wrap_item_card">
                  <div className="item-wrap">
                    <div className="game-card">
                      <div className="img-game">
                        <Link to={`/games/${gameId}`}>
                          <img src={gamesMap[gameId].image} alt="game_card" />
                        </Link>
                        <button
                          className={`img_icon liked`}
                          onClick={() => handleButtonClick(gameId)}
                        >
                          <img src={dil} alt="dil" className="heart" />
                          <img src={dil_fill} alt="dil" className="heartfill" />
                        </button>
                      </div>
                      <Link to={`/games/${gameId}`}>
                        <h6>{gamesMap[gameId].details.name}</h6>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>{" "}
        </>
      ) : (
        <>
          {" "}
          <div className="six-games">
            {value?.map((gameId) => {
              if (!gamesMap[gameId]) return "";
              return (
                <div key={gameId} className="wrap_item_card">
                  <div className="item-wrap">
                    <div className="game-card">
                      <div className="img-game">
                        <Link to={`/games/${gameId}`}>
                          <img src={gamesMap[gameId].image} alt="game_card" />
                        </Link>
                        <button
                          className={`img_icon liked`}
                          onClick={() => handleButtonClick(gameId)}
                        >
                          <img src={dil} alt="dil" className="heart" />
                          <img src={dil_fill} alt="dil" className="heartfill" />
                        </button>
                      </div>
                      <Link to={`/games/${gameId}`}>
                        <h6>{gamesMap[gameId].details.name}</h6>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>{" "}
        </>
      )}
    </>
  );
};

export default YourFavoritesSlider;
