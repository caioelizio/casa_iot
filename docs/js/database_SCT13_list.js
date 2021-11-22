//sensor SCT13 js

var watch = (() => {
  const SCT13List = document.querySelector("#SCT13List");

  const create = (timestamp, status) => {
    const created = new Date().toISOString();
    const data = {
      //timestamp, status
    }

    return firebase.database().ref().child('users').push(data);
  };

  const resetForm = () => {
    //timestampInput.value = '';    statusInput.value = '';
  }

  const SCT13ListView = (snapshot) => {
    SCT13List.innerHTML = '';
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
      + item.val().timestamp + '  |  ' 
      + item.val().bSensorSCT_status
        
        ));
      SCT13List.appendChild(hr);
      SCT13List.appendChild(li);
    });
  }
 
  return {
    init: () => {
      firebase.database().ref('SCT13/1329594').on('value', SCT13ListView);
      //firebase.database().ref('SensorSCT13').on('value', SCT13ListView);
    }
  }
  
})();

watch.init();
