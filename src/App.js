import React from "react";
import Info from "./Info.js";
import Picture from "./Picture.js";

import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}

      <img className="headerImg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/NASA_Worm_logo.svg/1280px-NASA_Worm_logo.svg.png"/>
      <div>
        <p>Astronomy Picture of the Day</p>
      </div>
      <Picture/>
      <Info/>
    </div>
  );
}

export default App;
