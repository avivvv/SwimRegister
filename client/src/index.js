import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import deepPurple from '@material-ui/core/colors/deepPurple'
import lightBlue from '@material-ui/core/colors/lightBlue'

import App from './containers/App'
import reducer from './reducers/index'
import loggerMiddleWare from './middleware/logger'

const theme = createMuiTheme({
    palette: {
        primary: { main: deepPurple['A700'] },
        secondary: lightBlue,
    }
});

const middlewareEnhancer = applyMiddleware(thunkMiddleware, loggerMiddleWare);
const store = createStore(reducer, undefined, middlewareEnhancer);

const app = <Provider store={store}>
    <MuiThemeProvider theme={theme}>
        <App />
    </MuiThemeProvider>
</Provider>;

const root = document.getElementById("root");

render(app, root);