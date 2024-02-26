import { BoxDay, BoxInformacoes, BoxSelectStyle } from "../../screens/SelectClinic/style"
import { TextStyle1 } from "../Text/style"
import { TitleName } from "../Title/style"
import { FontAwesome5 } from '@expo/vector-icons';


export const BoxSelect = () => {
    return (
        <BoxSelectStyle>
            <BoxInformacoes>
                <TitleName>Clínica Natureh</TitleName>
                <TextStyle1>aval</TextStyle1>
            </BoxInformacoes>

            <BoxInformacoes>
                <TextStyle1>São Paulo, SP</TextStyle1>
                <BoxDay>
                    <FontAwesome5 name="calendar-day" size={14} color="#49B3BA" />
                    <TextStyle1 fieldColor={"#49B3BA"}>Seg-Sex</TextStyle1>
                </BoxDay>
            </BoxInformacoes>
        </BoxSelectStyle>
    )
}