import React from 'react'
import PropTypes from 'prop-types'
import FormGroup from '@material-ui/core/FormGroup'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import LinearProgress from '@material-ui/core/LinearProgress'
import ErrorSnackBar from './ErrorSnackBar'

export default class Login extends React.PureComponent {
    static propTypes = {
        isLoading: PropTypes.bool.isRequired,
        error: PropTypes.string
    }

    render() {
        return <FormGroup>
            <TextField
                id="loginPassword"
                label="Password"
                type="password"
                autofocus
                inputRef={input => this.passwordInput = input}
                margin="normal"
                error={(Boolean)(this.props.error)}
            />
            <Grid container xs="12">
                <Grid item xs="4"/>
                <Grid item xs="4">
                    <Button
                        variant="contained"
                        color="primary"
                        component={
                            (props) => <button
                                onClick={this.handleSubmit}
                                {...props}>
                                login
                            </button>
                        }
                        fullWidth
                        disabled={this.props.isLoading}
                    />
                    {
                        this.props.isLoading &&
                        <LinearProgress color="secondary" />
                    }
                </Grid>
                <Grid item xs="4"/>
            </Grid>
            {
                this.props.error &&
                <ErrorSnackBar message={this.props.error}/>
            }
        </FormGroup>
    }

    handleSubmit = () => { this.props.login(this.passwordInput.value) }
}