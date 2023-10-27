import GameScreenProps from "../interfaces/GameScreenProps";
import { fakeDrivers } from "../drivers";
import { Driver } from "../types";
import GameField from "./GameField";
import { useEffect, useState } from "react";
import LoadingTyre from "./LoadingTyre";

const GameScreen: React.FC<GameScreenProps> = ({ difficulty, tyre, onStartPageClick, sound }) => {
  const [imgsLoaded, setImgsLoaded] = useState(false);

  function getCardArraySize(dif: string): number {
    switch (dif) {
      case "soft":
        return 5;
      case "medium":
        return 10;
      case "hard":
        return 20;
      default:
        return 0;
    }
  }

  function getPlayCards() {
    const arrSize: number = getCardArraySize(difficulty);
    const playArr: Driver[] = [];
    for (let i = 0; i < arrSize; i++) {
      let driver: Driver;
      let alreadyIn = false;
      do {
        alreadyIn = false;
        driver = fakeDrivers[Math.floor(Math.random() * 20)];
        for (let j = 0; j < playArr.length; j++) {
          if (driver.strPlayer === playArr[j].strPlayer) {
            alreadyIn = true;
          }
        }
      } while (alreadyIn);
      playArr.push(driver);
      console.log(alreadyIn);
    }
    return playArr;
  }

  const playArr = getPlayCards();

  useEffect(() => {
    const loadImg = (image: Driver) => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image();
        loadImg.src = image.strCutout;
        // wait 2 seconds to simulate loading time
        loadImg.onload = () =>
          setTimeout(() => {
            resolve(image.strCutout);
          }, 2000);

        loadImg.onerror = (err) => reject(err);
      });
    };
    Promise.all(playArr.map((image) => loadImg(image)))
      .then(() => setImgsLoaded(true))
      .catch((err) => console.log("Failed to load images", err));
  }, [playArr]);

  return (
    <>
      {imgsLoaded ? (
        <GameField sound={sound} playArr={playArr} onStartPageClick={onStartPageClick} />
      ) : (
        <LoadingTyre color={tyre.color} tyreType={tyre.tyreType} />
      )}
    </>
  );
};

export default GameScreen;
