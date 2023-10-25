"use strict";

import "./styles/App.css";
import StartScreen from "./components/StartScreen";
import { useState } from "react";
import GameScreen from "./components/GameScreen";

function App() {
  const [difficulty, setDifficulty] = useState("");

  function handleClick(e: React.MouseEvent<HTMLButtonElement>, dif: string) {
    const div = document.getElementById("startDiv") as HTMLDivElement;
    div.style.visibility = "hidden";
    const button = e.target as HTMLButtonElement;
    const text = button.lastChild as HTMLParagraphElement;
    text.innerText = "Loading...";
    if (button.classList.contains("softButton")) {
      button.classList.add("selectedSoft");
    } else if (button.classList.contains("hardButton")) {
      button.classList.add("selectedHard");
    }
    button.classList.add("selected");
    setTimeout(() => {
      setDifficulty(dif);
    }, 1000);
  } 

  return (
    <>
      {difficulty === "" ? (
        <StartScreen
          onSoftClick={(e) => {
            handleClick(e, "soft");
          }}
          onMediumClick={(e) => {
            handleClick(e, "medium");
          }}
          onHardClick={(e) => {
            handleClick(e, "hard");
          }}
        />
      ) : (
        <GameScreen difficulty={difficulty} />
      )}
    </>
  );
}
export default App;
