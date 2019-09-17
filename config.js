const sensors = [
  "distance1",
  "distance2",
  "distance3",
  "distance4",
]

const sensorMenu = [
  {
    sensor: "distance1",
    title: "1"
  },
  {
    sensor: "distance2",
    title: "2"
  },
  {  
    sensor: "distance3",
    title: "3"
  },
  {
    sensor: "distance4",
    title: "4"
  }
]

const sensorDataRestPath = '/api/sensorData'

export {
  sensors,
  sensorMenu,
  sensorDataRestPath
}