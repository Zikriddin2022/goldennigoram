import { useTranslation } from 'react-i18next'
import React,{useState } from 'react'
import { Link } from 'react-router-dom';
import "./navbar.css"
import {MdOutlineTravelExplore} from "react-icons/md"
import {AiFillCloseCircle} from "react-icons/ai"
import {TbGridDots} from 'react-icons/tb'
import ReactCountryFlag from "react-country-flag"
import { Dropdown} from 'reactstrap';

import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Navbar = () => {

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleHotel = () => {
    setDropdownOpen(!dropdownOpen);
  }

const [isOpen, setIsOpen] = useState(false);

const toggle = () => {
setIsOpen(!isOpen);
}

  const {t , i18n} = useTranslation();


const changeLanguage=(language)=>{
  i18n.changeLanguage(language)
}

const [active, setActive] = useState('navBar')
// function to toggle navBar

const showNav = () => {
  setActive('navBar activeNavbar')
}

const removeNavbar = () => {
  setActive('navBar')
}


  
  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h3><MdOutlineTravelExplore className="icon"/>{t("NAVBAR.travel")}</h3>
          </a> 
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
            <Link to="/home" className="navLink">{t("NAVBAR.home")}</Link>
            </li>
            <li className="navItem">
            <Link to="/about" className="navLink">{t("NAVBAR.about")}</Link>
            </li>
            <li className="navItem">
              <a href="https://booking.com" className="navLink" target="_blank">{t("NAVBAR.visit")}</a>
            </li>
            {/* <li className="navItem">
             <a href="#" className="navLink">{t("NAVBAR.visit")}</a>
            </li> */}
            <li className="navItem">
             <Link to="/galery" className="navLink">{t("NAVBAR.gallery")}</Link>
            </li>
            <li className="navItem">
             <Link to="/uzbekistan" className="navLink">{t("NAVBAR.uzbekistan")}</Link>
            </li>
            <li className="navItem">
              <Link to="/contact" className="navLink">{t("NAVBAR.contact")}</Link>
            </li>      
            <ButtonDropdown isOpen={isOpen} toggle={toggle}>
              <DropdownToggle caret>
              {t("NAVBAR.language")}
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem >  
                  <button onClick={() => changeLanguage("en")} className="btn"> 
                    <ReactCountryFlag
                      countryCode="GB"
                      svg
                      style={{
                          width: '1.5em',
                          height: '1.5em',
                      }}
                      title="GB"
                    /> English
                  </button>
                </DropdownItem>
                <DropdownItem > 
                  <button onClick={() => changeLanguage("ru")} className="btn">
                    <ReactCountryFlag
                      countryCode="RU"
                      svg
                      style={{
                          width: '1.5em',
                          height: '1.5em',
                      }}
                      title="RU "
                  /> Russian
                  </button>
                </DropdownItem>
                <DropdownItem >  
                  <button onClick={() => changeLanguage("au")} className="btn">
                    <ReactCountryFlag
                        countryCode="AE"
                        svg
                        style={{
                            width: '1.5em',
                            height: '1.5em',
                        }}
                        title="AE"
                    />  Arab
                  </button>
                </DropdownItem>
                <DropdownItem > 
                  <button onClick={() => changeLanguage("fr")} className="btn">
                    <ReactCountryFlag
                        countryCode="FR"
                        svg
                        style={{
                            width: '1.5em',
                            height: '1.5em',
                        }}
                        title="FR"
                    /> Frans
                    </button>
                </DropdownItem>
                <DropdownItem > 
                  <button onClick={() => changeLanguage("gr")} className="btn">
                    <ReactCountryFlag
                        countryCode="DE"
                        svg
                        style={{
                            width: '1.5em',
                            height: '1.5em',
                        }}
                        title="DE"
                    /> Germany
                  </button>
                </DropdownItem>
                <DropdownItem > 
                  <button onClick={() => changeLanguage("er")} className="btn">
                   <ReactCountryFlag
                        countryCode="IR"
                        svg
                        style={{
                            width: '1.5em',
                            height: '1.5em',
                        }}
                        title="IR"
                    /> Eron
                  </button>
                </DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>

        

          </ul>

          <div onClick={removeNavbar} className="closeNavbar">
            <AiFillCloseCircle className="icon"/>
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
            <TbGridDots className="icon"/>
          </div>

      </header>
    </section>
  )
}

export default Navbar
