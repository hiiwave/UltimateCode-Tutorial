# `discord-example.js`

這是一個Sample code，示範如何將終極密碼的功能加入小幫手的主函式。

1. 為了讓小幫手與終極密碼(`UCGGame`)掛勾，我們需要`UCGMessageHandler`的幫助，首先用`require`的方式得到`UCGMessageHandler`的一個instance。
```javascript
// 1. require the ucgmessagehandler
const ucgHandler = require('./ucgmessagehandler');
```

2. 將`msg`傳給`ucgHandler`處理，如果`msg`是終極密碼相關的訊息，`ucgHandler.handle`會return true並負責處理該訊息。若否則`ucgHandler.handle`會return false，程式將會繼續往 3. 進行。
```javascript
client.on('message', msg => {
  // 2. Let UCGMessageHandler determine if it should handle msg
  if (ucgHandler.handle(msg)) {
    return;
  }

  // 3. Here is your other code
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  };
});
```

## Complete Sample Code:
```javascript
// discord-example.js
/*jshint esversion: 6 */

const Discord = require("discord.js");
const client = new Discord.Client();
// 1. require the ucgmessagehandler
const ucgHandler = require('./ucgmessagehandler');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  // 2. Let UCGMessageHandler determine if it should handle msg
  if (ucgHandler.handle(msg)) {
    return;
  }

  // 3. Here is your other code
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  };
});

client.login('token');
```