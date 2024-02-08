import { Container } from "../../components/Container/style"
import { LogoStyle } from "../../components/Logo/style"

// Import da logo
import logo from '../../../assets/logo.png'
import { Title } from "../../components/Title/style"
import { Subtitle } from "../../components/Text/style"
import { InputStyle } from "../../components/Input/style"
import { Button } from "../../components/Button/style"
import { ButtonTitle } from "../../components/ButtonTitle/style"

export const RedifinirSenha = () => {
    return (
        <Container>
            <LogoStyle source={logo}/>

            <Title>Redifinir senha</Title>

            <Subtitle>Insira e confirme sua nova senha</Subtitle>

            <InputStyle placeholder="Nova senha"/>
            <InputStyle placeholder="Confirme a nova senha"/>

            <Button>
                <ButtonTitle>confirme a nova senha</ButtonTitle>
            </Button>
        </Container>
    )
}