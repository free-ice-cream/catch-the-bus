import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Sensor from './Sensor.jsx';
import Info from './Info.jsx';
import Welcome from './Welcome.jsx'

const App = () => (

  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/s/distance1">1</Link>
          </li>
          <li>
            <Link to="/s/distance2">2</Link>
          </li>
          <li>
            <Link to="/s/distance3">3</Link>
          </li>
          <li>
            <Link to="/s/distance4">4</Link>
          </li>                              
          <li>
            <Link to="/info/">Info</Link>
          </li>
        </ul>
      </nav>

      <h1>Catch The Bus</h1>

      <Route path="/" exact component={Welcome} />
      <Route path="/s/:name" component={Sensor} />
      <Route path="/info/" component={Info} />
    </div>
  </Router>
);

export default App;
