import styled from "styled-components";

export const CardConsultaStyle = styled.View`
  width: 90%;
  height: 102px;
  padding: 10px 20px 10px 10px;
  background-color: #ffffff;
  flex-direction: row;
  /* margin-top: 20px; */
  justify-content: space-between;

  box-shadow: 0 1px 1px #000;
`

export const InfoTextBox = styled.View`
  width: 50%;
  height: 100%;
  /* border: 2px solid red; */
  justify-content: space-between;
`;

export const AgeAndTypeBox = styled(InfoTextBox)`
  flex-direction: row;
  height: max-content;
  flex-direction: row;
  width: 100%;
  border: none;
  justify-content: flex-start;
`;