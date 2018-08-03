import React from 'react'
import PropTypes from 'prop-types'
import Snackbar from '@material-ui/core/Snackbar'

export default class ErrorSnackBar extends React.Component {
    static propTypes = {
        message: PropTypes.string.isRequired
    }

    state = {
        isOpen: true
    }

    componentDidMount() {
        setTimeout(() => this.setState({ isOpen: false }), 3000)
    }

    render() {
        return <Snackbar
            message={this.props.message}
            open={this.state.isOpen}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        />
    }
}