import React from "react";
import { useRouteMatch, useParams,useLocation } from "react-router";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink,
} from "react-router-dom";

// const Abouts = ({ match }) => <p>this is {match.params.Id}</p>;
export default function About() {
  let about = useRouteMatch();
  console.log("about rendered");
  const location = useLocation();
  console.log(location)
  function Abouts() {
    let { Id } = useParams();
    return <h3>Requested about: {Id}</h3>;
  }

  return (
    <>
      <h3>This is about page</h3>
      <button><NavLink to={`${about.url}/harry`} activeStyle={{color:"red"}}>About1</NavLink></button>
      <button><NavLink to={`${about.url}/john`} activeStyle={{color:"red"}}>About2</NavLink></button>
      <button><NavLink to={`${about.url}/bob`} activeStyle={{color:"red"}}>About3</NavLink></button>

      <Switch>
        <Route path={`${about.path}/:Id`}>
          <Abouts />
        </Route>
        <Route path={about.path}>
          <h3>Please click on anyone.</h3>
        </Route>
      </Switch>
    </>
  );
}
