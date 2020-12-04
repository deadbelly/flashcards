/* eslint-disable max-len */
const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', () => {

  let card1
  let card2
  let card3
  let deck

  beforeEach(() => {
    card1 = new Card(1, 'What is my favorite color?', ['green', 'orange', 'blue'], 'green');
    card2 = new Card(2, 'What is my dogs name', ['danny', 'jake', 'rose'], 'danny');
    card3 = new Card(3, 'What is my cats name', ['You dont have a cat', 'Goose', 'Spork'], 'You dont have a cat');
    deck = new Deck([card1, card2, card3]);
  });

  it('should be a function', () => {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', () => {
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should store cards', () => {
    expect(deck.cards).to.eql([card1, card2, card3]);
  });

  it('should be able to return how many cards it has', () => {
    expect(deck.countCards()).to.equal(3);
  });
});
