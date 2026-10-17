// EJERCICIO 40
// findArrayIndex busca la posición de un texto; removeItem usa esa función y splice para eliminarlo.
function findArrayIndex(array, text) { return array.indexOf(text); }
function removeItem(array, text) { const index = findArrayIndex(array, text); if (index !== -1) array.splice(index, 1); return array; }
const mainCharacters = ["Luke","Leia","Han Solo","Chewbacca","Rey","Anakin","Obi-Wan"];
console.log(findArrayIndex(mainCharacters, "Han Solo"));
console.log(removeItem([...mainCharacters], "Rey"));
console.log(removeItem([...mainCharacters], "No existe"));



