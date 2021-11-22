// sensor DHT11 js
// list
let meuBotao = document.querySelector('buttonTLL');
let buttonTLL1 = document.querySelector('buttonTLL');
let devices_id1 = document.querySelector('devices_id');

function clique_buttonTLL()
{
  alert("Total de registros: "+icont);
  //alert("buttonTLL1: "+buttonTLL1);
  //alert("meuBotao: "+meuBotao);
  //alert("devices_id: "+devices_id1);
}

var watch = (() => {
  const DHT11List = document.querySelector("#DHT11List");
  //devices_id

  const DHT11ListView = (snapshot) => {
    DHT11List.innerHTML = '';
    icont = 0;

    snapshot.forEach(item => {
      let li = document.createElement('li');
      let hr = document.createElement('hr');
      icont++;
      li.appendChild(document.createTextNode(

        icont  + '  |  '
        //+ item.val().sDeviceSerial + '  |  '
        + item.val().sDeviceName + '  |  '
        + item.val().temp + ' | '
        + item.val().humid + '  |  '
        + item.val().timestamp + '  |  '
        + item.val().status

        ));
      DHT11List.appendChild(hr);
      DHT11List.appendChild(li);
      if (icont == 2){
        return;
      }
    });
  }

  return {
    init: () => {
      if (devices_id1 == "601897") {
        firebase.database().ref('SensorDHT11/601897').on('value', DHT11ListView); // 601897 servidor
      }
      if (devices_id1 == "3359941") {
        firebase.database().ref('SensorDHT11/3359941').on('value', DHT11ListView); // 3359941 sala
      } 
      firebase.database().ref('SensorDHT11/3359941').on('value', DHT11ListView); // 3359941 sala
      //devices_id
      //firebase.database().ref('SensorDHT11/3384612').on('value', DHT11ListView); //3384612 irrigacao
      //firebase.database().ref('SensorDHT11/601897').on('value', DHT11ListView); // 601897 servidor
      //firebase.database().ref('SensorDHT11/3359941').on('value', DHT11ListView); // 3359941 print
      //firebase.database().ref('SensorDHT11').on('value', DHT11ListView);
    }
  }
  
})();

watch.init();
