import LooseScreenProps from "../interfaces/LooseScreenProps";

const LooseScreen: React.FC<LooseScreenProps> = ({ end, onRetryClick, onStartPageClick }) => {
  return (
    <>
      {end === "lose" ? (
        <div className="loseScreen endScreen">
          <div className="flex flex-col gap-2 loseText">
            <h4>You lost!</h4>
            <p>Try again or go back to the Start Screen</p>
          </div>
          <div className="flex w-full justify-between bgLose">
            <button className="loseButtons" onClick={onRetryClick}>Retry</button>
            <button className="loseButtons" onClick={onStartPageClick}>Startscreen</button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default LooseScreen
