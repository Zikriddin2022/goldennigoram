import { useTranslation } from 'react-i18next';
import React  from 'react';

import img1 from "../assets/uzImg1.jpeg"
import img2 from "../assets/uzImg2.jpeg"
import img3 from "../assets/uzImg3.jpeg"
import img4 from "../assets/uzImg4.jpeg"
import img5 from "../assets/uzImg5.jpeg"
import img6 from "../assets/uzImg6.jpeg"

const Data = () => {
  const { t } = useTranslation();
const data = [
    {
      id:1,
      imgSrc:img1,
      destTitle:t("Main.samarqand"),
      location:t("Main.sregion"),
      grade:t("Main.meros"),
      fees:"$500",
      description:t("Main.sdesc"),
      details:t("Main.sdetails")
    }
    ,
  
    {
      id:2,
      imgSrc:img2,
      destTitle:t("Main.buxoro"),
      location:t("Main.bregion"),
      grade:t("Main.meros"),
      fees:"$500",
      description:t("Main.bdesc"),
      details:t("Main.bdetails")
    },
  
    {
      id:3,
      imgSrc:img3,
      destTitle:t("Main.xiva"),
      location:t("Main.xregion"),
      grade:t("Main.meros"),
      fees:"$500",
      description:t("Main.xdesc"),
      details:t("Main.xdetails")
    },
  
    {
      id:4,
      imgSrc:img4,
      destTitle:t("Main.surx"),
      location:t("Main.suregion"),
      grade:t("Main.meros"),
      fees:"$500",
      description:t("Main.sudesc"),
      details:t("Main.sudetails")
    },
  
    {
      id:5,                                                                                                                                                                                                                                                                                                                                                                                                                                   
      imgSrc:img5,
      destTitle:t("Main.qash"),
      location:t("Main.qregion"),
      grade:t("Main.meros"),
      fees:"$500",
      description:t("Main.qdesc"),
      details:t("Main.qdetails")
      },

      {
        id:6,
        imgSrc:img6,
        destTitle:t("Main.vodiy"),
        location:t("Main.vregion"),
        grade:t("Main.meros"),
        fees:"$500",
        description:t("Main.vdesc"),
        details:t("Main.vdetails")
      },
  ]

  return data;
}
export default Data