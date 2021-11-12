//sensor DHT11 js

var watch = (() => {
  const DHT11List = document.querySelector("#DHT11List");

  const DHT11ListView = (snapshot) => {
    DHT11List.innerHTML = '';
    icont = 0;
    snapshot.forEach(item => {
      let li = document.createElement('li');
      let hr = document.createElement('hr');
      li.appendChild(document.createTextNode(

        item.val().icont  + '  |  '
        + item.val().id  + '  |  '
        + item.val().temp + ' | '
        + item.val().humid + '  |  '
        + item.val().timestamp + '  |  '
        + item.val().status

        ));
      DHT11List.appendChild(hr);
      DHT11List.appendChild(li);
    });
  }

  return {
    init: () => {
      //firebase.database().ref('SensorDHT11/3384612').on('value', DHT11ListView); //3384612 irrigacao
      //firebase.database().ref('SensorDHT11/601897').on('value', DHT11List1View); // 601897 servidor
      firebase.database().ref('SensorDHT11/1483989').on('value', DHT11ListView); // 1483989 print
      //firebase.database().ref('SensorDHT11').on('value', DHT11ListView);
    }
  }
  
})();

watch.init();
