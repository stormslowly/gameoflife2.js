'use strict';
var rules = require('./rules.js');
var gof = require('./game.js');

var nextWorld = function(world) {
  return world.map(function(row, i) {
    return row.map(function(cell, j) {
      var aliveNeighbors = gof.getAliveNeigbors(i, j, world);
      return rules[cell][aliveNeighbors.length] || 0;
    });
  });
};

module.exports = nextWorld;