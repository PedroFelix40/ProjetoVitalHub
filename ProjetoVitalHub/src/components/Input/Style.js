import styled from "styled-components";

export const InputStyle = styled.TextInput`
    width: 90%;
    height: 53px;

    border-radius: 5px;
    border: 2px solid #49b3ba;

    padding: 16px;
    margin-top: 15px;

    font-size: 14px;
    font-family: 'MontserratAlternates_600SemiBold';
    color: #34898f;
`

export const InputDados = styled(InputStyle)`
    width: 100%;
`

// border: 2px solid #a1a1a1;
// text-align: left;
// padding: 20px;
// border-radius: 10px;
// margin-top: 10px;
// width: 100%;
// font-size: 18px;
// font-family: 'Roboto_500Medium';

// /* Ver se precisa de import */
// ${props => !props.editable && css`
//     background-color: #f6f6f6
// `}

