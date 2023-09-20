import React, { Component } from "react";
import "./App.css";
import { connect, sendMsg } from "./api";
import Header from './components/Header';
import ChatHistory from "./components/ChatHistory";
import ChatInput from "./components/ChatInput";
import Username from "./components/Username";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "test",
      chatHistory: []
    };
  }
  componentDidMount() {
    connect((msg) => {
      console.log("New Message")
      this.setState(prevState => ({
          chatHistory: [...this.state.chatHistory, msg]
      }))

      console.log(this.state)
    });
  }
  send = (event) => {
    if(event.keyCode === 13){
      sendMsg(`${this.state?.username}: ${event.target.value}`);
      event.target.value = "";
    }
  }

  changeName = (event) => {
    if(event.keyCode === 13){
      this.setState({username: event.target.value});
      event.target.value = "";
    }
  }

  render() {
    return (
      <div className="App">
      <Header />
      <Username username={this.state.username} changeName={this.changeName}/>
      <ChatHistory chatHistory={this.state.chatHistory} />
      <ChatInput send={this.send}/>
      </div>
    );
  }
}

export default App;