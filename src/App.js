import React from "react";
import "./styles.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import PublicComponent from "./components/PublicComponent";
import ProtectedComponent from "./components/ProtectedComponent";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/public">Publico</Link>
            </li>
            <li>
              <Link to="/protected">Protegido</Link>
            </li>
          </ul>

          <Route exact path="/public" component={PublicComponent} />
          <Route exact path="/protected" component={ProtectedComponent} />
        </div>
      </Router>
    </div>
  );
}
