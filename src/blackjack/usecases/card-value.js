/**
 *
 * @param {String} carta String with the card
 * @returns {number} returns the card's value
 */
export const valorCarta = (carta) => {
  if (!carta) throw new Error('a card is required and must come from the deck');
  const valor = carta.substring(0, carta.length - 1);
  return isNaN(valor) ? (valor === 'A' ? 11 : 10) : valor * 1;
};
