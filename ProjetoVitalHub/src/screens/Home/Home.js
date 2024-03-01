import { useState } from "react"
import { BtnListAppointment } from "../../components/BtnListAppointment/BtnListAppointment"
import { Calendarhome } from "../../components/CalendarHome/CalendarHome"
import { Container } from "../../components/Container/style"
import { HeaderHome } from "../../components/Header/HeaderHome"
import { FilterAppointment, IconeAppointment } from "./style"
import { CardConsulta } from "../../components/CardConsulta/CardConsulta"
import { ListComponent } from "../../components/List/List"
import { CancellationModal } from "../../components/CancellationModal/CancellationModal"
import { AppointmentModal, ModalConsultas, ModalPerfilMed } from "../../components/AppointmentModal/AppointmentModal"
import { ButtonAppointment } from "../../components/ButtonAppointment"

const Consultas = [
    { id: 1, nome: "Carlos", situacao: "pendente" },
    { id: 2, nome: "Pedro", situacao: "realizado" },
    { id: 3, nome: "Muriilo", situacao: "cancelado" },
    { id: 4, nome: "Felix", situacao: "realizado" },
    { id: 5, nome: "Garbs", situacao: "cancelado" },
]

export const Home = ({
    navigation
}) => {

    // State para o estado da lista(cards)
    const [statusLista, setStatusList] = useState("pendente");

    // state para exibição dos modais
    const [showModalCancel, setShowModalCancel] = useState(false)
    const [showModalAppointment, setShowModalAppointment] = useState(false)
    const [showModalConsultas, setShowModalConsultas] = useState(false)
    const [showModalPerfilMed, setShowModalPerfilMed] = useState(false)

    return (
        <Container>
            {/* MUDAR O BACKGROUND COLOR
             */}
            <ButtonAppointment
                onPressConsulta={() => setShowModalConsultas(true)}
            />

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

                renderItem={({ item }) =>
                    statusLista == item.situacao && (
                        <CardConsulta
                            data={item}
                            situacao={item.situacao}
                            onPressCancel={() => setShowModalCancel(true)}
                            onPressAppointment={() => setShowModalAppointment(true)}
                            onPressPerfilMed={() => setShowModalPerfilMed(true)}
                        />
                    )

                }
                showsVerticalScrollIndicator={false}
            />
            {/* modal cancelar */}
            <CancellationModal
                visible={showModalCancel}
                setShowModalCancel={setShowModalCancel}
            />

            {/* modal ver protuário */}
            <AppointmentModal
                visible={showModalAppointment}
                setShowModalAppointment={setShowModalAppointment}
                dados={Consultas}
            />

            <ModalConsultas
                visible={showModalConsultas}
                setShowModalConsultas={setShowModalConsultas}
                navigation={navigation}
            />
            
            <ModalPerfilMed
                visible={showModalPerfilMed}
                setShowModalPerfilMed={setShowModalPerfilMed}
                navigation={navigation}
            />
            

        </Container>
    )
}