import React, { useState } from 'react';
import HeaderLobby from '../../components/Layout/Header/HeaderLobby';
import Footer from '../../components/Layout/Footer/Footer';
import Edit from '../../assets/HomeAssets/assets/images/settings/edit.svg'
import Favorites from '../../assets/HomeAssets/assets/images/settings/favorites.svg'
import Notification from '../../assets/HomeAssets/assets/images/settings/notification.svg'
import EmailAlert from '../../assets/HomeAssets/assets/images/settings/EmailAlert.svg'
import ReferFriendimg from '../../assets/HomeAssets/assets/images/settings/ReferFriend.svg'


import EditProfile from './EditProfile/EditProfile';
import FavoritesTabs from './Favorites/FavoritesTabs';
import Notifications from './Notifications/Notifications';
import EmailAlerts from './EmailAlerts/EmailAlerts';
import ReferFriend from './ReferFriend/ReferFriend';


const SettingsHome = () => {
  const [activeTab, setActiveTab] = useState('Edit-Profile');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <section className="banner-wrap setting-wrap-main">
        <div className="theme-container pt-60 z-9">
          <HeaderLobby />
          <div className='theme-container tabs-menu Tabs-wrap mt-60 scrollable-container'>
          <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${activeTab === 'Edit-Profile' ? 'active' : ''}`}
                  id="Edit-Profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#Edit-Profile"
                  type="button"
                  role="tab"
                  aria-controls="Edit-Profile"
                  aria-selected={activeTab === 'Edit-Profile'}
                  onClick={() => handleTabClick('Edit-Profile')}
                >
                  <img src={Edit} alt='Edit'/>Edit Profile
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${activeTab === 'Favorites' ? 'active' : ''}`}
                  id="Favorites-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#Favorites"
                  type="button"
                  role="tab"
                  aria-controls="Favorites"
                  aria-selected={activeTab === 'Favorites'}
                  onClick={() => handleTabClick('Favorites')}
                >
                  <img src={Favorites} alt='Favorites'/>Favorites
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${activeTab === 'Notifications' ? 'active' : ''}`}
                  id="Notifications-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#Notifications"
                  type="button"
                  role="tab"
                  aria-controls="Notifications"
                  aria-selected={activeTab === 'Notifications'}
                  onClick={() => handleTabClick('Notifications')}
                >
                  <img src={Notification} alt='Notification'/>Notifications
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${activeTab === 'Email-alerts' ? 'active' : ''}`}
                  id="Email-alerts-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#Email-alerts"
                  type="button"
                  role="tab"
                  aria-controls="Email-alerts"
                  aria-selected={activeTab === 'Email-alerts'}
                  onClick={() => handleTabClick('Email-alerts')}
                >
                   <img src={EmailAlert} alt='EmailAlert'/>Email alerts
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${activeTab === 'Refer-friend' ? 'active' : ''}`}
                  id="Refer-friend-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#Refer-friend"
                  type="button"
                  role="tab"
                  aria-controls="Refer-friend"
                  aria-selected={activeTab === 'Refer-friend'}
                  onClick={() => handleTabClick('Refer-friend')}
                >
                  <img src={ReferFriendimg} alt='ReferFriendimg'/> Refer a friend
                </button>
              </li>
            </ul>
          </div>
          <div className="theme-container Tabs-wrap">  
            <div className="setting-wrap">
              <div className="tab-content" id="myTabContent">
                <div
                  className={`tab-pane fade show ${activeTab === 'Edit-Profile' ? 'active' : ''}`}
                  id="Edit-Profile"
                  role="tabpanel"
                  aria-labelledby="Edit-Profile-tab"
                >
                <div className='EditProfile-wrap'>
                  <EditProfile />
                </div>
                </div>
                <div
                  className={`tab-pane fade show ${activeTab === 'Favorites' ? 'active' : ''}`}
                  id="Favorites"
                  role="tabpanel"
                  aria-labelledby="Favorites-tab"
                >
                  <div className='FavoritesTabs-wrap vew_all'>
                    <FavoritesTabs />
                  </div>
                </div>
                <div
                  className={`tab-pane fade show ${activeTab === 'Notifications' ? 'active' : ''}`}
                  id="Notifications"
                  role="tabpanel"
                  aria-labelledby="Notifications-tab"
                >
                   <div className='Notifications-wrap-setting'>
                       <Notifications />
                   </div>
                </div>
                <div
                  className={`tab-pane fade show ${activeTab === 'Email-alerts' ? 'active' : ''}`}
                  id="Email-alerts"
                  role="tabpanel"
                  aria-labelledby="Email-alerts-tab"
                > 
                  <div className='EmailAlerts_wrap'>
                    <EmailAlerts />
                  </div>
                  </div> 
                <div
                  className={`tab-pane fade show ${activeTab === 'Refer-friend' ? 'active' : ''}`}
                  id="Refer-friend"
                  role="tabpanel"
                  aria-labelledby="Refer-friend-tab"
                >
                  <div className='ReferFriend_wrap'>
                    <ReferFriend />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default SettingsHome;
