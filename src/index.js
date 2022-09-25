import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyle } from './components/GlobalStyled';
import { ThemeProvider } from 'styled-components';
import { constants } from './constans/constans';
import 'modern-normalize/modern-normalize.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={constants}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
