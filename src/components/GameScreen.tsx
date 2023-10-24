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
      let alreadyIn = false;
      let driver: Driver;
      do {
        driver = fakeDrivers[Math.random() * 5];
        for (let j = 0; j < playArr.length; j++) {
          if (driver.strPlayer === playArr[j].strPlayer) {
            alreadyIn = true;
          }
        }
      } while (!alreadyIn);
      playArr.push(driver);
    }
    return playArr;
  }

  return <GameField playArr={getPlayCards()}/>;
};

export default GameScreen;
