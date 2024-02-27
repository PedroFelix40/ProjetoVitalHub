import { Modal } from "react-native"
import { Title, TitleConsulta, TitleName } from "../../components/Title/style"
import { ButtonModalStyle, ButtonSecondary } from "../../components/Button/style"
import { ButtonSecondaryTitle, ButtonTitle } from "../../components/ButtonTitle/style"
import { SelectContent, SelectView } from "./style"

import { Container, ContainerPerfil, Scroll } from "../../components/Container/style"
import { BoxSelect } from "../../components/BoxSelect"
import { useState } from "react"


export const SelectClinic = () => {
    const [selectedClinic, setSelectedClinic] = useState(null);

    return (
        <Container>
            <SelectContent>
                <TitleConsulta>Selecionar clínica</TitleConsulta>

                <SelectView>
                    <BoxSelect/>
                    <BoxSelect/>
                    <BoxSelect/>
                    <BoxSelect/>
                    
                </SelectView>

                <ButtonModalStyle>
                    <ButtonTitle>Continuar</ButtonTitle>
                </ButtonModalStyle>

                <ButtonSecondary>
                    <ButtonSecondaryTitle>Cancelar</ButtonSecondaryTitle>
                </ButtonSecondary>

            </SelectContent>
        </Container>
    )
}