"use strict";

import { Driver } from "../types";
//import { getDriverDetails } from "../apiCalls";

const albon: Driver = {
  strNumber: "23",
  strPlayer: "Alexander Albon",
  strTeam: "Williams",
  strNationality: "Thailand",
  strCutout: "https://www.thesportsdb.com/images/media/player/cutout/2f73pc1679830795.png",
};


//const albon = await getDriverDetails({firstName: 'Charles', lastName: 'Leclerc'}) as Driver;

export default function MemoryCard() {
  return (
    <div className="outerMemCard">
      <div className="memCard">
        <div className="imgWrapper">
          <img src={albon.strCutout} />
          <div className="imgGradient1"></div>
          <div className="imgGradient2"></div>
        </div>
        <hr></hr>
        <h3 className="fNameDriver">{albon.strPlayer.substring(0, albon.strPlayer.indexOf(' '))}</h3>
        <h3 className="lNameDriver">{albon.strPlayer.substring(albon.strPlayer.indexOf(' '))}</h3>
        <div className="driversNameBG1"></div>
        <div className="driversNameBG2"></div>
        <p className="driverNumber">{albon.strNumber}</p>
      </div>
    </div>
  );
}
