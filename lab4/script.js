// Task 1
const randomNum = () => Math.floor(Math.random() * 255)
const randomColor = () => "rgb(" + randomNum() + "," + randomNum() + "," + randomNum() + ")";
const changeColor = elem => {
  elem.style.color = randomColor();
  elem.style.backgroundColor = randomColor();
}
const first = document.getElementById('hobby')
const second = document.querySelector('.hobby-item')
first.addEventListener('click', event => changeColor(event.currentTarget));
second.addEventListener('click', event => changeColor(event.currentTarget));

// Task 2
const addBtn = document.getElementById('add')
const incrBtn = document.getElementById('increase')
const decrBtn = document.getElementById('decrease')
const delBtn = document.getElementById('delete')
const img = document.getElementById('image-buttons')
let size = 720
function addImg() {
  addBtn.disabled = true;
  incrBtn.disabled = false;
  decrBtn.disabled = false;
  delBtn.disabled = false;
  img.style.display = "";
}
function incrImg() {
  if (size < 1200) {
    size += 20
    img.style.width = size + "px"
    decrBtn.disabled = false;
  } else {
    incrBtn.disabled = true;
  }
}
function decrImg() {
  if (size > 400) {
    size -= 20
    img.style.width = size + "px"
    incrBtn.disabled = false;
  } else {
    decrBtn.disabled = true;
  }
}
function delImg() {
  addBtn.disabled = false;
  incrBtn.disabled = true;
  decrBtn.disabled = true;
  delBtn.disabled = true;
  img.style.display = "none";
}
addBtn.addEventListener('click', addImg)
incrBtn.addEventListener('click', incrImg)
decrBtn.addEventListener('click', decrImg)
delBtn.addEventListener('click', delImg)
