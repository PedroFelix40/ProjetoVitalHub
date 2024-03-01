import { Modal } from "react-native"
import { Title, TitleConsulta } from "../Title/style"

import fotoPerfil from '../../../assets/FotoPerfil.png'
import { ButtonModal, ButtonModalStyle, ButtonSecondary } from "../Button/style"
import { ButtonSecondaryTitle, ButtonTitle } from "../ButtonTitle/style"
import { AppointmentContent, AppointmentModalStyle, BoxConsultasInput, BoxInfosConsultas, ConsultaStyleModal, ConsultasContent, ConsultasModalStyle, ImagePatient } from "./style"
import { Subtitle, TextQuick } from "../Text/style"
import { BoxInput } from "../BoxInput"
import { BntListConsulta, BtnListAppointment } from "../BtnListAppointment/BtnListAppointment"
import { Label } from "../Label"


export const AppointmentModal = ({
    visible,
    setShowModalAppointment,
}) => {
    return (
        <Modal visible={visible} transparent={true} animationType="fade">
            {/* Container */}
            <AppointmentModalStyle>

                <AppointmentContent>
                    <ImagePatient source={fotoPerfil} />

                    <Title>Pedro</Title>

                    <Subtitle>22 anos * niccole@gmail.com</Subtitle>

                    <ButtonModal>
                        <ButtonTitle>Inserir protuário</ButtonTitle>
                    </ButtonModal>

                    <ButtonSecondary onPress={() => setShowModalAppointment(false)}>
                        <ButtonSecondaryTitle>Cancelar</ButtonSecondaryTitle>
                    </ButtonSecondary>
                </AppointmentContent>
            </AppointmentModalStyle>
        </Modal>
    )
}

export const ModalConsultas = ({
    visible,
    setShowModalConsultas,
    navigation
}) => {
    return (
        <Modal visible={visible} transparent={true} animationType="fade">
            <ConsultaStyleModal>
                <ConsultasContent>

                    <TitleConsulta>Agendar consulta</TitleConsulta>


                    <Label
                        textLabel={"Qual o nível da consulta"}
                    />
                    <BoxConsultasInput>

                        <BntListConsulta
                            textButton={"Rotina"}
                            fieldBorderColor="#60BFC5"
                        />

                        <BntListConsulta
                            textButton={"Exame"}
                            fieldBorderColor="#60BFC5"
                        />

                        <BntListConsulta
                            textButton={"Urgência"}
                            fieldBorderColor="#60BFC5"
                        />

                    </BoxConsultasInput>

                    <BoxInput
                        fieldColor={"#34898F"}
                        fieldBorderColor={"#49B3BA"}
                        fieldHeight={53}
                        textLabel='Descrição da consulta'
                        placeholder='Descrição'
                    />

                    <ButtonModalStyle onPress={() => navigation.navigate("SelectClinic") || setShowModalConsultas(false)}>
                        <ButtonTitle>Continuar</ButtonTitle>
                    </ButtonModalStyle>

                    <ButtonSecondary onPress={() => setShowModalConsultas(false)}>
                        <ButtonSecondaryTitle>Cancelar</ButtonSecondaryTitle>
                    </ButtonSecondary>

                </ConsultasContent>
            </ConsultaStyleModal>
        </Modal>
    )
}

export const ModalAgendarConsulta = ({
    visible,
    setShowModalAgendar,
    navigation
}) => {
    return (
        <Modal visible={visible} transparent={true} animationType="fade">
            {/* Container */}
            <AppointmentModalStyle>

                <AppointmentContent>
                    {/* <ImagePatient source={fotoPerfil} /> */}

                    <Title>Agendar consulta</Title>

                    <Subtitle>Consulte os dados selecionados para a sua consulta</Subtitle>

                    <BoxInfosConsultas>
                        <TextQuick>Data da consulta</TextQuick>
                        <Subtitle margin={"8px 0px 20px"}>1 de Novembro de 2023</Subtitle>

                        <TextQuick>Médico(a) da consulta</TextQuick>
                        <Subtitle margin={"5px 0px 0px"}>Dra Alessandra</Subtitle>
                        <Subtitle margin={"3px 0px 20px"}>Demartologa, Esteticista</Subtitle>

                        <TextQuick>Local da consulta</TextQuick>
                        <Subtitle margin={"5px 0px 20px"}>São Paulo, SP</Subtitle>

                        <TextQuick>Tipo da consulta</TextQuick>
                        <Subtitle margin={"5px 0px 0px"}>Rotina</Subtitle>
                    </BoxInfosConsultas>

                    <ButtonModalStyle onPress={() => navigation.navigate("Home")}>
                        <ButtonTitle>Confirmar</ButtonTitle>
                    </ButtonModalStyle>

                    <ButtonSecondary onPress={() => setShowModalAgendar(false)}>
                        <ButtonSecondaryTitle>Cancelar</ButtonSecondaryTitle>
                    </ButtonSecondary>
                </AppointmentContent>
            </AppointmentModalStyle>
        </Modal>
    )
}

export const ModalPerfilMed = ({
    visible,
    setShowModalPerfilMed,
    navigation,
}) => {
    return (
        <Modal visible={visible} transparent={true} animationType="fade">
            {/* Container */}
            <AppointmentModalStyle>

                <AppointmentContent>
                    <ImagePatient
                        // margin={"20px"}
                        source={{ uri: "https://media.licdn.com/dms/image/D4D03AQFY7jiWefxVnA/profile-displayphoto-shrink_800_800/0/1678934773265?e=1714608000&v=beta&t=ez1fnmpbDyUkDmRn3GHLkjaw05s7n8f6jb8Pik-_RUg" }} />

                    <Title>Dr. Irmão do Murilo</Title>

                    <Subtitle>Cliníco geral    CRM-15286</Subtitle>

                    <ButtonModal onPress={() => navigation.navigate("Mapa") || setShowModalPerfilMed(false)}>
                        <ButtonTitle>Ver local da consulta</ButtonTitle>
                    </ButtonModal>

                    <ButtonSecondary onPress={() => setShowModalPerfilMed(false)}>
                        <ButtonSecondaryTitle>Cancelar</ButtonSecondaryTitle>
                    </ButtonSecondary>
                </AppointmentContent>
            </AppointmentModalStyle>
        </Modal>
    )
}

