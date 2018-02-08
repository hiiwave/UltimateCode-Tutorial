// ucggame.js

/**
 * The Ultimate Code Game Class
 * 
 * TODO: Implement UCGGame
 * @constructor
 */
var UCGGame = function () {
  this.started = false;
  this.chat = function () { };  // the logging function
  // Define any properties you need
};

UCGGame.prototype.start = function () {
  this.chat('遊戲開始囉');
  this.started = true;
  // TODO: Prepare everything you need when game started
};

// Define any functions you need

var game = new UCGGame();
module.exports = game;
