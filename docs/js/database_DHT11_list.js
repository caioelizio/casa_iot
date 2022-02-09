// sensor DHT11 js

// Variavel--------------------------------------------------------------------/
// list
let button_device1 = document.querySelector('button_device1');
let button_device2 = document.querySelector('button_device2');
let devices_id = document.querySelector('devices_id');
console.log("devices_id: "+devices_id); 
let icont1 = 0;
let sdevices_id = "";

function click_test()
{
  console.log("Test");
  //let devices_id = document.querySelector('devices_id');
  //console.log("devices_id: " + devices_id);
  //let devices_id2 = Element.getElementsByTagName();
  //console.log("devices_id2: " + devices_id2); 
  //let devices_id = Element.getElementById();
  //console.log("devices_id: " + devices_id); 
  //f_test1();
}
function f_test1()
{
  //console.log("select: "+document.querySelector("select"));
  //console.log("devices_id: "+devices_id); 
}
//f_test1();
function f_ttl()
{
  //console.log("Total de registros: "+icont1);
  document.write("Total de registros: "+icont1);
}

function clique_buttonTLL()
{
  console.log("Total de registros: "+icont1);
  //f_ttl();
}
function click_button_device1() // servidor
{
  sdevices_id = "601897";
  watch.init();
}
function click_button_device2() // print
{
  sdevices_id = "3359941";
  watch.init();
}
function click_button_device3() // energia
{
  sdevices_id = "1329594";
  watch.init();
}

let watch = (() => {
  const DHT11List = document.querySelector("#DHT11List");

  const DHT11ListView = (snapshot) => {
    DHT11List.innerHTML = '';
    icont1 = 0;

    snapshot.forEach(item => {
      let li = document.createElement('li');
      let hr = document.createElement('hr');
      icont1++;
      li.appendChild(document.createTextNode(

        icont1  + '  |  '
        //+ item.val().sDeviceSerial + '  |  '
        + item.val().sDeviceName + '  |  '
        + item.val().temp + ' | '
        + item.val().humid + '  |  '
        + item.val().timestamp + '  |  '
        + item.val().status

        ));
      DHT11List.appendChild(hr);
      DHT11List.appendChild(li);
      if (icont1 == 3){
        let br = document.createElement('br');
        DHT11List.appendChild(
          document.createTextNode("\nTotal de registros: "+icont1)
        );
        console.log("Total de registros: "+icont1);
        return true; // Cancel for
      }
    });
  }

  return {
    init: () => {
      if (sdevices_id == "601897") {
        firebase.database().ref('SensorDHT11/'+sdevices_id).on('value', DHT11ListView); // 601897 servidor
      }
      if (sdevices_id == "3359941") {
        firebase.database().ref('SensorDHT11/'+sdevices_id).on('value', DHT11ListView); // 3359941 sala
      }
      if (sdevices_id == "3384612") {
        firebase.database().ref('SensorDHT11/'+sdevices_id).on('value', DHT11ListView); // 3384612 irrigacao
      }
      if (sdevices_id == "1329594") {
        firebase.database().ref('SensorDHT11/'+sdevices_id).on('value', DHT11ListView); // 1329594 energia
      }
      if (sdevices_id == "1483989") {
        firebase.database().ref('SensorDHT11/'+sdevices_id).on('value', DHT11ListView); // 1483989 print
      }
      if (sdevices_id == " ") {
        firebase.database().ref('SensorDHT11/'+sdevices_id).on('value', DHT11ListView); //   cozinha
      }
    }
  }
  
})();
//watch.init();
