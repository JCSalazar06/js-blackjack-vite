import _ from 'underscore';
/**
 * This function creates a new deck of cards
 * @param {Array<string>} types example : ['C', 'D', 'H', 'S']
 * @param {Array<string>} specialCards example : ['A', 'J', 'Q', 'K']
 * @returns {Array<string>} returns a new deck
 */
export const crearDeck = (types, specialCards) => {
  if (!types || types.length === 0)
    throw new Error('types is required and must be an array of strings');
  if (!specialCards || specialCards.length === 0)
    throw new Error('specialCards is required and must be an array of strings');

  let deck = [];
  for (let i = 2; i <= 10; i++) {
    for (let type of types) {
      deck.push(i + type);
    }
  }
  for (let type of types) {
    for (let special of specialCards) {
      deck.push(special + type);
    }
  }
  return (deck = _.shuffle(deck));
};
