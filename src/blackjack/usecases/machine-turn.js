import { pedirCarta, sumarPuntos, crearCarta, determinarGanador } from './';
/**
 *
 * @param {Number} puntosMinimos points of player
 * @param {Array<Numer>} puntosJugadores Array with all players points
 * @param {Array<String>} deck Array shuffled of cards
 * @param {Array<HTMLDivElement>} marcadores Array with Elements which shows points of players
 * @param {Array<HTMLDivElement>} divCartasJugadores Array with Elements which shows cards of players
 */
export const turnoMaquina = (
  puntosMinimos,
  puntosJugadores,
  deck,
  marcadores,
  divCartasJugadores
) => {
  let puntosMaquina = 0;
  do {
    const carta = pedirCarta(deck);
    puntosMaquina = sumarPuntos(carta, 1, puntosJugadores, marcadores);
    crearCarta(carta, 1, divCartasJugadores);
  } while (puntosMaquina < puntosMinimos && puntosMinimos <= 21);

  determinarGanador(puntosJugadores);
};
