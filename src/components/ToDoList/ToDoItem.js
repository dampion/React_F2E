import React, { Component } from 'react';
import '../css/ToDoItem.css';
import FontAwesome from 'react-fontawesome'
// import faStyles from 'font-awesome/css/font-awesome.css'

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
				<FontAwesome name="fab fa-star" />
				<FontAwesome name="spinner" />
			</div>
		</div>
	);
}

class ToDoItem extends Component {

	createCheckboxes = (props) => (
		props.map( (item, index) => <CreateCheckbox item={item} key={index} /> )
	)

	render() {
		return (
			<div className="ToDoItems">
				{this.createCheckboxes(items)}
			</div>
		);
	}
}

export default ToDoItem;