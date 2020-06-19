import React from 'react'

class Test extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = {

			message : "hello",
            name : "sakshi"
		};

		this.changeMessage = this.changeMessage.bind(this);
	}

	changeMessage()
	{
		this.setState({message: "hi"},() => <h2>{this.state.message} {this.state.name}</h2>);
		
	}

	render()
	{
         return (<div>
         	<h2>{this.state.message} {this.state.name}</h2>
         	<button onClick = {this.changeMessage}>Click</button>
         	</div>);
	}
}

export default Test;