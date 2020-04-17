import styled from "styled-components";

const Calculator = styled.div`
  height: 600px;
  width: 400px;
  margin: 0 auto;
  box-shadow: 0 0 1px 2px #fff;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .calculator-display {
    box-shadow: inset 0 0 3px 2px #fff;
    border: 1px solid #fff;
    display: flex;
    height: 40px;
    padding: 10px;
    border-radius: 4px;
  }
`;

export default Calculator;
