import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dhruv from './Dhruv1';
import Designsubway from './Designsubway1';
import 'tachyons';
import './App.css';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul className=''>
            <li className="dib pa2 ma3 br3">
              <Link to="/DESIGNSUBWAY">DESIGNSUBWAY</Link>
            </li>
            <li className="dib pa2 ma3 br3">
              <Link to="/DHRUV">DHRUV</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/DESIGNSUBWAY">
            <Designsubway />
          </Route>
          <Route path="/DHRUV">
            <Dhruv />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}