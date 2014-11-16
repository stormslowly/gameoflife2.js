'use strict';
/* global require */
require('colors');

var nextWorld = require('./lib/nextWorld.js');
var puts = require('util').print;
var M = 20;
var generateRow = function(m, cb) {
  return Array.apply(null, Array.call(null, m)).map(function() {
    return cb();
  });
};

var world = Array.apply(null, Array.call(null, M)).map(function() {
  return generateRow(M, function() {
    return Math.floor(Math.random() + 0.5);
  });
});

setInterval(function() {
  puts('\u001bc');
  world.map(function(row) {
    var str = '';
    row.map(function(cell) {
      str += cell ? '@'.white : ' ';
    });
    str = str.trimRight() + '\n';
    puts(str);
  });
  world = nextWorld(world);
}, 820);
// 大概8:20分发