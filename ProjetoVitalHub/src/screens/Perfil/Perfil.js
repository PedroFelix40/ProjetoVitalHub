// Import dos componentes
import { Container, ContainerBox, ContainerPerfil, Scroll } from "../../components/Container/style"
import { FotoStyle } from "../../components/FotoPerfil/style"

// Import da foto
import fotoPerfil from '../../../assets/FotoPerfil.png'
import { Title } from "../../components/Title/style"
import { Subtitle } from "../../components/Text/style"
import { BoxInput } from "../../components/BoxInput"
import { Button } from "../../components/Button/style"
import { ButtonTitle } from "../../components/ButtonTitle/style"

export const Perfil = () => {
    return (
        <Scroll>
            <Container>
                <FotoStyle source={fotoPerfil} />

                <Title>Richard Kosta</Title>
                <Subtitle>richard.kosta@gmail.com</Subtitle>

                <ContainerPerfil>
                    <BoxInput
                        textLabel='Data de nascimento'
                        placeholder='Data de nascimento...'
                        fieldValue='25/02/2004'
                    />
                    <BoxInput
                        textLabel='CPF'
                        placeholder='CPF...'
                        fieldValue='033.420.009.78'
                    />
                    <BoxInput
                        textLabel='Endereço'
                        placeholder='Endereço...'
                        fieldValue='Rua Lageado'
                    />
                    <ContainerBox>
                        <BoxInput
                            fieldWidth={45}
                            textLabel='CEP'
                            placeholder='CEP...'
                            fieldValue='08573710'
                        />

                        <BoxInput
                            fieldWidth={50}
                            textLabel='Cidade'
                            placeholder='Cidade...'
                            fieldValue='Itaquaquecetuba'
                        />
                    </ContainerBox>

                    <Button>
                        <ButtonTitle>cadastrar</ButtonTitle>
                    </Button>
                    
                    <Button>
                        <ButtonTitle>editar</ButtonTitle>
                    </Button>
                </ContainerPerfil>
            </Container>
        </Scroll>
    )
}