import React, { Component } from 'react';
import './Message.scss';

class Message extends Component {
    constructor (props) {
        super(props);
        let temp = JSON.parse(this.props.message);
        this.state = {
            message: temp,
            currentUser: this.props.currentUser
        };
    }
    render () {
        const msg = this.state.message.body.split(":");
        const source = msg[0]
        const username = msg[1]
        const body = msg[2]
        //{this.state.message.body}
        return (
        <div className='Message'>
            {msg.length > 1 ? 
            (<span>
                <p className={this.state.currentUser === source ? 'username me' : 'username'}>{`${username}`}</p>
                <p className="body">{body}</p>
            </span>) 
            : (this.state.message.body)}
        </div>)
    }
}
export default Message