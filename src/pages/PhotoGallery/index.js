import React from 'react'
import Navbar from "../../Components/Navbar/Navbar.jsx"
import Footer from "../../Components/Footer/Footer.jsx"
import Galery from "./Galery.jsx"


const index = () => {
  return (
    <div>
        <Navbar/>
      <Galery />
       <Footer/>
    </div>
  )
}

export default index