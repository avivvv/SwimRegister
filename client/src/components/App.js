import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

import Login from '../containers/Login'

class App extends React.PureComponent {
    static propTypes = {
        isUserLoggedIn: PropTypes.bool,
        classes: PropTypes.object.isRequired
    }

    render() {
        const {isUserLoggedIn, classes} = this.props

        if (isUserLoggedIn) {
            return <div>Hello!</div>
        }

        return <Paper className={classes.paper}><Login /></Paper>
    }
}

const styles = theme => ({
    paper: {
        padding: theme.spacing.unit * 5,
        width: '80%',
        margin: 'auto',
        marginTop: '5%',
        marginBottom: '5%'
    }
})

export default withStyles(styles)(App)