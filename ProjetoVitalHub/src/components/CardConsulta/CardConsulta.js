import { ImageUser } from "../FotoPerfil/style";
import { AgeAndTypeBox, BoxInfos, ButtonCard, ButtonText, CardConsultaStyle, ClockCard, ContentCard, ViewRow } from "./style";

import ImageUser1 from "../../../assets/ImageUser1.png"
import { TitleName } from "../Title/style";
import { TextAge, TypeBold } from "../Text/style";

import { AntDesign } from '@expo/vector-icons';

export const CardConsulta = ({
    data = [],
    situacao = 'pendente',
    onPressCancel,
    onPressAppointment
}) => {
    return (
        // Container principal
        <CardConsultaStyle>
            {/* Imagem do paciente */}
            <ImageUser source={ImageUser1} />

            <ContentCard>
                {/* Conteúdo do card */}
                <BoxInfos>
                    <TitleName>{data.nome}</TitleName>

                    <AgeAndTypeBox>
                        <TextAge>22 anos</TextAge>
                        <TypeBold>Rotina</TypeBold>
                    </AgeAndTypeBox>
                </BoxInfos>

                <ViewRow>
                    {/* Icone e Horário */}

                    <ClockCard>
                        <AntDesign name="clockcircle" size={14} color={situacao == "pendente" ? "#49b3ba" : "#8c8a97"} />
                        <TypeBold situacao={situacao}>14h</TypeBold>
                    </ClockCard>

                    {/* Botão Cancelar ou ver prontuário */}

                    {
                        situacao == "cancelado" ? (
                            <>
                            </>
                        ) : situacao == "pendente" ? (
                            <ButtonCard onPress={onPressCancel}>
                                <ButtonText situacao={situacao}>Cancelar</ButtonText>
                            </ButtonCard>
                        ) : (
                            <ButtonCard onPress={onPressAppointment}>
                                <ButtonText situacao={situacao}>Ver prontuário</ButtonText>
                            </ButtonCard>
                        )
                    }

                </ViewRow>
            </ContentCard>
        </CardConsultaStyle>
    );
};
