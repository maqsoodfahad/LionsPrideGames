import React from 'react'
import Header from '../../components/Layout/Header/Header'
import AboutBanner from './../../assets/HomeAssets/assets/images/About/About-banner.png' 
import Footer from '../../components/Layout/Footer/Footer' 
import { Link } from 'react-router-dom'
import LobbyHeader from "../../components/Layout/Header/HeaderLobby"

const About = () => {
   let xAuthToken = localStorage.getItem("xAuthToken");

  return (
    <>
      <section className="banner-wrap">
     {xAuthToken? <>

    <LobbyHeader />
</>:<>

           <Header /> 
</>}
        <div className="theme-container   mt-60 z-9">
          <div className="about-banner">
            <img
              src={AboutBanner}
              alt="AboutBanner"
              className="AboutBanner img-fluid"
            />
          </div>
        </div>
      </section>
      <section className=" AboutContent">
        <div className="theme-container about-content-wrap">
          <div className="social-link">
            <ul>
              <li>
                <Link className="f20">follow Us</Link>
              </li>
              <li>
                <Link className="f20">Instagram</Link>
              </li>
              <li>
                <Link className="f20">Facebook</Link>
              </li>
            </ul>
          </div>
          <div className="about-content mt-8">
            <div className="row">
              <div className="col-sm-6">
                <p className="f20">
                  
                  We cover endless events and markets in top speed. Fast settlements
                  and instant payouts guarenteed. We cover endless events and
                  markets in top speed. Fast settlements and instant payouts
                </p>
                <p className="f20">
                  We cover endless events and markets in top speed. Fast settlements
                  and instant payouts guarenteed.
                </p>
                <p className="f20">
                  We cover endless events and markets in top speed. Fast settlements
                  and instant payouts
                </p>
              </div>
              <div className="col-sm-6">
                <p className="f20">
                  We cover endless events and markets in top speed. Fast settlements
                  and instant payouts guarenteed. We cover endless events and
                  markets in top speed. Fast settlements and instant payouts
                  guarenteed. We cover endless events and markets in top speed
                </p>
              </div>
            </div>
            <h1 className="f36">How does Lion’s Pride use coins?</h1>
            <p className="f20">
              We cover endless events and markets in top speed. Fast settlements and
              instant payouts guarenteed. We cover endless events and markets in top
              speed. Fast settlements and instant payouts
            </p>
            <p className="f20">
              We cover endless events and markets in top speed. Fast settlements and
              instant payouts guarenteed.
            </p>
            <p className="f20">
              We cover endless events and markets in top speed. Fast settlements and
              instant payouts
            </p>

            <h1 className="f36">How does Lion’s Pride use coins?</h1>
            <p className="f20">
              We cover endless events and markets in top speed. Fast settlements and
              instant payouts guarenteed. We cover endless events and markets in top
              speed. Fast settlements and instant payouts
            </p>
            <p className="f20">
              We cover endless events and markets in top speed. Fast settlements and
              instant payouts guarenteed.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </> 
  )
}

export default About
