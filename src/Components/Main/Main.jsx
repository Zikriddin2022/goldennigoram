  import React, { useState } from 'react';
  import { Collapse, Button, CardBody, Card } from 'reactstrap';
  import "./main.css"
  import { HiOutlineClipboardCheck, HiOutlineLocationMarker} from "react-icons/hi"
  import Data from "../../db/Data.jsx";
  import { useTranslation } from 'react-i18next';


  const Main = () => {

    const { t, i18n } = useTranslation();

    const [expandedDestinationId, setExpandedDestinationId] = useState(null);

    const toggle = (id) => {
      setExpandedDestinationId((prevId) => (prevId === id ? null : id));
    }


    return (
      <section className='main container section'>
        <div className="secTitle">
          <h3 className="title">
            {t("Main.most")}
          </h3>
        </div>

        <div className="secContent grid">
        {
          Data().map(({ id, imgSrc, destTitle, location, grade, fees, description, details }) => {
            const isExpanded = expandedDestinationId === id;

              return(
                <div key={id} className="singleDestination">
                  <div className="imageDiv">
                    <img src={imgSrc} alt={destTitle} />
                  </div>

                  <div className="cardInfo">
                    <h4 className="destTitle">{destTitle}</h4>
                    <span className="continent flex">
                      <HiOutlineLocationMarker className='icon' />
                      <div className="name">{location}</div>
                    </span>

                    <div className="fees flex">
                        <span>{grade} <small>+1</small></span>
                      <div className="grade">
                      </div>
                      <div className="price">
                        <h5>{fees}</h5>
                      </div>
                    </div>

                    <div className="desc">
                      <p>{description}</p>
                    </div>


                    <Button color="primary" onClick={() => toggle(id)} className="btn flex">
                  {t("Main.details")} <HiOutlineClipboardCheck className='icon'/>
                </Button>

                <Collapse isOpen={isExpanded}>
                    <Card className='CardBody'>
                      <CardBody>
                        {details}
                      </CardBody>
                    </Card>
                  </Collapse>
                  </div>
                </div>
              )
            })
          }
        </div>
      </section>
    )
  }

  export default Main