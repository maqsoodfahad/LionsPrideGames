import {React , useRef} from 'react' 
import copy from '../../../assets/HomeAssets/assets/images/settings/copy.png'
import ReferFriendImg from '../../../assets/HomeAssets/assets/images/settings/ReferFriend.png'


const ReferFriend = () => {
  const inputRef = useRef(null);

  const copyText = () => {
    // Get the input element
    const inputElement = inputRef.current;

    // Select the text inside the input element
    inputElement.select();

    // Copy the selected text to the clipboard
    document.execCommand("copy");

    // Deselect the input element
    inputElement.blur();
  };
  return (
    <>
      <div className='ReferFriend_wrap'> 
        <div className='ReferFriend_content'>
             <h1 className='f48 mb-8'>Invite your friends and unlock exclusive bonuses!</h1> 
             <p className='f16'>As your friends dive into their first game, both of you will experience the joy of bonus rewards. The more you share, the more you earn!</p> 
        </div>
        <div className='get_start_wrap mt-64'>
           <div className='get_start_content'>
               <h1 className='f20 text-white'>Get Started - Refer a Friend Now</h1> 
               <p className='f18'>Refer a friend by providing their name and email. Both of you will receive bonus rewards upon their first deposit.</p>
               <form className='get_start_form'> 
                  <div className="main-wrap-form ">
                    <div class="input_wrap form-floating mb-16">
                      <input
                        type="text"
                        class="form-control"
                        id="FriendName"
                        placeholder="FriendName"
                      />
                      <label for="floatingInput">Friend Name</label>
                    </div>
                    <div class="input_wrap form-floating">
                      <input
                        type="text"
                        class="form-control"
                        id="FriendEmail"
                        placeholder="FriendEmail"
                      />
                      <label for="floatingInput">Friend Email</label>
                    </div>

                    <h1 className='f20 text-white mt-64'>Or Use Your Unique Referral Link</h1> 
                    <p className='f18'>Want to invite more friends? Share this unique referral link via social media, text, or email. </p>
                    <div className="input_wrap copy_Wrap">
                    <input
                      type="text"
                      className="form-control"
                      id="FriendEmail"
                      placeholder="http://www.casino.com/your-unique-link"
                      ref={inputRef}
                    />
                    <button type='button' className="btn-copy" onClick={copyText}>
                      <img src={copy} alt="copy" />
                    </button>
                  </div>
               
                    </div>
               </form>
           </div>

           <div className='main_wrap_img'>
           <div className='ReferFriend_man_img'>
                <img src={ReferFriendImg} alt='ReferFriendImg'/>
           </div>
           </div>
        </div>
      </div>
    </>
  )
}

export default ReferFriend
