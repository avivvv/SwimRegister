import React from 'react'
import PropTypes from 'prop-types'

import Login from '../containers/Login';

export default class App extends React.PureComponent {
    static propTypes = {
        isUserLoggedIn: PropTypes.bool.isRequired
    }

    render() {
        if (this.props.isUserLoggedIn) {
            return <div>Hello!</div>
        }
        
        return <Login/>
    }
}