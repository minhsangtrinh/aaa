import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      email: "",
      topic: "",
    };
  }

  onchangeUserName = (event) => {
    this.setState({
      userName: event.target.value,
    });
  };

  onchangeEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  onChangeTopic = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };

  handleSubmit = (event) => {
    alert(
      `User name : ${this.state.userName}, email : ${this.state.email}, topic : ${this.state.topic}`
    );
    event.preventDefault();
  };

  render() {
    const { userName, email, topic } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>User name: </label>
          <input
            type="text"
            value={userName}
            onChange={this.onchangeUserName}
          ></input>
        </div>
        <div>
          <label>Email: </label>
          <input
            type="text"
            value={email}
            onChange={this.onchangeEmail}
          ></input>
        </div>
        <div>
          <label>Topic: </label>
          <select value={topic} onChange={this.onChangeTopic}>
            <option value={"java"}>Java</option>
            <option value={"react"}>React</option>
            <option value={"node"}>Node</option>
          </select>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

export default Form;
