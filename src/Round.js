const Turn = require('../src/Turn')

class Round {
  constructor(deck) {
    this.deck = deck
    this.turns = 0
    this.incorrectGuesses = []
  }
  returnCurrentCard() {
    return this.deck.cards[0]
  }
  takeTurn(guess) {
    const turn = new Turn(guess, this.deck.cards.shift())
    this.turns++
    if (!turn.evaluateGuess()){
      this.incorrectGuesses.push(turn.card.id)
    }
    return turn.giveFeedback()
  }
  calculatePercentCorrect() {
    return 100 * (this.incorrectGuesses.length / this.turns)
  }
}

module.exports = Round
