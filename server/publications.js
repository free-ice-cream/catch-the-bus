import { Meteor } from 'meteor/meteor';
import { SensorData } from '../imports/api/sensor_data'

Meteor.publish('sensorData', function(limit = 10, name = null) {
  const query = {}
  if (name) {
    query.name = name
  }

  const options = {
    sort: {timestamp: -1},
    limit
  }
  
  return SensorData.find(query, options);
});