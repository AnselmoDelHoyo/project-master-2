// EJERCICIO 18
// Elimina del array los destinos con id 11 e id 40 y muestra el resultado.
{
  const places = [{id:5,name:"Japan"},{id:11,name:"Venecia"},{id:23,name:"Murcia"},{id:40,name:"Santander"},{id:44,name:"Filipinas"},{id:59,name:"Madagascar"}];
  for (let i = places.length - 1; i >= 0; i--) if (places[i].id === 11 || places[i].id === 40) places.splice(i, 1);
  console.log(places);
}



