import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 9,
    };
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
  }
  handleDecrement() {
    // console.log(this.state.count--);
    // this.setState({ count: this.state.count - 1 });
    this.setState((curState) => {
      return { count: curState.count - 1 };
    });
  }
  handleIncrement() {
    // console.log(this.state.count++);
    // this.setState({ count: this.state.count + 1 });
    this.setState((curState) => {
      return { count: curState.count + 1 };
    });
  }
  render() {
    const date = new Date("november 9 2023");
    date.setDate(date.getDate() + this.state.count);
    // console.log(date);
    return (
      <div>
        <button onClick={this.handleDecrement}>-</button>
        <span>
          {date.toDateString()} [{this.state.count}]
        </span>
        <button onClick={this.handleIncrement}>+</button>
      </div>
    );
  }
}

export default Counter;
