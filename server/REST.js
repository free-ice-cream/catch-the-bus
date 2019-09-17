
import { sensors, sensorDataRestPath } from '/config'
import { insertSensorData } from '/imports/api/sensor_data'

function initRestApi() {
  // Listen to incoming HTTP requests (can only be used on the server).
  WebApp.connectHandlers.use(sensorDataRestPath, (req, res, next) => {
    const propNames = Object.getOwnPropertyNames(req.query)
    if (propNames.indexOf("name") < 0) {
      res.writeHead(400);
      res.end(`missing name param`);      
      return
    }
    if (propNames.indexOf("value") < 0) {
      res.writeHead(400);
      res.end(`missing value param`);      
      return
    }
    const name = req.query.name
    if (sensors.indexOf(name) < 0) {
      res.writeHead(400);
      res.end(`unknown sensor name ${name}, available names: ${sensors.join(',')}`);      
      return
    }
    const value = parseInt(req.query.value)

    insertSensorData(name, value)
    res.writeHead(200);
    res.end(`OK`);
  })
}

export {
  initRestApi
}