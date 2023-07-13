import React from 'react'
import shohizinda from "../../assets/shohizinda.jpeg"
import abdu from "../../assets/abdu.jpg"
import bibixonim from "../../assets/bibixonim.jpg"
import ulug from "../../assets/ulug.jpg"
import oloqulixon from "../../assets/oloqulixon.jpg"
import aminxon from "../../assets/aminxon.jpg"
import rahim from "../../assets/rahim.jpg"
import islom from "../../assets/islom.jpg"
import { useTranslation } from 'react-i18next'


import "./aboutUzbekistan.css"

const AboutUzbekistan = () => {

  const {t , i18n} = useTranslation();

  return (
    <div>
      <div className="hasosiy">
        <h2 className='region'>{t("AboutUzbekistan.city1")}</h2>
        <div className='hflex'>
          <div className="history city">
            <h4 className='Title'><b> {t("AboutUzbekistan.mt1")} </b></h4>
            <img src={shohizinda} alt="" />
            <p className='hdescription'>
            {t("AboutUzbekistan.mp1")}
            </p>
          </div>
          <div className="history city">
            <h4 className='Title'><b>{t("AboutUzbekistan.mt2")} </b></h4>
            <img src={abdu} alt="" />
            <p className='hdescription'>
            {t("AboutUzbekistan.mp2")}
            </p>
          </div>
        </div>
        <div className='hflex'>
          <div className="history city">
            <h4 className='Title'><b> {t("AboutUzbekistan.mt3")} </b></h4>
            <img src={bibixonim} alt="" />
            <p className='hdescription'>
            {t("AboutUzbekistan.mp3")}
            </p>
          </div>
          <div className="history city">
            <h4 className='Title'><b> {t("AboutUzbekistan.mt4")}</b></h4>
            <img src={ulug} alt="" />
            <p className='hdescription'>
            {t("AboutUzbekistan.mp4")}
            </p>
          </div>
        </div>

      </div>

      <div className="hasosiy">
        <h2 className='region'>{t("AboutUzbekistan.city2")}</h2>
        <div className='hflex'>
          <div className="history city">
            <h4 className='Title'><b> {t("AboutUzbekistan.mt5")}  </b></h4>
            <img src={oloqulixon} alt="" />
            <p className='hdescription'>
            {t("AboutUzbekistan.mp5")}
            </p>
          </div>
          <div className="history city">
            <h4 className='Title'><b>   {t("AboutUzbekistan.mt6")} </b></h4>
            <img src={aminxon} alt="" />
            <p className='hdescription'>
            {t("AboutUzbekistan.mp6")}
            </p>
          </div>
        </div>
        <div className='hflex'>
          <div className="history city">
            <h4 className='Title'><b>   {t("AboutUzbekistan.mt7")}</b></h4>
            <img src={rahim} alt="" />
            <p className='hdescription'>
            {t("AboutUzbekistan.mp7")}
            </p>
          </div>
          <div className="history city">
            <h4 className='Title'><b>    {t("AboutUzbekistan.mt8")}</b></h4>
            <img src={islom} alt="" />
            <p className='hdescription'>
            {t("AboutUzbekistan.mp8")}
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AboutUzbekistan