// 1.1 — Al hacer clic, mostrar la información del evento.
const clickButton = document.querySelector('#btnToClick');
clickButton.addEventListener('click', (event) => {
  console.log('1.1 Evento click:', event);
});

// 1.2 — Al enfocar el input, mostrar su valor actual.
const focusInput = document.querySelector('.focus');
focusInput.addEventListener('focus', (event) => {
  console.log('1.2 Valor del input al hacer focus:', event.target.value);
});

// 1.3 — Cada vez que cambie el contenido del input, mostrar su valor actual.
const valueInput = document.querySelector('.value');
valueInput.addEventListener('input', (event) => {
  console.log('1.3 Valor del input:', event.target.value);
});
