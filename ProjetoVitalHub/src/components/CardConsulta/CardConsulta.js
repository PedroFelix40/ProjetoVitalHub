import { ImageUser } from "../FotoPerfil/style";
import { AgeAndTypeBox, CardConsultaStyle } from "./style";

import ImageUser1 from "../../../assets/ImageUser1.png"
import { TitleName } from "../Title/style";
import { Age, TypeConsulta } from "../Text/style";

export const CardConsulta = () => {
    return(
        <CardConsultaStyle>
            <ImageUser source={ImageUser1}/>

            <TitleName>Niccole Sarga</TitleName>

            <AgeAndTypeBox>
                <Age>22 anos</Age>
                <TypeConsulta>Rotina</TypeConsulta>
            </AgeAndTypeBox>
        </CardConsultaStyle>
    );
};