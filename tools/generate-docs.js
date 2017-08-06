#!/usr/bin/env node
"use strict"

process.env.DEBUG = true;
const QiSession = require('../').QiSession;
const QiObject = require('../').QiObject;
const Fs = require('fs');

// input the naoqi ipaddress
const session = new QiSession('30.11.246.19');

// core
session.using('ALBehaviorManager');
session.using('ALConnectionManager');
session.using('ALDiagnosis');
session.using('ALExpressionWatcher');
// session.using('ALExtractor');
session.using('ALKnowledge');
session.using('ALMemory');
// session.using('ALModule');
session.using('ALMood');
session.using('ALNotificationManager');
session.using('ALPreferenceManager');
session.using('ALResourceManager');
session.using('ALSystem');
// session.using('ALVisionExtractors');
// session.using('ALTabletService');
session.using('ALUserInfo');
session.using('ALUserSession');
session.using('ALWorldRepresentation');
session.using('PackageManager');
// session.using('ServiceManager');

// // Interaction engines
session.using('ALAutonomousBlinking');
session.using('ALAutonomousLife');
session.using('ALBackgroundMovement');
session.using('ALBasicAwareness');
session.using('ALDialog');
session.using('ALListeningMovement');
session.using('ALSpeakingMovement');

// // Motion
session.using('ALAnimationPlayer');
session.using('ALMotion');
session.using('ALNavigation');
session.using('ALRecharge');
session.using('ALRobotPosture');
session.using('ALTracker');

// // Audio
session.using('ALAnimatedSpeech');
session.using('ALAudioDevice');
session.using('ALAudioPlayer');
session.using('ALSoundDetection');
session.using('ALSoundLocalization');
session.using('ALSpeechRecognition');
session.using('ALTextToSpeech');
session.using('ALVoiceEmotionAnalysis');

// // Vision
session.using('ALBacklightingDetection');
session.using('ALBarcodeReader');
session.using('ALCloseObjectDetection');
session.using('ALColorBlobDetection');
session.using('ALDarknessDetection');
// session.using('ALLandmarkDetection');
session.using('ALLocalization');
session.using('ALMovementDetection');
session.using('ALPhotoCapture');
session.using('ALRedBallDetection');
session.using('ALSegmentation3D');
session.using('ALVideoDevice');
session.using('ALVideoRecorder');
session.using('ALVisionRecognition');
session.using('ALVisualCompass');
session.using('ALVisualSpaceHistory');

// // People Perception
session.using('ALEngagementZones');
session.using('ALFaceCharacteristics');
session.using('ALFaceDetection');
session.using('ALGazeAnalysis');
session.using('ALPeoplePerception');
session.using('ALSittingPeopleDetection');
session.using('ALWavingDetection');

// // Sensors & LEDs
session.using('ALBattery');
session.using('ALBodyTemperature');
session.using('ALChestButton');
session.using('ALFsr');
session.using('ALLaser');
session.using('ALLeds');
session.using('ALSensors');
session.using('ALSonar');
session.using('ALTactileGesture');
session.using('ALTouch');

var generatedFilesCount = 0;

// start load
session.onload = function() {
  for (let name in session) {
    const obj = session[name];
    if (obj instanceof QiObject) {
      generateDocs(name, obj);
    }
  }
  console.log('=================================================');
  console.log(`✓ Generated ${generatedFilesCount} files in docs/`);
  console.log('=================================================');
  process.exit();
};

function generateDocs(name, qiobject) {
  if (qiobject._methods.length === 0)
    return;
  var contents = 
    `/**\n` +
    ` * @module ${name}\n` +
    ` */\n` +
    `session.${name} = {\n`;
  for (let uid in qiobject._methods) {
    const methodObj = qiobject._methods[uid];
    // if (!methodObj.description) continue;
    const comments = 
      `  /**\n` +
      `   * ${methodObj.description}\n` +
      `   * @method ${methodObj.name}\n` +
      (function() {
        if (methodObj.name[0] === '_')
          return `   * @private\n`;
        else
          return '';
      })() +
      methodObj.parameters.map(
        (param) => `   * @param ${param.name} - ${param.description}\n`).join('') +
      `   * @return ${methodObj.returnDescription || null}\n` +
      `   */\n`;
    contents += comments;
    const args = methodObj.parameters.map(param => param.name).join(', ');
    const code =
      `  '${methodObj.name}': function ${methodObj.name}(${args}) {\n` +
      `    return session.${methodObj.name}(${args});\n` +
      `  },\n`;
    contents += code;
  }
  contents += '};\n';
  Fs.writeFileSync(`./docs/${name}.js`, contents);
  generatedFilesCount++;
}

