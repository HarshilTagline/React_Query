import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink,
  useRouteMatch,
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import { Suspense } from "react";
// const About = React.lazy(() => {
//   import(`./About`);
// });
// const Home = React.lazy(() => {
//   import(`./Home`);
// });
// const Contact = React.lazy(() => {
//   import(`./Contact`);
// });

export class Routing extends Component {
  render() {
    return (
      <center>
        <Router>
            <nav>
              <tr>
                <td>
                  <button>
                    <MenuLink to="/home" label="Home" />
                  </button>
                </td>
                <td>
                  <button>
                    <MenuLink to="/about" label="About" />
                  </button>
                </td>
                <td>
                  <button>
                    <MenuLink to="/contact" label="Contact" />
                  </button>
                </td>
              </tr>
            </nav>
            <hr />
          {/* <Suspense fallback={<h3>Loading...</h3>}> */}
            <Switch>
              <Route exact path="/home">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route exact path="/contact">
                <Contact />
              </Route>
              <Route>
                <Error />
              </Route>
            </Switch>
          {/* </Suspense> */}
        </Router>
      </center>
    );
  }
}

function MenuLink({ to, label }) {
  // console.log(to, label);
  const match = useRouteMatch({ path: to });
  // console.log(match);
  return (
    <>
      {match && ">"}
      <NavLink to={to} activeStyle={{color:"green"}}>{label}</NavLink>
    </>
  );
}

export default Routing;
