const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', () => {
  let card
  let turn1
  let turn2

  beforeEach(() => {
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    turn1 = new Turn('object', card);
    turn2 = new Turn('array', card);
  });

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    expect(turn1).to.be.an.instanceof(Turn);
  });

  it('should store a guess', () => {
    expect(turn1.guess).to.equal('object');
  });

  it('should store a card', () => {
    expect(turn1.card).to.be.an.instanceof(Card);
  });

  it('should be able to return the guess', () => {
    expect(turn1.returnGuess()).to.equal('object');
  });

  it('should be able to return the card', () => {
    expect(turn1.returnCard()).to.equal(card);
  });

  it('should be able to evaluate a correct guess', () => {
    expect(turn1.evaluateGuess()).to.equal(true);
  });

  it('should be able to evaluate an incorrect guess', () => {
    expect(turn2.evaluateGuess()).to.equal(false);
  });

  it('should be able to give feedback for a correct guess', () => {
    expect(turn1.giveFeedback()).to.equal('correct!');
  });

  it('should be able to give feedback for an incorrect guess', () => {
    expect(turn2.giveFeedback()).to.equal('incorrect!');
  });
});
