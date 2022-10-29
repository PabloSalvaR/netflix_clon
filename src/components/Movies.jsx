import React, {useState, useEffect} from 'react'
import Navbar from './Navbar'
import Carousel from './Carousel'
import MoviesCards from './MoviesCards'
import Footer from './Footer'



const Movies = () => {



  return (
  <>
    <Navbar/>
    <Carousel/>
    <MoviesCards/>
    <Footer/>
  </>
  )
}

export default Movies