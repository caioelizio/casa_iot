//user
var watch = (() => {
  const userList  = document.querySelector("#userList");

  const userListView = (snapshot) => {
    userList.innerHTML = '';
    snapshot.forEach(item => {
      let li = document.createElement('li');
      let hr = document.createElement('hr');
      li.appendChild(document.createTextNode(
        item.val().created + '  |  ' + 
        item.val().status + '  |  ' + 
        item.val().permissions + '  |  ' + 
        item.val().name ) );
        //item.val().pw + '  |  ' + 
      userList.appendChild(hr);
      userList.appendChild(li);
    });
  }

  return {
    init: () => {
      firebase.database().ref('users').on('value', userListView);
    }
  }
  
})();

watch.init();