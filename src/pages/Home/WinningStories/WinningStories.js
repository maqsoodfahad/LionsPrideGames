import React from 'react'
import empty from '../../../assets/HomeAssets/assets/images/client/empty-box.png'
import client1 from '../../../assets/HomeAssets/assets/images/client/client1.png'
import client2 from '../../../assets/HomeAssets/assets/images/client/client2.png'
import client3 from '../../../assets/HomeAssets/assets/images/client/client3.png'
import client4 from '../../../assets/HomeAssets/assets/images/client/client4.png'
import client5 from '../../../assets/HomeAssets/assets/images/client/client5.png'
import client6 from '../../../assets/HomeAssets/assets/images/client/client6.png'

import { Link, useNavigate } from 'react-router-dom'

const WinningStories = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Winning Stories */}
      <section className="Winning-Stories  ">
        <div className="theme-container clinet_wrap_details_werp">
          <div className="row">
            <div className="col-lg-6">
              <div className=" Reviews content-Always">
                <h6 className="f32 mb-8">Reviews</h6>
                <h5 className="f48 mb-16">Winning Stories</h5>
                <p className="f20">
                  From Jackpots to Big Wins, Get Inspired by Our Players' Exciting
                  Tales of Triumph!
                </p>
                <div className="support_btn d-flex align-items-center  mb-d-none ">
                  <button
                    onClick={() => navigate("/signup")}

                    className="themebtn-red box-red mr-16" type="button">
                    Join now
                  </button>
                  <button className="themebtn-dark box-black" type="button">
                    Explore reviews
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12 Start-Journey mt-140 text-center">
              <div className="clinet_wrap_details">
                <div className="clinet_wrap_inner">
                  <div className="row">
                    <div className="col-lg-6  ">
                      <div className="clint_box empty-box">
                        <img
                          src={empty}
                          className="img-fluid "
                          alt="empty-box"
                        />
                      </div>
                      <div className="clinet-reviews">
                        <p className="f16 text-white">
                          "I've played at this platform for months and it's one of
                          the best. The games are fun, payouts are fair, customer
                          service is top-notch, and I've won big a few times."
                        </p>
                        <div className="user-detail mt-16">
                          <Link>
                            <div className="img-client">
                              <img
                                src={client1}
                                alt="client1"
                              />
                            </div>
                            <div className="client-content">
                              <h6 className="f16 mb-8">Sarah</h6>
                              <p className="f16">Miami, Florida</p>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="clinet-reviews">
                        <p className="f16 text-white">
                          "I was skeptical of these platforms, but this one changed
                          my mind with its amazing graphics, impressive variety of
                          games, unbeatable bonuses and promotions, and the
                          convenience of playing from home."
                        </p>
                        <div className="user-detail mt-16">
                          <Link>
                            <div className="img-client">
                              <img
                                src={client2}
                                alt="client1"
                              />
                            </div>
                            <div className="client-content">
                              <h6 className="f16 mb-8">David</h6>
                              <p className="f16">Chicago, Illinois</p>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="clinet-reviews">
                        <p className="f16 text-white">
                          "I tried Lion’s Pride despite not being much of a gamer
                          and I'm glad I did. The site is easy to use and the games
                          are easy to learn. I've won a few small prizes already,
                          which was a nice surprise!"
                        </p>
                        <div className="user-detail mt-16">
                          <Link>
                            <div className="img-client">
                              <img
                                src={client3}
                                alt="client1"
                              />
                            </div>
                            <div className="client-content">
                              <h6 className="f16 mb-8">Ryan</h6>
                              <p className="f16">Philadelphia, Pennsylvania</p>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="clinet-reviews mt-24 mb_none_review">
                        <p className="f16 text-white">
                          "I've played at this online site for months and it's one
                          of the best. The games are fun, payouts are fair, customer
                          service is top-notch, and I've won big a few times."
                        </p>
                        <div className="user-detail mt-16">
                          <Link>
                            <div className="img-client">
                              <img
                                src={client4}
                                alt="client1"
                              />
                            </div>
                            <div className="client-content">
                              <h6 className="f16 mb-8">Emily</h6>
                              <p className="f16">Las Vegas, Nevada</p>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="clinet-reviews mb_none_review">
                        <p className="f16 text-white">
                          "I've played at this online site for months and it's one
                          of the best. The games are fun, payouts are fair, customer
                          service is top-notch, and I've won big a few times."
                        </p>
                        <div className="user-detail mt-16">
                          <Link>
                            <div className="img-client">
                              <img
                                src={client5}
                                alt="client1"
                              />
                            </div>
                            <div className="client-content">
                              <h6 className="f16 mb-8">John</h6>
                              <p className="f16"> Los Angeles, California</p>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="clinet-reviews mb_none_review">
                        <p className="f16 text-white">
                          "I've played at this site for months and it's one of the
                          best. The games are fun, payouts are fair, customer
                          service is top-notch, and I've won big a few times."
                        </p>
                        <div className="user-detail mt-16">
                          <Link>
                            <div className="img-client">
                              <img
                                src={client6}
                                alt="client6"
                              />
                            </div>
                            <div className="client-content">
                              <h6 className="f16 mb-8">Ashley</h6>
                              <p className="f16">Nashville, Tennessee</p>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="clinet-reviews mb_none_review">
                        <p className="f16 text-white">
                          "I've played at this online site for months and it's one
                          of the best. The games are fun, payouts are fair, customer
                          service is top-notch, and I've won big a few times."
                        </p>
                        <div className="user-detail mt-16">
                          <Link>
                            <div className="img-client">
                              <img
                                src={client1}
                                alt="client1"
                              />
                            </div>
                            <div className="client-content">
                              <h6 className="f16 mb-8">Sarah</h6>
                              <p className="f16">Miami, Florida</p>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="support_btn d-flex align-items-center mb_none_btn">
                  <button
                    onClick={() => navigate("/signup")}
                    className="themebtn-red box-red mr-16" type="button">
                    Join now
                  </button>
                  <button className="themebtn-dark box-black" type="button">
                    All reviews
                  </button>
                </div>
              </div>
              <div className="start-your mt-140">
                <h1 className="f64 mb-24">Start your Winning Journey</h1>
                <p className="f20">
                  We cover endless events and markets in top speed. Fast settlements
                  and instant payouts guarenteed.
                </p>
                <button
                  onClick={() => navigate("/login")}
                  type="button"
                  className="themebtn-red btn-w288 mt-24 mt-40 ml-auto mr-auto"
                >
                  Play for Free
                </button>
              </div>
            </div>
            <div className="support_btn d-flex align-items-center mb_none_winngng des-d-none">
              <button className="themebtn-red box-red mr-16" type="button">
                Join now
              </button>
              <button className="themebtn-dark box-black" type="button">
                Explore reviews
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default WinningStories