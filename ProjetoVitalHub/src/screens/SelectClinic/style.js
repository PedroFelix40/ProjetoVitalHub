import styled from "styled-components";

export const SelectContent = styled.View`
    /* justify-content: center; */
    align-items: center;

    width: 100%; 

    /* border: 2px solid blue; */

`

export const SelectView = styled.View`
    width: 100%; 
    height: max-content;

    gap: 12px;

    align-items: center;
    /* justify-content: space-between; */

    margin-top: 35px; 
`

export const BoxSelectStyle = styled.TouchableOpacity`
    width: 90%;
    height: 84px;

    border-radius: 5px;
    /* border: 2px solid blue; */
    margin: 15px 0px;
    background-color: white;

    justify-content: space-around;
    padding: 10px;

    box-shadow: 0 4px 4px #000;
    /* box-shadow: 10px 10px 5px rgb( 0, 0, 0); */

    ${(props) =>
    props.clickButton &&
    css`
      border: 2px solid gray;
    `}  

    shadow-color: gray;
     shadow-opacity: 0.5;
    shadow-offset: 5px 5px;
    shadow-radius: 5px;
    elevation: 10;
`

export const BoxDay = styled.View`
    height: 26px;
    width: 100px;

    border: 1px solid #E8FCFD;
    border-radius: 5px;
    background-color: #E8FCFD;

    flex-direction: row;
    align-items: center;

    justify-content: space-around;
`

export const BoxInformacoes = styled.View`
    flex-direction: row;
    justify-content: space-between;
`