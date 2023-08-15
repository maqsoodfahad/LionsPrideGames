import React from 'react';

const notificationsData = [
  {
    title: 'Daily/Weekly Bonus',
    description: 'Get notified about daily or weekly bonuses and special promotions.'
  },
  {
    title: 'Game Progress',
    description: 'Stay updated on your progress in games and unlocked achievements.'
  },
  {
    title: 'New Game Alerts',
    description: 'Be the first to know when new games are available on the platform.'
  },
  {
    title: 'Account Balance Low',
    description: 'Get alerts when your account balance is running low.'
  },
  {
    title: 'Live Events',
    description: 'Stay informed about live events, like poker tournaments, you can participate in.'
  },
  {
    title: 'Tournament Results',
    description: 'Get notified about the results of the tournaments you\'ve participated in.'
  },
  {
    title: 'Friend Activity',
    description: 'Receive alerts when a friend wins a big prize or achieves a significant milestone.'
  },
  {
    title: 'Personalized Recommendations',
    description: 'Receive notifications based on your gaming preferences and behavior, recommending new games that might interest you.'
  },
  {
    title: 'Loyalty Program Updates',
    description: 'Stay updated on your status in our loyalty VIP program.'
  },
  {
    title: 'Community Activity',
    description: 'Get notified about relevant community activities, like new messages in discussion forums or comments on blog posts.'
  }
];

const Notifications = () => {
  return (
    <>
    <div className='Notifications_switch_wrap'> 
      {notificationsData.map((notification, index) => (
        <div className='switch_wrap_main' key={index}>
          <div className='switch-content'>
            <h1 className='f20 text-white mb-8'>{notification.title}</h1>
            <p className='f14'>{notification.description}</p>
          </div>
          <div className='switch-wrap'>
            <label className='switch'>
              <input type='checkbox' />
              <span className='slider'></span>
            </label>
          </div>
        </div>
      ))}
      </div>
    </>

  );
};

export default Notifications;
