import React from 'react' 
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const Faqs = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* Frequent Answered Questions */}
      <section className="faqs">
        <div className="theme-container">
          <h1 className="f48">
            Frequent Answered
            <br /> Questions
          </h1>
          <div className="row">
            <div className="col-lg-6">
              <h5 className="f24 mb-8">Are there any withdrawal fees?</h5>
              <p className="f16 mb-32">
                No, our online platform takes pride in offering a fee-free
                withdrawal experience. Enjoy your winnings without worrying about
                hidden fees or charges.
              </p>
              <h5 className="f24 mb-8">How long will payments take to process?</h5>
              <p className="f16 mb-32">
                Our online platform is committed to providing fast payments,
                typically processing withdrawals within 24 hours.
              </p>
              <h5 className="f24 mb-8">
                How can I learn about other players' experiences?
              </h5>
              <p className="f16 mb-32">
                We encourage you to check out our {""} 
                <Link>reviews and testimonials</Link> from happy
                players. These reviews provide valuable insights into our player
                satisfaction.
              </p>
            </div>
            <div className="col-lg-6">
              <h5 className="f24 mb-8">Do I need to make any purchases to play?</h5>
              <p className="f16 mb-32">
                Absolutely not! We believe that everyone should be able to enjoy the
                excitement of slot games, which is why we offer our games for free.
              </p>
              <h5 className="f24 mb-8">
                Are there any bonuses available for new players?
              </h5>
              <p className="f16 mb-32">
                Yes! We offer daily and special welcome bonuses for new players.
                When you sign up, you'll receive a welcome bonus that you can use to
                play our games for free.
              </p>
              <h5 className="f24 mb-8">Non-stop support?</h5>
              <p className="f16 mb-32">
                Whether you have questions or concerns, we're always here to help,
                ensuring a seamless gaming experience.
              </p>
            </div>
            <div className="col-12 text-center">
              <div className="support_btn d-flex align-items-center ">
                <button className="  themebtn-red box-red mr-16" type="button"
                onClick={() => navigate("/signup")}
                >
                  Join now
                </button>
                <button className="  themebtn-dark box-black" type="button">
                  Ask support
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Faqs