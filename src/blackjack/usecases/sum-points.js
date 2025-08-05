import { valorCarta } from './card-value';
// Funcion que suma los puntos de cada jugador
/**
 *
 * @param {String} carta String with the card
 * @param {Number} turno Actual position of players array
 * @param {Array<Number>} puntosJugadores Array with points of players
 * @param {Array} marcadores Array of HTML
 * @returns
 */

export const sumarPuntos = (carta, turno, puntosJugadores, marcadores) => {
  puntosJugadores[turno] += valorCarta(carta);
  marcadores[turno].innerText = puntosJugadores[turno];
  return puntosJugadores[turno];
};
