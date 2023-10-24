"use strict";

import "../styles/Startpage.css";
import StartScreenProps from "../interfaces/StartScreenProps";
import { useEffect, useState } from "react";

//const allDetails = fakeDrivers;

const StartScreen: React.FC<StartScreenProps> = () => {
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
          <div className="flex flex-col bg-white pb-2 rounded-2xl border-2 border-black max-w-xl">
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
              <button>
                <div className="tyreButton">
                  <span className="pirelliRed" />
                  <span className="pirelliRed" />
                  <div className="tyreText softTyre">
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
                Soft
              </button>
              <button>
                <div className="tyreButton">
                  <span className="pirelliYellow" />
                  <span className="pirelliYellow" />
                  <div className="tyreText mediumTyre">
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
                Medium
              </button>
              <button>
                <div className="tyreButton">
                  <span className="pirelliWhite" />
                  <span className="pirelliWhite" />
                  <div className="tyreText hardTyre">
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
                Hard
              </button>
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
