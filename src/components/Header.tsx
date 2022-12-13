import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {useState} from "react";

import '../i18n';
import {useTranslation} from "react-i18next";
import {ButtonGroup} from "@mui/material";

const drawerWidth = 240;
// const navItems = ['Главная', 'Инфо', 'Автор дня', 'Поиск'];
const navItems = ['home', 'info', 'author', 'search'];
const navLinks = ['/frontendlaba2/', '/frontendlaba2/#info', '/frontendlaba2/#author', '/frontendlaba2/search'];

export default function DrawerAppBar(props: any) {
    const { t, i18n } = useTranslation('header')
    const [language, setLanguage] = useState<string>(i18n.language);
    const {window} = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const buttonGroup = (
        <ButtonGroup variant="text" color="primary" aria-label="text primary button group" sx={{marginLeft: '10px', mx: 1}}>
            <Button onClick={() => changeLanguage('ru')}
                    sx={
                        {
                            color: 'primary.contrastText',
                            backgroundColor: language === 'ru' ? 'primary.dark' : 'primary.main',
                            '&:hover': {
                                backgroundColor: language === 'ru' ? 'primary.dark' : 'primary.light',
                            }
                        }
                    }>РУ</Button>
            <Button onClick={() => changeLanguage('en')}
                    sx={
                        {
                            color: 'primary.contrastText',
                            backgroundColor: language === 'en' ? 'primary.dark' : 'primary.main',
                            '&:hover': {
                                backgroundColor: language === 'en' ? 'primary.dark' : 'primary.light',
                            }
                        }
                    }>EN</Button>
        </ButtonGroup>
    );

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{textAlign: 'center'}}>
            <Typography variant="h6" sx={{my: 2}}>
                Название
            </Typography>
            <Divider/>
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{textAlign: 'center'}} href={navLinks[navItems.indexOf(item)]}>
                            <ListItemText primary={t(item)}/>
                        </ListItemButton>
                    </ListItem>
                ))}
                {buttonGroup}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        setLanguage(lng);
    }

    return (
        <Box sx={{display: 'flex'}}>
            <AppBar component="nav">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{mr: 2, display: {sm: 'none'}}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}
                    >
                        Название
                    </Typography>
                    <Box sx={{display: {xs: 'none', sm: 'block'}}}>
                        {navItems.map((item) => (
                        <Button key={item} sx={{color: 'primary.contrastText', mx: 1}} href={navLinks[navItems.indexOf(item)]}>
                            {t(item)}
                        </Button>
                        ))}
                        {buttonGroup}
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: {xs: 'block', sm: 'none'},
                        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth}
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
}