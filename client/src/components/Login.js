import React from 'react'
import PropTypes from 'prop-types'
import FormGroup from '@material-ui/core/FormGroup'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import LinearProgress from '@material-ui/core/LinearProgress'
import VariantSnackBar from './VariantSnackBar'

export default class Login extends React.PureComponent {
    static propTypes = {
        isLoading: PropTypes.bool,
        error: PropTypes.string
    }

    render() {
        return <FormGroup>
            <TextField
                id="loginPassword"
                label="Password"
                type="password"
                autoFocus
                inputRef={input => this.passwordInput = input}
                margin="normal"
                error={(Boolean)(this.props.error)}
            />
            <br/>
            <Grid container justify="center">
                <Grid item xs={4} md={2} lg={1}>
                    <Button
                        component={(props) =>
                            <button onClick={this.handleSubmit} {...props}/>
                        }
                        variant="contained"
                        color="primary"
                        fullWidth
                        disabled={this.props.isLoading}>
                        login
                    </Button>
                    {
                        this.props.isLoading &&
                        <LinearProgress color="secondary" />
                    }
                </Grid>
            </Grid>
            {
                this.props.error &&
                <VariantSnackBar variant="error" message={this.props.error} />
            }
        </FormGroup>
    }

    handleSubmit = () => { this.props.login(this.passwordInput.value) }
}