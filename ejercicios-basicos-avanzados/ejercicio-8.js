// EJERCICIO 8
// Completa findLongestWord para devolver la palabra más larga; si hay empate, devuelve la primera.
function findLongestWord(stringList) {
  let longest = "";
  for (const word of stringList) if (word.length > longest.length) longest = word;
  return longest;
}
console.log(findLongestWord(["Hulk", "Thor", "Iron Man", "Captain A.", "Spiderman", "Captain M."]));



