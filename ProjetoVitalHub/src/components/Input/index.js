import { InputStyle } from "./style"

export const InputText = ({
    placeholder,
    fieldValue = null,
    onChangeText = null,
    keyType,
    maxLength
}) => {
    return (
        <InputStyle
            placeholder={placeholder}
            keyBoardType={keyType}
            maxLength={maxLength}
            value={fieldValue}
            onChangeText={onChangeText}
        />
    )
}