import React, { Component } from 'react';
import '../css/ToDoHeader.css';

class ToDoHeader extends Component {
	constructor(props) {
    super(props);
    this.state = {value: 'myTasks'};

    this.switchTab = this.switchTab.bind(this);
  }
  switchTab() {
  	this.setState((prevState, props) => {
  		return {value: props};
  	})
  }
	render() {
		return (
			<div className="header">
				<div className="to_do_tabs to_do_active_tab">My Tasks</div>
				<div className="to_do_tabs" >In Progress</div>
				<div className="to_do_tabs">Completed</div>
			</div>
		);
	}
}

export default ToDoHeader;