// EJERCICIO 10
// Completa average para devolver el promedio de los números del array.
function average(numberList) { return numberList.length ? numberList.reduce((sum, number) => sum + number, 0) / numberList.length : 0; }
console.log(average([12, 21, 38, 5, 45, 37, 6]));



