// devices js

let watch = (() => {
  const devicesList_set  = document.querySelector("#devices_set_SCT13");

  const create = (timestamp, status) => {
    const created = new Date().toISOString();
    const data = {
      //timestamp, status 
    }
    return firebase.database().ref().child('users').push(data);
  };

  const resetForm = () => {
    //timestampInput.value = '';
  }

  const devicesList_setView = (snapshot) => {
    devicesList_set.innerHTML = '';
    icont = 0;

    snapshot.forEach(item => {
      let li = document.createElement('li');
      let hr = document.createElement('hr');
      icont++;
      li.appendChild(document.createTextNode(

      icont  + '  |  '
      //+ item.val().sDeviceSerial + '  |  '
      + item.val().sDeviceName + '  |  '
      + item.val().fCorrente + '  |  '
      + item.val().fPotencia + '  |  '
      + item.val().fConsumoMesKwh + '  |  '
      + item.val().fValorConsumoMes + '  |  '
      //+ item.val().fConsumoMesKwhAnt + '  |  '
      //+ item.val().fValorConsumoMesAnt + '  |  '
      + item.val().timestamp

      ) );
      devicesList_set.appendChild(hr);
      devicesList_set.appendChild(li);
    });
  }

  return {
    init: () => {
      //firebase.database().ref('devices/1483989').on('value', devicesList_setView);
      //firebase.database().ref('devices_set/3359941').on('value', devicesList_setView); //print3d
      //firebase.database().ref('devices_set/1329594').on('value', devicesList_setView); //Medidor Energia
      //firebase.database().ref('devices_set/').on('value', devicesList_setView);
      firebase.database().ref('devices_set/SCT13/').on('value', devicesList_setView);
    }
  }
  
})();

watch.init();