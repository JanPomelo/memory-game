import LooseScreenProps from "../interfaces/LooseScreenProps";

const LooseScreen: React.FC<LooseScreenProps> = ({ end, onRetryClick, onStartPageClick }) => {
  return (
    <>
      {end === "lose" ? (
        <div className="loseScreen">
          <h4>You lost!</h4>
          <p>Try again or go back to the Start Screen</p>
          <div className="flex w-full justify-between">
            <button className="loseButtons" onClick={onRetryClick}>Retry</button>
            <button className="loseButtons" onClick={onStartPageClick}>Startpage</button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default LooseScreen
