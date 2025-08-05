// Funcion que determina el ganador
/**
 *
 * @param {Array<Number>} puntosJugadores Array with all the points of players
 */

export const determinarGanador = (puntosJugadores) => {
  const [puntosMinimos, puntosMaquina] = puntosJugadores;

  setTimeout(() => {
    if (puntosMaquina === puntosMinimos) {
      alert('Nadie Gana');
    } else if (puntosMinimos > 21) {
      alert('Pierde el jugador');
    } else if (puntosMaquina > 21) {
      alert('Gana el jugador');
    } else if (puntosMaquina > puntosMinimos) {
      alert('Pierde el jugador');
    }
  }, 50);
};
