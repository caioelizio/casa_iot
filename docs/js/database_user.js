// user js

var watch = (() => {
  const userList  = document.querySelector("#userList");
  const nameInput = document.querySelector("#nameInput");
  const ageInput = document.querySelector("#ageInput");
  const addButton = document.querySelector("#addButton");

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
      let hr = document.createElement('hr');
      li.appendChild(document.createTextNode(

        item.val().name + '  |  ' + 
        item.val().permissions + '  |  ' + 
        item.val().status + '  |  ' + 
        item.val().created
        //item.val().pw + '  |  ' + 

        ) );
      userList.appendChild(hr);
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