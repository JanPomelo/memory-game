//import { getDriverDetails } from "../apiCalls";
//import { v4 } from "uuid";
import React, { useState } from "react";
import MemoryCard from "./MemoryCard";
import GameFieldProps from "../interfaces/GameFieldProps";
import { Driver } from "../types";
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

const GameField: React.FC<GameFieldProps> = ({ playArr, onStartPageClick }) => {
  const [gameArray, setGameArray] = useState(playArr);
  const [backTurn, setBackTurn] = useState("");
  const newGameArr = [...gameArray];

  function shuffleArray(array: Driver[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = { ...array[i] };
      array[i] = { ...array[j] };
      array[j] = temp;
    }
  }

  const handleCardClick: React.MouseEventHandler<HTMLButtonElement> = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button: HTMLButtonElement = e.target as HTMLButtonElement;
    const id: string = button.getAttribute("data-key") as string;
    for (let i = 0; i < newGameArr.length; i++) {
      if (id === newGameArr[i].id) {
        newGameArr[i].clicked = true;
      }
    }
    button.blur();
    setBackTurn("backTurn");
    setTimeout(() => {
      shuffleArray(newGameArr);
      setGameArray(newGameArr);
      setBackTurn("");
    }, 1000);
  };

  return (
    <div className="flex flex-col h-full gap-4 w-full">
      <div className="menu flex flex-col gap-4 sm:flex-row justify-between px-4 w-full py-4">
        <button
          className="bg-white px-2 py-1 rounded-xl backToStartPageButton mx-auto sm:my-auto sm:mx-0"
          onClick={onStartPageClick}
        >
          Startpage
        </button>
        <div className="scores flex flex-col bg-white px-2 py-1 rounded-xl mx-auto sm:my-auto sm:mx-0">
          <div className="flex">
            <p>Current Score - </p>
            <p></p>
          </div>
          <div className="flex justify-end">
            <p>Best Score - </p>
            <p></p>
          </div>
        </div>
      </div>
      <div className="flex-grow flex items-center justify-center">
        <div className="flex flex-wrap gap-x-2 gap-y-5 justify-around">
          {newGameArr.map((driver) => {
            return (
              <MemoryCard
                driverNumber={driver.strNumber}
                driverName={driver.strPlayer}
                imageSrc={driver.strCutout}
                id={driver.id}
                key={driver.id}
                clicked={driver.clicked}
                onClick={(e) => {
                  handleCardClick(e);
                }}
                backTurn={backTurn}
              ></MemoryCard>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GameField;
