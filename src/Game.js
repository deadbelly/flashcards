const data = require('./data')
const prototypeQuestions = data.prototypeData
const util = require('./util')
const Round = require('../src/Round')
const Deck = require('../src/Deck')
const Card = require('../src/Card')

class Game {
  constructor() {
    this.currentRound
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round)
  }

  setUp() {
    const cards = prototypeQuestions.map((card) => {
      return new Card(card.id, card.question, card.answers, card.correctAnswer)
    })
    const deck = new Deck(cards)
    this.currentRound = new Round(deck)
  }

  start() {
    this.setUp()
    this.printMessage(this.currentRound.deck, this.currentRound)
    this.printQuestion(this.currentRound)
  }
}

module.exports = Game
