import React, { Component } from "react";
import RegComp from "./RegComp";
import PureComp from "./PureComp";

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = { name: "Thien" };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Sang",
      });
    }, 2000);
  }

  render() {
    console.log("Parent component");
    return (
      <div>
        Parent component
        <PureComp name={this.state.name}></PureComp>
        <RegComp name={this.state.name}></RegComp>
      </div>
    );
  }
}

export default ParentComp;
