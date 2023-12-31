import React, { useState } from "react";
import MemoryCard from "./MemoryCard";
import GameFieldProps from "../interfaces/GameFieldProps";
import { Driver } from "../types";
import LooseScreen from "./LooseScreen";
import WinScreen from "./WinScreen";
import flipCard from "../assets/flipCard.mp3";
const cardSound = new Audio(flipCard);

const GameField: React.FC<GameFieldProps> = ({ playArr, onStartPageClick, sound }) => {
  const [gameArray, setGameArray] = useState(playArr);
  const [backTurn, setBackTurn] = useState("");
  const [score, setScore] = useState(0);
  const [end, setEnd] = useState("");

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
    button.blur();
    let alreadyClicked = false;
    for (let i = 0; i < newGameArr.length; i++) {
      if (id === newGameArr[i].id) {
        alreadyClicked = newGameArr[i].clicked;
        newGameArr[i].clicked = true;
      }
    }
    if (sound) {
      cardSound.play();
    }
    setBackTurn("backTurn");
    if (!alreadyClicked) {
      if (score + 1 >= newGameArr.length) {
        setScore(score + 1);
        setEnd("win");
      } else {
        setTimeout(() => {
          if (sound) {
            cardSound.play();
          }
          shuffleArray(newGameArr);
          setGameArray(newGameArr);
          setBackTurn("");
          setScore(score + 1);
        }, 1200);
      }
    } else {
      setEnd("lose");
    }
  };

  function onRetryClick() {
    for (let i = 0; i < newGameArr.length; i++) {
      newGameArr[i].clicked = false;
    }
    const loseScreen = document.getElementsByClassName("endScreen")[0] as HTMLDivElement;
    loseScreen.classList.add("transformed");
    setTimeout(() => {
      shuffleArray(newGameArr);
      setGameArray(newGameArr);
      setBackTurn("");
      setScore(0);
      setEnd("");
    }, 200);
  }

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="menu flex flex-col gap-4 sm:flex-row justify-between px-4 w-full pb-4 pt-4 sm:pr-24 sm:pt-10 sm:pl-40">
        <button
          className="bg-white px-2 py-1 rounded-xl backToStartPageButton mx-auto sm:my-auto sm:mx-0"
          onClick={onStartPageClick}
        >
          Startpage
        </button>
        <div className="scores flex flex-col bg-white px-2 py-1 rounded-xl mx-auto sm:my-auto sm:mx-0">
          <div className="flex gap-2">
            <p>Score - </p>
            <p>{score + "/" + newGameArr.length}</p>
          </div>
        </div>
      </div>
      <div className="flex-grow flex items-center justify-center gameField">
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
      {end === "lose" ? (
        <LooseScreen
          end={end}
          onRetryClick={() => {
            onRetryClick();
          }}
          onStartPageClick={onStartPageClick}
        />
      ) : end === "win" ? (
        <WinScreen
          end={end}
          onRetryClick={() => {
            onRetryClick();
          }}
          onStartPageClick={onStartPageClick}
        ></WinScreen>
      ) : (
        <></>
      )}
    </div>
  );
};

export default GameField;
