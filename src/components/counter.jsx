import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
  };

  render() {
    let classes = "badge m-2 ";
    classes += this.state.count === 0 ? "badges-warning" : "badges-primary";
    return (
      <div>
        <span className={classes}>{this.state.count}</span>
        <button className="btn btn-secondar btn-sm">Increment</button>
      </div>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
