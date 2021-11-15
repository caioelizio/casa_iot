// devices js

var watch = (() => {
  const devicesList_set  = document.querySelector("#devicesList_set_SCT13");

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

      icont  + '  |  ' +
      item.val().id + '  |  ' + 
      item.val().corrente + '  |  ' + 
      item.val().potencia + '  |  ' + 
      item.val().rele1 + '  |  ' + 
      item.val().rele2

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