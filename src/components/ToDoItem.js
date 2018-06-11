import React, { Component } from 'react';
import '../css/ToDoItem.css';

const items = [{'content':'Type something here.',}, {'content':'Type something here.',}];



class ToDoItem extends Component {
	componentWillMount = () => {
    this.selectedCheckboxes = new Set();
  }

  createCheckbox = item => (
  	<div class="ToDoItem">
			<label>
				<input 
					type="checkbox"
					className="Item_checkbox"
				/>
				{item.content}
			</label>
		</div>
	)

	createCheckboxes = () => (
		items.map(this.createCheckbox)
	)

	render() {
		return (
			<div className="ToDoItems">
				{this.createCheckboxes()}
			</div>
		);
	}
}

export default ToDoItem;