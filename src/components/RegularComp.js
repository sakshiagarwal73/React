import React from 'react'

class RegularComp extends React.Component
{
	render()
	{
		console.log("Regular Comp");
		return (<div>Regular Compoent  {this.props.name}</div>);
	}
}

export default RegularComp;