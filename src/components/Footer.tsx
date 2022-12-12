
import {Box, Typography, useTheme} from "@mui/material";


export default function Footer()
{
    
    const BoxStyle = 
    { 
        width: '100%',
        height: '753px',
        backgroundColor: 'Black'
    };

    return <Box style={ BoxStyle }>
        <Authorinfo posx="100" posy="100"/>
    </Box>;
}

function Authorinfo(porps: any)
{
    const BoxStyle = 
    {
        position: 'absolute',

        width: '250',
        height: '400',



        backgroundColor: 'White'
    };
    return<Box sx={ BoxStyle }></Box>
}