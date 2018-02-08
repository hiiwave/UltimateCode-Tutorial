# 蘋果的終極密碼小幫手

這次的任務目標是在小幫手加入終極密碼遊戲，我們將透過實踐兩個class來完成這個功能：

- `UCGGame`: 負責完成遊戲的各項功能與邏輯，其中`UCG`是Ultimate Code Game的縮寫。
- `UCGMessageHandler`: 負責從discord接收訊息並委任給`UCGGame`處理

這個手冊將會依序介紹以下四個部分，其中主要是ucggame.js需要完成，所有的Sample Code可以從[這裡](https://github.com/hiiwave/UltimateCode-Tutorial/archive/master.zip)下載。

- [discord-example.js](discord-example.md): 示範怎麼讓小幫手與終極密碼掛勾
- [ucgmessagehandler.js](ucgmessagehandler.md): 完成`UCGMessageHandler`的實踐
- [ucggame.js](ucggame.md): 完成`UCGGame`的實踐
- [main.js](main.md): 終極密碼測試

可能會有一點點不太好理解，反覆對照邊看看邊想想，如果哪裡卡住了就要舉手問老師哦～