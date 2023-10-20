"use strict";

import { Driver } from "../types";

const albon: Driver = {
    strNumber: '23',
  strPlayer: 'Alexander Albon',
  strTeam: 'Williams',
  strNationality: 'Thailand',
  strCutout: 'https://www.thesportsdb.com/images/media/player/cutout/2f73pc1679830795.png'
}

//const albon = await getDriverDetails({firstName: 'Alexander', lastName: 'Albon'}) as Driver;

export default function MemoryCard() {
  return <div className="memCard">
    <img src={albon.strCutout} />
    <h3>{albon.strPlayer}</h3>
    <p>{albon.strNumber}</p>
  </div>
}
