import React from 'react'
// import HeroSection from '../../components/HeroSection'
import Qualities from '../../components/Qualities'
import Menu from '../../components/Menu'
import Team from '../../components/Team'
import Reservation from '../../components/Reservation'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
// import Dryfruits from '../Pages/Dryfruits'
import Main from '../../components/HeroSection'
import Dryfruits from '../pages/Dryfruits'

const Home = () => {
  return (
    <>

   
      {/* <Navbar /> */}
      <Main />
      <Qualities />
      <Menu />
      <Dryfruits/>
      <Team />
      <Reservation />
      <Footer />
    </>
  )
}

export default Home
