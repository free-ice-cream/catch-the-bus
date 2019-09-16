import { Meteor } from 'meteor/meteor';
import { sensors } from '/config'
import { SensorData, insertSensorData } from '/imports/api/sensor_data';
import { initRestApi } from './REST'
import './publications'

Meteor.startup(() => {
  if (SensorData.find().count() === 0) {
    console.log("populating initial sensor data")
    for (sensor of sensors) {
      insertSensorData(sensor, -1)
    }
  }

  initRestApi()

});
