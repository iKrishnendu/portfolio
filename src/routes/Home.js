import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Aboutme from '../components/Aboutme'
import MyTools from '../components/MyTools'



const Home = () => {
  return (
    <div>
      
      <Navbar/>
      <Hero />
      <Aboutme/>
      <MyTools/>
      <Footer/>
      
    </div>
  )
}

export default Home