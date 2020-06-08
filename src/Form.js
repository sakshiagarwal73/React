import React from 'react'


 class Form extends React.Component
{
	constructor(props)
	{
       super(props);
       this.state = {username:''};

       //this.handleUsernameChange = this.handleUsernameChange.bind(this);
	}

	handleUsernameChange = (event) => {
		event.preventDefault();
		this.setState(
            {username:event.target.value}
            );
	}
	

	render()
	{
		return (
            <form>
                <div>
                <label>Username</label>
                <input type = 'text' value = {this.state.username} onChange = {this.handleUsernameChange}/>
                </div>
            </form>);
	}
}

export default Form;