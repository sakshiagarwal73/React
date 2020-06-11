import React from 'react'

class RefsDemo extends React.Component
{
	  constructor(props)
	  {
           super(props);
           this.inputRef = React.createRef();
	  }
      
      comonentDidMount()
      {
      	this.inputRef.current.focus();
      	console.log("RefsDemo");
      	console.log(this.inputRef);
      }

      render()
      {
      	return (<div>
      		    <input type = "text" ref = {this.inputRef}/>
      		</div>);
      }
}

export default RefsDemo;