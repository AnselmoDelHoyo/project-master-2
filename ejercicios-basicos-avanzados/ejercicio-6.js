// EJERCICIO 6
// 6.1 - Muestra los números del 0 al 9. 6.2 - Muestra solo los pares. 6.3 - Cuenta diez vueltas y cambia el mensaje en la última.
for (let i = 0; i <= 9; i++) console.log("6.1", i);
for (let i = 0; i <= 9; i++) if (i % 2 === 0) console.log("6.2", i);
for (let i = 1; i <= 10; i++) console.log("6.3", i === 10 ? "¡Dormido!" : "Intentando dormir 🐑");