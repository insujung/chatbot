const { RTMClient } = require('@slack/rtm-api');
var token = 'xoxb-832442583072-834656041622-ZvRvVlecrCOLYEGCeWjvYnZc';

var rtm = new RTMClient(token);
rtm.start();

rtm.on('message', function (message){
	var channel = message.channel;
	var text = message.text;

	if (text == '안녕') {
		rtm.sendMessage('헬로', channel);
	} else {
		rtm.sendMessage('응?', channel);
	}
});
