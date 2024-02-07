import { Image, Text } from "react-native"

// Import dos componentes
import { Container, ContentAccount } from "../../components/Container/style"
import { LogoStyle } from "../../components/Logo/style"
import { Title } from "../../components/Title/style"
import { InputStyle } from "../../components/Input/style"
import { LinkMedium, LinkMediumAccount } from "../../components/Link/style"
import { Button, ButtonGoogle } from "../../components/Button/style"
import { ButtonTitle, ButtonTitleGoogle } from "../../components/ButtonTitle/style"

// Import da Image
import logo from "../../../assets/logo.png"

// Import do icon
import { AntDesign } from '@expo/vector-icons';
import { TextAccount } from "../../components/Text/style"

export const Login = () => {
    return (
        <Container>

            <LogoStyle source={logo} />

            <Title>Entrar ou criar conta</Title>

            <InputStyle
                placeholder="Usuário ou email"
            />

            <InputStyle
                placeholder="Senha"
            />

            <LinkMedium >Esqueceu sua senha?</LinkMedium>

            <Button>
                <ButtonTitle>Entrar</ButtonTitle>
            </Button>

            <ButtonGoogle>
                <AntDesign name="google" size={18} color="#496BBA" />
                <ButtonTitleGoogle >Entrar com google</ButtonTitleGoogle>
            </ButtonGoogle>
            
            <ContentAccount>
                <TextAccount>Não tem conta? </TextAccount>
                <LinkMediumAccount >Crie uma conta agora</LinkMediumAccount>
            </ContentAccount>
        </Container>
    )
}