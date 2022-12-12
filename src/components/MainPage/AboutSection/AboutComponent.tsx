import {Rectangle} from "../../Rectangle";
import {Typography, useTheme} from "@mui/material";
import MovieDivider from "../../MovieDivider";

interface AboutComponentProps {
    title: string;
    text: string;
}
export function AboutComponent(props: AboutComponentProps) {
    const theme = useTheme();

    return (
        <Rectangle
            color={theme.palette.background.default} width="993px" height="651px" justify="start" blur={false}
        >
            <Typography
                sx={{
                fontSize: { lg: '58px', xs: '30px' },
                fontWeight: 'bold',
                color: 'primary.contrastText',
                marginTop: '50px',
            }}>
                {props.title}
            </Typography>
            <MovieDivider/>
            <Typography
                sx={{
                fontSize: '24px',
                fontWeight: 'bold',
                color: 'primary.contrastText',
                textAlign: 'left',
            }}>
                {props.text}
            </Typography>
        </Rectangle>
    );
}