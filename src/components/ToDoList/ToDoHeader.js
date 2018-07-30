import React, { Component } from 'react';
import '../css/ToDoHeader.css';

class ToDoHeader extends Component {
	constructor(props) {
    super(props);
    this.state = {value: 'myTasks'};

    this.switchTab = this.switchTab.bind(this);
  }
  switchTab(tabName) {
  	this.setState({
  		value: tabName
  	});
  }
	render() {
		return (
			<div className="header">
				<div className={(this.state.value === 'myTasks')?'to_do_tabs to_do_active_tab':'to_do_tabs'} onClick={this.switchTab.bind(this,'myTasks')}>My Tasks</div>
				<div className={(this.state.value === 'inProgress')?'to_do_tabs to_do_active_tab':'to_do_tabs'} onClick={this.switchTab.bind(this,'inProgress')}>In Progress</div>
				<div className={(this.state.value === 'completed')?'to_do_tabs to_do_active_tab':'to_do_tabs'} onClick={this.switchTab.bind(this,'completed')}>Completed</div>
			</div>
		);
	}
}

export default ToDoHeader;