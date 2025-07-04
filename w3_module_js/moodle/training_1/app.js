const inputName = document.getElementById('name');
const inputAge = document.getElementById('age');
const btnSend = document.getElementById('send');

const errorMessage = document.getElementById('box-error');
const successMessage = document.getElementById('box-success');
const infoMessage = document.getElementById('box-info');

function displayMessage(element, message) {
  element.textContent = message;
  element.style.display = 'block';
  setTimeout(() => element.style.display = 'none', 3000);
}

btnSend.addEventListener('click', () => {
  let name = inputName.value.trim().toLowerCase();
  name = name.charAt(0).toUpperCase() + name.slice(1);
  const age = +inputAge.value;

  if (isNaN(age) || age < 0) {
    displayMessage(errorMessage, 'Error: La edad ingresada no es un número válido.');
    inputAge.value = '';
    inputAge.focus();
    return;
  }

  if (age < 18) {
    displayMessage(infoMessage, `😄 ¡Excelente ${name}! Sigue aprendiendo y creciendo. 😄`);
  } else {
    displayMessage(successMessage, `🐍💻 ¡Genial ${name}! Explora nuevas oportunidades y desafíos. 🐍💻`);
  }
  
  inputName.value = '';
  inputAge.value = '';
  inputName.focus();
});