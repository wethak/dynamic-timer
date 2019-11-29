import React from "react";
import "./App.css";
import Timer from "./Timer.jsx";

const time = 10000000;

function App() {
  return (
    <div>
      <Timer time={time} />
    </div>
  );
}

export default App;
