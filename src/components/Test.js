import React from 'react'

class Test extends React.component
{
	constructor(props)
	{
		super(props);
		this.state = {

			message : "hello",
            name : "sakshi"
		};

		this.changeOnClick = this.changeOnClick.bind(this);
	}

	changeMessage()
	{
		this.setState({message: "hi",name : "sonakshi"})
		//() => <h2>{this.state.name} {this.state.message}</h2>
	}

	render()
	{
         return (<div>
         	
         	<button onClick = {this.changeMessage}>Click</button>
         	</div>);
	}
}

export default Test;