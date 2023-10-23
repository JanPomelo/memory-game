"use strict";

import { Driver } from "../types";
import { getDriverDetails } from "../apiCalls";
import { drivers } from "../drivers";

const albon: Driver = {
  strNumber: "23",
  strPlayer: "Alexander Albon",
  strTeam: "Williams",
  strNationality: "Thailand",
  strCutout: "https://www.thesportsdb.com/images/media/player/cutout/2f73pc1679830795.png",
};

async function getAllDetails(driverArr: { firstName: string; lastName: string }[]) {
  const allDriverDetails: Driver[] = [];
  for (let i = 0; i < driverArr.length; i++) {
    //const driverInfos = await getDriverDetails({ firstName: driverArr[i].firstName, lastName: driverArr[i].lastName });
    //allDriverDetails.push(driverInfos);
  }
  allDriverDetails.push(albon);
  return allDriverDetails;
}

const allDetails = await getAllDetails(drivers);

export default function MemoryCard() {
  return (
    <>
      {allDetails.map((driver) => {
        return (
          <div className="outerMemCard">
            <div className="memCard">
              <div className="imgWrapper">
                <div className="f1Logo"></div>
                <img src={driver?.strCutout} />
                <div className="imgGradient1"></div>
                <div className="imgGradient2"></div>
              </div>
              <hr></hr>
              <h3 className="fNameDriver">{driver?.strPlayer.substring(0, driver.strPlayer.indexOf(" "))}</h3>
              <h3 className="lNameDriver">{driver?.strPlayer.substring(driver.strPlayer.indexOf(" "))}</h3>
              <div className="driversNameBG1"></div>
              <div className="driversNameBG2"></div>
              <p className="driverNumber">{driver?.strNumber}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}
