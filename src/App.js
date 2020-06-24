import React from "react";
import "./App.css";
import Info from "./Info.js";
import Picture from "./Picture.js";

function App() {
  return (
    <div className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}
        <header>
            <img className="headerImg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/NASA_Worm_logo.svg/1280px-NASA_Worm_logo.svg.png"/>
            <Picture/>
            <Info/>
        </header>
    </div>
  );
}

export default App;
