// 1.1 — Mostrar el botón con la clase .showme.
console.log('1.1 Botón .showme:', document.querySelector('.showme'));

// 1.2 — Mostrar el h1 con el id #pillado.
console.log('1.2 H1 #pillado:', document.querySelector('#pillado'));

// 1.3 — Mostrar todos los párrafos. querySelectorAll devuelve todos los elementos coincidentes.
console.log('1.3 Todos los p:', document.querySelectorAll('p'));

// 1.4 — Mostrar todos los elementos con la clase .pokemon.
console.log('1.4 Todos los .pokemon:', document.querySelectorAll('.pokemon'));

// 1.5 — Mostrar todos los elementos con data-function="testMe".
console.log(
  '1.5 Todos los [data-function="testMe"]:',
  document.querySelectorAll('[data-function="testMe"]')
);

// 1.6 — Mostrar el tercer elemento que tenga ese atributo (los índices empiezan en 0).
console.log(
  '1.6 Tercer personaje [data-function="testMe"]:',
  document.querySelectorAll('[data-function="testMe"]')[2]
);
