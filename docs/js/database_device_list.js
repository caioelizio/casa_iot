// devices js

var watch = (() => {
  const devicesList  = document.querySelector("#devicesList");

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

  const devicesListView = (snapshot) => {
    devicesList.innerHTML = '';
    icont = 0;

    snapshot.forEach(item => {
      let li = document.createElement('li');
      let hr = document.createElement('hr');
      icont++;
      li.appendChild(document.createTextNode(

      icont  + '  |  '
      //+ item.val().sDeviceSerial + '  |  '
      + item.val().sDeviceName + '  |  '
      + item.val().sLocalizacao_device + '  |  '
      + item.val().ip_sys_fixo + '  |  '
      + item.val().timestamp + '  |  '
      + item.val().ts_active_device + '  |  '
      + item.val().sVersionSis
      //+ item.val().status

      ) );
      devicesList.appendChild(hr);
      devicesList.appendChild(li);
    });
  }

  return {
    init: () => {
      //firebase.database().ref('/devices/3359941').on('value', devicesListView); //Print3D 
      firebase.database().ref('devices').on('value', devicesListView);
    }
  }
  
})();

watch.init();