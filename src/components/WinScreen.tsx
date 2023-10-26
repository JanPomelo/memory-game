"use strict";

import LooseScreenProps from "../interfaces/LooseScreenProps";

const WinScreen: React.FC<LooseScreenProps> = ({ onRetryClick, onStartPageClick }) => {
  return (
    <div className="endScreen winScreen">
      <div className="flex flex-col gap-2 loseText">
        <h4>You won!</h4>
        <p>Play again or go back to the Start Screen</p>
      </div>
      <div className="flex w-full justify-between bgLose">
        <button className="loseButtons" onClick={onRetryClick}>
          Play Again
        </button>
        <button className="loseButtons" onClick={onStartPageClick}>
          Startscreen
        </button>
      </div>
    </div>
  );
};

export default WinScreen;
