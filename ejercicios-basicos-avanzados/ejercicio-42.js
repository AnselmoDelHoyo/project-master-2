// EJERCICIO 42
// swap intercambia en el array los elementos que están en los dos índices recibidos.
function swap(array, indexOne, indexTwo) {
  if (!Number.isInteger(indexOne) || !Number.isInteger(indexTwo) || indexOne < 0 || indexTwo < 0 || indexOne >= array.length || indexTwo >= array.length) return array;
  [array[indexOne], array[indexTwo]] = [array[indexTwo], array[indexOne]];
  return array;
}
console.log(swap(["La antorcha humana","Mr. Fantástico","La mujer invisible","La cosa"], 0, 2));


