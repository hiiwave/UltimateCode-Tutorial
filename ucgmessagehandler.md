# `UCGMessageHandler`

這個class負責從discord接收訊息，並將與終極密碼有關的部分委任給`UCGGame`處理。
它是discord與`UCGGame`間的橋樑，判斷收到的訊息是否與終極密碼有關，若是，則轉譯後交給`UCGGame`來處理。

1. 首先建立一個`UCGMessageHandler`class，`new`一個instance後利用`module.exports`導出，因此其它檔案(例如discord-example.js)可以`require`它。

    * 當在某個fileA做`var foo = require('./fileB');`時，fileA的`foo`就會是fileB的`module.exports`
    * 故當在discord-example.js做`const ucgHandler = require('./ucgmessagehandler');`時，discord-example.js裡的`ucgHandler`就是ucgmessagehandler.js裡的`msgHandler`

    ```javascript
    var UCGMessageHandler = function (agame) {
      this.game = agame;
    };

    // Define UCGMessageHandler's methods...

    var ucggame = require('./ucggame');
    var msgHandler = new UCGMessageHandler(ucggame);
    module.exports = msgHandler;
    ```

2. 注意到`UCGMessageHandler`有個property `game`是從ucggame.js導入的，偷看一下ucggame.js的`module.exports`會知道這是一個`UCGGame`的instance。

3. 定義一個`handle` function，對照一下discord-example.js裡面是怎麼用它的，看註解以了解它的用途。

    ```javascript
    UCGMessageHandler.prototype.handle = function (msg) {
      /**
      * DONE: Determine if msg is related to UCGGame.
      * 
      * Depeding on whether game has started,
      * let handleBeforeStart or handleAfterStart handle it.
      * 
      * Returns:
      *  true if msg is related to UCGGame; false otherwise.
      */
      if (!this.game.started) {
        return this.handleBeforeStart(msg);
      } else {
        return this.handleAfterStart(msg);
      }
    };
    ```

4. 實作`handle`的subfunction `handleBeforeStart`，注意到這裡用了`this.game`的property `chat`和一個function `start`，將會從ucggame.js看到它們的定義。
    ```javascript
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
    ```

5. 任務來了，你是不是可以完成`handleAfterStart`呢？先別急著動手，等翻完整份手冊再來開始實作。
    ```javascript
    UCGMessageHandler.prototype.handleAfterStart = function (msg) {
      /**
      * TODO: 判斷msg是不是猜數字的訊息。如果不是，return false。
      * 如果是，告訴this.game誰猜num，讓this.game處理遊戲的邏輯。
      * 你可能需要為UCGGame建立一到多個function。
      */
      return true;
    };
    ```


## Complete Sample Code

```javascript
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
   * 如果是，告訴this.game誰猜了什麼數字，讓this.game處理遊戲的邏輯。
   * 你可能需要為UCGGame建立一到多個function。
   */
  return true;
};


var ucggame = require('./ucggame');
var msgHandler = new UCGMessageHandler(ucggame);
module.exports = msgHandler;

```