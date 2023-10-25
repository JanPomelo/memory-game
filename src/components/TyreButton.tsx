import TyreButtonProps from "../interfaces/TyreButtonProps";

const TyreButton: React.FC<TyreButtonProps> = ({ onClick, tyreType, color }) => {
  return (
    <button onClick={onClick} className={ tyreType.toLowerCase() + "Button startPageButton"}>
      <div className="tyreButton">
        <span className={"pirelli" + color} />
        <span className={"pirelli" + color} />
        <div className={"tyreText " + tyreType.toLowerCase() +"Tyre"}>
          <div className="rim">
            <div className="rimHoles">
              <div className="rimHoles2">
                <div className="yellowRing">
                  <div className="whiteRing"></div>
                </div>
              </div>
            </div>
            <div className="rimHolesAbs">
              <div className="rimHoles2Abs"></div>
            </div>
          </div>
        </div>

        <div className="blackRimDiv1"></div>
        <div className="blackRimDiv2"></div>
      </div>
      <p>{tyreType}</p>
    </button>
  );
};

export default TyreButton;
