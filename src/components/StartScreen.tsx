"use strict";

import "../styles/Startpage.css";
import StartScreenProps from "../interfaces/StartScreenProps";
import { useEffect, useState } from "react";
import TyreButton from "./TyreButton";

//const allDetails = fakeDrivers;

const StartScreen: React.FC<StartScreenProps> = ({ onSoftClick, onMediumClick, onHardClick }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // callback function to call when event triggers
    const onPageLoad = () => {
      setLoaded(true);
      document.getElementById("bgImage")?.classList.add("pageLoaded");
    };
    // Check if the page has already loaded
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad, false);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  return (
    <>
      {loaded ? (
        <div className="flex flex-col justify-center items-center h-full">
          <div className="flex flex-col bg-white pb-2 rounded-2xl border-2 border-black max-w-xl" id="startDiv">
            <h2
              className="text-xl p-2 mb-2 text-white bg-asphalt rounded-t-xl shadow-lg"
              style={{
                textShadow: "1px 1px black",
              }}
            >
              Welcome to F1 Memory Card Game!
            </h2>
            <p className="text-sm px-2 my-2 leading-7">
              Can you pick every driver from the 2023 Formula 1 season without clicking on one driver twice? Test your
              memory now!
            </p>
            <p
              className="my-2"
              style={{
                textShadow: "1px 1px light-gray",
              }}
            >
              Choose the Difficulty
            </p>
            <div className="flex justify-around gap-2">
              <TyreButton onClick={onSoftClick} tyreType="Soft" color="Red" />
              <TyreButton onClick={onMediumClick} tyreType="Medium" color="Yellow"/>
              <TyreButton onClick={onHardClick} tyreType="Hard" color="White" />
            </div>
          </div>
        </div>
      ) : (
        <div className="loadingDiv">
          <div className="se-pre-con"></div>
          <p>Loading...</p>
        </div>
      )}
    </>
  );
};

export default StartScreen;
