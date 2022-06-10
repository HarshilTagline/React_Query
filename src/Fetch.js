import React, { Component } from "react";

export class Fetch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: [],
      error:null,
      isLoading:false,
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ user:data,isLoading:true }),
            (error) => this.setState({ error: "error",isLoading:true})      
      );
  }

  render() {
    const { user,error,isLoading } = this.state;
    console.log(user);

    if(error){return <h3>Error:{error.message}</h3>}
    else if(!isLoading){return <h3>loading...</h3>}
    else
    return (
      <ul>
        {user.map((data) => (
          <li key={data.id}>{data.name} from {data.company.name}</li>
        ))}
      </ul>
    );
  }
}

export default Fetch;


