import { ButtonTabStyle, ButtonTextStyle, TextStyle } from "./style"

export const BtnListAppointment = ({
    textButton,
    clickButton = false,
    onPress,
    fieldBorderColor = "#496bba",
}) => {
    return(
        <ButtonTabStyle fieldBorderColor={fieldBorderColor} clickButton={clickButton} onPress={onPress}>
            <ButtonTextStyle clickButton={clickButton}>{textButton}</ButtonTextStyle>
        </ButtonTabStyle>
    );
};

export const BntListConsulta = ({
    textButton,
    clickButton = false,
    onPress,
    fieldBorderColor = "#60BFC5",
}) =>{
    return(
        <ButtonTabStyle fieldBorderColor={fieldBorderColor} clickButton={clickButton} onPress={onPress}>
            <TextStyle clickButton={clickButton}>{textButton}</TextStyle>
        </ButtonTabStyle>
    )
}