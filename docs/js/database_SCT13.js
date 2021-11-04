//sensor SCT13 js

var watch = (() => {
  const SCT13List = document.querySelector("#SCT13List");

  const SCT13ListView = (snapshot) => {
    SCT13List.innerHTML = '';
    snapshot.forEach(item => {
      let li = document.createElement('li');
      let hr = document.createElement('hr');
      li.appendChild(document.createTextNode(
        item.val().timestamp  + '  |  '
        + item.val().temp + ' | '
        + item.val().humid + '  |  '
        + item.val().status + '  |  '
        ));
      SCT13List.appendChild(hr);
      SCT13List.appendChild(li);
    });
  }
 
  return {
    init: () => {
      firebase.database().ref('SensorSCT13/3384612').on('value', SCT13ListView);
      //firebase.database().ref('SensorSCT13').on('value', SCT13ListView);
    }
  }
  
})();

watch.init();
