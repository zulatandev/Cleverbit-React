// Dependencies
import React, { FC } from 'react';
import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material';

// Theme
import theme from './theme';

// Styles
import './App.css';

// Create app
const App: FC = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </MuiThemeProvider>
);

// Export app
export default App;
