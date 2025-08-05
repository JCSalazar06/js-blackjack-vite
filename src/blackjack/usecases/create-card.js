// Función que crea las cartas de cada jugador
/**
 *
 * @param {String} carta Last position of Deck
 * @param {Number} turno Actual position in the players array
 * @param {Array<HTMLDivElement>} divCartasJugadores Add the sent card to the player
 */
export const crearCarta = (carta, turno, divCartasJugadores) => {
  const imgCarta = document.createElement('img');
  imgCarta.classList.add('carta');
  imgCarta.src = `assets/cartas/${carta}.png`;
  divCartasJugadores[turno].append(imgCarta);
};
