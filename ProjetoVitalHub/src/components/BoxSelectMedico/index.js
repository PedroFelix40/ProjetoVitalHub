import { ImageUser } from "../FotoPerfil/style"
import { Subtitle } from "../Text/style"
import { TitleName } from "../Title/style"
import { BoxInfosMedicos, BoxSelectMedicoStyle } from "./style"



export const BoxSelectMedico = () => {
    return(
        <BoxSelectMedicoStyle>
            <ImageUser source={{
                    uri: "https://github.com/guihenrique16.png",
                }}/>
            <BoxInfosMedicos>
            <TitleName>Dra. Alessandra</TitleName>

            <Subtitle>Demartologa, Esteticista</Subtitle>
            </BoxInfosMedicos>
        </BoxSelectMedicoStyle>
    )
}