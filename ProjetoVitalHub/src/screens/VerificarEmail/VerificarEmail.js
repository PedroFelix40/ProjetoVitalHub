// Import dos componentes
import { Container } from "../../components/Container/style"
import { LogoStyle } from "../../components/Logo/style"
import { Title } from "../../components/Title/style"
import { LinkUtil, Subtitle } from "../../components/Text/style"

// Import da logo
import logo from "../../../assets/logo.png"
import { BoxCode, InputVerification } from "./style"
import { Button } from "../../components/Button/style"
import { ButtonTitle } from "../../components/ButtonTitle/style"


export const VerificarEmail = () => {
    return (
        <Container>
            <LogoStyle source={logo} />

            <Title>Verifique seu e-mail</Title>

            <Subtitle>Digite o código de 4 dígitos enviado para username@email.com</Subtitle>

            <BoxCode>
                <InputVerification value="0" />
                <InputVerification value="0" />
                <InputVerification value="0" />
                <InputVerification value="0" />
            </BoxCode>

            <Button>
                <ButtonTitle>ENtrar</ButtonTitle>
            </Button>

            <LinkUtil>Reenviar Código</LinkUtil>
        </Container>
    )
}