import React from "react";
// image
import backgroundIMG from "./images/background_rope.jpg";
// styles
import "./styles/app.scss";
// components
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <img src={backgroundIMG} alt="rope" />
      <main>
        <Home />
      </main>
   </div>
  );
}

export default App;
