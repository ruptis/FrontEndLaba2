import DividerImage from "../assets/images/movieDivider.png";
import VerticalDividerImage from "../assets/images/movieDividerVertical.png";
import {useTheme} from "@mui/material";
import Box from "@mui/material/Box";

interface MovieDividerProps {
    vertical?: boolean;
}
export function MovieDivider({vertical = false}: MovieDividerProps) {
    const theme = useTheme();

    return (
        <Box
            sx={{
                width: vertical ? '21px' : '80%',
                height: vertical ? '100%' : '21px',
                backgroundImage: vertical ? `url(${VerticalDividerImage})` : `url(${DividerImage})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                margin: vertical ? '0 50px 0px 20px' : '20px 0px 50px 0px',
                [theme.breakpoints.down('md')]: {
                    width: vertical ? '11px' : '100%',
                    height: vertical ? '100%' : '11px',
                    display: vertical ? 'none' : 'block',
                },
            }}/>
    );
}
export default MovieDivider;