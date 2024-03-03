// Import dos componentes
import { Container, ContainerInput, ContainerInputButtom } from "../../components/Container/style"
import { LogoStyle } from "../../components/Logo/style"
import { Title } from "../../components/Title/style"
import { LinkUtil, Subtitle } from "../../components/Text/style"
import { InputStyle } from "../../components/Input/style"
import { Button } from "../../components/Button/style"
import { ButtonTitle } from "../../components/ButtonTitle/style"

// Import da logo
import logo from "../../../assets/logo.png"

export const CriarConta = () => {
    return (
        <Container>
            <LogoStyle source={logo} />

            <Title>Criar conta</Title>

            <Subtitle>Insira seu endereço de e-mail e senha para realizar seu cadastro.</Subtitle>

            <ContainerInputButtom>
                <ContainerInput>
                    <InputStyle placeholder="Usuário ou E-mail" />
                    <InputStyle placeholder="Senha" />
                    <InputStyle placeholder="Confirme a senha" />
                </ContainerInput>

                <Button>
                    <ButtonTitle>cadastrar</ButtonTitle>
                </Button>
            </ContainerInputButtom>
            <LinkUtil>Cancelar</LinkUtil>
        </Container>
    )
}