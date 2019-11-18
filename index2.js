require('dotenv').config();
const { RTMClient } = require('@slack/rtm-api');
var token = process.env.SLACK_TOKEN;

var rtm = new RTMClient(token);
rtm.start();

rtm.on('message', function (message){
	var channel = message.channel;
	var text = message.text;

	switch(text) {
		case '영화' :
			rtm.sendMessage('취향에 맞춘 영화를 추천해드릴께요.', channel);
			break;
		case '밥':
			rtm.sendMessage('주변 맛집을 추천해드릴께요', channel);
			break;
		case '놀이':
			rtm.sendMessage('그만해.', channel);
			break;
		default:
			rtm.sendMessage('안녕하세요. 영화,밥,놀이 중에 말씀해주세요.',channel);
	}
});
