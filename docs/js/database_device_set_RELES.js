// sensor DHT11 js
// SET

let watch = (() => {
  const devices_set  = document.querySelector("#devices_set_RELES");

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

  const devices_setView = (snapshot) => {
    devices_set.innerHTML = '';
    icont = 0;

    snapshot.forEach(item => {
      let li = document.createElement('li');
      let hr = document.createElement('hr');
      icont++;
      li.appendChild(document.createTextNode(

      icont  + '  |  '
      //+ item.val().sDeviceSerial + '  |  '
      + item.val().sDeviceName + '  |  '
      + item.val().rele1 + '  |  '
      + item.val().rele2 + '  |  '
      + item.val().timestamp + '  |  '
      + item.val().ts_active_device //deletar essa linha depois de atualizar 

      ) );
      devices_set.appendChild(hr);
      devices_set.appendChild(li);
    });
  }

  return {
    init: () => {
      //firebase.database().ref('devices/1483989').on('value', devices_setView);
      //firebase.database().ref('devices_set/3359941').on('value', devices_setView); //print3d
      //firebase.database().ref('devices_set/1329594').on('value', devices_setView); //Medidor Energia
      //firebase.database().ref('devices_set/').on('value', devices_setView);
      firebase.database().ref('devices_set/RELES/').on('value', devices_setView);
    }
  }
  
})();

watch.init();