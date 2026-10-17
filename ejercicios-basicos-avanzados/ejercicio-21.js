// EJERCICIO 21
// Imprime por separado los nombres de usuarios menores y mayores de edad.
{
  const users = [{name:"Tony",years:43},{name:"Peter",years:18},{name:"Natasha",years:14},{name:"Bruce",years:32},{name:"Khamala",years:16}];
  const minors = [], adults = [];
  for (const user of users) (user.years < 18 ? minors : adults).push(user.name);
  console.log("Usuarios menores de edad:", minors.join(", "));
  console.log("Usuarios mayores de edad:", adults.join(", "));
}



