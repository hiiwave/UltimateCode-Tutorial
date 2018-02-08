# `UCGGame`

我們的主角來啦，現在的`UCGGame`幾乎還是空的class，你將會用你聰明的腦袋和努力不懈的精神來完成它。雖然它還小，有些東西還是值得先觀察一下:

1. 它定義了一個`start` function，來處理遊戲開始的邏輯，對照一下`UCGMessageHandler`是怎麼呼叫它的。另外它還有個`started` property來記錄遊戲開始了沒。
2. 它有一個`chat` property負責講話，例如說`start`裡面call了它來講「遊戲開始囉」。這裡特別的是property除了可以是標準值或物件，也可以是一個function。
    * `UCGGame`跟discord是完全解耦(decouple)的，也就是說它們不互相依賴，`UCGGame`甚至不知道discord的存在。
    discord上之所以可以使用它是因為有`UCGMessageHandler`這個橋樑。
    * 注意到在`UCGMessageHandler::handleBeforeStart`裡做了`this.game.chat = msg.channel.send;`，它把`UCGGame` instance的`chat` property指定成`msg.channel.send`，因此每次`UCGGame`透過`chat`講話時就會從discord上的`channel.send`講出來。
    * 如果把`chat` property指定成`console.log`，那麼`UCGGame`講的話就會從console跳出來，這在測試或debug的時候非常實用，事實上我們也將暫時這麼做。

介紹至此，你是不是迫不急待要完成`UCGGame`了呢？先別急著動手，等看完最後一頁後再來開始實作。

```javascript
// ucggame.js

/**
 * The Ultimate Code Game Class
 * 
 * TODO: Implement UCGGame
 * @constructor
 */
var UCGGame = function () {
  this.started = false;
  this.chat = function(){};  // the logging function
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

```


