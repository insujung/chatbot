const { RTMClient } = require('@slack/rtm-api');

const token = 'xoxb-832442583072-834656041622-ZvRvVlecrCOLYEGCeWjvYnZc';

const rtm = new RTMClient(token);
rtm.start();

rtm.on('message', (message) => {
  const { channel } = message;
  const { text } = message;
  console.log(channel);
  if (text == '안녕') {
    rtm.sendMessage('헬로', channel);
  } else {
    rtm.sendMessage(channel, channel);
    rtm.sendMessage('응?', channel);
  }
});
