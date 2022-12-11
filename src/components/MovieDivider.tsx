import DividerImage from "../assets/images/movieDivider.png";
import VerticalDividerImage from "../assets/images/movieDividerVertical.png";
import {useTheme} from "@mui/material";

interface MovieDividerProps {
    vertical?: boolean;
}
export function MovieDivider({vertical = false}: MovieDividerProps) {
    const theme = useTheme();

    return (
        <img src={vertical ? VerticalDividerImage : DividerImage} alt="divider"
             style={{
                 width: vertical ? '21px' : '80%',
                 height: vertical ? '100%' : '21px',
                 margin: vertical ? '0 50px 0px 20px' : '20px 0px 50px 0px',
                 [theme.breakpoints.down('md')]: {
                     width: vertical ? '11px' : '100%',
                     height: vertical ? '100%' : '11px',
                 },
             }}/>
    );
}
export default MovieDivider;