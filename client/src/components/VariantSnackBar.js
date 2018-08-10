import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'

import Snackbar from '@material-ui/core/Snackbar'
import SnackbarContent from '@material-ui/core/SnackbarContent'

import InfoIcon from '@material-ui/icons/Info'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import WarningIcon from '@material-ui/icons/Warning'
import ErrorIcon from '@material-ui/icons/Error'

import green from '@material-ui/core/colors/green'
import amber from '@material-ui/core/colors/amber'

export default class VariantSnackBar extends React.Component {
    static propTypes = {
        message: PropTypes.node,
        variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired
    }

    state = {
        isOpen: true
    }

    componentDidMount() {
        setTimeout(() => this.setState({ isOpen: false }), 3000)
    }

    render() {
        return <Snackbar
            open={this.state.isOpen}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
            <VariantSnackbarContentWrapper {...this.props} />
        </Snackbar>
    }
}

class VariantSnackbarContent extends React.PureComponent {
    static propTypes = {
        classes: PropTypes.object.isRequired,
        message: PropTypes.node,
        variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired
    }
    
    render() {
        const { classes, variant, message } = this.props
        const Icon = variantIcon[variant]

        return <SnackbarContent
            className={classNames(classes[variant], classes.margin)}
            aria-describedby="client-snackbar"
            message={
                <span id="client-snackbar" className={classes.message}>
                    <Icon className={classes.icon} />
                    {message}
                </span>
            }
        />
    }
}

const variantIcon = {
    success: CheckCircleIcon,
    warning: WarningIcon,
    error: ErrorIcon,
    info: InfoIcon,
}

const styles = theme => ({
    success: {
        backgroundColor: green[600],
    },
    error: {
        backgroundColor: theme.palette.error.dark,
    },
    info: {
        backgroundColor: theme.palette.primary.dark,
    },
    warning: {
        backgroundColor: amber[700],
    },
    margin: {
        margin: theme.spacing.unit,
    },
    icon: {
        fontSize: 20,
        opacity: 0.9,
        marginRight: theme.spacing.unit
    },
    message: {
        display: 'flex',
        alignItems: 'center',
    }
})

const VariantSnackbarContentWrapper = withStyles(styles)(VariantSnackbarContent)