const variant = 7;
const size = 6;

const randomNum = () => Math.floor(Math.random() * 255);
const randomColor = () => "rgb(" + randomNum() + "," + randomNum() + "," + randomNum() + ")";
const createTable = (rows, columns) => {
  const table = document.createElement("table");
  table.className = 'table';
  for (let i = 0; i < rows; i++) {
    const tr = document.createElement("tr");
    for (let j = 0; j < columns; j++) {
      const index = String(j + 1 + (i * rows));
      let td = document.createElement("td");
      td.innerHTML = index;
      td.id = index;
      tr.appendChild(td);
    }
    table.appendChild(tr)
  }
  return table
}

const table = document.querySelector('.table');
table.replaceWith(createTable(size, size))
const colorPicker = document.querySelector('.color-picker');
const cell = document.getElementById(variant);
const cells = document.getElementsByTagName('td')

cell.addEventListener('mouseover', () => {
  cell.style.backgroundColor = randomColor();
});

cell.addEventListener('click', () => {
  cell.style.backgroundColor = colorPicker.value;
});

cell.addEventListener('dblclick', () => {
  for (const el of cells) {
    if ((el.id - 1) % (size + 1) === 0) {
      el.style.backgroundColor = colorPicker.value;
    }
  }
});
