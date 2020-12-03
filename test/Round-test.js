const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Round', () => {
  let card1
  let card2
  let card3
  let deck
  let round

  beforeEach(() => {
    card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    card3 = new Card(3, 'What type of prototype method does not modify the existing array but returns a particular representation of the array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });

  it('should be a function', () => {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', () => {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should store a deck', () => {
    expect(round.deck).to.equal(deck);
  });

  it('should return the current card', () => {
    expect(round.returnCurrentCard()).to.equal(card1);
  });

  it('should begin with 0 turns', () => {
    expect(round.turns).to.equal(0);
  });

  it('should be able to take turns', () => {
    expect(round.takeTurn('object')).to.equal('correct!');
  });

  it('should be able to take turns when guesses are incorrect', () => {
    expect(round.takeTurn('function')).to.equal('incorrect!');
  });

  it('should keep track of the number of turns', () => {
    round.takeTurn('object');
    round.takeTurn('function');
    expect(round.turns).to.equal(2);
  });

  it('should store incorrect guesses', () => {
    round.takeTurn('object');
    round.takeTurn('function');
    round.takeTurn('accessor method');
    expect(round.incorrectGuesses).to.eql([card2, card3]);
  });

  it('should be able to calculate the win percentage', () => {
    round.takeTurn('object');
    round.takeTurn('function');
    expect(round.calculatePercentCorrect()).to.equal(50);
  });
});
