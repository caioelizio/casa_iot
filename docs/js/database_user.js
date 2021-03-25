var watch = (() => {
  const nameInput = document.querySelector("#nameInput");
  const pwInput   = document.querySelector("#pwInput");
  const addButton = document.querySelector("#addButton");
  const userList  = document.querySelector("#userList");

  const create = (name, pw) => {
    const created = new Date().toISOString();
    const status = 'ativo'; //ativo, inativo
    const permissions = 'usuario'; //negada, ativo, admin, usuario
    const data = {
      name, pw, status, permissions, created
    }

    return firebase.database().ref().child('users').push(data);
  };

  const resetForm = () => {
    nameInput.value = '';
    pwInput.value = '';
  }

  const userListView = (snapshot) => {
    userList.innerHTML = '';
    snapshot.forEach(item => {
      let li = document.createElement('li');
      let hr = document.createElement('hr');
      li.appendChild(document.createTextNode(item.val().name + '  /  ' + item.val().pw + '  /  ' + item.val().status + '  /  ' + item.val().permissions + '  /  ' + item.val().created ) );
      userList.appendChild(hr);
      userList.appendChild(li);
    });
  }

  return {
    init: () => {
      firebase.database().ref('users').on('value', userListView);
      
      addButton.addEventListener('click', (event) => {
        event.preventDefault();
        create(nameInput.value, pwInput.value)
        resetForm();
      });
    }
  }
  
})();

watch.init();
