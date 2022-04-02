// sensor SCT-13 | js | SET

<<<<<<< HEAD
let watch_SCT13 = (() => {
  const devicesList_set_SCT = document.querySelector("#devices_set_SCT13");
=======
let watch = (() => {
  const devicesList_set  = document.querySelector("#devices_set_SCT13");
>>>>>>> 335842e133c168bfd0ae5fc1202f06950ace8547

  const create = (timestamp, status) => {
    const created = new Date().toISOString();
    const data = {
      //timestamp, status 
    }
    return firebase.database().ref().child('SCT').push(data);
  };

  const resetForm = () => {
    //timestampInput.value = '';
  }

  const devices_setView_SCT = (snapshot) => {
    devicesList_set_SCT.innerHTML = '';
    icont = 0;
    snapshot.forEach(item => {
      let li = document.createElement('li');
      let hr = document.createElement('hr');
      icont++;
      li.appendChild(document.createTextNode(
      icont  + '  |  '
      //+ item.val().sDeviceSerial + '  |  '
      + item.val().sDeviceName + '  |  '
      + item.val().fCorrente + ' mA |  '
      + item.val().fPotencia + ' W | R$ '
      + item.val().fConsumoMesKwh + '  | R$ '
      + item.val().fValorConsumoMes + '  | '
      //+ item.val().fConsumoMesKwhAnt + '  |  '
      //+ item.val().fValorConsumoMesAnt + '  |  '
      + item.val().timestamp
      ) );
      devicesList_set_SCT.appendChild(hr);
      devicesList_set_SCT.appendChild(li);
    });
  }

  return {
    init: () => {
      firebase.database().ref('devices_set/SCT13/').on('value', devices_setView_SCT);
    }
  }
  
})();

watch_SCT13.init();