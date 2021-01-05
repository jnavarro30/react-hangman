import React from "react";
// media
import backgroundIMG from "./images/background_rope.jpg";
import click from "./audio/click.mp3";
// styles
import "./styles/app.scss";
// components
import Home from "./components/Home";
import Instructions from "./components/Instructions";

function App() {
  const soundEffectHandler = _ => new Audio(click).play();

  return (
    <div className="App">
      <img src={backgroundIMG} alt="rope" />
      <main>
        {1 == 2 ? <Instructions soundEffectHandler={soundEffectHandler} /> : null}
        <Home soundEffectHandler={soundEffectHandler} />
      </main>
   </div>
  );
}

export default App;
