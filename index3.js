require('dotenv').config();
const { RTMClient } = require('@slack/rtm-api');

const token = process.env.SLACK_TOKEN;

const rtm = new RTMClient(token);
rtm.start();

const food = require('./food');
const movie = require('./movie');

rtm.on('message', (message) => {
  const { channel } = message;
  const { text } = message;

  switch (text) {
  case '영화':
    movie(rtm, channel);
    break;
  case '밥':
    food(rtm, channel);
    break;
  case '놀이':
    rtm.sendMessage('그만해.', channel);
    break;
  case '잠':
    rtm.sendMessage('잘자.', channel);
    break;
  default:
    rtm.sendMessage('안녕하세요. 영화,밥,놀이 중에 말씀해주세요.', channel);
  }
});
