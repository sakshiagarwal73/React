import React , { Component } from 'react'

class Message extends Component
{
	constructor()
	{   
		super()
		this.state = {
			message : "Welcome visitor"
		}

		this.changeMessage = this.changeMessage.bind(this);
	}

	changeMessage()
	{
		this.setState({message:"Thanks for subscribing"})
	}

	render()
	{
		return (<div>
			<h1>{this.state.message}</h1>
			<button onClick = {this.changeMessage}>Subscibe</button>
			</div>);
	}
}

export default Message