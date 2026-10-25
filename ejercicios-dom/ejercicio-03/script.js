// 1.1 — Crear una lista ul > li con los países.
const countriesList = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const countryList = document.createElement('ul');
for (const country of countriesList) {
  const item = document.createElement('li');
  item.textContent = country;
  countryList.appendChild(item);
}
document.querySelector('#countries-list-container').appendChild(countryList);

// 1.2 — Eliminar el elemento que tiene la clase .fn-remove-me.
document.querySelector('.fn-remove-me')?.remove();

// 1.3 — Crear la lista de coches dentro del div con data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const carsList = document.createElement('ul');
for (const car of cars) {
  const item = document.createElement('li');
  item.textContent = car;
  carsList.appendChild(item);
}
document.querySelector('[data-function="printHere"]').appendChild(carsList);

// 1.4 — Crear dinámicamente una tarjeta con h4 e img por cada objeto.
const countryCardsData = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' },
];
const cardsContainer = document.querySelector('#country-cards');

for (const country of countryCardsData) {
  const card = document.createElement('div');
  card.className = 'country-card';

  const title = document.createElement('h4');
  title.textContent = country.title;

  const image = document.createElement('img');
  image.src = country.imgUrl;
  image.alt = country.title;
  image.loading = 'lazy';

  card.append(title, image);
  cardsContainer.appendChild(card);
}

// 1.5 — Crear un botón que elimine la última tarjeta.
document.querySelector('#remove-last').addEventListener('click', () => {
  cardsContainer.lastElementChild?.remove();
  updateEmptyMessage();
});

// 1.6 — Crear un botón dentro de cada tarjeta para eliminar esa tarjeta.
for (const card of cardsContainer.children) {
  const removeButton = document.createElement('button');
  removeButton.type = 'button';
  removeButton.className = 'button button-danger';
  removeButton.textContent = 'Eliminar esta tarjeta';
  removeButton.addEventListener('click', () => {
    card.remove();
    updateEmptyMessage();
  });
  card.appendChild(removeButton);
}

function updateEmptyMessage() {
  document.querySelector('#cards-empty-message').hidden = cardsContainer.children.length > 0;
}
