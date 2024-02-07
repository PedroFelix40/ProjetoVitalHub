import { Text } from "react-native"

// Import dos componentes
import { Container } from "../../components/Container/Style"
import { LogoStyle } from "../../components/Logo/Style"
import { Title } from "../../components/Title/Style"
import { InputStyle } from "../../components/Input/Style"

// Import da Image
import logo from "../../../assets/logo.png"



export const Login = () => {
    return(
        <Container>
            
             <LogoStyle source={logo} /> 

            <Title>Entrar ou criar conta</Title>

            <InputStyle
                placeholder="Usuário ou email"
            />
            
            <InputStyle
                placeholder="Senha"
            />

            {/* <LinkMedium>Esqueceu sua senha?</LinkMedium>

            <Button>
                <ButtonTitle>Entrar</ButtonTitle>
            </Button>

            <ButtonGoogle>
                <ButtonTitleGoogle>Entrar</ButtonTitleGoogle>
            </ButtonGoogle>

            <ContentAccount>
                <TextAccount>Não tem conta? Crie uma conta agora</TextAccount>
            </ContentAccount> */}
        </Container>
    )
}