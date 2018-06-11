import React, { Component } from 'react';
import '../css/ToDoBody.css';

class ToDoBody extends Component {
	render() {
		return (
			<div className="ToDoBody">
				<input
					type="text"
					placeholder="+ Add Task"
					class="ToDoInput"
				/>

			</div>
		);
	}
}

export default ToDoBody;