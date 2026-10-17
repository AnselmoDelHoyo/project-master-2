// EJERCICIO 32
// findOldestXMen devuelve el miembro de X-Men con el año de aparición más antiguo.
function findOldestXMen(xMen) { return xMen.reduce((oldest, member) => member.year < oldest.year ? member : oldest); }
console.log(findOldestXMen([{name:"Wolverine",year:1974},{name:"Cyclops",year:1963},{name:"Storm",year:1975},{name:"Phoenix",year:1963},{name:"Beast",year:1963},{name:"Gambit",year:1990},{name:"Nightcrawler",year:1975},{name:"Magneto",year:1963},{name:"Professor X",year:1963},{name:"Mystique",year:1978}]));



