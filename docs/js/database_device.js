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
      li.appendChild(document.createTextNode(

      item.val().icont  + '  |  ' +
      item.val().serial_device + '  |  ' + 
      item.val().id + '  |  ' + 
      item.val().localizacao + '  |  ' + 
      item.val().sysIP + '  |  ' + 
      //item.val().timestamp + '  |  ' + 
      item.val().ts_active_device + '  |  ' + 
      item.val().sVersionSis + '  |  ' + 
      item.val().status + '  |  '
      //item.val().created

      ) );
      devicesList.appendChild(hr);
      devicesList.appendChild(li);
    });
  }

  return {
    init: () => {
      //firebase.database().ref('devices/1483989').on('value', devicesListView);
      firebase.database().ref('devices/').on('value', devicesListView);
    }
  }
  
})();

watch.init();