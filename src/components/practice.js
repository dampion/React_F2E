// 'React' must be in scope when using JSX  react/react-in-jsx-scope
// remember to import React all the time when using JSX
import React, { Component } from 'react';

class Practice extends Component {
	constructor(props) {
		super(props);
		this.state = {practice: "practice"};
	}
	render() {
		return (
			<div id="practice">
				<h1>{this.state.practice}</h1>
			</div>
		)
	}
}

export default Practice;