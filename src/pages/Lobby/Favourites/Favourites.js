import React, { useState } from "react";
import dil from "../../../assets/HomeAssets/assets/images/Lobby/dil-border.svg";
import dil_fill from "../../../assets/HomeAssets/assets/images/Lobby/dil-fill.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { RemoveFavoriteApi } from "../../../store/api/favorite";
import { SpinnerDotted } from "spinners-react";
import Toast from "../../../components/Toastify/Toastify";
export default function Favorites({}) {
  const [likedCard, setLikedCard] = useState([]);
  const { gamesMap = {} } = useSelector((state) => state.lobbyGamesResp);
  const [loading] = useState(false);
  const dispatch = useDispatch();

  const { value = [] } = useSelector((state) => state.favoritesGamesResp);

  const favouriteGames = value;
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
  // const handleButtonClick = (cardId) => {
  //   if (likedCard.includes(cardId)) {
  //     // Remove the cardId from the likedCard array if it's already present
  //     setLikedCard(likedCard.filter((id) => id !== cardId));
  //   } else {
  //     // Add the cardId to the likedCard array if it's not present
  //     setLikedCard([...likedCard, cardId]);
  //   }
  // };
  return (
    <div>
      <div className="theme-container">
        <div className="card_wrap_itme vew_all padd-top-56px ">
          {loading ? (
            <SpinnerDotted style={{ height: "40", color: "red" }} />
          ) : (
            <>
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
                            className={"img_icon liked"}
                            onClick={() => handleButtonClick(gameId)}
                          >
                            <img src={dil} alt="dil" className="heart" />
                            <img
                              src={dil_fill}
                              alt="dil"
                              className="heartfill"
                            />
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
            </>
          )}
          {/* {value?.map((item,index) => (
            
             
            <div key={`${item.id}-${index}`} className='wrap_item_card'>
              <div className='item-wrap'>
                <div className='game-card'>
                  <div className='img-game'>
                    <Link to={`/games/${item.favoritesgames.gameId}`}>
                      <img src={item.favoritesgames.image} alt='game_card' />
                    </Link>
                    <button
                      className={`img_icon ${likedCard.includes(item._id) ? 'liked' : 'disliked'
                        }`}
                      onClick={() => handleButtonClick(item._id)}
                    >
                      <img src={dil} alt='dil' className='heart' />
                      <img src={dil_fill} alt='dil' className='heartfill' />
                    </button>
                  </div>
                  <Link to={`/games/${item.favoritesgames.gameId}`}>
                    <h6>{item.favoritesgames.details.name}</h6>

                  </Link>
                </div>
              </div>
            </div>

        
          
        ))} */}
        </div>
      </div>
    </div>
  );
}
