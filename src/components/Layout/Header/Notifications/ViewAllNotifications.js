import React, { useEffect, useState } from 'react'
import HeaderLobby from '../HeaderLobby' 
import Footer from '../../Footer/Footer'
import { Link } from 'react-router-dom';
import CrossNotifaction from '../../../../assets/HomeAssets/assets/images/cross-notifaction.png';
import checkmark from '../../../../assets/HomeAssets/assets/images/checkmark.png';
import SettingSlid from '../../../../assets/HomeAssets/assets/images/setting_slid.png'; 
import regalo from '../../../../assets/HomeAssets/assets/images/regalo.png';

const ViewAllNotifications = () => {
  const [notificationCount, setNotificationCount] = useState(2);

  const loadMoreNotifications = () => {
    setNotificationCount(notificationCount + 2);
  };

  return (
    <>
    <section className="banner-wrap HeaderLobby-wrap">
        <HeaderLobby />
        <div className="mt-60 pt_60 z-9">
            <div className='view-all-wrap'>
              <div className='Notifications_box'>
                <div className='Notifications_head'>
                  <h4 className='f16'>
                    <Link className="close-notification btn-link" id='close_notification'>
                      <img src={CrossNotifaction} alt='CrossNotifaction'/>
                    </Link>
                    Notifications
                  </h4>
                  <div className='MarkAll'>
                    <h5 className='f16'>
                      <img src={checkmark} alt='checkmark'/> Mark all as read
                    </h5>
                    <img src={SettingSlid} className='SettingSlid' alt='SettingSlid'/>
                  </div>
                </div>
                <div className='Notifications_box_inner mt-28'>
                  <div className='inner_Wrap'>
                    {Array(notificationCount).fill().map((_, index) => (
                      <div className='Notifications_details' key={index}> 
                        <div className='icon_box'>
                          <img src={regalo} alt='regalo'/>
                        </div>
                        <div className='Notifications_details_content'>
                        <p>💰 'Weekend Windfall'! Play any of our roulette games this weekend and get a 50% cashback bonus!  <Link>Claim now</Link></p>
                <p className='time_text'>2 hours ago</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className='btn_sell_Wrap'>
                    <button className='btn_sell load_more' onClick={loadMoreNotifications}>
                      Load more notifications
                    </button>
                  </div>
                </div>
              </div>
            </div>
        </div>

      </section>
      <Footer/>
    </>
  )
}

export default ViewAllNotifications