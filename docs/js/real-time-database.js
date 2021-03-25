var watch = (() => {
  const nameInput = document.querySelector("#nameInput");
  const ageInput = document.querySelector("#ageInput");
  const addButton = document.querySelector("#addButton");
  const userList = document.querySelector("#userList");

  const create = (name, age) => {
    const created = new Date().toISOString();
    const data = {
      name, age, created
    }

    return firebase.database().ref().child('users').push(data);
  };

  const resetForm = () => {
    nameInput.value = '';
    ageInput.value = '';
  }

  const userListView = (snapshot) => {
    userList.innerHTML = '';
    snapshot.forEach(item => {
      let li = document.createElement('li');
      li.appendChild(document.createTextNode(item.val().name + ': ' + item.val().age));
      userList.appendChild(li);
    });
  }

  return {
    init: () => {
      firebase.database().ref('users').on('value', userListView);
      
      addButton.addEventListener('click', (event) => {
        event.preventDefault();
        create(nameInput.value, ageInput.value)
        resetForm();
      });
    }
  }
  
})();

watch.init();
