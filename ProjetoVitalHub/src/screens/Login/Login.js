import { Text } from "react-native"

// Import dos componentes
import { Container } from "../../components/Container/Style"
import { LogoStyle } from "../../components/Logo/Style"
import { Title } from "../../components/Title/Style"
import { InputStyle } from "../../components/Input/Style"



export const Login = () => {
    return(
        <Container>
            
            {/* <LogoStyle source={require('../../assets/logo.png')} /> */}

            <Title>Entrar ou criar conta</Title>

            <InputStyle/>
            
            <Input/>

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