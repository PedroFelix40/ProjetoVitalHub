import { InputDados } from "./style"

export const InputText = ({
    placeholder,
    fieldValue = null,
    onChangeText = null,
    keyType,
    maxLength
}) => {
    return (
        <InputDados
            placeholder={placeholder}
            keyBoardType={keyType}
            maxLength={maxLength}
            value={fieldValue}
            onChangeText={onChangeText}
        />
    )
}