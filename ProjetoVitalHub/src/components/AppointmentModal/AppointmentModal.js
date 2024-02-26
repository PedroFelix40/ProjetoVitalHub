import { Modal } from "react-native"
import { Title, TitleConsulta } from "../Title/style"

import fotoPerfil from '../../../assets/FotoPerfil.png'
import { ButtonModal, ButtonModalStyle, ButtonSecondary } from "../Button/style"
import { ButtonSecondaryTitle, ButtonTitle } from "../ButtonTitle/style"
import { AppointmentContent, AppointmentModalStyle, BoxConsultasInput, ConsultaStyleModal, ConsultasContent, ConsultasModalStyle, ImagePatient } from "./style"
import { Subtitle } from "../Text/style"
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
    setShowModalConsultas
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

                    <ButtonModalStyle>
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

