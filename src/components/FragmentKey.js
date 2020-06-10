import React from 'react'

class FragmentKey extends React.Component
{
	render()
	{
		const names = [{id:"1",first:"sakshi",last:"agarwal"},{id:"2",first:"sonakshi",last:"sen"}];
		const nameslist = names.map(name=><React.Fragment key = item.id>
			                               <h2>{name.first}</h2>
			                               <h2>{name.last}</h2>
			                               </React.Fragment>);
		return (<div>{nameslist}</div>);	                               
	}
}

export default FragmentKey;