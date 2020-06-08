import React,{ Component } from 'react'
import ChildComponent from './ChildComponent'


class ParentComponent extends Component{
   
    constructor(props)
    {
    	super(props);
    	this.state = {parentName:'parent'};

    	this.greetParent = this.greetParent.bind(this); //Use this whenever 'this' is used
    }

    greetParent(childname)
    {
    	 console.log(`Hello ${this.state.parentName} from  ${childname}`);
    }

	render()
	{
		return(<div><ChildComponent greetHandler = {this.greetParent}></ChildComponent></div>);
		//We use Child Component here to which we pass the eventListener
	}
}

export default ParentComponent