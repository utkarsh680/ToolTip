import "rc-tooltip/assets/bootstrap.css";
import React, { useState } from "react";
import Bottom from "./Components/bottom";
import Top from "./Components/top";
import Right from "./Components/right";
import Left from "./Components/left";
import Select from "./Components/select";
import Footer from "./Components/footer";

const App = () => {

  const [tooltip, setTooltip] = useState("Select option");
  return (
    <div>
      <div className="radio-button">
        <div className="radio-button-title">
          <label for="top">
            <input
              type="radio"
              id="top"
              name="tooltip"
              value="TOP"
              onClick={() => setTooltip("TOP")}
            />
            Top
          </label><br />
          <label for="right">
            <input
              type="radio"
              id="right"
              name="tooltip"
              value="RIGHT"
              onClick={() => setTooltip("RIGHT")}

            />
            Right
          </label><br />
          <label for="bottom">
            <input
              type="radio"
              id="bottom"
              name="tooltip"
              value="BOTTOM"
              onClick={() => setTooltip("BOTTOM")}
            />
            Bottom
          </label><br />
          <label for="left">
            <input
              type="radio"
              id="left"
              name="tooltip"
              value="LEFT"
              onClick={() => setTooltip("LEFT")}
            />
            Left
          </label>
        </div>
      </div>
      <div className="App">
        {tooltip === "TOP" ? <Top />
        : tooltip === "RIGHT" ? <Right />
        : tooltip === "BOTTOM" ? <Bottom />
        : tooltip === "LEFT" ? <Left />
        : <Select />}
      </div>
      <Footer />
    </div>
  );
}

export default App;
