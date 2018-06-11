import React, { Component } from 'react';
import '../css/ToDoItem.css';

const items = [{'content':'Type something here.',}, {'content':'Type something here.',}];

function CreateCheckbox(prop) {
	return (
		<div className="ToDoItem">
	  	<div>
				<label>
					<input 
						type="checkbox"
						className="Item_checkbox"
					/>
				</label>
				{prop.item.content}
			</div>
			<div>
				<i className="far fa-star"></i>
				<i className="fas fa-pencil-alt marginLeft15"></i>
			</div>
		</div>
	);
}

class ToDoItem extends Component {
	componentWillMount = () => {
    this.selectedCheckboxes = new Set();
  }

	createCheckboxes = () => (
		items.map( (item, index) => <CreateCheckbox item={item} key={index} /> )
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