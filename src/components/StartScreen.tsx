"use strict";

import "../styles/Startpage.css";

import { useEffect, useState } from "react";

//const allDetails = fakeDrivers;

const StartScreen = () => {
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
          <form className="flex flex-col bg-white p-2">
            <h2 className="text-lg">Welcome to F1 Memory Card Game!</h2>
            <p>Choose the Difficulty</p>
          </form>
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
