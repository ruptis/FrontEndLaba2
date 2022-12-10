import React from 'react';
import {CssBaseline, ThemeProvider} from "@mui/material";
import {Route, Routes} from "react-router";
import MainPage from "./pages/MainPage";
import Header from "./components/Header";
import theme from "./theme";

function App() {
  return (
      <>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            <Routes>
                <Route path="/" element={<MainPage />} />
            </Routes>
          </ThemeProvider>
      </>
  );
}

export default App;
