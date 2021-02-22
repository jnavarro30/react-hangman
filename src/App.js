import React, { useState, useEffect } from "react";
// media
import backgroundIMG from "./images/background_rope.jpg";
import click from "./audio/click.mp3";
// styles
import "./styles/app.scss";
// components
import Home from "./components/Home";
import Instructions from "./components/Instructions";
import Game from "./components/Game";
import Results from "./components/Results";

function App() {
  const [isActive, setIsActive] = useState({
    "home": true,
    "instructions": false,
    "game": false,
    "results": false
  });
  const [lives, setLives] = useState(7);
  const [chosenWord, setChosenWord] = useState(null);
  const [hiddenWord, setHiddenWord] = useState(null);
  const [runWordnikApi, setRunWordnikApi] = useState(true);
  const [winOrLose, setWinOrLose] = useState("Win");

  const activateComponent = (component) => {
    new Audio(click).play();
    switch (component) {
      case "instructions" :
        setIsActive({"home": false, "instructions": true, "game": false, "results": false});
        break;
      case "game" :
        setIsActive({"home": false, "instructions": false, "game": true, "results": false});
        break;
      case "results" :
        setIsActive({"home": false, "instructions": false, "game": false, "results": true});
        break;
      default :
        setIsActive({"home": true, "instructions": false, "game": false, "results": false});
    }
  }
   
  useEffect(() => {
    const wordnikApi = async () => {
        let request = await fetch(`http://api.wordnik.com/v4/words.json/randomWord?api_key=${process.env.REACT_APP_WORDNIK_API_KEY}`),
            data = await request.json(),
            word = data.word;

        setChosenWord(word.toLowerCase());
        setHiddenWord("-".repeat(word.length));
    }
    wordnikApi();
  }, [setChosenWord, setHiddenWord, runWordnikApi]);

  const homeButton = () => {
    
    activateComponent("home");
    const letterEls = document.getElementsByClassName("letter");
    [...letterEls].forEach(elem => elem.style.visibility = "visible");
    setRunWordnikApi(!runWordnikApi);
    setLives(7);
}
  
  return (
    <div className="App">
      <img src={backgroundIMG} alt="rope" />
      <main>
        <Home
          activateComponent={activateComponent}
          isActive={isActive}
        />
        <Instructions
          activateComponent={activateComponent}
          isActive={isActive}
        />
        <Game 
          activateComponent={activateComponent} isActive={isActive}
          lives={lives} setLives={setLives}
          chosenWord={chosenWord} setChosenWord={setChosenWord}
          hiddenWord={hiddenWord} setHiddenWord={setHiddenWord}
          runWordnikApi={runWordnikApi} setRunWordnikApi={setRunWordnikApi}
          homeButton={homeButton}
          setWinOrLose={setWinOrLose}
        />
        <Results 
          activateComponent={activateComponent}
          isActive={isActive} setIsActive={setIsActive}
          homeButton={homeButton}
          chosenWord={chosenWord}
          winOrLose={winOrLose}
        />
        
      </main>
   </div>
  );
}

export default App;


// Results component