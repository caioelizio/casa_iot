//sensor DHT11 js

var watch = (() => {
  const DHT11List = document.querySelector("#DHT11List");

  const DHT11ListView = (snapshot) => {
    DHT11List.innerHTML = '';
    snapshot.forEach(item => {
      let li = document.createElement('li');
      let hr = document.createElement('hr');
      li.appendChild(document.createTextNode(

        item.val().id  + '  |  '
        + item.val().status + '  |  '
        + item.val().temp + ' | '
        + item.val().humid + '  |  '
        + item.val().timestamp

        ));
      DHT11List.appendChild(hr);
      DHT11List.appendChild(li);
    });
  }
 
  return {
    init: () => {
      // firebase.database().ref('SensorDHT11/3384612').on('value', DHT11ListView); //3384612 irrigacao
      firebase.database().ref('SensorDHT11/1483989').on('value', DHT11ListView);
      //firebase.database().ref('SensorDHT11').on('value', DHT11ListView);
    }
  }
  
})();

watch.init();
