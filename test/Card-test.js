const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');

describe('Card', () => {

  beforeEach(() => {
    return card = new Card(1, 'What is my favorite color?', ['blue', 'orange', 'green'], 'green');
  });

  it('should be a function', () => {
    expect(Card).to.be.a('function');
  });

  it('should be an instance of Card', () => {
    expect(card).to.be.an.instanceof(Card);
  });

  it('should store a question', () => {
    expect(card.question).to.equal('What is my favorite color?');
  });

  it('should store a list of possible answers', () => {
    expect(card.answers).to.deep.equal(['blue', 'orange', 'green']);
  });

  it('should store the correct answer', () => {
    expect(card.correctAnswer).to.equal('green');
  });
});
