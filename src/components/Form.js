import React from 'react'


 class Form extends React.Component
{
	constructor(props)
	{
       super(props);
       this.state = {username:'',
                     comments:'',
                     topic:'react'};

       //this.handleUsernameChange = this.handleUsernameChange.bind(this);
	}

	handleUsernameChange = (event) => {
		event.preventDefault();
		this.setState(
            {username:event.target.value}
            );
	}
	
	handleCommentsChange = (event) => {
		event.preventDefault();
		this.setState(
            {comments:event.target.value}
            );
	}

	handleTopicChange = (event) => {
		event.preventDefault();
		this.setState(
            {topic:event.target.value}
            );
	}

	submitHandler = (event) => {

		alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`);
        event.preventDefault();
	}
	

	render()
	{
		return (
            <form onSubmit = {this.submitHandler}>
                <div>
                <label>Username</label>
                <input type = 'text' value = {this.state.username} onChange = {this.handleUsernameChange}/>
                </div>

                <div>
                <label>Comments</label>
                <textarea  value = {this.state.comments} onChange = {this.handleCommentsChange}/>
                </div>

                <div>
                <label>Topic</label>
                <select value = {this.state.topic} onChange = {this.handleTopicChange}>
                <option value = 'React'>React</option>
                <option value = 'Angular'>Angular</option>
                <option value = 'Vue'>Vue</option>
                </select>
                </div>

                <button>Submit</button>
            </form>);
	}
}

export default Form;