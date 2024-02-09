// Import dos componentes
import { BoxInput, Container, Scroll } from "../../components/Container/style"
import { FotoStyle } from "../../components/FotoPerfil/style"

// Import da foto
import fotoPerfil from '../../../assets/FotoPerfil.png'
import { Title } from "../../components/Title/style"
import { Subtitle } from "../../components/Text/style"
import { InputLabel } from "../../components/Label/style"
import { InputDados } from "../../components/Input/style"
import { InputText } from "../../components/Input"

export const Perfil = () => {
    return (
        <Scroll>
            <Container>
                <FotoStyle source={fotoPerfil} />

                <Title>Richard Kosta</Title>
                <Subtitle>richard.kosta@gmail.com</Subtitle>

                <BoxInput>
                    <InputLabel>Data de nascimento:</InputLabel>
                    <InputDados/>

                    <InputLabel>CPF</InputLabel>
                    <InputDados />

                    <InputLabel>Endereço</InputLabel>
                    <InputDados 
                        
                    />

                    <InputLabel>Cep</InputLabel>
                    <InputDados 
                        
                    />

                    <InputLabel>Cidade</InputLabel>
                    <InputText 
                        fieldWidth={40}
                    />
                </BoxInput>
            </Container>
        </Scroll>
    )
}