import { Text } from "react-native"
import { ButtonModalStyle, ButtonSecondary } from "../../components/Button/style"
import { ButtonSecondaryTitle, ButtonTitle } from "../../components/ButtonTitle/style"
import CalendarMaximized from "../../components/CalendarMaximized/CalendarMaximized"
import { Container, Scroll } from "../../components/Container/style"
import { TextStyle1 } from "../../components/Text/style"
import { TitleConsulta } from "../../components/Title/style"
import { ContentSelect } from "../SelectMedicoScreen/style"
import InputSelect from "../../components/InputSelect"
import { InputLabel } from "../../components/Label/style"
import { LabelDate } from "./style"

export const SelectDate = () => {
    return (
        <Container>
            <Scroll>
                <ContentSelect>
                    <TitleConsulta>Selecione data</TitleConsulta>

                    <CalendarMaximized />

                    <LabelDate>Selecione um horário disponível</LabelDate>
                   <InputSelect/>

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