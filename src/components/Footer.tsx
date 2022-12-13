import {Box, Button, Container, useTheme} from "@mui/material";
import author from '../assets/images/Author.png'
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import {useTranslation} from "react-i18next";

const AuthorInfo = styled("div")({
    display: `flex`,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
});

interface IAuthor {
    name: string;
    image: string;
    github: string;
}

const Authors = (theme: any, author1: IAuthor ,author2: IAuthor ,author3: IAuthor) => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexGrow: 1,
            width: '100%',
            height: '100%',
            [theme.breakpoints.down('md')]: {
                flexDirection: 'column',
            },
        }}>
            <AuthorInfo>
                <img src={author1.image} alt="author" width="200px" height="200px"/>
                <Typography sx={{
                    fontSize: '20px',
                    fontWeight: 'bold',
                    color: 'primary.contrastText',
                    textAlign: 'center',
                    lineHeight: '1.1',
                    marginTop: '20px',
                }}>
                    {author1.name}
                </Typography>
                <IconButton href={author1.github} target="_blank" sx={{
                    color: 'primary.contrastText',
                    marginTop: '20px',
                }}>
                    <GitHubIcon fontSize="large"/>
                </IconButton>
            </AuthorInfo>
            <AuthorInfo>
                <img src={author2.image} alt="author" width="200px" height="200px"/>
                <Typography sx={{
                    fontSize: '20px',
                    fontWeight: 'bold',
                    color: 'primary.contrastText',
                    textAlign: 'center',
                    lineHeight: '1.1',
                    marginTop: '20px',
                }}>
                    {author2.name}
                </Typography>
                <IconButton href={author2.github} target="_blank" sx={{
                    color: 'primary.contrastText',
                    marginTop: '20px',
                }}>
                    <GitHubIcon fontSize="large"/>
                </IconButton>
            </AuthorInfo>
            <AuthorInfo>
                <img src={author3.image} alt="author" width="200px" height="200px"/>
                <Typography sx={{
                    fontSize: '20px',
                    fontWeight: 'bold',
                    color: 'primary.contrastText',
                    textAlign: 'center',
                    lineHeight: '1.1',
                    marginTop: '20px',
                }}>
                    {author3.name}
                </Typography>
                <IconButton href={author3.github} target="_blank" sx={{
                    color: 'primary.contrastText',
                    marginTop: '20px',
                }}>
                    <GitHubIcon fontSize="large"/>
                </IconButton>
            </AuthorInfo>
        </Box>
    );
}

export default function Footer() {
    const theme = useTheme();
    const { t } = useTranslation('footer');

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexGrow: 1,
            width: '100%',
            height: '100%',
            backgroundColor: '#0C0304',
            padding: '50px',
        }}>
            <Container>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    height: '100%',
                }}>
                    <Box sx={
                        {
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexGrow: 1,
                            width: '50%',
                            height: '100%',
                            marginBottom: '80px',
                            [theme.breakpoints.down('md')]: {
                                flexDirection: 'column',
                            },
                        }
                    }>
                        <Button color={'secondary'} sx={{borderBottom: '1px solid'}} href={'/frontendlaba2/search'}>
                            {t('search')}
                        </Button>
                        <Button color={'secondary'} sx={{borderBottom: '1px solid'}} href={'/frontendlaba2/'}>
                            {t('home')}
                        </Button>
                    </Box>
                    {Authors (theme, {name: t('author1'), image: author, github: 'https://github.com/ruptis'}, {name: t('author2'), image: author, github: 'https://github.com/AndreKlim1'}, {name: t('author3'), image: author, github: 'https://github.com/Nikmoofte'})}
                </div>
            </Container>
        </Box>
    );
}