// EJERCICIO 38
// Calcula e imprime el promedio del volumen de todos los sonidos favoritos.
{
  const users = [{favoritesSounds:{waves:{volume:50},rain:{volume:60},firecamp:{volume:80}}},{favoritesSounds:{waves:{volume:30},shower:{volume:55},train:{volume:60}}},{favoritesSounds:{shower:{volume:50},train:{volume:60},firecamp:{volume:80}}},{favoritesSounds:{waves:{volume:67},wind:{volume:35},firecamp:{volume:60}}}];
  let volumeTotal = 0, volumeCount = 0; for (const user of users) for (const sound in user.favoritesSounds) { volumeTotal += user.favoritesSounds[sound].volume; volumeCount++; } console.log(volumeTotal / volumeCount);
}



