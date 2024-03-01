import styled from "styled-components";

export const Button = styled.TouchableOpacity`
    width: 90%;
    /* height: ${props => `${props.fieldHeight}px`}; */

    background-color: #496bba;
    /* background-color: ${props => `${props.fieldBckColor}`}; */
    border: 1px solid #496bba;
    /* margin-top: 30px; */
    padding: 12px 8px 12px 8px;
    border-radius: 5px;
    
    align-items: center;
    justify-content: center;
`
// ************************ Button Prontuário
//     width: ${props => `${props.fieldWidth}%`} ;

export const ButtonGoogle = styled(Button)`
    background-color: #FAFAFA;
    flex-direction: row;
    margin-top: 15px;
    gap: 27px;
`

export const ButtonModal = styled(Button)`
    width: 90%;  
    /* width: ${props => `${props.fieldWidth}%`}; */
    margin-top: 25px;
`

export const ButtonSecondary = styled(Button)`
    background-color: transparent;
    border: none;
    margin-top: 30px;
`

export const ButtonModalStyle = styled(Button)`
    width: 90%;
    margin-top: 25px;
`