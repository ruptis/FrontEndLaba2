import React from 'react';
import {CssBaseline, ThemeProvider} from "@mui/material";
import {Route, Routes} from "react-router";
import MainPage from "./pages/MainPage";
import Header from "./components/Header";
import theme from "./theme";
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
                <Route path="FrontEndLaba2/" element={<MainPage />} />
                <Route path="FrontEndLaba2/search" element={<SearchPage />} />
                {directors.map(director => <Route path={`FrontEndLaba2/director/${director.pathUrl}`} element={<DirectorPage director={director} />} />)}
            </Routes>
          </ThemeProvider>
      </>
  );
}

export default App;