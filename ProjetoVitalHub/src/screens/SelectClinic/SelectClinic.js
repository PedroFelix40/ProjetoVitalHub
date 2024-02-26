import { Modal } from "react-native"
import { Title, TitleName } from "../../components/Title/style"
import { ButtonModalStyle, ButtonSecondary } from "../../components/Button/style"
import { ButtonSecondaryTitle, ButtonTitle } from "../../components/ButtonTitle/style"
import { BoxDay, BoxInformacoes, SelectContent, SelectModalStyle, SelectView } from "./style"
import { TextStyle1 } from "../../components/Text/style"

import { Container, ContainerPerfil, Scroll } from "../../components/Container/style"
import { BoxSelect } from "../../components/BoxSelect"

export const SelectClinic = () => {
    return (
        <Container>
            <SelectContent>
                <Title>Selecionar clínica</Title>

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