// sensor DHT11 | js | SET

<<<<<<< HEAD
let watch_DHT11 = (() => {
  const devices_set_DHT11 = document.querySelector("#devices_set_DHT11");
=======
let watch = (() => {
  const devices_set  = document.querySelector("#devices_set_DHT11");
>>>>>>> 335842e133c168bfd0ae5fc1202f06950ace8547

  const create = (timestamp, status) => {
    const created = new Date().toISOString();
    const data = {
      //timestamp, status 
    }
    return firebase.database().ref().child('DHT11').push(data);
  };

  const resetForm = () => {
    //timestampInput.value = '';
  }

  const devices_setView_DHT11 = (snapshot) => {
    devices_set_DHT11.innerHTML = '';
    icont = 0;
    snapshot.forEach(item => {
      let li = document.createElement('li');
      let hr = document.createElement('hr');
      icont++;
      li.appendChild(document.createTextNode(
      icont  + '  |  '
      //+ item.val().sDeviceSerial + '  |  '
      + item.val().sDeviceName + '  |  '
      + item.val().temp + ' ºC |  '
      + item.val().humid + ' % |  '
      + item.val().timestamp + '  |  '
      + item.val().SensorDHT11_status   
      ) );
      devices_set_DHT11.appendChild(hr);
      devices_set_DHT11.appendChild(li);
    });
  }

  return {
    init: () => {
      firebase.database().ref('devices_set/DHT11/').on('value', devices_setView_DHT11);
    }
  }
  
})();

watch_DHT11.init();