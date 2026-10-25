// Guardamos los dos div originales antes de crear nuevos nodos.
const originalDiv1 = document.querySelector('#original-div-1');
const originalDiv2 = document.querySelector('#original-div-2');

// 2.1 — Insertar dinámicamente un div vacío.
const emptyDiv = document.createElement('div');
emptyDiv.id = 'created-empty-div';
document.body.appendChild(emptyDiv);

// 2.2 — Insertar un div que contenga un p.
const divWithParagraph = document.createElement('div');
const paragraphInsideDiv = document.createElement('p');
paragraphInsideDiv.textContent = 'Este párrafo está dentro de un div.';
divWithParagraph.appendChild(paragraphInsideDiv);
document.body.appendChild(divWithParagraph);

// 2.3 — Insertar un div que contenga seis párrafos usando un bucle.
const divWithSixParagraphs = document.createElement('div');
for (let i = 1; i <= 6; i++) {
  const paragraph = document.createElement('p');
  paragraph.textContent = `Párrafo ${i} de 6`;
  divWithSixParagraphs.appendChild(paragraph);
}
document.body.appendChild(divWithSixParagraphs);

// 2.4 — Insertar un párrafo con el texto solicitado.
const dynamicParagraph = document.createElement('p');
dynamicParagraph.textContent = 'Soy dinámico!';
document.body.appendChild(dynamicParagraph);

// 2.5 — Añadir texto al h2 que ya existe.
document.querySelector('h2.fn-insert-here').textContent = 'Wubba Lubba dub dub';

// 2.6 — Crear una lista ul > li a partir del array de aplicaciones.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const appsList = document.createElement('ul');
appsList.id = 'apps-list';
for (const app of apps) {
  const listItem = document.createElement('li');
  listItem.textContent = app;
  appsList.appendChild(listItem);
}
document.body.appendChild(appsList);

// 2.7 — Eliminar todos los nodos que tengan la clase .fn-remove-me.
document.querySelectorAll('.fn-remove-me').forEach((element) => element.remove());

// 2.8 — Insertar un párrafo entre los dos div originales.
const middleParagraph = document.createElement('p');
middleParagraph.textContent = 'Voy en medio!';
originalDiv2.before(middleParagraph);

// 2.9 — Insertar un párrafo dentro de cada div con la clase .fn-insert-here.
document.querySelectorAll('div.fn-insert-here').forEach((div) => {
  const paragraph = document.createElement('p');
  paragraph.textContent = 'Voy dentro!';
  div.appendChild(paragraph);
});
