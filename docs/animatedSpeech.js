/**
 * @module animatedSpeech
 */
session.animatedSpeech = {
  /**
   * 
   * @method registerEvent
   * @return null
   */
  'registerEvent': function registerEvent() {
    return session.registerEvent();
  },
  /**
   * 
   * @method unregisterEvent
   * @return null
   */
  'unregisterEvent': function unregisterEvent() {
    return session.unregisterEvent();
  },
  /**
   * 
   * @method metaObject
   * @return null
   */
  'metaObject': function metaObject() {
    return session.metaObject();
  },
  /**
   * 
   * @method terminate
   * @return null
   */
  'terminate': function terminate() {
    return session.terminate();
  },
  /**
   * 
   * @method property
   * @return null
   */
  'property': function property() {
    return session.property();
  },
  /**
   * 
   * @method setProperty
   * @return null
   */
  'setProperty': function setProperty() {
    return session.setProperty();
  },
  /**
   * 
   * @method properties
   * @return null
   */
  'properties': function properties() {
    return session.properties();
  },
  /**
   * 
   * @method registerEventWithSignature
   * @return null
   */
  'registerEventWithSignature': function registerEventWithSignature() {
    return session.registerEventWithSignature();
  },
  /**
   * 
   * @method isStatsEnabled
   * @return null
   */
  'isStatsEnabled': function isStatsEnabled() {
    return session.isStatsEnabled();
  },
  /**
   * 
   * @method enableStats
   * @return null
   */
  'enableStats': function enableStats() {
    return session.enableStats();
  },
  /**
   * 
   * @method stats
   * @return null
   */
  'stats': function stats() {
    return session.stats();
  },
  /**
   * 
   * @method clearStats
   * @return null
   */
  'clearStats': function clearStats() {
    return session.clearStats();
  },
  /**
   * 
   * @method isTraceEnabled
   * @return null
   */
  'isTraceEnabled': function isTraceEnabled() {
    return session.isTraceEnabled();
  },
  /**
   * 
   * @method enableTrace
   * @return null
   */
  'enableTrace': function enableTrace() {
    return session.enableTrace();
  },
  /**
   * Exits and unregisters the module.
   * @method exit
   * @return null
   */
  'exit': function exit() {
    return session.exit();
  },
  /**
   * Internal function to pCall methods
   * @method __pCall
   * @private
   * @return null
   */
  '__pCall': function __pCall() {
    return session.__pCall();
  },
  /**
   * NAOqi1 pCall method.
   * @method pCall
   * @return null
   */
  'pCall': function pCall() {
    return session.pCall();
  },
  /**
   * Returns the version of the module.
   * @method version
   * @return A string containing the version of the module.
   */
  'version': function version() {
    return session.version();
  },
  /**
   * Just a ping. Always returns true
   * @method ping
   * @return returns true
   */
  'ping': function ping() {
    return session.ping();
  },
  /**
   * Retrieves the module's method list.
   * @method getMethodList
   * @return An array of method names.
   */
  'getMethodList': function getMethodList() {
    return session.getMethodList();
  },
  /**
   * Retrieves a method's description.
   * @method getMethodHelp
   * @param methodName - The name of the method.
   * @return A structure containing the method's description.
   */
  'getMethodHelp': function getMethodHelp(methodName) {
    return session.getMethodHelp(methodName);
  },
  /**
   * Retrieves the module's description.
   * @method getModuleHelp
   * @return A structure describing the module.
   */
  'getModuleHelp': function getModuleHelp() {
    return session.getModuleHelp();
  },
  /**
   * Wait for the end of a long running method that was called using 'post'
   * @method wait
   * @param id - The ID of the method that was returned when calling the method using 'post'
   * @param timeoutPeriod - The timeout period in ms. To wait indefinately, use a timeoutPeriod of zero.
   * @return True if the timeout period terminated. False if the method returned.
   */
  'wait': function wait(id, timeoutPeriod) {
    return session.wait(id, timeoutPeriod);
  },
  /**
   * Wait for the end of a long running method that was called using 'post', returns a cancelable future
   * @method wait
   * @param id - The ID of the method that was returned when calling the method using 'post'
   * @return null
   */
  'wait': function wait(id) {
    return session.wait(id);
  },
  /**
   * Returns true if the method is currently running.
   * @method isRunning
   * @param id - The ID of the method that was returned when calling the method using 'post'
   * @return True if the method is currently running
   */
  'isRunning': function isRunning(id) {
    return session.isRunning(id);
  },
  /**
   * returns true if the method is currently running
   * @method stop
   * @param id - the ID of the method to wait for
   * @return null
   */
  'stop': function stop(id) {
    return session.stop(id);
  },
  /**
   * Gets the name of the parent broker.
   * @method getBrokerName
   * @return The name of the parent broker.
   */
  'getBrokerName': function getBrokerName() {
    return session.getBrokerName();
  },
  /**
   * Gets the method usage string. This summarises how to use the method.
   * @method getUsage
   * @param name - The name of the method.
   * @return A string that summarises the usage of the method.
   */
  'getUsage': function getUsage(name) {
    return session.getUsage(name);
  },
  /**
   * Say the annotated text given in parameter and animate it with animations inserted in the text.
   * @method say
   * @param text - An annotated text (for example: "Hello. ^start(Hey_1) My name is NAO").
   * @return null
   */
  'say': function say(text) {
    return session.say(text);
  },
  /**
   * Say the annotated text given in parameter and animate it with animations inserted in the text.
   * @method say
   * @param text - An annotated text (for example: "Hello. ^start(Hey_1) My name is NAO").
   * @param configuration - The animated speech configuration.
   * @return null
   */
  'say': function say(text, configuration) {
    return session.say(text, configuration);
  },
  /**
   * Reset the Animated Speech configuration.
   * @method _reset
   * @private
   * @return null
   */
  '_reset': function _reset() {
    return session._reset();
  },
  /**
   * Stop all the speeches.
   * @method _stopAll
   * @private
   * @param blocking - If this method wait for the end of the speeches.
   * @return null
   */
  '_stopAll': function _stopAll(blocking) {
    return session._stopAll(blocking);
  },
  /**
   * Know if animated speech is running.
   * @method _isRunning
   * @private
   * @return True, if animated speech is running, False otherwise.
   */
  '_isRunning': function _isRunning() {
    return session._isRunning();
  },
  /**
   * DEPRECATED since 1.18: use setBodyLanguageMode instead.Enable or disable the automatic body talk on the speech.If it is enabled, anywhere you have not annotate your text with animation,the robot will fill the gap with automatically calculated gestures.If it is disabled, the robot will move only where you annotate it withanimations.
   * @method setBodyTalkEnabled
   * @param enable - The boolean value: true to enable, false to disable.
   * @return null
   */
  'setBodyTalkEnabled': function setBodyTalkEnabled(enable) {
    return session.setBodyTalkEnabled(enable);
  },
  /**
   * DEPRECATED since 1.22: use setBodyLanguageMode instead.Enable or disable the automatic body language on the speech.If it is enabled, anywhere you have not annotate your text with animation,the robot will fill the gap with automatically calculated gestures.If it is disabled, the robot will move only where you annotate it withanimations.
   * @method setBodyLanguageEnabled
   * @param enable - The boolean value: true to enable, false to disable.
   * @return null
   */
  'setBodyLanguageEnabled': function setBodyLanguageEnabled(enable) {
    return session.setBodyLanguageEnabled(enable);
  },
  /**
   * Set the current body language mode.
3 modes exist: "disabled", "random" and "contextual"
(see BodyLanguageMode enum for more details)
   * @method setBodyLanguageModeFromStr
   * @param stringBodyLanguageMode - The choosen body language mode.
   * @return null
   */
  'setBodyLanguageModeFromStr': function setBodyLanguageModeFromStr(stringBodyLanguageMode) {
    return session.setBodyLanguageModeFromStr(stringBodyLanguageMode);
  },
  /**
   * Set the current body language mode.
3 modes exist: SPEAKINGMOVEMENT_MODE_DISABLED,SPEAKINGMOVEMENT_MODE_RANDOM and SPEAKINGMOVEMENT_MODE_CONTEXTUAL
(see BodyLanguageMode enum for more details)
   * @method setBodyLanguageMode
   * @param bodyLanguageMode - The choosen body language mode.
   * @return null
   */
  'setBodyLanguageMode': function setBodyLanguageMode(bodyLanguageMode) {
    return session.setBodyLanguageMode(bodyLanguageMode);
  },
  /**
   * Set the current body language mode.
3 modes exist: "disabled", "random" and "contextual"
(see BodyLanguageMode enum for more details)
   * @method getBodyLanguageModeToStr
   * @return The current body language mode.
   */
  'getBodyLanguageModeToStr': function getBodyLanguageModeToStr() {
    return session.getBodyLanguageModeToStr();
  },
  /**
   * Set the current body language mode.
3 modes exist: SPEAKINGMOVEMENT_MODE_DISABLED,SPEAKINGMOVEMENT_MODE_RANDOM and SPEAKINGMOVEMENT_MODE_CONTEXTUAL
(see BodyLanguageMode enum for more details)
   * @method getBodyLanguageMode
   * @return The current body language mode.
   */
  'getBodyLanguageMode': function getBodyLanguageMode() {
    return session.getBodyLanguageMode();
  },
  /**
   * DEPRECATED since 2.2: use ALAnimationPlayer.declareAnimationsPackage instead.Add a new package that contains animations.
   * @method declareAnimationsPackage
   * @param animationsPackage - The new package that contains animations.
   * @return null
   */
  'declareAnimationsPackage': function declareAnimationsPackage(animationsPackage) {
    return session.declareAnimationsPackage(animationsPackage);
  },
  /**
   * Change the pause's time before the speech.
   * @method _setMSPauseBeforeSpeech
   * @private
   * @param pause - The pause's time in milliseconds before the speech.
   * @return null
   */
  '_setMSPauseBeforeSpeech': function _setMSPauseBeforeSpeech(pause) {
    return session._setMSPauseBeforeSpeech(pause);
  },
  /**
   * Get the pause's time before the speech.
   * @method _getMSPauseBeforeSpeech
   * @private
   * @return The pause's time in milliseconds before the speech.
   */
  '_getMSPauseBeforeSpeech': function _getMSPauseBeforeSpeech() {
    return session._getMSPauseBeforeSpeech();
  },
  /**
   * If we need to check the execution times.
   * @method _isCheckExecutionTimesEnabled
   * @private
   * @return True, if we need to check the execution times, False otherwise.
   */
  '_isCheckExecutionTimesEnabled': function _isCheckExecutionTimesEnabled() {
    return session._isCheckExecutionTimesEnabled();
  },
  /**
   * Set if we need to check the execution times.
   * @method _setCheckExecutionTimes
   * @private
   * @param pause - If we need to check the execution times.
   * @return null
   */
  '_setCheckExecutionTimes': function _setCheckExecutionTimes(pause) {
    return session._setCheckExecutionTimes(pause);
  },
  /**
   * Add some new links between tags and words.
   * @method addTagsToWords
   * @param tagsToWords - Map of tags to words.
   * @return null
   */
  'addTagsToWords': function addTagsToWords(tagsToWords) {
    return session.addTagsToWords(tagsToWords);
  },
  /**
   * DEPRECATED since 2.2: use ALAnimationPlayer.declareTagForAnimations instead.Declare some tags with the associated animations.
   * @method declareTagForAnimations
   * @param tagsToAnimations - Map of Tags to Animations.
   * @return null
   */
  'declareTagForAnimations': function declareTagForAnimations(tagsToAnimations) {
    return session.declareTagForAnimations(tagsToAnimations);
  },
  /**
   * Print many debug informations about the current state of animated speech.
   * @method _diagnosis
   * @private
   * @return null
   */
  '_diagnosis': function _diagnosis() {
    return session._diagnosis();
  },
  /**
   * DEPRECATED since 1.18: use getBodyLanguageMode instead.Indicate if the body talk is enabled or not.
   * @method isBodyTalkEnabled
   * @return The boolean value: true means it is enabled, false means it is disabled.
   */
  'isBodyTalkEnabled': function isBodyTalkEnabled() {
    return session.isBodyTalkEnabled();
  },
  /**
   * DEPRECATED since 1.22: use getBodyLanguageMode instead.Indicate if the body language is enabled or not.
   * @method isBodyLanguageEnabled
   * @return The boolean value: true means it is enabled, false means it is disabled.
   */
  'isBodyLanguageEnabled': function isBodyLanguageEnabled() {
    return session.isBodyLanguageEnabled();
  },
  /**
   * DEPRECATED since 2.2: will be remove soon.Get tags found on installed animations which are in "animation library".
   * @method _getTagList
   * @private
   * @return The list of tags found.
   */
  '_getTagList': function _getTagList() {
    return session._getTagList();
  },
  /**
   * DEPRECATED since 2.2: will be remove soon.Get all installed animations for a tag. Currently: animations = "behaviors of the animation library."
   * @method _getAnimationsByTag
   * @private
   * @param tag - A tag to filter the list of animations with.
   * @return The animation list.
   */
  '_getAnimationsByTag': function _getAnimationsByTag(tag) {
    return session._getAnimationsByTag(tag);
  },
  /**
   * Callback for ALMemory subscription for speech bookmark tracking.
   * @method _speechBookMarkCallback
   * @private
   * @param memoryKey - The subscribed memory key which changed.
   * @param value - The new value of the memory key.
   * @param message - The message that comes with the callback.
   * @return null
   */
  '_speechBookMarkCallback': function _speechBookMarkCallback(memoryKey, value, message) {
    return session._speechBookMarkCallback(memoryKey, value, message);
  },
  /**
   * Method called by the tts when "mrkpause" bookmark is reached.This method is blocking until the action is finish.
   * @method _mrkpauseCallback
   * @private
   * @param pBookmark - Id of the bookmark.
   * @return null
   */
  '_mrkpauseCallback': function _mrkpauseCallback(pBookmark) {
    return session._mrkpauseCallback(pBookmark);
  },
  /**
   * Callback for ALMemory subscription for speech status tracking.
   * @method _speechStatusCallback
   * @private
   * @param memoryKey - The subscribed memory key which changed.
   * @param value - The new value of the memory key.
   * @param message - The message that comes with the callback.
   * @return null
   */
  '_speechStatusCallback': function _speechStatusCallback(memoryKey, value, message) {
    return session._speechStatusCallback(memoryKey, value, message);
  },
  /**
   * Callback for ALMemory subscription to postureFamilyChanged.
   * @method _postureFamilyChangedCallback
   * @private
   * @param memoryKey - The subscribed memory key which changed.
   * @param value - The new value of the memory key.
   * @param message - The message that comes with the callback.
   * @return null
   */
  '_postureFamilyChangedCallback': function _postureFamilyChangedCallback(memoryKey, value, message) {
    return session._postureFamilyChangedCallback(memoryKey, value, message);
  },
};
