import React from 'react'

function MemoComp(props) //destructuring props
{
	console.log("rendering memo");
    return (<div>{props.name}</div>);
}

export default React.memo(MemoComp);