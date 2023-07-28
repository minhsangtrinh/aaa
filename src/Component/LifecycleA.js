import React, { Component } from "react";
import PropTypes from "prop-types";

class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = { name: "Minh Sang" };
    console.log("LifecycleA constructor");
  }

  static getDrivedStateFromProps(props, state) {
    console.log("LifecycleA getDrivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifecycleA componentDidMount");
  }

  render() {
    console.log("LifecycleA render");
    return <div>LifecycleA</div>;
  }
}

export default LifecycleA;
