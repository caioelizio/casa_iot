//sensor SCT13 js

var watch = (() => {
  const releList = document.querySelector("#releList");

  const create = (timestamp, status) => {
    const created = new Date().toISOString();
    const data = {
      //timestamp, status
    }

    return firebase.database().ref().child('users').push(data);
  };

  const resetForm = () => {
    //timestampInput.value = '';    statusInput.value = '';
  }

  const releListView = (snapshot) => {
    releList.innerHTML = '';
    icont = 0;

    snapshot.forEach(item => {
      let li = document.createElement('li');
      let hr = document.createElement('hr');
      icont++;
      li.appendChild(document.createTextNode(

        icont  + '  |  '
        + item.val().id + '  |  '
        + item.val().rele1 + '  |  '
        + item.val().rele2 + '  |  '
        + item.val().timestamp
        //item.val().status
        
        ));
        releList.appendChild(hr);
        releList.appendChild(li);
    });
  }
 
  return {
    init: () => {
      //firebase.database().ref('reles').on('value', releListView);
      firebase.database().ref('reles/1483989').on('value', releListView);
    }
  }
  
})();

watch.init();
