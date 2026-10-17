// EJERCICIO 37
// Crea e imprime un array con las categorías de películas sin repetir.
{
  const movies = [{title:"Bracula: Condemor II",categories:["comedia","aventura"]},{title:"Spider-Man: No Way Home",categories:["aventura","acción"]},{title:"The Voices",categories:["comedia","thriller"]},{title:"Shrek",categories:["comedia","aventura","animación"]}];
  const categorias = []; for (const movie of movies) for (const category of movie.categories) if (!categorias.includes(category)) categorias.push(category); console.log(categorias);
}



