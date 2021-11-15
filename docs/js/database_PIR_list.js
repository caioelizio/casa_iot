//sensor DHT11 js

var watch = (() => {
  const PIRlist = document.querySelector("#PIRList");

  const PIRlistView = (snapshot) => {
    PIRlist.innerHTML = '';
    icont = 0;

    snapshot.forEach(item => {
      let li = document.createElement('li');
      let hr = document.createElement('hr');
      icont++;
      li.appendChild(document.createTextNode(

        icont  + '  |  ' +
        + item.val().id  + '  |  '
        + item.val().status + '  |  '
        + item.val().temp + ' | '
        + item.val().humid + '  |  '
        + item.val().timestamp

        ));
      PIRlist.appendChild(hr);
      PIRlist.appendChild(li);
    });
  }

  return {
    init: () => {
      //firebase.database().ref('SensorPIR/3384612').on('value', PIRlistView); //3384612 irrigacao
      //firebase.database().ref('SensorPIR/601897').on('value', PIRlist1View); // 601897 servidor
      firebase.database().ref('SensorPIR/1483989').on('value', PIRlistView); // 1483989 print
      //firebase.database().ref('SensorPIR').on('value', PIRlistView);
    }
  }
  
})();

watch.init();
