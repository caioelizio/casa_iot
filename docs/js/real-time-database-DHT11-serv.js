var watch = (() => {
//  const tempInput   = document.querySelector("#tempInput");
  const tempInput = document.querySelector("#SensorDHT11");

  const create = (temp) => {
    const data    = {
      temp
    }

    return firebase.database().ref().child('temp').push(data);
  };

  const resetForm = () => {
    tempInput.value   = '';
  }

  const userListView = (snapshot) => {
    userList.innerHTML = '';
    snapshot.forEach(item => {
      let li = document.createElement('li');
      li.appendChild(document.createTextNode(item.val().temp + ': ' + item.val().age));
      userList.appendChild(li);
    });
  }

  return {
    init: () => {
      firebase.database().ref('temp').on('temp', userListView);
      
      addButton.addEventListener('click', (event) => {
        event.preventDefault();
        create(tempInput.value, ageInput.value)
        resetForm();
      });
    }
  }
  
})();

watch.init();
