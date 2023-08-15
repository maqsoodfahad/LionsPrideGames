import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from "../../components/Layout/Header/Header";
import Footer from '../../components/Layout/Footer/Footer';
import search from './../../assets/HomeAssets/assets/images/search.svg'; 
import game_card1 from '../../assets/HomeAssets/assets/images/Lobby/game_card1.png';
import game_card2 from '../../assets/HomeAssets/assets/images/Lobby/game_card2.png';
import game_card3 from '../../assets/HomeAssets/assets/images/Lobby/game_card3.png';
import game_card4 from '../../assets/HomeAssets/assets/images/Lobby/game_card4.png';
import game_card5 from '../../assets/HomeAssets/assets/images/Lobby/game_card5.png';

const AllGamesFilter = () => { 

  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    const [gameCards, setGameCards] = useState([
        { id: 1,  image: game_card1, title: 'Tropical Tiki' },
        { id: 2,  image: game_card2, title: 'Mochimon' },
        { id: 3,  image: game_card3, title: 'Hot Pepper!' },
        { id: 4,  image: game_card4, title: 'Gates of Olympus' },
        { id: 5,  image: game_card5, title: 'Fire in the Hole ' },
        { id: 6,  image: game_card1, title: 'Tropical Tiki' },
        { id: 7,  image: game_card2, title: 'Mochimon' },
        { id: 8,  image: game_card3, title: 'Hot Pepper!' },
        { id: 9,  image: game_card4, title: 'Gates of Olympus' },
        { id: 10,  image: game_card5, title: 'Fire in the Hole ' },
        { id: 11,  image: game_card5, title: 'Fire in the Hole ' },
        { id: 12,  image: game_card1, title: 'Tropical Tiki' },
        { id: 13,  image: game_card2, title: 'Mochimon' },
        { id: 14,  image: game_card3, title: 'Hot Pepper!' },
        { id: 15,  image: game_card4, title: 'Gates of Olympus' },

        // ...add more cards if needed
      ]);

      const newGameCardElements = gameCards.map((card) => (
        <div key={card.id} className='wrap_item_card'>
          <div className='item-wrap'>
            <div className='game-card'>
              <div className='img-game'>
                <Link to='/games'>
                  <img src={card.image} alt='game_card' />
                </Link>
              </div>
              <Link to='/games'>
                <h6>{card.title}</h6>
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
          <h1 className='f36 text_lt'>All Games</h1>
          <div className="Search_wrap a_to_z">
            <div className="tabs_button">
              <ul>
                <li>
                  <button type="button" className="btn_tabs">
                    A/Z
                  </button>
                </li>
                <li>
                  <button type="button" className="btn_tabs">
                    Jackpot
                  </button>
                </li>
                <li>
                  <button type="button" className="btn_tabs">
                    Favorites
                  </button>
                </li>
                <li>
                  <button type="button" className="btn_tabs">
                    Slots
                  </button>
                </li>
              </ul>
            </div> 
            <div className="search_wrap">
              <div className="form-group icon_wrap">
                <input
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

          {/* filter_list start */}
          <div className='filter_list mt-24'>
              <ul>
                {letters.map((letter, index) => (
                  <li key={index}>
                    <Link>{letter}</Link>
                  </li>
                ))}
              </ul>
            </div>
             {/* filter_list end */}
        </div>
        <div className='theme-container mt-70'>
          <div className='NewGames_card'> 
            <div className='card_wrap_itme vew_all'>{newGameCardElements}</div>
          </div> 
        </div>
        <div className="theme-container d-block d-sm-none">
            <div className="claim_now">
              <h1 className="f64 mb-24">Welcome to the Lion's Den!</h1>
              <p className="f20">
              Congratulations on joining Lion's Pride! We're delighted to have you in our pride. Begin your thrilling gaming journey with a roaring Welcome Bonus
              </p>
              <button type="button" className="themebtn-red btn-w288 mt-24 mx-auto">
                Claim now
              </button>
            </div>
          </div>
      </section>
      <Footer />
    </>
  )
}

export default AllGamesFilter