import { BoxInput } from "../../components/BoxInput"
import { Button, ButtonSecondary } from "../../components/Button/style"
import { ButtonSecondaryTitle, ButtonTitle } from "../../components/ButtonTitle/style"
import { Container, ContainerBox, ContainerInput, Scroll } from "../../components/Container/style"
import { FotoStyle } from "../../components/FotoPerfil/style"
import { Subtitle } from "../../components/Text/style"
import { Title } from "../../components/Title/style"

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ContainerBoxPrescricao, Linha } from "./style"

export const Prescricao = ({
    navigation
}) => {
    return (
        <Container>
            <Scroll>
                <FotoStyle source={{ uri: "https://media.licdn.com/dms/image/D4D03AQE9_PLYntkCmw/profile-displayphoto-shrink_800_800/0/1708700875958?e=1715212800&v=beta&t=ZCHIpyvcu03a35K-8J0mVD387-G4HjKh0_xoUw2rINQ" }} />

                <Title marginTop={'20px'} textAlign={"center"}>Gelipe fois</Title>
                <Subtitle>15 anos fythoy@gmail.com</Subtitle>

                <ContainerInput>
                    <BoxInput
                        textLabel={"Descrição da consulta"}
                        placeholder={"Descrição da consulta..."}
                        fieldHeight={"121"}
                    />

                    <BoxInput
                        textLabel={"Diagnóstico do paciente"}
                        placeholder={"Diagnóstico..."}
                    />

                    <BoxInput
                        textLabel={"Prescrição médica"}
                        placeholder={"Prescrição médica..."}
                        fieldHeight={"133"}
                    />

                    <BoxInput
                        textLabel={"Exames médicos"}
                        placeholder={"                  Nenhuma foto informada"}
                        fieldHeight={"111"}
                    />


                    <ContainerBoxPrescricao>

                        <Button fieldGap={"10px"} fieldWidth={"54%"} fieldHeight={"44px"}>
                            <MaterialCommunityIcons name="camera-plus-outline" size={20} color="#fff" />
                            <ButtonTitle>Enviar</ButtonTitle>
                        </Button>


                        <ButtonSecondaryTitle onPress={() => navigation.navigate("Home")} color={"#C81D25"}>Cancelar</ButtonSecondaryTitle>

                    </ContainerBoxPrescricao>

                    <Linha/>

                    <BoxInput
                        textLabel={"Exames médicos"}
                        placeholder={"Resultado do exame de sangue:"}
                        fieldHeight={"103"}
                    />

                    <ButtonSecondary>
                        <ButtonSecondaryTitle>Voltar</ButtonSecondaryTitle>
                    </ButtonSecondary>
                </ContainerInput>


            </Scroll>
        </Container>
    )
}