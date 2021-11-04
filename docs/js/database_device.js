// devices js

var watch = (() => {
  const devicesList  = document.querySelector("#devicesList");

  const devicesListView = (snapshot) => {
    devicesList.innerHTML = '';
    snapshot.forEach(item => {
      let li = document.createElement('li');
      let hr = document.createElement('hr');
      li.appendChild(document.createTextNode(

      item.val().serial_device + '  |  ' + 
      item.val().id + '  |  ' + 
      item.val().status + '  |  ' + 
      item.val().sVersionSis + '  |  ' + 
      item.val().tipo + '  |  ' + 
      item.val().localizacao + '  |  ' + 
      item.val().sysIP + '  |  ' + 
      item.val().tipo + '  |  ' + 
      item.val().ts_active_device + '  |  ' + 
      item.val().timestamp + '  |  ' + 
      item.val().created

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