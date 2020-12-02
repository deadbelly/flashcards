const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');

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

  // it('should be able to start', () => {
  //   expect(game.start);
  // });
});
