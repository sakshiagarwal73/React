import React from 'react'
import Column from './Column'

class Table extends React.Component
{
	render()
	{
		return (<div>
			<table>
			<tr><Column/></tr>
			</table>
			</div>);
	}
}

export default Table;