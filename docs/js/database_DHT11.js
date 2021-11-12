// sensor DHT11 js

var watch = (() => {
  const DHT11List1 = document.querySelector("#DHT11List1");
  const DHT11List2 = document.querySelector("#DHT11List2");
  const idInput = document.querySelector("#idInput");
  const statusInput = document.querySelector("#statusInput");
  const tempInput = document.querySelector("#tempInput");
  const humidInput = document.querySelector("#humidInput");
  const addButton = document.querySelector("#addButton");

  const DHT11List1View = (snapshot) => {
    DHT11List1.innerHTML = '';
    snapshot.forEach(item => {
      let li = document.createElement('li'); //cria um elemento html
      li.appendChild(document.createTextNode(

        //item.val().id  + '  |  '
        //+ item.val().status + '  |  '
        item.val().temp + ' | '
        + item.val().humid
        //+ item.val().timestamp

        ));
      DHT11List1.appendChild(li);
    });
  }

  const DHT11List2View = (snapshot) => {
    DHT11List2.innerHTML = '';
    snapshot.forEach(item => {
      let lTemp = document.createElement('#'); //cria um elemento html
      lTemp.appendChild(document.createTextNode(item.val().temp));
      DHT11List2.appendChild(lTemp);
      DHT11List2.appendChild('#');
    });//*/
  }

  return {
    init: () => {
      //firebase.database().ref('SensorDHT11/3384612').on('value', DHT11List1View); //3384612 irrigacao
      //firebase.database().ref('SensorDHT11/601897').on('value', DHT11List1View); // 601897 servidor
      firebase.database().ref('SensorDHT11/1483989').on('value', DHT11List2View); // 1483989 print
      //firebase.database().ref('SensorDHT11').on('value', DHT11List1View);
    }
  }
  
})();

watch.init();
