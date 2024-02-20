import { useState } from "react"
import { BtnListAppointment } from "../../components/BtnListAppointment/BtnListAppointment"
import { Calendarhome } from "../../components/CalendarHome/CalendarHome"
import { Container } from "../../components/Container/style"
import { HeaderHome } from "../../components/Header/HeaderHome"
import { FilterAppointment } from "./style"
import { CardConsulta } from "../../components/CardConsulta/CardConsulta"
import { ListComponent } from "../../components/List/List"

const Consultas = [
    { id: 1, nome: "Carlos", situacao: "pendente" },
    { id: 2, nome: "Pedro", situacao: "realizado" },
    { id: 3, nome: "Muriilo", situacao: "cancelado" },
    { id: 4, nome: "Pedro", situacao: "realizado" },
    { id: 5, nome: "Garbs", situacao: "cancelado" },
]

export const Home = () => {
    const [statusLista, setStatusList] = useState("pendente")
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
                    clickButton={statusLista === "realizado"}
                    onPress={() => setStatusList("realizado")}
                />

                {/* botão para canceladas */}
                <BtnListAppointment
                    textButton={"Canceladas"}
                    clickButton={statusLista === "cancelado"}
                    onPress={() => setStatusList("cancelado")}
                />
            </FilterAppointment>

            {/* Cards */}
            {/* <CardConsulta/> */}


            <ListComponent
                data={Consultas}
                keyExtractor={(item) => item.id}

                renderItem={( {item} ) =>
                    statusLista == item.situacao && (
                        <CardConsulta 
                            situacao={item.situacao}
                        />
                    )
                    // <CardConsulta/>

                }
            />

        </Container>
    )
}