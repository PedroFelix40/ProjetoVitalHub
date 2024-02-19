import styled, { css } from "styled-components";

export const ButtonTabStyle = styled.TouchableHighlight`
    padding: 12px 14px;
    border-radius: 5px;

    /* Validação botão */
    ${(props) => props.clickButton ? css`
        background-color: #496bba;
    `:
        css`
        background-color: #fbfbfb;
        border: 2px solid #607ec5;
    `}
`

export const ButtonTextStyle = styled.Text`
    font-size: 12px;
    font-family: 'MontserratAlternates_600SemiBold';

        /* Validação botão */
        ${(props) => props.clickButton ? css`
            color: #fbfbfb;
        `
        :
        css`
            color: #607EC5;
        `}
`