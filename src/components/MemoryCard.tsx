"use strict";

import "../styles/MemoryCard.css";
import MemoryCardProps from "../interfaces/MemoryCard";
//http://res.cloudinary.com/dsb37ne9e/image/fetch/w_150/"
const MemoryCard: React.FC<MemoryCardProps> = ({
  driverName,
  driverNumber,
  imageSrc,
  clicked,
  id,
  onClick,
  backTurn,
}) => {
  return (
    <button className={"clicked" + clicked + " outerMemCardWrapper"} data-key={id} onClick={onClick}>
      <div className={backTurn + " innerMemCardWrapper"}>
        <div className="front">
          <div className="outerMemCard">
            <div className="memCard">
              <div className="imgWrapper">
                <div className="f1Logo"></div>
                <img src={imageSrc} />
                <div className="imgGradient1"></div>
                <div className="imgGradient2"></div>
              </div>
              <hr></hr>
              <h3 className="fNameDriver">{driverName.substring(0, driverName.indexOf(" "))}</h3>
              <h3 className="lNameDriver">{driverName.substring(driverName.indexOf(" "))}</h3>
              <div className="driversNameBG1"></div>
              <div className="driversNameBG2"></div>
              <p className="driverNumber">{driverNumber}</p>
            </div>
          </div>
        </div>
        <div className="back">
          <div className="outerMemCard">
            <div className="memCardBack">
              <div className="memCardBackPattern"></div>
              <div className="cardBack"></div>
              <div className="bigLogo"></div>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default MemoryCard;
