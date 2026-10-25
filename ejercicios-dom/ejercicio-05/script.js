// Array entregado en el enunciado.
const albums = [
  'De Mysteriis Dom Sathanas',
  'Reign of Blood',
  'Ride the Lightning',
  'Painkiller',
  'Iron Fist',
];

// Crear un elemento li por cada álbum e insertarlo en la lista ul.
const albumList = document.querySelector('#album-list');
const albumCount = document.querySelector('#album-count');

albums.forEach((album, index) => {
  const listItem = document.createElement('li');

  const title = document.createElement('span');
  title.className = 'album-title';
  title.textContent = album;

  const note = document.createElement('span');
  note.className = 'album-note';
  note.textContent = `Álbum ${String(index + 1).padStart(2, '0')} · Selección musical`;
  title.appendChild(note);

  const symbol = document.createElement('span');
  symbol.className = 'album-symbol';
  symbol.setAttribute('aria-hidden', 'true');
  symbol.textContent = '↗';

  listItem.append(title, symbol);
  albumList.appendChild(listItem);
});

albumCount.textContent = `${albums.length} álbumes en la selección`;
