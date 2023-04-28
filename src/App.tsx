import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { theme } from './utils/theme/theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

function HomePage() {
  return <h1>Beyond All Reason Web</h1>;
}

export default App;
