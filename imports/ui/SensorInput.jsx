import React, { Component } from 'react';

class SensorInput extends Component {

  doRequest = (name, value) => {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "/api/sensorData?name="+name+"&value="+value, true);
    xhttp.send();
  }

  render() {

    return (
      <div className="Sensor">
        <button onClick={() => this.doRequest(this.props.match.params.name, 500)}>500</button>
        <button onClick={() => this.doRequest(this.props.match.params.name, 250)}>250</button>
        <button onClick={() => this.doRequest(this.props.match.params.name, 100)}>100</button>
      </div>
    );
  }
}

export default SensorInput;
