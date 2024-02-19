import { useState } from "react"
import { BtnListAppointment } from "../../components/BtnListAppointment/BtnListAppointment"
import { Calendarhome } from "../../components/CalendarHome/CalendarHome"
import { Container } from "../../components/Container/style"
import { HeaderHome } from "../../components/Header/HeaderHome"
import { FilterAppointment } from "./style"
import { CardConsulta } from "../../components/CardConsulta/CardConsulta"

export const Home = () => {
    const [statusLista, setStatusList] = useState("Pendente")
    return (
        <Container>
            <HeaderHome />

            {/* Calendario */}
            <Calendarhome />

            {/* Filtros (botoes) */}
            <FilterAppointment>
                {/* botão para agendadas */}
                <BtnListAppointment
                    textButton={"Agendadas"}
                    clickButton={statusLista === "pendente"}
                    onPress={() => setStatusList("pendente")}
                />

                {/* botão para realizadas */}
                <BtnListAppointment
                    textButton={"Realizadas"}
                    clickButton={statusLista === "realizadas"}
                    onPress={() => setStatusList("realizadas")}
                />

                {/* botão para canceladas */}
                <BtnListAppointment
                    textButton={"Canceladas"}
                    clickButton={statusLista === "canceladas"}
                    onPress={() => setStatusList("canceladas")}
                />
            </FilterAppointment>

            {/* Cards */}
            <CardConsulta/>
        </Container>
    )
}