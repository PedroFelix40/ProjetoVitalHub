import { BoxSelectMedico } from "../../components/BoxSelectMedico"
import { ButtonModalStyle, ButtonSecondary } from "../../components/Button/style"
import { ButtonSecondaryTitle, ButtonTitle } from "../../components/ButtonTitle/style"
import { Container, ContainerBox, Scroll } from "../../components/Container/style"
import { TitleConsulta } from "../../components/Title/style"
import { SelectView } from "../SelectClinic/style"
import { ContentSelect } from "./style"

export const SelectMedicoScreen = () => {
    return (
        <Container>
            <Scroll>
            <ContentSelect>
                <TitleConsulta>Selecionar médico</TitleConsulta>

                <SelectView>
                    <BoxSelectMedico />
                    <BoxSelectMedico />
                    <BoxSelectMedico />
                </SelectView>

                <ButtonModalStyle>
                    <ButtonTitle>Continuar</ButtonTitle>
                </ButtonModalStyle>

                <ButtonSecondary>
                    <ButtonSecondaryTitle>Cancelar</ButtonSecondaryTitle>
                </ButtonSecondary>
            </ContentSelect>
            </Scroll>
        </Container>
    )
}