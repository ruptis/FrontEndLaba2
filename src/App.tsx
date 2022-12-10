import React from 'react';
import {CssBaseline, ThemeProvider} from "@mui/material";
import {Route, Routes} from "react-router";
import MainPage from "./pages/MainPage";
import theme from "./LightTheme";
function App() {
  return (
      <>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
              <Route path="/" element={<MainPage />} />
          </Routes>
        </ThemeProvider>
      </>
  );
}

export default App;
