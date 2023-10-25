import LoadingTyreProps from "../interfaces/LoadingTyreProps";

const LoadingTyre: React.FC<LoadingTyreProps> = ({ color, tyreType }) => {
  return (
    <div className="flex justify-center items-center h-full">
      <button className={tyreType.toLowerCase() + "Button selectedLoading startPageButton"}>
        <div className="tyreButton">
          <span className={"pirelli" + color} />
          <span className={"pirelli" + color} />
          <div className={"tyreText " + tyreType.toLowerCase() + "Tyre"}>
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
        <p className="text-white">Loading...</p>
      </button>
    </div>
  );
};

export default LoadingTyre;
