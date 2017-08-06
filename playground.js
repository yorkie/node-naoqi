"use strict"

const QiSession = require('./').QiSession;
const session = new QiSession('192.168.0.104');
session.using('ALMotion');
session.using('ALAutonomousLife');
session.using('ALTextToSpeech', 'tts');

session.oncall = function(meta) {
  // { uid: 4, name: 'ALTextToSpeech', member: 'say' }
  console.log(meta);
};

session.onload = function(loaded) {
  this.tts.say('你好');
};
