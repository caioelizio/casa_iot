//sensor DHT
var watch = (() => {
  const DHT11List = document.querySelector("#DHT11List");

  const DHT11ListView = (snapshot) => {
    DHT11List.innerHTML = '';
    snapshot.forEach(item => {
      let li = document.createElement('li');
      let hr = document.createElement('hr');
      li.appendChild(document.createTextNode(
        item.val().timestamp  + '  |  '
        + item.val().temp + ' | '
        + item.val().humid + '  |  '
        + item.val().status + '  |  '
        ));
      DHT11List.appendChild(hr);
      DHT11List.appendChild(li);
    });
  }
 
  return {
    init: () => {
      firebase.database().ref('SensorDHT11/3384612').on('value', DHT11ListView);
      //firebase.database().ref('SensorDHT11').on('value', DHT11ListView);
    }
  }
  
})();

watch.init();
