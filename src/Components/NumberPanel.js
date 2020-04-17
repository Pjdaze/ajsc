import React from "react";
import NumberPanelWrap from "../styled-components/NumberPanelWrap";

const NumberPanel = () => {
  const numbers = [0, 1, 2, 4, 5, 6, 7, 8, 9];

  return (
    <NumberPanelWrap>
      {numbers.map((x) => (
        <li>{x}</li>
      ))}
    </NumberPanelWrap>
  );
};

export default NumberPanel;
