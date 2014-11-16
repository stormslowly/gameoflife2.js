'use strict';
var expect = require('chai').expect;
var gof = require('../lib/game.js');

describe('GameOfLife', function() {

  describe('GetAliveNeighbors', function() {
    it('should get Alive Neighbors for center cell', function() {
      var world = [
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1],
      ];
      expect(gof.getAliveNeigbors(1, 1, world).length).to.equal(8);
    });

    it('should get Number of Alive Neigbors for corner cell', function() {
      var world = [
        [0, 1, 0],
        [1, 1, 0],
        [0, 0, 0]
      ];
      expect(gof.getAliveNeigbors(0, 0, world).length).to.equal(3);
    });

    it('should get Number of Alive Neigbors for cell on border', function() {
      var world = [
        [0, 1, 1],
        [1, 1, 0],
        [0, 1, 1]
      ];
      expect(gof.getAliveNeigbors(1, 2, world).length).to.equal(5);
    });
  });
});