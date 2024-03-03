import { Modal } from "react-native"
import { Title, TitleConsulta, TitleName } from "../../components/Title/style"
import { ButtonModalStyle, ButtonSecondary } from "../../components/Button/style"
import { ButtonSecondaryTitle, ButtonTitle } from "../../components/ButtonTitle/style"
import { SelectContent, SelectView } from "./style"

import { Container, ContainerPerfil, Scroll } from "../../components/Container/style"
import { BoxSelect } from "../../components/BoxSelect"
import { useState } from "react"


export const SelectClinic = ({
    navigation
}) => {
    const [selectedClinic, setSelectedClinic] = useState(null);

    return (
        <Container>
            <Scroll>
                <SelectContent>
                    <TitleConsulta>Selecionar clínica</TitleConsulta>

                    <SelectView>
                        <BoxSelect />
                        <BoxSelect />
                        <BoxSelect />
                        <BoxSelect />
                    </SelectView>

                    <ButtonModalStyle onPress={() => navigation.navigate("SelectMedicoScreen")}>
                        <ButtonTitle>Continuar</ButtonTitle>
                    </ButtonModalStyle>

                    <ButtonSecondary onPress={() => navigation.navigate("Home")}>
                        <ButtonSecondaryTitle>Cancelar</ButtonSecondaryTitle>
                    </ButtonSecondary>

                </SelectContent>
            </Scroll>
        </Container>
    )
}