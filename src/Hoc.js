// import React from 'react'
import React, { Component } from "react";
// import Wrapped from "./Wrapped";

function Hoc(Wrapcomp) {
  return class extends Component {
    constructor(props) {
      super(props);

      this.state = {
        count1: 0,
        count2: 0,
      };
      this.handleCount1 = () => {
        this.setState({ count1: this.state.count1 + 1 });
        // console.log("clicked")
      };
      this.handleCount2 = () => {
        this.setState({ count2: this.state.count2 + 2 });
      };
    }

    render() {
      return (
        <>
          <Wrapcomp
            name="harry"
            styles="#6BD466"
            count={this.state.count1}
            method={this.handleCount1}
          ></Wrapcomp>
          <Wrapcomp
            name="john"
            styles="#B6776A"
            count={this.state.count2}
            method={this.handleCount2}
          ></Wrapcomp>
        </>
      );
    }
  };
}
export default Hoc;
