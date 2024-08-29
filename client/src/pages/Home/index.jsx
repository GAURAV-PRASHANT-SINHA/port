import React, { useEffect } from 'react'
import Header from '../../components/Header'
import Intro from './intro'
import About from './About'
import Experiences from './Experiences'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'
import Leftbar from './Leftbar'
import { useDispatch } from 'react-redux'
import { resetSuccAction } from '../../redux/userSlice'

const Home= () => {
  const dispatch = useDispatch();
  
  return (
    <>
    <Header/>
    <div className="bg-primary px-40 sm:px-5">
  <Intro/>
  <About/>
  <Experiences/>
  <Projects/>
  <Contact/>
  <Footer/>
  <Leftbar/>
  </div>

  </>
  )
}

export default Home
