import React, { Component } from 'react';
import Message from './Message.jsx';
import './ChatHistory.scss';

class ChatHistory extends Component {
    constructor (props) {
        super(props);
        this.state = {
            currentUser: this.props.currentUser,
        };
    }
    render () {
        const messages = this.props.chatHistory.map((msg) => <Message currentUser={this.state.currentUser} message={msg.data} />);

        return (
            <div className="chatHistory">
                <h2>Chat History</h2>
                {messages}
            </div>
        )
    }
}

export default ChatHistory;