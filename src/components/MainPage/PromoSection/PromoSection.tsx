import {Container, Paper} from "@mui/material";
import background from "../../../assets/images/promoBackground.svg";
import TitleComponent from "./TitleComponent";
import ButtonComponent from "./ButtonComponent";

export function PromoSection() {
    return (
        <Paper
            sx={{
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <TitleComponent title="Кинорежиссёры Беларуси"/>
                <ButtonComponent text="Перейти к поиску" href={'/FrontEndLaba2/search'}/>
            </Container>
        </Paper>
    );
}
export default PromoSection;