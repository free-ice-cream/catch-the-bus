import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { SensorData } from '../api/sensor_data';

class Sensor extends Component {

  render() {
    if (!this.props.ready) return null

    const output = this.props.data.value

    return (
      <div className="Sensor">
        { output }
      </div>
    );
  }
}
export default SensorContainer = withTracker((props) => {
  const sensorName = props.match.params.name;
  const handle = Meteor.subscribe('sensorData', 1, sensorName);
  return {
    ready: handle.ready(),
    data: SensorData.findOne(),
  };
})(Sensor);