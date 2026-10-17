// EJERCICIO 35
// Busca mutantes con el poder indicado y devuelve un mensaje con los encontrados o informa si no hay.
function findMutantByPower(mutants, power) { const found = mutants.filter(mutant => mutant.power === power); return found.length ? `Encontrados: ${found.map(mutant => mutant.name).join(", ")}` : `No se encontró ningún mutante con el poder ${power}.`; }
console.log(findMutantByPower([{name:"Wolverine",power:"regeneration"},{name:"Magneto",power:"magnetism"},{name:"Professor X",power:"telepathy"},{name:"Jean Grey",power:"telekinesis"},{name:"Rogue",power:"power absorption"},{name:"Storm",power:"weather manipulation"},{name:"Mystique",power:"shape-shifting"},{name:"Beast",power:"superhuman strength"},{name:"Colossus",power:"steel skin"},{name:"Nightcrawler",power:"teleportation"}], "telepathy"));



