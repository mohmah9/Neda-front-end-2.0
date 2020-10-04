import React, { Component } from 'react';
import { Widget, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';


class Chat extends Component {
	constructor(props) {
		super(props)
		// let server = 'ws://localhost:8080/';
	}

	ws = new WebSocket('ws://localhost:8080/');
	counter = 0;
	myname="";
	componentDidMount() {
		this.ws.onopen = () => {
			// on connecting, do nothing but log it to the console
			console.log('connected')
		}

		this.ws.onmessage = evt => {
			// listen to data sent from the websocket server
			if (this.counter >= 3) {
				this.counter++;
				const message = evt.data
				if (this.myname!=message.split(":")[0] & message.split(":").length >1){
					addResponseMessage(message.split(":")[1]);
				}
				console.log(evt.data)
			}
			else{
				this.counter++;
				const message = evt.data
				addResponseMessage(message);
				console.log(evt.data)
			}
		}

		this.ws.onclose = () => {
			console.log('disconnected')
			// automatically try to reconnect on connection loss

		}
		addResponseMessage("لطفا نام خود را وارد کنید");

	}

	handleNewUserMessage = (newMessage) => {
		if (this.counter==0){
			this.myname=newMessage;
		}
		this.ws.send(newMessage);
		// Now send the message throught the backend API
	}

	render() {
		return (
			<div className="App">
				<Widget
					handleNewUserMessage={this.handleNewUserMessage}
					// profileAvatar={logo}
					title="My new awesome title"
					subtitle="And my cool subtitle"
				/>
			</div>
		);
	}
}

export default Chat;