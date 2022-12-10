import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: `rgba(36, 14, 13, 1)`,
            contrastText: `rgba(239, 187, 190, 1)`,
        },
        secondary: {
            main: `rgba(239, 187, 190, 1)`,
        },
        text: {
            primary: `rgba(239, 187, 190, 1)`,
            secondary: `rgba(36, 14, 13, 1)`,
        },
        background: {
            default: `rgb(255, 255, 255)`,
            paper: `rgba(131, 80, 79, 0.55)`,
        },
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
                backgroundColor: `rgba(36, 14, 13, 1)`,
            },
        },
    },
  },
} as any);

export default theme;
