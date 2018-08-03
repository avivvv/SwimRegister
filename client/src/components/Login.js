import React from 'react'
import PropTypes from 'prop-types'
import FormGroup from '@material-ui/core/FormGroup'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

class Login extends React.PureComponent {
    render() {
        return <FormGroup>
            <TextField
                id="loginUserName"
                label="User Name"
                type="text"
                autoFocus
                inputRef={input => this.userNameInput = input}
                margin="normal"
            />
            <TextField
                id="loginPassword"
                label="Password"
                type="password"
                inputRef={input => this.passwordInput = input}
                margin="normal"
            />
            <Button
                variant="contained"
                color="primary"
                component={this.submitButton}
            />
        </FormGroup>
    }

    submitButton = (props) => <button
        onClick={() => { this.login(this.userNameInput.value, this.passwordInput.value) }}
        {...props}>
        login
    </button>

    login = (userName, password) => {
        if (this.verify(userName, password)) {
            this.props.onLogIn(userName);
        }
    }

    verify = (userName, password) => {
        return true;
    }
}

Login.propTypes = {
    onLogIn: PropTypes.func.isRequired
}

export default Login;