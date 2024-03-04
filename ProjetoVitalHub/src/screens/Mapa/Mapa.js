import { Container, ContainerBox, ContainerPerfil } from "../../components/Container/style"
import { ImageMapa } from "./style"
import mapaImage from "../../../assets/imageMapa.png"
import { Title } from "../../components/Title/style"
import { Subtitle } from "../../components/Text/style"
import { BoxInput } from "../../components/BoxInput"
import { ButtonModalStyle, ButtonSecondary } from "../../components/Button/style"
import { ButtonSecondaryTitle, ButtonTitle } from "../../components/ButtonTitle/style"

export const Mapa = ({ navigation }) => {
    return (
        <Container>
            <ImageMapa source={mapaImage} />

            <Title marginTop={"30px"}>Clínica Natureh</Title>
            <Subtitle>São Paulo, SP</Subtitle>

            <ContainerPerfil>
                <BoxInput
                    textLabel='Endereço'
                    placeholder='Endereço...'
                    fieldValue='Rua Vicenso Silva, 987'
                />

                <ContainerBox>
                    <BoxInput
                        fieldWidth={45}
                        textLabel='Número'
                        placeholder='Número...'
                        fieldValue='589'
                    />

                    <BoxInput
                        fieldWidth={50}
                        textLabel='Bairro'
                        placeholder='Bairro...'
                        fieldValue='Moema-SP'
                    />
                </ContainerBox>

                <ButtonSecondary onPress={() => navigation.navigate("Home")}>
                    <ButtonSecondaryTitle>Voltar</ButtonSecondaryTitle>
                </ButtonSecondary>

                {/* <ButtonModalStyle onPress={() => navigation.navigate("Home")}>
                    <ButtonTitle>Voltar para home</ButtonTitle>
                </ButtonModalStyle> */}
            </ContainerPerfil>

        </Container>
    )
}