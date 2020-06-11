import React from 'react'
import PureComp from './PureComp'
import RegularComp from './RegularComp'
import MemoComp from './MemoComp'
class ParentComp extends React.PureComponent
{
	constructor(props)
	{
		super(props);
		this.state = {name:"sakshi"};
	}

	componentDidMount()
	{
		setInterval(() => {this.setState({name:"sakshi"})},2000);
	}

	render()
	{
		console.log("Parent Comp");
		return (<div>
			   ParentComponent
			   <MemoComp name = {this.state.name}/>
			</div>);
	}

}

export default ParentComp;