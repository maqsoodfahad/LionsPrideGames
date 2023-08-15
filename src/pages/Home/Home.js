import React from 'react'
import '../../assets/HomeAssets/assets/css/style.css'
import '../../assets/HomeAssets/assets/css/responsive.css'
import Header from '../../components/Layout/Header/Header'
import Banner from './Banner/Banner'
import HottestGambling from './HottestGambling/HottestGambling'
import Games from './Games/Games'
import AlwaysSide from './AlwaysSide/AlwaysSide'
import InstantDeposits from './InstantDeposits/InstantDeposits'
import Faqs from './FAQ/Faqs'
import WinningStories from './WinningStories/WinningStories'   
import Footer from '../../components/Layout/Footer/Footer'
 
const Home = () => {
  return (
    <> 
    <section className="banner-wrap">
        <Header />
        <Banner />
        </section>
        <HottestGambling />
        <Games />
        <InstantDeposits /> 
        <AlwaysSide /> 
        <Faqs/>  
        <WinningStories />
        <Footer />
    </>

  )
}

export default Home