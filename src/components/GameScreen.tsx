import GameScreenProps from "../interfaces/GameScreenProps";
import { fakeDrivers } from "../drivers";
import { Driver } from "../types";
import GameField from "./GameField";

const GameScreen: React.FC<GameScreenProps> = ({ difficulty }) => {
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

  return <GameField playArr={playArr} />;
};

export default GameScreen;
