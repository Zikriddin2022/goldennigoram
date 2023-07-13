import React from 'react'
import "./footer.css"
import {FiChevronRight, FiSend} from "react-icons/fi"
import { MdOutlineTravelExplore } from 'react-icons/md'
import { AiFillInstagram, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai'
import { FaTripadvisor } from 'react-icons/fa'
import {FaTelegram} from 'react-icons/fa'
import {BsFillTelephoneFill} from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { useTranslation } from 'react-i18next';


const Footer = () => {


  const { t, i18n } = useTranslation();

  return (
    <section className="footer section">

      <div className="secContent container">
        {/* <div className="contactDiv flex">
          <div className="text">
            <small>Keep In Touch</small>
            <h2>Travel with us</h2>
          </div>
        </div> */}

        <div className="footerCard flex">

          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className='logo flex'>
                <MdOutlineTravelExplore className='icon'/>GOLDENNIGORAM Travel.
              </a>
            </div>

            <div className="footerParagraph">
            <b>{t("Footer.man")}</b> {t("Footer.loc")}
            </div>

            <div className="footerSocials">
              <AiOutlineTwitter className='icon'/>
              <AiFillYoutube className='icon'/>
              <AiFillInstagram className='icon'/>
              <FaTripadvisor className='icon'/> 
            </div>
          </div>

          <div className="footerLinks grid">
            
            <div className="linkGroup">
              <span className="groupTitle">
              {t("Footer.a1")}
              </span>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                {t("Footer.a2")}
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                {t("Footer.a3")}
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                {t("Footer.a4")}
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                {t("Footer.a5")}
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                {t("Footer.a6")}
              </li> 
            </div>

            <div className="linkGroup">
              <span className="groupTitle">
              {t("Footer.a18")}
              </span>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                {t("Footer.a7")}
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                {t("Footer.a8")}
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                {t("Footer.a9")}
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                {t("Footer.a10")}
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                {t("Footer.a11")}
              </li>
            </div>

            <div className="linkGroup">
              <span className="groupTitle">
              {t("Footer.a12")}
              </span>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                <a href="https://t.me/Goldennigoram" target="_blank" className="navLink"> {t("Footer.a13")} <FaTelegram className='icon' /></a>
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                <a href="https://instagram.com/goldennigoram000" target="_blank" className="navLink"> {t("Footer.a14")} <AiFillInstagram className='icon'/></a>
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                {t("Footer.a15")}
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                <a href="mailto:nigorgolden@gmail.com" target="_blank" className="navLink">   {t("Footer.a16")} <MdEmail className='icon' /></a>
 
              
              </li>

              <li className="footerList flex">
                <a href="tel://+998908101838" className="navLink">
                  <FiChevronRight className='icon'/>
                  {t("Footer.a17")} +998 90 810 18 38 <BsFillTelephoneFill className='icon' />
                </a>
              </li>
              <li className="footerList flex">
                <a href="tel://+998910025158" className="navLink">
                  <FiChevronRight className='icon'/>
                  {t("Footer.a17")} +998 91 002 51 58  <BsFillTelephoneFill className='icon' />
                </a>
              </li>
            </div>
          </div>
          <div className="footerDiv flex">
            <small>Best Travel Website Theme</small>
            <small>Copyrights reserved 2022</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer