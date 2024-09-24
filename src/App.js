import React from "react";
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { Router } from './routes';
import { theme } from './theme/theme';

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
