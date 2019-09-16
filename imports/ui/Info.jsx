import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { SensorData } from '../api/sensor_data';

const n = 20 // display n recent data points

class Info extends Component {
  renderSensors(sensorData) {
    const names = groupBy(sensorData, 'name')
      return Object.entries(names).map( ([name, entries]) => 
      (<li key={name}>
        <h3>{name}</h3>
        <ol>
        { entries.map( d => <li key={d._id}> {d.value} (<small>{new Date(d.timestamp).toUTCString()}</small>)</li>) }
        </ol>
      </li>))
  }

  render() {
    return (
      <div>
        <h2>All sensors, last {n} values</h2>
        <ul>
          {this.renderSensors(this.props.sensorData)}
        </ul>
      </div>
    );
  }

}

const groupBy = function(xs, key) {
  return xs.reduce(function(rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

export default InfoContainer = withTracker(() => {
  const handle = Meteor.subscribe('sensorData',n);
  return {
    sensorData: SensorData.find().fetch(),
  };
})(Info);
