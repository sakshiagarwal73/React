import React from 'react'

class RefsDemo extends React.Component
{
	  constructor(props)
	  {
           super(props);
           this.inputRef = React.createRef();
	  }
      
      componentDidMount()
      {
      	this.inputRef.current.focus();
      	console.log("RefsDemo");
      	console.log(this.inputRef);
      }

      clickHandler = () => {
      	alert(this.inputRef.current.value);
      }

      render()
      {
      	return (<div>
      		    <input type = "text" align = "right" ref = {this.inputRef}/>
      		    <button onClick = {this.clickHandler}>Click</button>
      		</div>);
      }
}

export default RefsDemo;