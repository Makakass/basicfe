const form1 = document.getElementById('form1')
const resultDOM = document.getElementById('resultDOM')

form1.addEventListener('submit', e => {
  e.preventDefault();
  resultDOM.innerHTML = '';
  formValidator(e.target).forEach(result => {
    const li = document.createElement('li');
    li.innerText = result;
    resultDOM.appendChild(li);
  });
})

Array.from(document.getElementsByTagName('input')).forEach(el => {
  el.addEventListener('input', e => e.target.style.borderColor='initial')
})

function inputValidator(inputValue, inputType) {
  let valid;
  switch (inputType) {
    case "name":
      const regName = /^[а-яієїґ\']{3,15} [а-яієїґ]\.[а-яієїґ]\.$/i
      valid = regName.test(inputValue);
      break;
    case "group":
      const regGroup = /[а-яієїґ]{2}-\d{2}/i
      valid = regGroup.test(inputValue);
      break;
    case "phone":
      const regPhone = /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/i
      valid = regPhone.test(inputValue);
      break;
    case "faculty":
      const regFaculty = /^[а-яієїґ]{3,4}$/i
      valid = regFaculty.test(inputValue);
      break;
    case "address":
      const regAddress = /^м. [а-яієїґ\']{3,15}$/i
      valid = regAddress.test(inputValue);
      break;
  }
  return valid;
}

function formValidator(form) {
  let formValid = true;
  let results = [];
  const elements = Array.from(form.elements).slice(0, -1);
  for (const element of elements) {
    const inputValue = element.value;
    let valid = inputValidator(inputValue, element.className);
    if (valid) {
      element.style.borderColor = "green";
      results.push(inputValue);
    } else {
      element.style.borderColor = "red";
      formValid = false;
    }
  }
  if (formValid) {
    elements.forEach(el => {el.value = ''; el.style.borderColor = 'initial'})
  } else {
    results = ['Невірні дані форми!']
  }
  return results
}
