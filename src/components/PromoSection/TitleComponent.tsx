import DividerImage from '../../assets/images/movieDivider.png';
import {Typography, useTheme} from "@mui/material";
import {Rectangle} from "../Rectangle";

interface TitleComponentProps {
    title: string;
}
 
export function TitleComponent(props: TitleComponentProps) {
    const theme = useTheme();

    return (
        <Rectangle color={theme.palette.background.paper} width="821px" height="329px">
            <Typography
                sx={{
                    fontSize: '85px',
                    fontWeight: 'bold',
                    color: 'primary.contrastText',
                    [theme.breakpoints.down('md')]: {
                        fontSize: '30px',
                    },
                }}
            >
                {props.title}
            </Typography>
            <img src={DividerImage} alt="divider"
                style={{
                    width: '80%',
                    height: '21px',
                    [theme.breakpoints.down('md')]: {
                        width: '100%',
                        height: '11px',
                    },
                }}/>
        </Rectangle>
    );
}

export default TitleComponent;
