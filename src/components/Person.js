import React from 'react'

function Person(props)
{
	return (<div>name: {props.person.name}  age: {props.person.age}</div>);
}

export default Person