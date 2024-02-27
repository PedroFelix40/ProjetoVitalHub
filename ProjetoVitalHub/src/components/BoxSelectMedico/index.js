import { ImageUser } from "../FotoPerfil/style"
import { Subtitle } from "../Text/style"
import { TitleName } from "../Title/style"
import { BoxSelectMedicoStyle } from "./style"

export const BoxSelectMedico = () => {
    return(
        <BoxSelectMedicoStyle>
            <ImageUser/>
            <TitleName>Dra. Alessandra</TitleName>

            <Subtitle></Subtitle>
        </BoxSelectMedicoStyle>
    )
}