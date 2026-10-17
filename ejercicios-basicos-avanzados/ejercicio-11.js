// EJERCICIO 11
// Suma los números y la longitud de cada texto; devuelve el promedio de esos valores.
function averageWord(list) {
  const total = list.reduce((sum, value) => sum + (typeof value === "number" ? value : String(value).length), 0);
  return list.length ? total / list.length : 0;
}
console.log(averageWord([6, 1, "Marvel", 1, "hamburguesa", "10", "Prometeo", 8, "Hola mundo"]));



