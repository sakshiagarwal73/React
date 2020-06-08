import React from 'react'

function ChildComponent(props)
{
    return (<div>
    	     <button onClick = {() => props.greetHandler('child')}>  Greet Parent </button>
    	</div>);
    //EventHandler passed by ParentComponent is referred to by props
}

export default ChildComponent