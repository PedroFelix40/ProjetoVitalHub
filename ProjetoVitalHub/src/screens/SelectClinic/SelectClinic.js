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
    const [selectedClinic, setSelectedClinic] = useState("teste");

    return (
        <Container>
            <Scroll>
                <SelectContent>
                    <TitleConsulta>Selecionar clínica</TitleConsulta>

                    <SelectView>
                        <BoxSelect
                            clickButton={selectedClinic === "clinica1"}
                            onPress={() => setSelectedClinic("clinica1")}
                            />
                        <BoxSelect
                            clickButton={selectedClinic === 'clinica2'}
                            onPress={() => setSelectedClinic("clinica2")}
                            />
                        <BoxSelect
                            clickButton={selectedClinic === 'clinica3'}
                            onPress={() => setSelectedClinic("clinica3")}
                            />
                        <BoxSelect
                            clickButton={selectedClinic === 'clinica4'}
                            onPress={() => setSelectedClinic("clinica4")}
                            />

                    </SelectView>

                    <ButtonModalStyle onPress={() => navigation.navigate("SelectMedicoScreen")}>
                        <ButtonTitle>Continuar</ButtonTitle>
                    </ButtonModalStyle>

                    <ButtonSecondary onPress={() => navigation.replace("Main")}>
                        <ButtonSecondaryTitle>Cancelar</ButtonSecondaryTitle>
                    </ButtonSecondary>

                </SelectContent>
            </Scroll>
        </Container>
    )
}