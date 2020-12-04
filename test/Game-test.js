/* eslint-disable max-len */
const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Round = require('../src/Round');

describe('Game', () =>{
  beforeEach(() =>{
    return game = new Game();
  });

  it('should be a function', () => {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', () => {
    expect(game).to.be.an.instanceof(Game);
  });

  it('should be able to start', () => {
    expect(game).to.respondTo('start');
  });

  it('should set up when it starts', () => {
    expect(game).to.respondTo('setUp');
  });

  it('should have a current round when it sets up', () => {
    game.setUp();
    expect(game.currentRound).to.be.instanceof(Round);
  });

  it('should not have a current round before setting up', () => {
    expect(game.currentRound).to.equal(undefined);
  });
});
