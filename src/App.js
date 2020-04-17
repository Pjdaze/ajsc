import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Calculator from "./styled-components/Calculator";
import CalculatorDisplay from "./Components/CalculatorDisplay";
import NumberPanel from "./Components/NumberPanel";

const myAwseomeStyle = {
  color: "#222",
  background: "#fff",
};

const App = () => {
  return (
    <div style={{ myAwseomeStyle }} className="App header">
      <h1>Free Code Camp JS Calculator</h1>
      <Calculator>
        <CalculatorDisplay className="calculator-display" />
        <NumberPanel />
      </Calculator>
    </div>
  );
};

export default App;
