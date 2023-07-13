import React from 'react'
import "./aboutUs.css"
import { useTranslation } from 'react-i18next'
import a2 from "../../assets/2.png"
const AboutUs = () => {

  const {t , i18n} = useTranslation();
  return (
    <div>
        <div className="aboutus">
         
            <h2>{t("About.aboutUs")}</h2>
            <h6>{t("About.gold")}</h6>
            <ul>
              <li>{t("About.l1")} </li>
              <li>{t("About.l2")} </li>
              <li>{t("About.l3")} </li>
              <li>{t("About.l4")}</li>
            </ul>
            {t("About.p")}
        </div>
    </div>
  )
}

export default AboutUs