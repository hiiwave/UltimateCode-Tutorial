// ucgmessagehandler.js

/**
 * A handler to handle discord messages related to UCGGame
 * @constructor
 */
var UCGMessageHandler = function (agame) {
  this.game = agame;
};

// return true is msg is related to UCGGame; otherwise false.
UCGMessageHandler.prototype.handle = function (msg) {
  /**
   * DONE: Determine if msg is related to UCGGame.
   * 
   * Depeding on whether game has started,
   * let handleBeforeStart or handleAfterStart handle it.
   */
  if (!this.game.started) {
    return this.handleBeforeStart(msg);
  } else {
    return this.handleAfterStart(msg);
  }
};

UCGMessageHandler.prototype.handleBeforeStart = function (msg) {
  if (msg.content === '終極密碼') {
    // Let this.game chat to discord channel
    this.game.chat = msg.channel.send;
    // Notify this.game that game has started
    this.game.start();
    return true;
  } else {
    return false;
  }
};

UCGMessageHandler.prototype.handleAfterStart = function (msg) {
  /**
   * TODO: 判斷msg是不是猜數字的訊息。如果不是，return false。
   * 如果是，告訴this.game誰猜num，讓this.game處理遊戲的邏輯。
   * 你可能需要為UCGGame建立一到多個function。
   */
  return true;
};


var ucggame = require('./ucggame');
var msgHandler = new UCGMessageHandler(ucggame);
module.exports = msgHandler;
