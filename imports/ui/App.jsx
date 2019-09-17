import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Sensor from './Sensor.jsx';
import Info from './Info.jsx';
import Welcome from './Welcome.jsx'
import { sensorMenu } from '/config'

const App = () => (

  <Router>
    <div>

      <h1>Catch The Bus</h1>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {
            sensorMenu.map( entry => <li key={entry.sensor}>
              <Link to={`/s/${entry.sensor}`}>{entry.title}</Link>
            </li> )
          }                          
          <li>
            <Link to="/info/">Info</Link>
          </li>
        </ul>
      </nav>

      <Route path="/" exact component={Welcome} />
      <Route path="/s/:name" component={Sensor} />
      <Route path="/info/" component={Info} />
    </div>
  </Router>
);

export default App;
