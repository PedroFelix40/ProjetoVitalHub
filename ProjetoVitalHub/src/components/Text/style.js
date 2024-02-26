import styled from "styled-components";

export const TextAccount = styled.Text`
    font-size: 14px;
    font-family: 'MontserratAlternates_600SemiBold';
    color: #4E4B59;
    margin-top: 30px;
`

export const Subtitle = styled.Text`
    font-size: 16px;
    width: 90%;
    font-family: 'Quicksand_500Medium';
    color: #5F5C6B;
    text-align: center;
    margin-top: 15px;
    margin-bottom: 15px;
`

export const LinkUtil = styled.Text`
    color: #344F8F;
    font-size: 14px;
    font-family: "MontserratAlternates_600SemiBold";
    margin-top: 30px;
    text-decoration: underline;
`

export const TextAge = styled.Text`
    font-size: 14px;
    color: #8C8A97;
    font-family: "Quicksand_400Regular";
`
export const TypeBold = styled(TextAge)`
    font-size: 14px;
    font-family: "Quicksand_600SemiBold";
    color: ${(props) => props.situacao == "pendente" ? "#49b3ba" : '#8c8a97'};
`

export const TextStyle1 = styled.Text`
    font-size: 14;
    font-family: "Quicksand_600SemiBold";

    color: ${props => `${props.fieldColor}`};

`



