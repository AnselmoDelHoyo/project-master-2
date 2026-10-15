// EJERCICIO 4

// Dado el siguiente array:
const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];

// 4.1 - Saca a "Tendo" por consola atacando su posición
console.log(aldeanos[3]); // Tendo

// 4.2 - Coloca en el último lugar del array a "Cervasio"
aldeanos.push("Cervasio");
console.log(aldeanos);

// 4.3 - Cambia el primer elemento del array por "Bambina"
aldeanos[0] = "Bambina";
console.log(aldeanos);

// 4.4 - Dale la vuelta al array
aldeanos.reverse();
console.log(aldeanos);

// 4.5 - Cambia a "Narciso" por "Canela" usando un método de array
const posicionNarciso = aldeanos.indexOf("Narciso");
aldeanos.splice(posicionNarciso, 1, "Canela");
console.log(aldeanos);

// 4.6 - Imprime el último elemento sin indicar su posición explícitamente
console.log(aldeanos[aldeanos.length - 1]); // Bambina
