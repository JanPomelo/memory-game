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
        <h3>{albon.strPlayer}</h3>
        <p>{albon.strNumber}</p>
      </div>
    </div>
  );
}
