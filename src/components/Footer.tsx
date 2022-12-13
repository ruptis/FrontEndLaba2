
import {Box, Button} from "@mui/material";
import author from '../assets/images/Author.png'

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
            <FooterButtons text='Перейти к поиску' posx='609'/>
            <FooterButtons text='Перейти к главной' posx='1017'/>
        </div>
        <div style={{position: 'relative', top:'257px'}}>
            <Authorinfo posx='330' name='Патиюк Павел'/>
            <Authorinfo posx='834' name='Климович Андрей'/>
            <Authorinfo posx='1338' name='Барилко Михаил'/>
        </div>
    </Box>);
}

function Authorinfo(props: any)
{
    const BoxStyle = 
    {
        position: 'absolute',
        left: props.posx + 'px',
        down: '100px',
        width: '250px',
        height: '400px',
    };
    const TextStyle =
    {
        font: "Playfair Display", 
        fontWeight: "bolder",
        fontSize: '1.2em',
        textAling: 'center'
    }

    return (
    <Box sx={ BoxStyle }>
        <img src={author}></img>
        <span style={TextStyle}>{props.name}</span>
    </Box>
    )
}

function FooterButtons(props: any)
{
    return <Button sx={{position: 'absolute', left: props.posx + 'px'}}>{props.text}</Button>
}