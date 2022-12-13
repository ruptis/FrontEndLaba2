import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: `#521e1a`,
            contrastText: `rgba(239, 187, 190, 1)`,
        },
        secondary: {
            main: `rgba(239, 187, 190, 1)`,
        },
        text: {
            primary: `#EFBBBE`,
            secondary: `#240E0D`,
            header: '#8E1F2C',
            headerHover: '#D64859',
        },
        background: {
            default: `rgba(99, 36, 32, 0.9)`,
            paper: `rgba(131, 80, 79, 0.9)`,
        },
        neutral: {
            main: `rgba(239, 187, 190, 0.95)`,
            contrastText: `rgba(36, 14, 13, 0.95)`,
        }
    },
    typography: {
        fontFamily: `Playfair Display`,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
        h1: {
            fontSize: `85px`,
            fontWeight: 700,
            lineHeight: 1.2,
            letterSpacing: `-0.5px`,
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundColor: `rgb(180, 137, 133)`,
                },
            },
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
} as any);

declare module '@mui/material/styles' {
    interface Palette {
        neutral: Palette['primary'];
    }

    interface PaletteOptions {
        neutral?: PaletteOptions['primary'];
    }
}

declare module '@mui/material/IconButton' {
    interface IconButtonPropsColorOverrides {
        neutral: true;
    }
}

export default theme;
