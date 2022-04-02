// sensor LDR | js | SET

<<<<<<< HEAD
let watch_LDR = (() => {
  const devices_set_LDR  = document.querySelector("#devices_set_LDR");
=======
let watch = (() => {
  const devices_set  = document.querySelector("#devices_set_LDR");
>>>>>>> 335842e133c168bfd0ae5fc1202f06950ace8547

  const create = (timestamp, status) => {
    const created = new Date().toISOString();
    const data = {
      //timestamp, status 
    }
    return firebase.database().ref().child('LDR').push(data);
  };

  const resetForm = () => {
    //timestampInput.value = '';
  }

  const devices_setView_LDR = (snapshot) => {
    devices_set_LDR.innerHTML = '';
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
      + item.val().value_sensor_LDR + ' |  '
      + item.val().mns_sensor_LDR + '  |  '
      + item.val().timestamp + '  |  '
      + item.val().sensorLDR_status
      ) );
      devices_set_LDR.appendChild(hr);
      devices_set_LDR.appendChild(li);
    });
  }

  return {
    init: () => {
      firebase.database().ref('devices_set/LDR/').on('value', devices_setView_LDR);
    }
  }
  
})();

watch_LDR.init();