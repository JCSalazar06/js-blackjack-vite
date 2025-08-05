/**
 * this function throws a card
 * @param {Array<String>} deck example [2C, 3D, JC, 4H,...]
 * @returns {String} returns and delete the last item of the deck
 */
export const pedirCarta = (deck) => {
  if (!deck || deck.length === 0)
    throw new Error('deck is required and must be an array of strings');

  return deck.pop();
};
