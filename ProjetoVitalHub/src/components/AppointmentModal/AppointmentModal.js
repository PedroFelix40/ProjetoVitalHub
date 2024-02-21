import { Modal } from "react-native"
import { Title } from "../Title/style"

import fotoPerfil from '../../../assets/FotoPerfil.png'
import { ButtonModal, ButtonSecondary } from "../Button/style"
import { ButtonSecondaryTitle, ButtonTitle } from "../ButtonTitle/style"
import { AppointmentContent, AppointmentModalStyle, ImagePatient } from "./style"
import { Subtitle } from "../Text/style"

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