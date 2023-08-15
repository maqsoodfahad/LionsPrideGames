import React from 'react'
const EmailAlertsData = [
  {
    title: 'Promotional Emails',
    description: 'Receive emails with promotions, bonuses, and special offers.'
  },
  {
    title: 'Promotional Emails',
    description: 'Receive emails with promotions, bonuses, and special offers.'
  },
  {
    title: 'Newsletter',
    description: 'Stay updated with the latest news, games, and promotions from the casino.'
  },
  {
    title: 'Account Activity',
    description: 'Receive a weekly or monthly summary of your account activity.'
  },
  {
    title: 'Win Confirmation',
    description: 'Get an email confirmation when you win a big prize.'
  },
  {
    title: 'Live Events',
    description: 'Stay informed about live events, like poker tournaments, you can participate in.'
  },
  {
    title: 'Survey Invitations',
    description: 'Receive invitations to participate in user satisfaction surveys or new game tests.'
  },
  {
    title: 'Game Downtime Alerts',
    description: 'Get alerted when a preferred game is under maintenance or unavailable.'
  },
  {
    title: 'Security Alerts',
    description: 'Receive alerts related to your account security, like login attempts from new devices.'
  },
  {
    title: 'Policy Updates',
    description: 'Get informed about changes to the casinos policies, like Terms of Service or Privacy Policy.'
  }
];

const EmailAlerts = () => {
  return (
    <>
    <div className='Notifications_switch_wrap'> 
      {EmailAlertsData.map((EmailAlerts, index) => (
        <div className='switch_wrap_main' key={index}>
          <div className='switch-content'>
            <h1 className='f20 text-white mb-8'>{EmailAlerts.title}</h1>
            <p className='f14'>{EmailAlerts.description}</p>
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
  )
}

export default EmailAlerts
