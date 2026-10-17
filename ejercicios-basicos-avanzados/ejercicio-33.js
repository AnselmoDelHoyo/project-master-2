// EJERCICIO 33
// getCapital devuelve la capital del país indicado o un mensaje si no está registrado.
const capitals = {Spain:"Madrid",France:"Paris",Italy:"Rome",Germany:"Berlin",Portugal:"Lisbon",Poland:"Warsaw",Greece:"Athens",Austria:"Vienna",Hungary:"Budapest",Ireland:"Dublin"};
function getCapital(country) { return capitals[country] ?? `No hay una capital registrada para ${country}.`; }
console.log(getCapital("Spain"), getCapital("Japan"));



