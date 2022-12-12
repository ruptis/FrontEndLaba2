import {Rectangle} from "../../Rectangle";
import {Typography, useTheme} from "@mui/material";
import MovieDivider from "../../MovieDivider";

interface QuoteComponentProps {
    quote: string;
    author: string;
}
export function QuoteComponent(props: QuoteComponentProps) {
    const theme = useTheme();

    return (
        <Rectangle color={theme.palette.background.paper} width="1300px" height="700px" blur={false} direction={'row'} align={'start'} margin={'50px'}>
            <Typography
                sx={{
                    fontSize: { sm: '85px', md: '30' },
                    fontWeight: 'bold',
                    color: 'primary.contrastText',
                    marginTop: '50px',
                    width: '0px',
                    position: 'relative',
                    left: '80px',
                    [theme.breakpoints.down('lg')]: {
                        display: 'none',
                    }
                }}>
                “
            </Typography>
            <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    width: '100%',
                    height: '100%',
                }}>
                <MovieDivider/>
                <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        flexGrow: 1,
                        width: '80%',
                    }}>
                    <Typography sx={{
                        fontSize: '24px',
                        fontWeight: 'bold',
                        color: 'primary.contrastText',
                        textAlign: 'left',
                    }}>
                        {props.quote}
                    </Typography>
                    <Typography sx={{
                        fontSize: '15px',
                        fontWeight: 'bold',
                        color: 'primary.contrastText',
                        textAlign: 'right',
                    }}>
                        {props.author}
                    </Typography>
                </div>
                <MovieDivider/>
            </div>
        </Rectangle>
    );
}
export default QuoteComponent;