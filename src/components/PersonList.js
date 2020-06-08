import React from 'react'
import Person from './Person'

function PersonList()
{
	const persons = [{id:"1",name:"Sakshi",age:"21"},{id:"2",name:"Sonakshi",age:"19"},{id:"3",name:"Meenakshi",age:"20"}];
	const personList = persons.map(person => <Person key = {person.id} person = {person}/>);
	return (<div>{personList}</div>);
}

export default PersonList