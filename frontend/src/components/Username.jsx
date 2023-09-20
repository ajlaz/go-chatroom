import React, { Component } from 'react';
import './Username.scss';

class Username extends Component {
    render () {
        const username = this.props.username
        return (
            <div className="username">
                <span>
                    <h2>Username: {username}</h2>
                    </span>
                <input type="text" name="username" placeholder="Change username" onKeyDown={this.props.changeName}/>
                <hr></hr>
            </div>
        )
    }
}

export default Username;