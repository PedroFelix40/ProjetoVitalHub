
import { InputStyle } from "../Input/style"
import { InputLabel } from "../Label/style"
import { FieldContent } from "./style"

export const BoxInput = ({
    fieldWidth = 100,
    editable = false,
    textLabel,
    placeholder,
    fieldValue = null,
    onChangeText = null,
    keyType = 'default',
    maxLength
}) => {
    return(
        <FieldContent fieldWidth={fieldWidth}>
            <InputLabel
                textLabel={textLabel}
            />

            <InputStyle
                editable={editable}
                placeholder={placeholder}
                keyType={keyType}
                maxLength={maxLength}
                fieldValue={fieldValue}
                onChangeText={onChangeText}
            />
        </FieldContent>
    )
}