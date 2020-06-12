import React from 'react'
import Input from  './input'

class FocusInput extends React.Component
{
	 
    constructor(props)
    {
           super(props);
           this.compRef = React.createRef();
    }
     

    clickHandler = () => {
           
           this.compRef.current.focusInput();
      
    } 

      render()
      {
      	return (<div>
      		    <Input ref = {this.compRef}/>
      		    <button onClick = {this.clickHandler}>Focus Input</button>
      		</div>);
      }
}

export default FocusInput;