import React from 'react'
import HAbout from './HAbout'
import AboutCard from '../about/AboutCard'
import Hero from './hero/Hero'
import Testimonal from './testmonial/Testmonial'
import Hblog from './Hblog'

const Home = () => {
  return (
    <>
      <Hero />
      <AboutCard />
      <HAbout />
      <Testimonal />
      <Hblog />
    </>
  )
}

export default Home
