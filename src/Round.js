const Turn = require('../src/Turn')
const Deck = require('../src/Deck')

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
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(turn.card)
    }
    return turn.giveFeedback()
  }

  calculatePercentCorrect() {
    return 100 - (100 * (this.incorrectGuesses.length / this.turns))
  }

  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
  }

  convertToReview() {
    this.turns = 0
    this.deck = new Deck (this.incorrectGuesses)
    this.incorrectGuesses = []
    console.log(`WE BELIEVE IN YOU!\nKeep playing to review the ${this.deck.cards.length} questions you missed:`)
  }
}

module.exports = Round
