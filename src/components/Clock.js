import { Component } from 'react';

class Clock extends Component {
  // declare props
  constructor(props) {
    super(props);
    // like data() in Vue
    this.state = {date: new Date()};
  }
  // one of lifecycles
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  // one of lifecycles
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
  render() {
    return (
      <div>
        <h1>Hi, it's {this.state.date.toLocaleTimeString()}.</h1>
      </div>
    );
  }
}

export default Clock;