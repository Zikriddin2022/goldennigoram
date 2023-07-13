import React from 'react'
import Home from "../../Components/Home/Home.jsx"
import Navbar from "../../Components/Navbar/Navbar.jsx"
import Main from "../../Components/Main/Main.jsx"
import Footer from "../../Components/Footer/Footer.jsx"

const Homes = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Main/>
      <Footer/>
  </div>
  )
}

export default Homes