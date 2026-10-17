// EJERCICIO 22
// Sustituye cada comida no vegana por una fruta distinta e imprime el menú resultante.
{
  const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
  const foodSchedule = [{name:"Heura",isVegan:true},{name:"Salmon",isVegan:false},{name:"Tofu",isVegan:true},{name:"Burger",isVegan:false},{name:"Rice",isVegan:true},{name:"Pasta",isVegan:true}];
  let fruitIndex = 0;
  for (const food of foodSchedule) if (!food.isVegan && fruitIndex < fruits.length) { food.name = fruits[fruitIndex++]; food.isVegan = true; }
  console.log(foodSchedule);
}



