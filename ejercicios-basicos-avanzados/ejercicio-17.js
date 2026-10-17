// EJERCICIO 17
// Recorre las propiedades del alienígena e imprime el nombre de cada propiedad y su valor.
for (const property in { name: "Xenomorph", species: "Xenomorph XX121", origin: "Unknown", weight: 180 }) console.log(`La propiedad ${property} tiene como valor: ${({ name: "Xenomorph", species: "Xenomorph XX121", origin: "Unknown", weight: 180 })[property]}`);



