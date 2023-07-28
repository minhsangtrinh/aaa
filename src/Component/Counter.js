import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }
    
    count() {
        // this.setState({
        //     count : this.state.count + 1
        // }, () => console.log("Call back:" + this.state.count)) 
        this.setState((prevState, props) => ({
            count: prevState.count + props.name
        }))
        console.log(this.state)
    }

    countFive() {
      this.count()
      this.count()
      this.count()
      this.count()
      this.count()
    }

  render() {
    return (
      <div>
        <div>count - {this.state.count}</div>
        <button onClick={() => this.countFive()}>Count</button>
      </div>
    )
  }
}

export default Counter
