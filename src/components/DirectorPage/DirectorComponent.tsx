import {Rectangle} from "../Rectangle";
import {Typography, useTheme} from "@mui/material";
import Box from "@mui/material/Box";
import OrnItem from "../../assets/images/ornItem.svg";
import MovieDivider from "../MovieDivider";
import IconButton from "@mui/material/IconButton";
import {ArrowBackIosNewOutlined, ArrowForwardIosOutlined} from "@mui/icons-material";
import IDirector from "../../models";
import directors from "../../assets/data/directors";

interface DirectorComponentProps {
    director: IDirector;
}
export function DirectorComponent(props: DirectorComponentProps) {
    const theme = useTheme();

    function getNextDirector() {
        let index = directors.indexOf(props.director);
        if (index === directors.length - 1) {
            return directors[0];
        }
        return directors[index + 1];
    }

    function getPreviousDirector() {
        let index = directors.indexOf(props.director);
        if (index === 0) {
            return directors[directors.length - 1];
        }
        return directors[index - 1];
    }

    return (
        <Rectangle color={theme.palette.background.default} width="1300px" height="700px" blur={false} direction={'row-column'} align={'center'} justify={'space-around'} margin={'50px'} padding={'40px'}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexGrow: 1,
                width: '80%',
                height: '100%',
            }}>
                <Box sx={{
                    marginBottom: '50px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <Typography sx={{
                        fontSize: '66px',
                        fontWeight: 'bold',
                        color: 'primary.contrastText',
                        textAlign: 'center',
                        lineHeight: '1.1',
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
                        margin: '80px 0px 0px 0px',
                    }}>
                        {props.director.birthDate}-{props.director.deathDate}
                    </Typography>
                </Box>
                <Box sx={{
                    width: '266px',
                    height: '266px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative',
                    marginTop: '50px',
                    [theme.breakpoints.down('md')]: {
                        display: 'none',
                    }
                }}>
                    <img src={OrnItem} alt="ornItem" style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}/>
                </Box>
            </Box>
            <MovieDivider vertical={true} />
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
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    height: '100%',
                }}>
                    <IconButton href={'/FrontEndLaba2/director/' + getPreviousDirector().pathUrl}
                        sx={{
                            width: '100px',
                            height: '100px',
                            [theme.breakpoints.down('md')]: {
                                width: '150px',
                                height: '150px',
                            }
                    }}>
                        <ArrowBackIosNewOutlined sx={
                            {
                                color: 'primary.contrastText',
                                fontSize: '100px',
                                [theme.breakpoints.down('md')]: {
                                    fontSize: '150px',
                                }
                            }
                        }/>
                    </IconButton>
                    <IconButton href={'/FrontEndLaba2/director/' + getNextDirector().pathUrl}
                        sx={{
                            width: '100px',
                            height: '100px',
                            [theme.breakpoints.down('md')]: {
                                width: '150px',
                                height: '150px',
                            }
                    }}>
                        <ArrowForwardIosOutlined sx={
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
            </Box>
        </Rectangle>
    );
}
export default DirectorComponent;