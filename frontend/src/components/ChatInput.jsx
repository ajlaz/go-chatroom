import React, { Component } from 'react';
import './ChatInput.scss';

class ChatInput extends Component {
    render () {
        return (
            <div className="chatInput">
                <input className="chat" type="text" name="username" placeholder="Send message" onKeyDown={this.props.send} />
            </div>
        );
    }
}

export default ChatInput