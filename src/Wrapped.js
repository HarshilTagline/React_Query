import React, { Component } from "react";
import Hoc from "./Hoc";
export default class Wrapped extends Component {
  render() {
    console.log("render", this.props.name, this.props.styles);
    return (
      <div>
        <button
          style={{ backgroundColor: this.props.styles }}
          onClick={this.props.method}
        >
          {this.props.name}
          {this.props.count}
        </button>
      </div>
    );
  }
}
Wrapped = Hoc(Wrapped);
