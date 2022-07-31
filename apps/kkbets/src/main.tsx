import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import couponReducer from './app/store/reducers/coupon';
import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';

import App from './app/app';
import { theme } from './app/utilities/theme';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

const rootReducer = {
  coupon: couponReducer
};

const store = createStore(combineReducers(rootReducer), composeWithDevTools());

const UItheme = createTheme({
  palette: {
    primary: {
      main: theme.colors.accent.light
    }
  }
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <MuiThemeProvider theme={UItheme}>
          <App />
        </MuiThemeProvider>
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
