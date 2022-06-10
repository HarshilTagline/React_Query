import React, { PureComponent } from "react";

export class Pure extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      count:[1,2,3,4] 
    };
    setInterval(() => {
      this.setState({count:this.state.count})
      console.log("render")
    }, 3000)
    
}

render() {
    console.log("click",this.state.count);
    console.log(this.state.count.length)
    return (
      <div>
        <button>count{this.state.count.length}</button>
      </div>
    );
  }
}

export default Pure;
