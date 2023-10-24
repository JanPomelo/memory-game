//import { getDriverDetails } from "../apiCalls";
//import { v4 } from "uuid";
import React from "react";
import MemoryCard from "./MemoryCard";
import GameFieldProps from "../interfaces/GameFieldProps";
//import { getDriverDetails } from "../apiCalls";
/*
async function getAllDetails(driverArr: { firstName: string; lastName: string }[]) {
  const allDriverDetails: Driver[] = [];
  for (let i = 0; i < driverArr.length; i++) {
    const driverInfos = await getDriverDetails({ firstName: driverArr[i].firstName, lastName: driverArr[i].lastName });
    driverInfos!.id = v4();
    allDriverDetails.push(driverInfos!);
  }
  return allDriverDetails;
}
*/

const GameField: React.FC<GameFieldProps> = ({ playArr}) => {
  return (
    <div className="flex flex-wrap gap-x-2 gap-y-5 justify-around">
      {playArr.map((driver) => {
        return (
          <MemoryCard
            driverNumber={driver.strNumber}
            driverName={driver.strPlayer}
            imageSrc={driver.strCutout}
            key={driver.id}
          ></MemoryCard>
        );
      })}
    </div>
  );
};

export default GameField;
