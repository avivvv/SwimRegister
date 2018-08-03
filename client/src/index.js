import React from 'react'
import ReactDOM from 'react-dom'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import deepPurple from '@material-ui/core/colors/deepPurple'
import lightBlue from '@material-ui/core/colors/lightBlue'

import App from './components/App'

const theme = createMuiTheme({
    palette: {
        primary: {main: deepPurple['A700']},
        secondary: lightBlue,
    }
});

const app = <MuiThemeProvider theme={theme}>
    <App />
</MuiThemeProvider>;

const root = document.getElementById("root");

ReactDOM.render(app, root);