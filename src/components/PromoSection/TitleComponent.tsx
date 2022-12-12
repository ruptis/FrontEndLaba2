import {Typography} from "@mui/material";
import {Rectangle} from "../Rectangle";
import MovieDivider from "../MovieDivider";

interface TitleComponentProps {
    title: string;
}
 
export function TitleComponent(props: TitleComponentProps) {
    return (
        <Rectangle color={'rgba(131,80,79,0.55)'} width="821px" height="329px" blur={true} direction={'column'} align={'center'} margin={'50px'}>
            <Typography
                sx={{
                    fontSize: { lg: '85px', xs: '50px' },
                    fontWeight: 'bold',
                    color: 'primary.contrastText',
                }}>
                {props.title}
            </Typography>
            <MovieDivider/>
        </Rectangle>
    );
}

export default TitleComponent;
