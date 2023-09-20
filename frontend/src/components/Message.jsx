import React, { Component } from 'react';
import './Message.scss';

class Message extends Component {
    constructor (props) {
        super(props);
        let temp = JSON.parse(this.props.message);
        this.state = {
            message: temp
        };
    }
    render () {
        const msg = this.state.message.body.split(": ");
        const source = msg[0]
        const body = msg[1]
        //{this.state.message.body}
        return (
        <div className='Message'>
            {msg.length > 1 ? 
            (<span>
                <p className="username">{`${source}`}</p>
                <p className="body">{body}</p>
            </span>) 
            : (this.state.message.body)}
        </div>)
    }
}
export default Message