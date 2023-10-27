import GameScreenProps from "../interfaces/GameScreenProps";
import { drivers } from "../drivers";
import { Driver } from "../types";
import GameField from "./GameField";
import { useEffect, useState } from "react";
import LoadingTyre from "./LoadingTyre";
import { getDriverDetails } from "../apiCalls";

const GameScreen: React.FC<GameScreenProps> = ({ difficulty, tyre, onStartPageClick, sound }) => {
  const [playArr, setPlayArr] = useState([] as Driver[]);

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
  const arrSize = getCardArraySize(difficulty);

  useEffect(() => {
    async function driverArray() {
      const gameArr = [] as Driver[];
      let driver;
      for (let i = 0; i < arrSize; i++) {
        let alreadyIn = false;
        do {
          alreadyIn = false;
          driver = await getDriverDetails(drivers[Math.floor(Math.random() * 20)]);
          if (driver) {
            for (let j = 0; j < gameArr.length; j++) {
              if (driver.strPlayer === gameArr[j].strPlayer) {
                alreadyIn = true;
              }
            }
          } else {
            console.log("Failed to fetch Driver information!");
          }
        } while (alreadyIn);
        if (driver) {
          gameArr.push(driver);
        }
      }
      setPlayArr(gameArr);
    }
    driverArray();

    return () => {
      setPlayArr([] as Driver[]);
    };
  }, [arrSize, difficulty]);
  /*
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
*/
  return (
    <>
      {playArr.length === arrSize ? (
        <GameField sound={sound} playArr={playArr} onStartPageClick={onStartPageClick} />
      ) : (
        <LoadingTyre color={tyre.color} tyreType={tyre.tyreType} />
      )}
    </>
  );
};

export default GameScreen;
