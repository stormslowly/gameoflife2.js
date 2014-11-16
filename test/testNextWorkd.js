'use strict';
var expect = require('chai').expect;
var nextWorld = require('../lib/game.js').nextWorld;

describe('GameOfLife', function() {

  describe('NextWorld', function() {
    it('should keep the world empty from empty world', function() {
      var emptyWorld = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ];
      expect(nextWorld(emptyWorld)).to.deep.equal(emptyWorld);
    });

    it('should born from nothing', function() {
      var prevWorld = [
        [0, 1, 0],
        [1, 1, 0],
        [0, 0, 0]
      ];
      var expectWorld = [
        [1, 1, 0],
        [1, 1, 0],
        [0, 0, 0]
      ];

      expect(nextWorld(prevWorld)).to.deep.equal(expectWorld);
    });
  });
});