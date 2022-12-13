
import {Box, Button, ButtonBase, Icon, Link} from "@mui/material";
import author from '../assets/images/Author.png'
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const fontStyle = "Playfair Display";

export default function Footer()
{
    
    const BoxStyle = 
    { 
        position: 'relative',
        width: '100%',
        height: '753px',
        backgroundColor: 'Black'
    };  

    return (
    <Box sx={ BoxStyle }>
        <div style={{position: 'relative', top:'93px'}}>
            <FooterButtons text='Перейти к поиску' posx='609' href='/FrontEndLaba2/search'/>
            <FooterButtons text='Перейти к главной' posx='1017' href='/FrontEndLaba2/'/>
        </div>
        <div style={{position: 'relative', top:'257px'}}>
            <Authorinfo posx='330' name='Патиюк Павел' href='https://github.com/ruptis'/>
            <Authorinfo posx='834' name='Климович Андрей' href='https://github.com/AndreKlim1'/>
            <Authorinfo posx='1338' name='Барилко Михаил' href='https://github.com/Nikmoofte'/>
        </div>
    </Box>);
}

function Authorinfo(props: any)
{
    const BoxStyle = 
    {
        position: 'absolute',
        left: props.posx + 'px',
        width: '250px',
        height: '400px',
        font: fontStyle, 
        fontWeight: "bolder",
        fontSize: '1.2em',
        textAlign: 'center'
    };

    return (
    <Box sx={ BoxStyle }>
        <img src={author}   />
        {props.name}
 
        <IconButton color="secondary" aria-label='To git' href={props.href} >
            <GitHubIcon sx={{fontSize: '100px', textAlign: 'center'}} />
        </IconButton>
        
    </Box>
    )
}

function FooterButtons(props: any)
{
    const MyButton = styled(ButtonBase)(props, ({ theme }) => ({
        position: "absolute",
        left: props.posx + 'px',
        font: fontStyle, 
        fontWeight: "bolder",
        fontSize: '1.2em',
        [theme.breakpoints.down("sm")]: 
        {},
        "&:hover, &.Mui-focusVisible": 
        {
            fontWeight: "bolder",
            textDecoration: 'underline'
        }
    }));
    return <MyButton><Link href={props.href}>{props.text}</Link>
    </MyButton>
}