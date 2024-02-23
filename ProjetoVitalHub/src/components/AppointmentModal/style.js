import styled from "styled-components";
import { PatientModal } from "../CancellationModal/style";

export const AppointmentModalStyle = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.60);
`

export const AppointmentContent = styled.View`
    padding: 30px 30px 10px;
    width: 90%;
    border-radius: 10px;
    background-color: #fff;
    align-items: center;
`

export const ImagePatient = styled.Image`
    width: 285px;
    height: 181px;
    border-radius: 10px;
`

export const ConsultasContent = styled(AppointmentContent)`
    width: 100%;
`

export const BoxConsultasInput = styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: 92%;
`

