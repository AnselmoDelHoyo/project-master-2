// EJERCICIO 34
// averageMovieDuration devuelve el promedio de duración de las películas.
function averageMovieDuration(movies) { return movies.length ? movies.reduce((sum, movie) => sum + movie.duration, 0) / movies.length : 0; }
console.log(averageMovieDuration([{duration:148},{duration:152},{duration:169},{duration:106},{duration:130},{duration:113},{duration:140},{duration:164},{duration:150},{duration:118}]));



