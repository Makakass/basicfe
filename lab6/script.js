const infoElem = {
  elem: document.getElementById('info'),
  set(message) {
    this.elem.textContent = message;
  }
};

const usersElem = {
  elem: document.getElementById('users'),
  append(child) {
    this.elem.appendChild(child);
  },
  clear() {
    this.elem.innerHTML = ''
  }
};

const createNewUserNode = userData => {
  const userNode = document.createElement('div');
  userNode.classList.add('user');
  
  const userPicture = document.createElement('img');
  userPicture.classList.add('user-photo');
  userPicture.src = userData.picture.large;
  
  const userInfo = document.createElement('div');
  userInfo.classList.add('user-info');
  userInfo.innerHTML += `<p>City: ${userData.location.city}</p>`;
  userInfo.innerHTML += `<p>Country: ${userData.location.country}</p>`;
  userInfo.innerHTML += `<p>Postcode: ${userData.location.postcode}</p>`;
  userInfo.innerHTML += `<p>Email: ${userData.email}</p>`;
  
  userNode.appendChild(userPicture);
  userNode.appendChild(userInfo);
  return userNode;
};

const usersNumber = 7;
const downloadHandler = () => {
  fetch(`https://randomuser.me/api?results=${usersNumber}`)
    .then(response => response.json())
    .then(data => {
      usersElem.clear();
      for (const userData of data.results) {
        const userNode = createNewUserNode(userData);
        usersElem.append(userNode);
      }
      infoElem.set("Success!");
    })
    .catch(err => {
      infoElem.set(err);
    });
};

const downloadButton = document.getElementById('download');
downloadButton.addEventListener('click', downloadHandler);