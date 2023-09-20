import React, { Component } from 'react';
import './Username.scss';

class Username extends Component {
    render () {
        const username = this.props.username
        return (
            <div className="username">
                <h2>Username: {username}</h2>
                <input type="text" name="username" placeholder="Enter your username" onKeyDown={this.props.changeName}/>
            </div>
        )
    }
}

export default Username;