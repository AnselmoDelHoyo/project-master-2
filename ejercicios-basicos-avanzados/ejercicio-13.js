// EJERCICIO 13
// Busca el nombre recibido: devuelve false si no existe o true y su posición si lo encuentra.
function nameFinder(nameList, name) {
  const index = nameList.indexOf(name);
  return index === -1 ? false : { found: true, index };
}
console.log(nameFinder(["Peter", "Steve", "Tony", "Natasha", "Clint", "Logan", "Xabier", "Bruce", "Peggy", "Jessica", "Marc"], "Tony"));



