import styled from "styled-components";

const NumberPanelWrap = styled.div`
  width: 95%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 3px;
`;

export default NumberPanelWrap;
