import React from 'react'

import Login from './Login.js'

export default class App extends React.Component {
    state = {
        userName: "",
        loggedIn: false
    }
    
    render() {
        if (!this.state.loggedIn) {
            return <Login onLogIn={this.onLogIn}/>
        }
        
        return <div>Hello {this.state.userName}!</div>
    }

    onLogIn = (userName) => {
        this.setState({
            userName: userName,
            loggedIn: true
        });
    }
}