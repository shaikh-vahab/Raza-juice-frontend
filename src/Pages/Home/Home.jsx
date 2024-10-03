import React from 'react'
import Qualities from '../../components/Qualities'
import Juice from '../../components/Juice'
import Team from '../../components/Team'
import Reservation from '../../components/Reservation'
import Footer from '../../components/Footer'
import Main from '../../components/HeroSection'
import Dryfruits from '../pages/Dryfruits'

const Home = () => {
  return (
    <>
      <Main />
      <Qualities />
      <Juice />
      <Dryfruits/>
      <Team />
      <Reservation />
      {/* <Footer /> */}
    </>
  )
}

export default Home
