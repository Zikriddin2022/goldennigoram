import { useTranslation } from 'react-i18next';

import React,{useEffect} from 'react'
import "./home.css"
import {GrLocation} from "react-icons/gr"
import {HiFilter} from "react-icons/hi"
import {FiFacebook} from "react-icons/fi"
import {AiOutlineInstagram} from "react-icons/ai"
import {FaTripadvisor} from "react-icons/fa"
import {BsListTask} from "react-icons/bs"
import {TbApps} from "react-icons/tb"
import Aos from "aos"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
import "aos/dist/aos.css"
// import video from "https://drive.google.com/file/d/13ON3EFebIUNC3kK7-2-X-I6hyrP9sVIz/view?usp=drive_link"
import video from '../../assets/video.mp4';

const Home = () => {

  const { t, i18n } = useTranslation();

  useEffect(()=>{
    Aos.init({duration:2000 })
  },[])
  return (
    <section className="home">
      <div className="overlay"></div>
      {/* <video src='https://www.youtube.com/watch?v=48PSJqwZVIc'  videoId="48PSJqwZVIc" muted autoPlay loop /> */}
      <video src={video} muted autoPlay loop type="video/mp4"></video>

      <div className="homeContent container">
        <div className="textDiv">
          <span data-aos="fade-up"
           className="smallText">
            {t("HOME.welcome")}
          </span>
          <h1 data-aos="fade-up"
           className="homeTitle">
            {t("HOME.our")}
          </h1>
 
          
        </div>
        <h1 className='NameTitle'>GOLDENNIGORAM Travel Agency</h1>
        {/* <div data-aos="fade-up"
         className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city">Search your destination:</label>
            <div className="input flex">
              <input type="text" placeholder='Enter name here...' />
              <GrLocation className="icon"/>
            </div>
          </div>

          <div className="dateInput">
            <label htmlFor="date">Select your date:</label>
            <div className="input flex">
              <input type="date" />
            </div>
          </div>

          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">Max price:</label>
              <h3 className="total">$5000</h3>
            </div>
            <div className="input flex">
              <input type="range" max="5000" min="1000"/>
            </div>
          </div>
          
          <div className="searchOptions flex">
            <HiFilter className='icon'/>
            <span>MORE FILTERS</span>
          </div>
        </div> */}

        <div data-aos="fade-up"
         className="homeFooterIcons flex">
          <div className="rightIcons">
          <a href="https://t.me/Goldennigoram" target="_blank" className="navLink"><FiFacebook className='icon' /></a>
          <a href="https://instagram.com/goldennigoram000" target="_blank" className="navLink"><AiOutlineInstagram className='icon' /></a>
          <a href="tel://+998908101838" className="navLink"><FaTripadvisor className='icon' /></a>
          </div>
          <div className="leftIcons">
            <BsListTask className='icon' />
            <TbApps className='icon' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home