// EJERCICIO 14
// Cuenta cuántas veces aparece cada palabra y muestra un resultado claro.
function repeatCounter(list) { const counts = {}; for (const word of list) counts[word] = (counts[word] ?? 0) + 1; return counts; }
console.log(repeatCounter(["code", "repeat", "eat", "sleep", "code", "enjoy", "sleep", "code", "enjoy", "sleep", "code"]));



