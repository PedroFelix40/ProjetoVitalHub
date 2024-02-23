
import { BoxInput } from "../../components/BoxInput"

import { Button, ButtonSecondary } from "../../components/Button/style"
import { ButtonSecondaryTitle, ButtonTitle } from "../../components/ButtonTitle/style"
import { Container, ContainerPerfil, Scroll } from "../../components/Container/style"
import { FotoStyle } from "../../components/FotoPerfil/style"
import { Subtitle } from "../../components/Text/style"
import { Title } from "../../components/Title/style"

export const MedicoProntuario = () => {
    return (
        <Scroll>
            <Container>
                <FotoStyle source={{
                    uri: "https://github.com/Filipe-Gois.png",
                }} />

                <Title>Gelipe fois</Title>
                <Subtitle>15 anos fythoy@gmail.com</Subtitle>

                <ContainerPerfil>
                    <BoxInput
                        fieldColor={"#34898F"}
                        fieldBorderColor={"#49B3BA"}
                        fieldHeight={121}
                        textLabel='Descrição da consulta'
                        placeholder='Descrição'
                    />
                    
                    <BoxInput
                        fieldColor={"#34898F"}
                        fieldBorderColor={"#49B3BA"}
                        fieldHeight={53}
                        textLabel='Diagnóstico do paciente'
                        placeholder='Diagnóstico'
                    />
                    
                    <BoxInput
                        fieldColor={"#34898F"}
                        fieldBorderColor={"#49B3BA"}
                        fieldHeight={121}
                        textLabel='Prescrição médica'
                        placeholder='Prescrição médica'
                    />

                    <Button>
                        <ButtonTitle>Salvar</ButtonTitle>
                    </Button>

                    <Button>
                        <ButtonTitle>editar</ButtonTitle>
                    </Button>

                    <ButtonSecondary>
                        <ButtonSecondaryTitle>Cancelar</ButtonSecondaryTitle>
                    </ButtonSecondary>
                </ContainerPerfil>

            </Container>
        </Scroll>
    )
}