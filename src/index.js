import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createTheme,ThemeProvider,CssBaseline } from '@mui/material';
import { ContextProvider } from './hooks/useStateContext';

const darkTheme=createTheme({
  palette: {
    mode: 'dark',
  },
  typography:{
    fontFamily:'"IBM Plex Sans"'
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ContextProvider>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </ContextProvider>
  </React.StrictMode>
);


