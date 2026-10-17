// EJERCICIO 36
// Devuelve un nuevo array con el nombre y la edad calculada de cada actor.
function calculateActorsAges(actors) { const year = new Date().getFullYear(); return actors.map(actor => ({name:actor.name, age:year - actor.born})); }
console.log(calculateActorsAges([{name:"Leonardo DiCaprio",born:1974},{name:"Tom Hanks",born:1956},{name:"Meryl Streep",born:1949},{name:"Brad Pitt",born:1963},{name:"Johnny Depp",born:1963},{name:"Scarlett Johansson",born:1984},{name:"Jennifer Lawrence",born:1990},{name:"Denzel Washington",born:1954},{name:"Morgan Freeman",born:1937},{name:"Cate Blanchett",born:1969}]));



