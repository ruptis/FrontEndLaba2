import {Typography} from "@mui/material";
import {Rectangle} from "../../Rectangle";
import MovieDivider from "../../MovieDivider";
import {Trans} from "react-i18next";

interface TitleComponentProps {
    title: string;
}
 
export function TitleComponent(props: TitleComponentProps) {
    return (
        <Rectangle color={'rgba(131,80,79,0.55)'} width="821px" height="329px" blur={true} direction={'column'} align={'center'} margin={'50px'}>
            <Typography
                sx={{
                    fontSize: { lg: '85px', xs: '40px' },
                    fontWeight: 'bold',
                    color: 'primary.contrastText',
                }}>
                <Trans>{props.title}</Trans>
            </Typography>
            <MovieDivider/>
        </Rectangle>
    );
}

export default TitleComponent;
