import validator from 'validator';

function verificacao() {
  const input = document.getElementsByTagName('select')[0].value;
  const valor = document.getElementsByTagName('input')[0].value;
  if (input === 'email') {
    return validator.isEmail(valor);
  } if (input === 'number') {
    return validator.isNumeric(valor);
  } if (input === 'hexcolor') {
    return validator.isHexColor(valor);
  } if (input === 'zero') {
    return validator.isEmpty(valor);
  } if (input === 'date') {
    return validator.isDate(valor);
  }
}

function func(event) {
  event.preventDefault();
  const verific = verificacao();
  console.log(verific);
  if (verific === true) {
    document.getElementsByTagName('h1')[1].innerText = 'é válido';
  } else {
    document.getElementsByTagName('h1')[1].innerText = 'não é válido';
  }
}

document.getElementsByTagName('button')[0].addEventListener('click', func);
