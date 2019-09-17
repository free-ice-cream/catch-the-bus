import React, { Component } from 'react';
import { sensors, sensorDataRestPath } from '/config'
import { withTracker } from 'meteor/react-meteor-data';
import { SensorData } from '../api/sensor_data';

const n = 20 // display n recent data points

class Info extends Component {
  renderSensors(sensorData) {
    return sensors.map( name => 
      (<li key={name}>
        <h3>
          <a target="_blank" href={makeInsertSensorDataPath(name)} title={makeInsertSensorDataPath(name)}>
            {name}
          </a>
        </h3>
        <ol>
        { sensorData
            .filter(d => d.name == name)
            .map( d => <li key={d._id}> {d.value} (<small>{new Date(d.timestamp).toLocaleTimeString()}</small>)</li>) }
        </ol>
      </li>))
  }

  render() {
    return (
      <div className="Info">
        <h2>All sensors, last {n} values</h2>
        <ul>
          {this.renderSensors(this.props.sensorData)}
        </ul>
      </div>
    );
  }

}

function makeInsertSensorDataPath(sensor = sensors[0], value = -1) {
  return `${sensorDataRestPath}?name=${sensor}&value=${value}`
}

export default InfoContainer = withTracker(() => {
  const handle = Meteor.subscribe('sensorData',n);
  return {
    sensorData: SensorData.find({},{sort: {timestamp: -1}}).fetch(),
  };
})(Info);
