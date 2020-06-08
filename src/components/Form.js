import React,{Component} from 'react'

class Form extends Component
{
	constructor()
	{
       super();
       this.state = {username:''};
	}

	render()
	{
		return (<form><div>
			 <label>Username</label>
			 <input type = 'text' value = {this.state.username}/>
			</div></form>);
	}
}

export default Form