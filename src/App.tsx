import React from 'react';
import {CssBaseline, ThemeProvider} from "@mui/material";
import {Route, Routes} from "react-router";
import MainPage from "./pages/MainPage";
import Header from "./components/Header";
import theme from "./theme";
import Footer from './components/Footer';
import SearchPage from "./pages/SearchPage";
import DirectorPage from "./pages/DirectorPage";
import directors from "./assets/data/directors";

function App() {
  return (
      <>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/search" element={<SearchPage />} />
                {directors.map(director => <Route path={`/director/${director.pathUrl}`} element={<DirectorPage director={director} />} />)}
            </Routes>
            <Footer />
          </ThemeProvider>
      </>
  );
}

export default App;