import React from 'react';
import {CssBaseline, ThemeProvider} from "@mui/material";
import {Route, Routes} from "react-router";
import MainPage from "./pages/MainPage";
import Header from "./components/Header";
import theme from "./theme";
import Footer from './components/Footer';

function App() {
  return (
      <>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            <Routes>
                <Route path="FrontEndLaba2/" element={<MainPage />} />
            </Routes>
            <Footer />
          </ThemeProvider>
      </>
  );
}

export default App;
