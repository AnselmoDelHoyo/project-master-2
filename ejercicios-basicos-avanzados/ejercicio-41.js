// EJERCICIO 41
// rollDice simula una tirada aleatoria de un dado con el número de caras recibido.
function rollDice(faces) { if (!Number.isInteger(faces) || faces < 1) throw new RangeError("El dado debe tener al menos una cara entera."); return Math.floor(Math.random() * faces) + 1; }
console.log(rollDice(6));



