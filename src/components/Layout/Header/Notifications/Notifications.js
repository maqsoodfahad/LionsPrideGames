import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CrossNotifaction from '../../../../assets/HomeAssets/assets/images/cross-notifaction.png';
import checkmark from '../../../../assets/HomeAssets/assets/images/checkmark.png';
import SettingSlid from '../../../../assets/HomeAssets/assets/images/setting_slid.png';
import Img from '../../../../assets/HomeAssets/assets/images/img.png';
import regalo from '../../../../assets/HomeAssets/assets/images/regalo.png';
import { useNavigate } from "react-router-dom";
const Notifications = ({handleNotificationsClose}) => {
  const navigate = useNavigate();
  const [showNotifications, setShowNotifications] = useState(false);

  // const handleNotificationsClick = () => {
  //   setShowNotifications(!showNotifications);
  // };

  // const closeNotifications = () => {
  //   setShowNotifications(false);
  // };

  return (
    <>
      <div className="theme-container z-9">
        <div className='Notifications_box'>
          <div className='Notifications_head'>
            <h4 className='f16'><Link className="close-notification btn-link" id='close_notification' onClick={handleNotificationsClose}  ><img src={CrossNotifaction} alt='CrossNotifaction'/></Link>Notifications</h4>
            <div className='MarkAll'>
              <h5 className='f16'><img src={checkmark} alt='checkmark'/> Mark all as read</h5>
              <img src={SettingSlid} className='SettingSlid' alt='SettingSlid'/>
            </div>
          </div>
          <div className='Notifications_box_inner  mt-28'>
            <div className='inner_Wrap scroll_bar'>
            <div className='Notifications_details img'>
              <img src={Img} alt='Img' className='deatil-img'/>
              <div className='Notifications_details_content'>
                <p>🚀 Good news! 'Pirates' Plunder' now available. Exciting treasure awaits! <Link>Play now</Link></p>
                <p className='time_text'>Just now</p>
              </div>
            </div>
            <div className='Notifications_details'>
              <div className='icon_box'>
                <img src={regalo} alt='regalo'/>
              </div>
              <div className='Notifications_details_content'>
                <p>💰 'Weekend Windfall'! Play any of our roulette games this weekend and get a 50% cashback bonus!  <Link>Claim now</Link></p>
                <p className='time_text'>2 hours ago</p>
              </div>
            </div>
            <div className='Notifications_details'>
              <div className='icon_box'>
                <img src={regalo} alt='regalo'/>
              </div>
              <div className='Notifications_details_content'>
                <p>🔥 Refer a friend, earn 20LP! Increase your wallet with our referral bonus. <Link>Learn more</Link></p>
                <p className='time_text'>2 hours ago</p>
              </div>
            </div>
            <div className='Notifications_details'>
              <div className='icon_box'>
                <img src={regalo} alt='regalo'/>
              </div>
              <div className='Notifications_details_content'>
                <p>💵 Successfully received 3500LP!. Ready for a winning streak? <Link>Start playing</Link></p>
                <p className='time_text'>Yesterday at 10:30 PM</p>
              </div>
            </div>
            </div>
            <div className='btn_sell_Wrap'>
              <button className='btn_sell' onClick={() => navigate("/view-notifications")}>See all notifications</button>
            </div>
          </div>
        </div>
      </div> 
    </>
  );
};

export default Notifications;