import React , { Component } from 'react'

class EventBind extends Component
{
	constructor(props)
	{   
		super(props)
		this.state = {
			message : "Hello"
		}

		this.changeMessage = this.changeMessage.bind(this); // binding in the constructor
	}

	changeMessage()
	{
		this.setState({message:"GoodBye"})
	}

	render()
	{
		return (<div>
			<h1>{this.state.message}</h1>
			<button onClick = {this.changeMessage}>Click</button>
			</div>);
	}
}

export default EventBind