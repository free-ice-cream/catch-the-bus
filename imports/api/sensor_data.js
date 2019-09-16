import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

const SensorData = new Mongo.Collection('sensor_data');

if (Meteor.isServer) {
  SensorData.rawCollection().createIndex({ timestamp: -1 });
}

function insertSensorData(name, value) {
  SensorData.insert({ name, value, timestamp: new Date() });
}

export {
  SensorData,
  insertSensorData
}
