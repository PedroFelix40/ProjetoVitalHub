import { ButtonTitle } from "../ButtonTitle/style"
import { ButtonModalStyle, ButtonStyled } from "./style"

export const Button = ({
    fieldBckColor = "#496bba",
}) => {
    return (
        <ButtonStyled
            fielBckColor={fieldBckColor}
        />
    )
}

export const ButtonModalConfirmar = ({
    textValue,
    onPressConfirmar
}) => {
    return (
        <ButtonModalStyle onPress={onPressConfirmar}>
            <ButtonTitle>{textValue}</ButtonTitle>
        </ButtonModalStyle>
    )
}