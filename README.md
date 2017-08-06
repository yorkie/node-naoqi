# node-naoqi

NaoQi library for Node.js, it's inspired by [qimessaging](https://github.com/aldebaran/libqi-js) and provides a better interface for method calls and events.

## Installation

```shell
$ npm install naoqi --save
```

## Get Startted

```js
const QiSession = require('naoqi').QiSession;
const session = new QiSession('your naoqi host or ip address');

// specify what services will be used later
session.using('ALTextToSpeech', 'tts');
session.using('ALBehaviorManager');

// start programming on this trigger
session.onload = function(loaded) {
  assert.deepEqual(this, session);
  this.tts.say('hello naoqi');
  this.behaviorManager.run('behavir path').then(() => {
    // get result from run
  });

  // register an event
  this.subscribe('robotIsWakeUp', (awake) => {
    console.log('when robot is wake up');
  });
};
```

## Run test

```shell
$ npm test
```

## License

MIT
