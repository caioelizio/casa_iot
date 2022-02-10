// sensor PIR | js | SET

let watch_PIR = (() => {
  const devices_set_PIR  = document.querySelector("#devices_set_PIR");

  const create = (timestamp, status) => {
    const created = new Date().toISOString();
    const data = {
      //timestamp, status 
    }
    return firebase.database().ref().child('PIR').push(data);
  };

  const resetForm = () => {
    //timestampInput.value = '';
  }

  const devices_setView_PIR = (snapshot) => {
    devices_set_PIR.innerHTML = '';
    icont = 0;
    snapshot.forEach(item => {
      let li = document.createElement('li');
      let hr = document.createElement('hr');
      icont++;
      li.appendChild(document.createTextNode(
      icont  + '  |  ' 
      //+ item.val().sDeviceSerial + '  |  '
      + item.val().id + '  |  '
      //+ item.val().sDeviceName + '  |  '
      + item.val().value_sensor_PIR + ' |  '
      + item.val().mns_sensor_PIR + '  |  '
      + item.val().timestamp + '  |  '
      + item.val().sensorPIR_status
      ) );
      devices_set_PIR.appendChild(hr);
      devices_set_PIR.appendChild(li);
    });
  }

  return {
    init: () => {
      firebase.database().ref('devices_set/PIR/').on('value', devices_setView_PIR);
    }
  }
  
})();

watch_PIR.init();