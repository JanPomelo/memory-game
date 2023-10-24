"use strict";

import "./styles/App.css";
import StartScreen from "./components/StartScreen";
import { useState } from "react";
import GameScreen from "./components/GameScreen";

function App() {
  const [difficulty, setDifficulty] = useState("");

  function handleClick(dif: string) {
    setDifficulty(dif);
  }
  return (
    <>
      {difficulty === "" ? (
        <StartScreen
          onSoftClick={() => {
            handleClick("soft");
          }}
          onMediumClick={() => {
            handleClick("medium");
          }}
          onHardClick={() => {
            handleClick("hard");
          }}
        />
      ) : (
        <GameScreen difficulty={difficulty} />
      )}
    </>
  );
}
export default App;
