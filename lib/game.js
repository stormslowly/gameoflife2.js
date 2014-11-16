'use strict';
var rules = require('./rules.js');
var DIRS = require('./DIRS.js');

var getAliveNeigbors = function(x, y, world) {
  return DIRS.map(function(dir) {
    return {
      x: dir.x + x,
      y: dir.y + y
    };
  }).filter(function(pos) {
    return pos.x >= 0 &&
      pos.y >= 0 &&
      pos.x < world.length &&
      pos.y < world[pos.x].length;
  }).map(function(pos) {
    return world[pos.x][pos.y];
  }).filter(function(cell) {
    return cell === 1;
  });
};


var nextWorld = function(world) {
  return world.map(function(row, i) {
    return row.map(function(cell, j) {
      var aliveNeighbors = getAliveNeigbors(i, j, world);
      return rules[cell][aliveNeighbors.length] || 0;
    });
  });
};

module.exports = {
  nextWorld: nextWorld,
  getAliveNeigbors: getAliveNeigbors
};