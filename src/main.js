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
