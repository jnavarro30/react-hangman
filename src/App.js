import React, { useState } from "react";
// media
import backgroundIMG from "./images/background_rope.jpg";
import click from "./audio/click.mp3";
// styles
import "./styles/app.scss";
// components
import Home from "./components/Home";
import Instructions from "./components/Instructions";
import Game from "./components/Game";

function App() {
  const [isActive, setIsActive] = useState({
    "home": false,
    "instructions": false,
    "game": true
  });

  const activateComponent = (component) => {
    // button sound effect
    new Audio(click).play();

    switch (component) {
      case "instructions" :
        setIsActive({"home": false, "instructions": true, "game": false});
        break;
      case "game" :
        setIsActive({"home": false, "instructions": false, "game": true});
        break;
      default :
        setIsActive({"home": true, "instructions": false, "game": false});
    }
  }
  
  return (
    <div className="App">
      <img src={backgroundIMG} alt="rope" />
      <main>
        { isActive.home ? <Home
          activateComponent={activateComponent}
        /> : null}
        { isActive.instructions ? <Instructions
          activateComponent={activateComponent}
        /> : null}
        { isActive.game ? <Game 
          activateComponent={activateComponent} 
        /> : null}
      </main>
   </div>
  );
}

export default App;
