import {Typography, useTheme} from "@mui/material";
import {Rectangle} from "../../Rectangle";
import Box from "@mui/material/Box";
import MovieDivider from "../../MovieDivider";
import IconButton from "@mui/material/IconButton";
import {ArrowCircleRightOutlined} from "@mui/icons-material";
import IDirector from "../../../models";

interface DirectorComponentProps {
    director: IDirector;
}
export function DirectorComponent(props: DirectorComponentProps) {
    const theme = useTheme();

    return (
        <Rectangle color={theme.palette.background.default} width="1300px" height="700px" blur={false} direction={'row-column'} align={'center'} justify={'space-around'} margin={'50px'} padding={'40px'}>
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
                        [theme.breakpoints.down('lg')]: {
                            fontSize: '50px',
                        },
                        [theme.breakpoints.down('md')]: {
                            fontSize: '40px',
                        },
                        [theme.breakpoints.down('sm')]: {
                            fontSize: '30px',
                        }
                    }}>
                        {props.director.name}
                    </Typography>
                    <Typography sx={{
                        fontSize: '20px',
                        fontWeight: 'bold',
                        color: 'primary.contrastText',
                        textAlign: 'left',
                    }}>
                        {props.director.birthDate}-{props.director.deathDate}
                    </Typography>
                </Box>
                <Typography sx={{
                    fontSize: '32px',
                    fontWeight: 'bold',
                    color: 'primary.contrastText',
                    textAlign: 'center',
                    flexGrow: 1,
                    [theme.breakpoints.down('lg')]: {
                        fontSize: '26px',
                    },
                    [theme.breakpoints.down('md')]: {
                        display: 'none',
                    },
                    [theme.breakpoints.down('sm')]: {
                        display: 'none',
                    }
                }}>
                    {props.director.biography}
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
                    [theme.breakpoints.down('md')]: {
                        flexBasis: '100%',
                        height: '30%',
                    }
                }}>
                <Box sx={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: '50px',
                    [theme.breakpoints.down('md')]: {
                        marginBottom: '0px',
                        display: 'none',
                    }
                }}>
                    <img src={props.director.mainImage
                    } alt={props.director.name} style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '33px',
                    }}/>
                </Box>
                <IconButton href={'/frontendlaba2/director/' + props.director.pathUrl}
                        sx={{
                            width: '100px',
                            height: '100px',
                            [theme.breakpoints.down('md')]: {
                                width: '150px',
                                height: '150px',
                            }
                }}>
                    <ArrowCircleRightOutlined sx={
                        {
                            color: 'primary.contrastText',
                            fontSize: '100px',
                            [theme.breakpoints.down('md')]: {
                                fontSize: '150px',
                            }
                        }
                    }/>
                </IconButton>
            </Box>
        </Rectangle>
    );
}