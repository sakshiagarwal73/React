import React from 'react'

const Greet = props => {

	return (<div>
		<h1>Hello {props.name}  {props.lastname}</h1>
		{props.children}
		</div>);
}


export default Greet
