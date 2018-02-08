# `main.js`

因為我們的設計理念把`UCGGame`和discord解耦，其實在開發`UCGGame`的過程中我們並不需要透過discord來測試，而是可以在local端作測試，直到`UCGGame`開發完成後再接上discord。

1. 先試著在`cmd`做`node main.js`，你應該會看到以下的輸出。目前它只對遊戲開始的指令有反應，因為`UCGGame`和`UCGMessageHandler` 還沒實作完成。
```
> node main.js
onMessageMock: 終極密碼
遊戲開始囉
onMessageMock: 猜 250
onMessageMock: 這句不會有反應
onMessageMock: 猜 2000
onMessageMock: 猜 1000
```

2. 在開發的過程中，可以透過增減不同的`onMessageMock('猜 2000');` 敘述後，以`node main.js` 做各種情境測試。

  * TIP: 開發完成前可以先把`UCGGame`原應隨機產生的終極密碼改成一個定值，以方便測試，確認邏輯無誤後再改成隨機產生。


  ```javascript
  // main.js
  /*jshint esversion: 6 */

  const ucgHandler = require('./ucgmessagehandler');

  var MessageMock = function(str) {
    this.content = str;
    this.author = 'me';
    this.channel = {};
    this.channel.send = console.log;
  };

  var onMessageMock = function(str) {
    console.log('onMessageMock: ' + str);
    var msgMock = new MessageMock(str)
    ucgHandler.handle(msgMock);
  };

  onMessageMock('終極密碼');
  onMessageMock('猜 250');
  onMessageMock('這句不會有反應');
  onMessageMock('猜 2000');
  onMessageMock('猜 1000');
  ```

3. (Optional，這其實有點難) 依照我們剛剛的設計，`UCGGame`不是應該從discord上講話嗎，為什麼這裡它卻從console輸出呢？這是因為`main.js`做了`onMessageMock`函數來模擬`client.on('message', msg => {});`的進行，並傳假的message(`MessageMock`)給`UCGMessageHandler`。這個假的message具有與discord message相同的結構，且`msg.channel.send`被指定成`console.log`，因此會讓`UCGGame`的`chat`透過console輸出。

4. 可以開始動手啦！是不是還有不太懂的地方呢？隨時都可以提問哦～
