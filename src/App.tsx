"use strict";

import "./styles/App.css";
import StartScreen from "./components/StartScreen";
import { useState } from "react";
import GameScreen from "./components/GameScreen";
import sound from "./assets/backGround.mp3";
import startSound from "./assets/startSound.mp3";
const bgMusic = new Audio(sound);
const start = new Audio(startSound);

function play() {
  bgMusic.loop = true;
  bgMusic.volume = 0.2;
  bgMusic.play();
}

function stop() {
  bgMusic.pause();
}

function App() {
  const [difficulty, setDifficulty] = useState("");
  const [tyre, setTyre] = useState({ tyreType: "", color: "" });
  const [music, setMusic] = useState(false);
  const [sound, setSound] = useState(true);

  function controlMusic() {
    if (music) {
      stop();
      setMusic(false);
    } else {
      play();
      setMusic(true);
    }
  }

  function controlSound() {
    if (sound) {
      setSound(false);
    } else {
      setSound(true);
    }
  }

  function handleClick(e: React.MouseEvent<HTMLButtonElement>, dif: string) {
    if (sound) {
      start.play();
    }
    let selectedColor = "";
    const div = document.getElementById("startDiv") as HTMLDivElement;
    div.style.visibility = "hidden";
    const button = e.target as HTMLButtonElement;
    const text = button.lastChild as HTMLParagraphElement;
    text.innerText = "Loading...";
    if (button.classList.contains("softButton")) {
      button.classList.add("selectedSoft");
      selectedColor = "Red";
    } else if (button.classList.contains("hardButton")) {
      button.classList.add("selectedHard");
      selectedColor = "White";
    } else {
      selectedColor = "Yellow";
    }
    button.classList.add("selected");
    setTimeout(() => {
      setDifficulty(dif);
      setTyre({ tyreType: dif.toLocaleUpperCase(), color: selectedColor });
    }, 1000);
  }

  function onStartPageClick() {
    const gameField = document.getElementsByClassName("gameField")[0] as HTMLDivElement;
    gameField.classList.add("transformed");
    const loseScreen = document.getElementsByClassName("endScreen")[0];
    if (loseScreen) {
      loseScreen.classList.add("transformed");
    }
    setTimeout(() => {
      setDifficulty("");
    }, 200);
  }
  return (
    <div className="h-full w-full">
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
        <GameScreen
          sound={sound}
          difficulty={difficulty}
          tyre={tyre}
          onStartPageClick={() => {
            onStartPageClick();
          }}
        />
      )}
      <label htmlFor="musicBut" className="butDescmusic">
        Music
      </label>
      <button id="musicBut" className={music + "music musicButton roundBut"} onClick={controlMusic}></button>
      <label htmlFor="soundBut" className="butDescsound">
        SFX
      </label>
      <button id="soundBut" className={sound + "Sound soundButton roundBut"} onClick={controlSound}></button>
      <label htmlFor="githubBut" className="butDescGH">
        GitHub & Credits
      </label>
      <a
        href="https://www.github.com/janpomelo/memory-game"
        target="_blank"
        id="githubBut"
        className="githubBut roundBut"
      ></a>
    </div>
  );
}
export default App;
