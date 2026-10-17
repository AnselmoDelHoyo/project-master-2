// EJERCICIO 39
// Cuenta cuántas veces aparece cada sonido entre los favoritos de todos los usuarios.
{
  const users = [{favoritesSounds:{waves:{},rain:{},firecamp:{}}},{favoritesSounds:{waves:{},shower:{},train:{}}},{favoritesSounds:{shower:{},train:{},firecamp:{}}},{favoritesSounds:{waves:{},wind:{},firecamp:{}}}];
  const soundCounts = {}; for (const user of users) for (const sound in user.favoritesSounds) soundCounts[sound] = (soundCounts[sound] ?? 0) + 1; console.log(soundCounts);
}



