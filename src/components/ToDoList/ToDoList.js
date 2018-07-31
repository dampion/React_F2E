import React, { Component } from 'react';
import '../../css/ToDoList.css';
import TodoState from '../../constants/TodoState';

const CreateCheckbox = (prop) => (
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
	</div>
);

class ToDoList extends Component {
	constructor(props) {
    super(props);
    this.state = {value: 'myTasks', items: TodoState.myTasks, toDoValue: ''};
    // binding every method you need
    this.switchTab = this.switchTab.bind(this);
    this.toDoInputBinding = this.toDoInputBinding.bind(this);
    this.addToList = this.addToList.bind(this);
    this.clearTodoInput = this.clearTodoInput.bind(this);
    this.createCheckboxes = this.createCheckboxes.bind(this);
  }
  switchTab(tabName) {
  	this.setState({
  		value: tabName,
  		items: TodoState[tabName],
  	});
  	this.clearTodoInput();
  }
  addToList(e) {
		const newToDo = {'content': this.state.toDoValue};
  	this.state.items.push(newToDo);
  	this.setState({items: this.state.items});
  	this.clearTodoInput();
  }
  clearTodoInput() {
  	this.setState({
  		toDoValue: ''
  	})
  }
  toDoInputBinding(e) {
  	this.setState({
  		toDoValue: e.target.value,
  	});
  }
  createCheckboxes = (props, edit) => (
		props.map( (item, index) => <CreateCheckbox item={item} key={index} /> )
	)
	render() {
		return (
			<div className="to_do_list">
				<div className="header">
					<div
						className={(this.state.value === 'myTasks')?'to_do_tabs to_do_active_tab':'to_do_tabs'}
						onClick={this.switchTab.bind(this,'myTasks')}>
						My Tasks
					</div>
					<div
						className={(this.state.value === 'inProgress')?'to_do_tabs to_do_active_tab':'to_do_tabs'}
						onClick={this.switchTab.bind(this,'inProgress')}>
						In Progress
					</div>
					<div
						className={(this.state.value === 'completed')?'to_do_tabs to_do_active_tab':'to_do_tabs'}
						onClick={this.switchTab.bind(this,'completed')}>
						Completed
					</div>
				</div>
        <div className="ToDoBody">
					<input
						type="text"
						placeholder="+ Add Task"
						className="ToDoInput"
						onChange={this.toDoInputBinding}
						value={this.state.toDoValue}
					/>
					<button onClick={this.addToList}>Add</button>
				</div>
        <div className="ToDoItems">
					{this.createCheckboxes(this.state.items)}
				</div>
			</div>
		);
	}
}

export default ToDoList;