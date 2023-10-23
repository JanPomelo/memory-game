"use strict";

import MemoryCardProps from "../interfaces/MemoryCard";

const MemoryCard: React.FC<MemoryCardProps> = ({driverName, driverNumber, imageSrc, key}) => {
  return (
          <div className="outerMemCard" key={key}>
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
        );
};

export default MemoryCard;
