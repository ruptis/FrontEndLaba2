import {Typography, useTheme} from "@mui/material";
import {Rectangle} from "../Rectangle";
import Box from "@mui/material/Box";
import MovieDivider from "../MovieDivider";
import IconButton from "@mui/material/IconButton";
import {ArrowCircleRightOutlined} from "@mui/icons-material";

interface DirectorComponentProps {
    name: string;
    image: string;
    birthDate: string;
    deathDate: string;
    bio: string;
}
export function DirectorComponent(props: DirectorComponentProps) {
    const theme = useTheme();

    return (
        <Rectangle color={theme.palette.background.default} width="1300px" height="700px" blur={false} direction={'row'} align={'center'} justify={'space-around'} margin={'50px'} padding={'40px'}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flexGrow: 1,
                width: '80%',
                height: '100%',
            }}>
                <Box sx={{
                    marginBottom: '50px',
                }}>
                    <Typography sx={{
                        fontSize: '66px',
                        fontWeight: 'bold',
                        color: 'primary.contrastText',
                        textAlign: 'left',
                        lineHeight: '1.1',
                        marginBottom: '10px',
                    }}>
                        {props.name}
                    </Typography>
                    <Typography sx={{
                        fontSize: '20px',
                        fontWeight: 'bold',
                        color: 'primary.contrastText',
                        textAlign: 'left',
                    }}>
                        {props.birthDate} - {props.deathDate}
                    </Typography>
                </Box>
                <Typography sx={{
                    fontSize: '32px',
                    fontWeight: 'bold',
                    color: 'primary.contrastText',
                    textAlign: 'center',
                    flexGrow: 1,
                    [theme.breakpoints.down('md')]: {
                        display: 'none',
                    }
                }}>
                    {props.bio}
                </Typography>
            </Box>
            <MovieDivider vertical={true}/>
            <Box sx={
                {
                    flexBasis: '30%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    height: '100%',
                }
            }>
                <Box sx={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: '50px',
                }}>
                    <img src={props.image
                    } alt={props.name} style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '33px',
                    }}/>
                </Box>
                <IconButton sx={{
                    width: '100px',
                    height: '100px',
                }}>
                    <ArrowCircleRightOutlined sx={
                        {
                            color: 'primary.contrastText',
                            fontSize: '100px',
                        }
                    }/>
                </IconButton>
            </Box>
        </Rectangle>
    );
}