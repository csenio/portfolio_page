import React, { Component } from "react";

class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="loading">
        <h1>one second...</h1>
      </div>
    );
  }
}

export default Loading;
