import React, { Component } from "react";

export default class SampleFun extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: "",
      second: "",
    };
  }

  handleChange = (e) => {
    this.setState({ first: e.target.value });
  };

  handleChange2 = (e) => {
    this.setState({ second: e.target.value });
  };

  render() {
    const { first, second } = this.state;
    return (
      <>
        <input type="text" value={first} onChange={this.handleChange} />
        <h1>{first}</h1>

        <input type="text" value={second} onChange={this.handleChange2} />
        <h1>{second}</h1>
      </>
    );
  }
}
