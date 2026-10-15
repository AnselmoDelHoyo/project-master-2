
// EJERCICIO 2 — SOLUCIÓN

// 1. Luke Skywalker cumple años
const jedi = { nombre: "Luke Skywalker", edad: 19 };
jedi.edad = 25;
console.log(jedi);

// 2. Presentación de Leia Organa
const nombre = "Leia";
const apellido = "Organa";
const edad = 20;

console.log(
    "Soy " + nombre + " " + apellido +
    ", tengo " + edad + " años y soy una princesa de Alderaan."
);

// 3. Coste total de los sables de luz
const sable1 = { nombre: "Shoto de Yoda", precio: 1500 };
const sable2 = { nombre: "Sable de Darth Vader", precio: 2000 };

const precioTotal = sable1.precio + sable2.precio;
console.log("Precio total:", precioTotal, "créditos");

// 4. Precio final de las naves
let precioBaseGlobal = 10000;
precioBaseGlobal = 25000;

const nave1 = { nombre: "Ala-X", precioBase: 50000, precioFinal: 60000 };
const nave2 = { nombre: "Halcón Milenario", precioBase: 70000, precioFinal: 80000 };

nave1.precioFinal = nave1.precioBase + precioBaseGlobal;
nave2.precioFinal = nave2.precioBase + precioBaseGlobal;

console.log("Precio final del Ala-X:", nave1.precioFinal);
console.log("Precio final del Halcón Milenario:", nave2.precioFinal);
