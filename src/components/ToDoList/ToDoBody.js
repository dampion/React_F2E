import React, { Component } from 'react';
import '../css/ToDoBody.css';

const ToDoBody = () => (
		<div className="ToDoBody">
			<input
				type="text"
				placeholder="+ Add Task"
				className="ToDoInput"
			/>
		</div>
);

export default ToDoBody;