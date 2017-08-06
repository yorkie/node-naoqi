/**
 * @module dialog
 */
session.dialog = {
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
   * Subscribes to the extractor. This causes the extractor to start writing information to memory using the keys described by getOutputNames(). These can be accessed in memory using ALMemory.getData("keyName"). In many cases you can avoid calling subscribe on the extractor by just calling ALMemory.subscribeToEvent() supplying a callback method. This will automatically subscribe to the extractor for you.
   * @method subscribe
   * @param name - Name of the module which subscribes.
   * @param period - Refresh period (in milliseconds) if relevant.
   * @param precision - Precision of the extractor if relevant.
   * @return null
   */
  'subscribe': function subscribe(name, period, precision) {
    return session.subscribe(name, period, precision);
  },
  /**
   * Subscribes to the extractor. This causes the extractor to start writing information to memory using the keys described by getOutputNames(). These can be accessed in memory using ALMemory.getData("keyName"). In many cases you can avoid calling subscribe on the extractor by just calling ALMemory.subscribeToEvent() supplying a callback method. This will automatically subscribe to the extractor for you.
   * @method subscribe
   * @param name - Name of the module which subscribes.
   * @return null
   */
  'subscribe': function subscribe(name) {
    return session.subscribe(name);
  },
  /**
   * Unsubscribes from the extractor.
   * @method unsubscribe
   * @param name - Name of the module which had subscribed.
   * @return null
   */
  'unsubscribe': function unsubscribe(name) {
    return session.unsubscribe(name);
  },
  /**
   * Updates the period if relevant.
   * @method updatePeriod
   * @param name - Name of the module which has subscribed.
   * @param period - Refresh period (in milliseconds).
   * @return null
   */
  'updatePeriod': function updatePeriod(name, period) {
    return session.updatePeriod(name, period);
  },
  /**
   * Updates the precision if relevant.
   * @method updatePrecision
   * @param name - Name of the module which has subscribed.
   * @param precision - Precision of the extractor.
   * @return null
   */
  'updatePrecision': function updatePrecision(name, precision) {
    return session.updatePrecision(name, precision);
  },
  /**
   * Gets the current period.
   * @method getCurrentPeriod
   * @return Refresh period (in milliseconds).
   */
  'getCurrentPeriod': function getCurrentPeriod() {
    return session.getCurrentPeriod();
  },
  /**
   * Gets the current precision.
   * @method getCurrentPrecision
   * @return Precision of the extractor.
   */
  'getCurrentPrecision': function getCurrentPrecision() {
    return session.getCurrentPrecision();
  },
  /**
   * Gets the period for a specific subscription.
   * @method getMyPeriod
   * @param name - Name of the module which has subscribed.
   * @return Refresh period (in milliseconds).
   */
  'getMyPeriod': function getMyPeriod(name) {
    return session.getMyPeriod(name);
  },
  /**
   * Gets the precision for a specific subscription.
   * @method getMyPrecision
   * @param name - name of the module which has subscribed
   * @return precision of the extractor
   */
  'getMyPrecision': function getMyPrecision(name) {
    return session.getMyPrecision(name);
  },
  /**
   * Gets the parameters given by the module.
   * @method getSubscribersInfo
   * @return Array of names and parameters of all subscribers.
   */
  'getSubscribersInfo': function getSubscribersInfo() {
    return session.getSubscribersInfo();
  },
  /**
   * Get the list of values updated in ALMemory.
   * @method getOutputNames
   * @return Array of values updated by this extractor in ALMemory
   */
  'getOutputNames': function getOutputNames() {
    return session.getOutputNames();
  },
  /**
   * Get the list of events updated in ALMemory.
   * @method getEventList
   * @return Array of events updated by this extractor in ALMemory
   */
  'getEventList': function getEventList() {
    return session.getEventList();
  },
  /**
   * Get the list of events updated in ALMemory.
   * @method getMemoryKeyList
   * @return Array of events updated by this extractor in ALMemory
   */
  'getMemoryKeyList': function getMemoryKeyList() {
    return session.getMemoryKeyList();
  },
  /**
   * Callback when speech recognition recognized a word
   * @method _wordRecognized
   * @private
   * @param unsuned - callback unused parameter
   * @param value - word recognized value
   * @param message - unused message
   * @return null
   */
  '_wordRecognized': function _wordRecognized(unsuned, value, message) {
    return session._wordRecognized(unsuned, value, message);
  },
  /**
   * Is engine stoppable
   * @method getStoppable
   * @return Is engine stoppable
   */
  'getStoppable': function getStoppable() {
    return session.getStoppable();
  },
  /**
   * Is engine stoppable
   * @method setStoppable
   * @param stoppable - set if engine can be stopped by user session
   * @return null
   */
  'setStoppable': function setStoppable(stoppable) {
    return session.setStoppable(stoppable);
  },
  /**
   * Is engine stoppable
   * @method runTopics
   * @param stoppable - set if engine can be stopped by user session
   * @return null
   */
  'runTopics': function runTopics(stoppable) {
    return session.runTopics(stoppable);
  },
  /**
   * Is engine stoppable
   * @method stopTopics
   * @param stoppable - set if engine can be stopped by user session
   * @return null
   */
  'stopTopics': function stopTopics(stoppable) {
    return session.stopTopics(stoppable);
  },
  /**
   * Set sentence phonetic
   * @method _setPhonetic
   * @private
   * @param source - source sentence
   * @param source - source sentence
   * @return null
   */
  '_setPhonetic': function _setPhonetic(source, source) {
    return session._setPhonetic(source, source);
  },
  /**
   * Pause/unpause dialog engine and asr
   * @method _pauseEngine
   * @private
   * @param enable - true to pause
   * @return null
   */
  '_pauseEngine': function _pauseEngine(enable) {
    return session._pauseEngine(enable);
  },
  /**
   * say a sentence from a topic
   * @method say
   * @param stoppable - set if engine can be stopped by user session
   * @return null
   */
  'say': function say(stoppable) {
    return session.say(stoppable);
  },
  /**
   * ResetLanguage
   * @method resetLanguage
   * @param stoppable - set if engine can be stopped by user session
   * @return null
   */
  'resetLanguage': function resetLanguage(stoppable) {
    return session.resetLanguage(stoppable);
  },
  /**
   * getTriggerFromID
   * @method _getTriggerFromID
   * @private
   * @param stoppable - set if engine can be stopped by user session
   * @return null
   */
  '_getTriggerFromID': function _getTriggerFromID(stoppable) {
    return session._getTriggerFromID(stoppable);
  },
  /**
   * The event will stop current TSS
   * @method addBlockingEvent
   * @param eventName - Event name
   * @return null
   */
  'addBlockingEvent': function addBlockingEvent(eventName) {
    return session.addBlockingEvent(eventName);
  },
  /**
   * The event will removed from the blocking list
   * @method removeBlockingEvent
   * @param eventName - Event name
   * @return null
   */
  'removeBlockingEvent': function removeBlockingEvent(eventName) {
    return session.removeBlockingEvent(eventName);
  },
  /**
   * Asr callback for recognized words
   * @method wordsRecognizedCallback
   * @param grammar - recognized grammar
   * @param utterance Size - Utterance size
   * @return null
   */
  'wordsRecognizedCallback': function wordsRecognizedCallback(grammar, utterance Size) {
    return session.wordsRecognizedCallback(grammar, utterance Size);
  },
  /**
   * End of utterance asr callback
   * @method endOfUtteranceCallback
   * @return true if reprocess buffer
   */
  'endOfUtteranceCallback': function endOfUtteranceCallback() {
    return session.endOfUtteranceCallback();
  },
  /**
   * Experimental: release engine after call of controlEngine
   * @method _releaseEngine
   * @private
   * @return null
   */
  '_releaseEngine': function _releaseEngine() {
    return session._releaseEngine();
  },
  /**
   * Experimental: controlEngine and say a tag
   * @method _controlEngine
   * @private
   * @param topicName - topic name
   * @param tagName - tag name
   * @return Robot answer list
   */
  '_controlEngine': function _controlEngine(topicName, tagName) {
    return session._controlEngine(topicName, tagName);
  },
  /**
   * hasPreference
   * @method _hasPreference
   * @private
   * @return true if has preference
   */
  '_hasPreference': function _hasPreference() {
    return session._hasPreference();
  },
  /**
   * Callback when dialog received a event
   * @method _eventReceived
   * @private
   * @param eventName - event name received
   * @param eventValue - event value
   * @param message - unused event message
   * @return null
   */
  '_eventReceived': function _eventReceived(eventName, eventValue, message) {
    return session._eventReceived(eventName, eventValue, message);
  },
  /**
   * Callback when ASR status changes
   * @method _statusChanged
   * @private
   * @param internalCallBackEvent - unused
   * @param internalCallbackValue - unused
   * @param message - unused
   * @return null
   */
  '_statusChanged': function _statusChanged(internalCallBackEvent, internalCallbackValue, message) {
    return session._statusChanged(internalCallBackEvent, internalCallbackValue, message);
  },
  /**
   * Callback when ASR status changes
   * @method gotoTag
   * @param topicName - topic name
   * @param tagName - tag name
   * @return null
   */
  'gotoTag': function gotoTag(topicName, tagName) {
    return session.gotoTag(topicName, tagName);
  },
  /**
   * noPick
   * @method noPick
   * @param topicName - Topic name
   * @return null
   */
  'noPick': function noPick(topicName) {
    return session.noPick(topicName);
  },
  /**
   * Callback when remote connection changes
   * @method _connectionChanged
   * @private
   * @param internalCallBackEvent - unused
   * @param internalCallbackValue - unused
   * @param message - unused
   * @return null
   */
  '_connectionChanged': function _connectionChanged(internalCallBackEvent, internalCallbackValue, message) {
    return session._connectionChanged(internalCallBackEvent, internalCallbackValue, message);
  },
  /**
   * compile all for ASR
   * @method compileAll
   * @return null
   */
  'compileAll': function compileAll() {
    return session.compileAll();
  },
  /**
   * compile all for ASR
   * @method compileBundle
   * @return null
   */
  'compileBundle': function compileBundle() {
    return session.compileBundle();
  },
  /**
   * Create a context
   * @method createContext
   * @return null
   */
  'createContext': function createContext() {
    return session.createContext();
  },
  /**
   * Load a topic
   * @method loadTopic
   * @param topicPath - topic full path and filename
   * @return Topic path and filename
   */
  'loadTopic': function loadTopic(topicPath) {
    return session.loadTopic(topicPath);
  },
  /**
   * Load a topic
   * @method loadTopicContent
   * @param topicContent - topic content
   * @return Topic name
   */
  'loadTopicContent': function loadTopicContent(topicContent) {
    return session.loadTopicContent(topicContent);
  },
  /**
   * Activate a topic
   * @method deactivateTopic
   * @param topicName - topic name
   * @return null
   */
  'deactivateTopic': function deactivateTopic(topicName) {
    return session.deactivateTopic(topicName);
  },
  /**
   * Activate a topic
   * @method activateTopic
   * @param topicName - topic name
   * @return null
   */
  'activateTopic': function activateTopic(topicName) {
    return session.activateTopic(topicName);
  },
  /**
   * unload a dialog
   * @method unloadTopic
   * @param topicName - topic name
   * @return null
   */
  'unloadTopic': function unloadTopic(topicName) {
    return session.unloadTopic(topicName);
  },
  /**
   * Get a proposal
   * @method forceOutput
   * @return null
   */
  'forceOutput': function forceOutput() {
    return session.forceOutput();
  },
  /**
   * isRunDialogInstalled
   * @method _isRunDialogInstalled
   * @private
   * @return null
   */
  '_isRunDialogInstalled': function _isRunDialogInstalled() {
    return session._isRunDialogInstalled();
  },
  /**
   * Give a sentence to the dialog and get the answer
   * @method forceInput
   * @param input - input string that simulate humain sentence
   * @return null
   */
  'forceInput': function forceInput(input) {
    return session.forceInput(input);
  },
  /**
   * Give a sentence to the dialog and get the answer
   * @method tell
   * @param input - input string that simulate humain sentence
   * @return null
   */
  'tell': function tell(input) {
    return session.tell(input);
  },
  /**
   * Set the minimum confidence required to recognize words. Better to use confidence by asr model
   * @method setASRConfidenceThreshold
   * @param threshold - input string that simulate humain sentence
   * @return null
   */
  'setASRConfidenceThreshold': function setASRConfidenceThreshold(threshold) {
    return session.setASRConfidenceThreshold(threshold);
  },
  /**
   * Get the minimum confidence required to recognize words
   * @method getASRConfidenceThreshold
   * @return current asr confidence
   */
  'getASRConfidenceThreshold': function getASRConfidenceThreshold() {
    return session.getASRConfidenceThreshold();
  },
  /**
   * Set the confidence threshold
   * @method setConfidenceThreshold
   * @param strategy - BNF / SLM / REMOTE
   * @param confidence - desired confidence threshold [0, 1]
   * @return null
   */
  'setConfidenceThreshold': function setConfidenceThreshold(strategy, confidence) {
    return session.setConfidenceThreshold(strategy, confidence);
  },
  /**
   * Set the confidence threshold
   * @method setConfidenceThreshold
   * @param strategy - BNF / SLM / REMOTE
   * @param confidence - desired confidence threshold [0, 1]
   * @param language - language for which we set the threshold
   * @return null
   */
  'setConfidenceThreshold': function setConfidenceThreshold(strategy, confidence, language) {
    return session.setConfidenceThreshold(strategy, confidence, language);
  },
  /**
   * Get all the confidence thresholds
   * @method getAllConfidenceThresholds
   * @return null
   */
  'getAllConfidenceThresholds': function getAllConfidenceThresholds() {
    return session.getAllConfidenceThresholds();
  },
  /**
   * Get all the confidence thresholds
   * @method getConfidenceThreshold
   * @return null
   */
  'getConfidenceThreshold': function getConfidenceThreshold() {
    return session.getConfidenceThreshold();
  },
  /**
   * Remove all language specific confidence thresholds
   * @method removeAllLanguageThresholds
   * @return null
   */
  'removeAllLanguageThresholds': function removeAllLanguageThresholds() {
    return session.removeAllLanguageThresholds();
  },
  /**
   * Set the minimum confidence required to recognize words for a strategy
   * @method _setConfidence
   * @private
   * @param strategy - BNF or SLM
   * @param threshold - threshold [0,1]
   * @return null
   */
  '_setConfidence': function _setConfidence(strategy, threshold) {
    return session._setConfidence(strategy, threshold);
  },
  /**
   * Get the minimum confidence required to recognize words of a strategy
   * @method _getConfidence
   * @private
   * @param strategy - BNF or SLM
   * @return current asr confidence for model
   */
  '_getConfidence': function _getConfidence(strategy) {
    return session._getConfidence(strategy);
  },
  /**
   * Open a session
   * @method openSession
   * @param id - user id
   * @return null
   */
  'openSession': function openSession(id) {
    return session.openSession(id);
  },
  /**
   * Get backend
   * @method _getBackend
   * @private
   * @return null
   */
  '_getBackend': function _getBackend() {
    return session._getBackend();
  },
  /**
   * Open a test session
   * @method _openTestSession
   * @private
   * @return null
   */
  '_openTestSession': function _openTestSession() {
    return session._openTestSession();
  },
  /**
   * close a test session
   * @method _closeTestSession
   * @private
   * @return null
   */
  '_closeTestSession': function _closeTestSession() {
    return session._closeTestSession();
  },
  /**
   * Open a test session
   * @method _runTotTest
   * @private
   * @param tot - tot file to test
   * @return null
   */
  '_runTotTest': function _runTotTest(tot) {
    return session._runTotTest(tot);
  },
  /**
   * Open a test session
   * @method _runTotTest
   * @private
   * @param tot - tot file to test
   * @param wavMode - input wav mode
   * @return null
   */
  '_runTotTest': function _runTotTest(tot, wavMode) {
    return session._runTotTest(tot, wavMode);
  },
  /**
   * Open a test session
   * @method _runTotTest
   * @private
   * @param tot - tot file to test
   * @param wavMode - input wav mode
   * @param wavTranscriptionFile - file containing correspondances between a wav file and his transcription
   * @return null
   */
  '_runTotTest': function _runTotTest(tot, wavMode, wavTranscriptionFile) {
    return session._runTotTest(tot, wavMode, wavTranscriptionFile);
  },
  /**
   * Close the current session
   * @method closeSession
   * @return null
   */
  'closeSession': function closeSession() {
    return session.closeSession();
  },
  /**
   * Close the test session
   * @method closeTestSession
   * @return null
   */
  'closeTestSession': function closeTestSession() {
    return session.closeTestSession();
  },
  /**
   * deprecated
   * @method _generateBNF
   * @private
   * @param name - name
   * @param topic - topic
   * @param language - language
   * @param destination - destination
   * @return null
   */
  '_generateBNF': function _generateBNF(name, topic, language, destination) {
    return session._generateBNF(name, topic, language, destination);
  },
  /**
   * generate a .pot file containing all the sentences of a given application
   * @method _generatePOT
   * @private
   * @param application - application name
   * @param topics - the topics in the application whose content is included in the .pot file
   * @param language - the language of the content in the application used to generate the .pot file
   * @param destination - the .pot destination
   * @return null
   */
  '_generatePOT': function _generatePOT(application, topics, language, destination) {
    return session._generatePOT(application, topics, language, destination);
  },
  /**
   * change event's delay
   * @method setDelay
   * @param eventName - Event name
   * @param Delay - Delay in second
   * @return null
   */
  'setDelay': function setDelay(eventName, Delay) {
    return session.setDelay(eventName, Delay);
  },
  /**
   * Set how many scopes remains open
   * @method setNumberOfScopes
   * @param numberOfScope - number of scope
   * @return null
   */
  'setNumberOfScopes': function setNumberOfScopes(numberOfScope) {
    return session.setNumberOfScopes(numberOfScope);
  },
  /**
   * Set the content of a dynamic concept
   * @method setConcept
   * @param conceptName - Name of the concept
   * @param language - Language of the concept
   * @param content - content of the concept
   * @param store - Store concept in database if true
   * @return null
   */
  'setConcept': function setConcept(conceptName, language, content, store) {
    return session.setConcept(conceptName, language, content, store);
  },
  /**
   * Set the content of a dynamic concept
   * @method setConcept
   * @param conceptName - Name of the concept
   * @param language - Language of the concept
   * @param content - content of the concept
   * @param store - determine if the concept will be save in the database
   * @return null
   */
  'setConcept': function setConcept(conceptName, language, content, store) {
    return session.setConcept(conceptName, language, content, store);
  },
  /**
   * set the content of a dynamic concept
   * @method setConceptKeepInCache
   * @param conceptName - concept name
   * @param language - language
   * @param content - concept content
   * @return null
   */
  'setConceptKeepInCache': function setConceptKeepInCache(conceptName, language, content) {
    return session.setConceptKeepInCache(conceptName, language, content);
  },
  /**
   * add to the content of a dynamic concept
   * @method addToConcept
   * @param conceptName - Name of the concept
   * @param language - Language of the concept
   * @param content - content of the concept
   * @return null
   */
  'addToConcept': function addToConcept(conceptName, language, content) {
    return session.addToConcept(conceptName, language, content);
  },
  /**
   * get the content of a dynamic concept
   * @method getConcept
   * @param conceptName - Name of the concept
   * @param language - Language of the concept
   * @return null
   */
  'getConcept': function getConcept(conceptName, language) {
    return session.getConcept(conceptName, language);
  },
  /**
   * Set push mode. Frequence of robot question
   * @method _setPushMode
   * @private
   * @param pushMode - Push mode from 0 to 4
   * @return null
   */
  '_setPushMode': function _setPushMode(pushMode) {
    return session._setPushMode(pushMode);
  },
  /**
   * enableTriggerSentences
   * @method enableTriggerSentences
   * @param enableTriggerSentences - Enable trigger sentences if true
   * @return null
   */
  'enableTriggerSentences': function enableTriggerSentences(enableTriggerSentences) {
    return session.enableTriggerSentences(enableTriggerSentences);
  },
  /**
   * enableCategory
   * @method enableCategory
   * @param enableCategory - Enable category if true
   * @return null
   */
  'enableCategory': function enableCategory(enableCategory) {
    return session.enableCategory(enableCategory);
  },
  /**
   * Start push mode
   * @method startPush
   * @return null
   */
  'startPush': function startPush() {
    return session.startPush();
  },
  /**
   * Stop push mode
   * @method stopPush
   * @return null
   */
  'stopPush': function stopPush() {
    return session.stopPush();
  },
  /**
   * Set the configuration of animated speech for the current dialog.
   * @method setAnimatedSpeechConfiguration
   * @param animatedSpeechConfiguration - See animated speech documentation
   * @return null
   */
  'setAnimatedSpeechConfiguration': function setAnimatedSpeechConfiguration(animatedSpeechConfiguration) {
    return session.setAnimatedSpeechConfiguration(animatedSpeechConfiguration);
  },
  /**
   * Get the configuration of animated speech for the current dialog.
   * @method getAnimatedSpeechConfiguration
   * @return See animated speech documentation
   */
  'getAnimatedSpeechConfiguration': function getAnimatedSpeechConfiguration() {
    return session.getAnimatedSpeechConfiguration();
  },
  /**
   * Black list a list of application
   * @method applicationBlackList
   * @param applicationList - List of applications that cannot be launched by dialog
   * @return null
   */
  'applicationBlackList': function applicationBlackList(applicationList) {
    return session.applicationBlackList(applicationList);
  },
  /**
   * True if new content was installed
   * @method isContentNeedsUpdate
   * @return True if content was updated since last compilation
   */
  'isContentNeedsUpdate': function isContentNeedsUpdate() {
    return session.isContentNeedsUpdate();
  },
  /**
   * private method to be able to set in specific include dir
   * @method _addDialogFromTopicBox
   * @private
   * @param topicPathName - Topic path and filename
   * @param includeDirectory - Root of the behavior
   * @return Topic name (not filename)
   */
  '_addDialogFromTopicBox': function _addDialogFromTopicBox(topicPathName, includeDirectory) {
    return session._addDialogFromTopicBox(topicPathName, includeDirectory);
  },
  /**
   * Clean event stack
   * @method _cleanEventStack
   * @private
   * @return null
   */
  '_cleanEventStack': function _cleanEventStack() {
    return session._cleanEventStack();
  },
  /**
   * Connect to custom AI client
   * @method _updateAIClient
   * @private
   * @param libraryPath - library path
   * @return null
   */
  '_updateAIClient': function _updateAIClient(libraryPath) {
    return session._updateAIClient(libraryPath);
  },
  /**
   * Create a user group
   * @method _addTopicsInGroup
   * @private
   * @param groupName - User group name
   * @param topicNameList - Topic to add in group
   * @return null
   */
  '_addTopicsInGroup': function _addTopicsInGroup(groupName, topicNameList) {
    return session._addTopicsInGroup(groupName, topicNameList);
  },
  /**
   * Group to activate
   * @method _activateGroup
   * @private
   * @param groupName - group name
   * @return null
   */
  '_activateGroup': function _activateGroup(groupName) {
    return session._activateGroup(groupName);
  },
  /**
   * private method to be able to set in specific include dir
   * @method _deactivateGroup
   * @private
   * @param groupName - group name
   * @return null
   */
  '_deactivateGroup': function _deactivateGroup(groupName) {
    return session._deactivateGroup(groupName);
  },
  /**
   * suggest next topic
   * @method _suggestNextTopic
   * @private
   * @param topicName - group name
   * @param suggestionValidity - Suggestion validity in second
   * @return null
   */
  '_suggestNextTopic': function _suggestNextTopic(topicName, suggestionValidity) {
    return session._suggestNextTopic(topicName, suggestionValidity);
  },
  /**
   * suggest next topic
   * @method _suggestUserNextTopic
   * @private
   * @param topicName - group name
   * @param suggestionValidity - Suggestion validity in second
   * @param userID - Suggestion validity for userID
   * @return null
   */
  '_suggestUserNextTopic': function _suggestUserNextTopic(topicName, suggestionValidity, userID) {
    return session._suggestUserNextTopic(topicName, suggestionValidity, userID);
  },
  /**
   * preload main dialog
   * @method _preloadMain
   * @private
   * @return null
   */
  '_preloadMain': function _preloadMain() {
    return session._preloadMain();
  },
  /**
   * Define only language to use
   * @method _mainLanguage
   * @private
   * @param languageName - monoLanguageName
   * @return null
   */
  '_mainLanguage': function _mainLanguage(languageName) {
    return session._mainLanguage(languageName);
  },
  /**
   * run main dialog without speaking
   * @method _runMainNoActivation
   * @private
   * @return null
   */
  '_runMainNoActivation': function _runMainNoActivation() {
    return session._runMainNoActivation();
  },
  /**
   * run main dialog
   * @method _runMain
   * @private
   * @return null
   */
  '_runMain': function _runMain() {
    return session._runMain();
  },
  /**
   * run main dialog
   * @method _startDialog
   * @private
   * @param engagementMode - engagementMode
   * @return null
   */
  '_startDialog': function _startDialog(engagementMode) {
    return session._startDialog(engagementMode);
  },
  /**
   * change engagement mode
   * @method _setEngagementMode
   * @private
   * @param engagementMode - engagementMode
   * @return null
   */
  '_setEngagementMode': function _setEngagementMode(engagementMode) {
    return session._setEngagementMode(engagementMode);
  },
  /**
   * change engagement mode
   * @method _pause
   * @private
   * @return null
   */
  '_pause': function _pause() {
    return session._pause();
  },
  /**
   * change engagement mode
   * @method _endPause
   * @private
   * @return null
   */
  '_endPause': function _endPause() {
    return session._endPause();
  },
  /**
   * run main dialog
   * @method runDialog
   * @return null
   */
  'runDialog': function runDialog() {
    return session.runDialog();
  },
  /**
   * reset preload settings
   * @method _resetPreload
   * @private
   * @return null
   */
  '_resetPreload': function _resetPreload() {
    return session._resetPreload();
  },
  /**
   * stop main dialog
   * @method _stopMain
   * @private
   * @return null
   */
  '_stopMain': function _stopMain() {
    return session._stopMain();
  },
  /**
   * stop main dialog
   * @method stopDialog
   * @return null
   */
  'stopDialog': function stopDialog() {
    return session.stopDialog();
  },
  /**
   * load a strategy configuration
   * @method _loadStrategyConfiguration
   * @private
   * @param strategyFile - Strategy path and filename
   * @return null
   */
  '_loadStrategyConfiguration': function _loadStrategyConfiguration(strategyFile) {
    return session._loadStrategyConfiguration(strategyFile);
  },
  /**
   * setVariablePath redifine a variable name on the fly
   * @method setVariablePath
   * @param topic - Source topic name
   * @param event - Event name
   * @param path - New event name
   * @return null
   */
  'setVariablePath': function setVariablePath(topic, event, path) {
    return session.setVariablePath(topic, event, path);
  },
  /**
   * register IO
   * @method _registerIO
   * @private
   * @param boxName - Box name
   * @param topicName - Topic name
   * @param inputList - Input list
   * @param outputList - Output list
   * @return null
   */
  '_registerIO': function _registerIO(boxName, topicName, inputList, outputList) {
    return session._registerIO(boxName, topicName, inputList, outputList);
  },
  /**
   * unregister IO
   * @method _unregisterIO
   * @private
   * @param boxName - Box name
   * @param topicName - Topic name
   * @param inputList - Input list
   * @param outputList - Output list
   * @return null
   */
  '_unregisterIO': function _unregisterIO(boxName, topicName, inputList, outputList) {
    return session._unregisterIO(boxName, topicName, inputList, outputList);
  },
  /**
   * Send a message input
   * @method _messageIn
   * @private
   * @param boxName - Box name
   * @param topicName - Topic name
   * @param variableName - Variable name
   * @param value - Value
   * @return null
   */
  '_messageIn': function _messageIn(boxName, topicName, variableName, value) {
    return session._messageIn(boxName, topicName, variableName, value);
  },
  /**
   * setLanguage
   * @method setLanguage
   * @param Language - Set dialog language (frf, enu, jpj...)
   * @return null
   */
  'setLanguage': function setLanguage(Language) {
    return session.setLanguage(Language);
  },
  /**
   * getLanguage
   * @method getLanguage
   * @return get the dialog language
   */
  'getLanguage': function getLanguage() {
    return session.getLanguage();
  },
  /**
   * startUpdate
   * @method _startUpdate
   * @private
   * @param variableName - variable name
   * @param variableValue - variable value
   * @param message - message
   * @return null
   */
  '_startUpdate': function _startUpdate(variableName, variableValue, message) {
    return session._startUpdate(variableName, variableValue, message);
  },
  /**
   * startUpdate
   * @method _startApp
   * @private
   * @param variableName - variable name
   * @param variableValue - variable value
   * @param message - message
   * @return null
   */
  '_startApp': function _startApp(variableName, variableValue, message) {
    return session._startApp(variableName, variableValue, message);
  },
  /**
   * packageInstalled
   * @method _packageInstalled
   * @private
   * @param variableName - variable name
   * @param variableValue - variable value
   * @param message - message
   * @return null
   */
  '_packageInstalled': function _packageInstalled(variableName, variableValue, message) {
    return session._packageInstalled(variableName, variableValue, message);
  },
  /**
   * _packageRemoved
   * @method _packageRemoved
   * @private
   * @param variableName - variable name
   * @param variableValue - variable value
   * @param message - message
   * @return null
   */
  '_packageRemoved': function _packageRemoved(variableName, variableValue, message) {
    return session._packageRemoved(variableName, variableValue, message);
  },
  /**
   * dialogAnswered
   * @method dialogAnswered
   * @param variableName - variable name
   * @param variableValue - variable value
   * @param message - message
   * @return null
   */
  'dialogAnswered': function dialogAnswered(variableName, variableValue, message) {
    return session.dialogAnswered(variableName, variableValue, message);
  },
  /**
   * compilationFinished
   * @method _compilationFinished
   * @private
   * @param variableName - variable name
   * @param variableValue - variable value
   * @param message - message
   * @return null
   */
  '_compilationFinished': function _compilationFinished(variableName, variableValue, message) {
    return session._compilationFinished(variableName, variableValue, message);
  },
  /**
   * Give focus to a dialog
   * @method setFocus
   * @param topicName - Topic name
   * @return null
   */
  'setFocus': function setFocus(topicName) {
    return session.setFocus(topicName);
  },
  /**
   * Give focus to a dialog
   * @method getFocus
   * @return Current focus name
   */
  'getFocus': function getFocus() {
    return session.getFocus();
  },
  /**
   * Set the focus to a topic and make a proposal
   * @method gotoTopic
   * @param topicName - Topic name
   * @return null
   */
  'gotoTopic': function gotoTopic(topicName) {
    return session.gotoTopic(topicName);
  },
  /**
   * Enable AI System
   * @method _enableOneBNFActivated
   * @private
   * @param enableFullBNF - Add all possible sentences in speech recognition
   * @return null
   */
  '_enableOneBNFActivated': function _enableOneBNFActivated(enableFullBNF) {
    return session._enableOneBNFActivated(enableFullBNF);
  },
  /**
   * Enable AI System
   * @method _enableAISystem
   * @private
   * @param enableAISystem - Enable AI system
   * @return null
   */
  '_enableAISystem': function _enableAISystem(enableAISystem) {
    return session._enableAISystem(enableAISystem);
  },
  /**
   * Add a fallback plugin
   * @method addFallback
   * @param language - The language of the plugin
   * @param name - The name of the plugin
   * @return null
   */
  'addFallback': function addFallback(language, name) {
    return session.addFallback(language, name);
  },
  /**
   * Remove a fallback plugin
   * @method removeFallback
   * @param language - The language of the plugin
   * @param name - The name of the plugin
   * @return null
   */
  'removeFallback': function removeFallback(language, name) {
    return session.removeFallback(language, name);
  },
  /**
   * Load precompiled file
   * @method _loadPrecompiledFile
   * @private
   * @param filepath - File path and filename
   * @param bundleName - Bundle name
   * @param language - Language name
   * @return null
   */
  '_loadPrecompiledFile': function _loadPrecompiledFile(filepath, bundleName, language) {
    return session._loadPrecompiledFile(filepath, bundleName, language);
  },
  /**
   * Load SLM
   * @method _loadSLM
   * @private
   * @param SLMFile - SLM path and filename
   * @param language - Language name
   * @return null
   */
  '_loadSLM': function _loadSLM(SLMFile, language) {
    return session._loadSLM(SLMFile, language);
  },
  /**
   * List loaded topics
   * @method getLoadedTopics
   * @param language - Language name
   * @return List of loaded topics
   */
  'getLoadedTopics': function getLoadedTopics(language) {
    return session.getLoadedTopics(language);
  },
  /**
   * List loaded topics independent of language
   * @method getAllLoadedTopics
   * @return List of loaded topics
   */
  'getAllLoadedTopics': function getAllLoadedTopics() {
    return session.getAllLoadedTopics();
  },
  /**
   * Get activated topics
   * @method getActivatedTopics
   * @return List of activated topics
   */
  'getActivatedTopics': function getActivatedTopics() {
    return session.getActivatedTopics();
  },
  /**
   * fast behavior start
   * @method _setBehaviorEvent
   * @private
   * @param Event - Event name
   * @return null
   */
  '_setBehaviorEvent': function _setBehaviorEvent(Event) {
    return session._setBehaviorEvent(Event);
  },
  /**
   * triggers and proposal are activated in the model at compilation time
   * @method _fastModelActivation
   * @private
   * @param enable - Enable fast activation
   * @return null
   */
  '_fastModelActivation': function _fastModelActivation(enable) {
    return session._fastModelActivation(enable);
  },
  /**
   * byPass fast approximative matching
   * @method _byPassFastApproximateMatching
   * @private
   * @param fastApproximative - enable fast approximative matching
   * @return null
   */
  '_byPassFastApproximateMatching': function _byPassFastApproximateMatching(fastApproximative) {
    return session._byPassFastApproximateMatching(fastApproximative);
  },
  /**
   * activate a tag
   * @method activateTag
   * @param tagName - tag name
   * @param topicName - topic name
   * @return null
   */
  'activateTag': function activateTag(tagName, topicName) {
    return session.activateTag(tagName, topicName);
  },
  /**
   * deactivate a tag
   * @method deactivateTag
   * @param tagName - tag name
   * @param topicName - topic name
   * @return null
   */
  'deactivateTag': function deactivateTag(tagName, topicName) {
    return session.deactivateTag(tagName, topicName);
  },
  /**
   * fallback (experimentatl)
   * @method _fallback
   * @private
   * @param Question - User question
   * @param Language - Language
   * @return null
   */
  '_fallback': function _fallback(Question, Language) {
    return session._fallback(Question, Language);
  },
  /**
   * Reset all engine
   * @method resetAll
   * @return null
   */
  'resetAll': function resetAll() {
    return session.resetAll();
  },
  /**
   * set Synchronicity
   * @method _setSynchronicity
   * @private
   * @return null
   */
  '_setSynchronicity': function _setSynchronicity() {
    return session._setSynchronicity();
  },
  /**
   * get Synchronicity
   * @method _getSynchronicity
   * @private
   * @return null
   */
  '_getSynchronicity': function _getSynchronicity() {
    return session._getSynchronicity();
  },
  /**
   * insert user data into dialog database
   * @method insertUserData
   * @param variableName - Variable name
   * @param variableValue - Variable value
   * @param UserID - User ID
   * @return null
   */
  'insertUserData': function insertUserData(variableName, variableValue, UserID) {
    return session.insertUserData(variableName, variableValue, UserID);
  },
  /**
   * get user data from dialog database
   * @method _magicGet
   * @private
   * @return null
   */
  '_magicGet': function _magicGet() {
    return session._magicGet();
  },
  /**
   * get user data from dialog database
   * @method getUserData
   * @param variableName - Variable name
   * @param UserID - User ID
   * @return Value
   */
  'getUserData': function getUserData(variableName, UserID) {
    return session.getUserData(variableName, UserID);
  },
  /**
   * get user data list from dialog database
   * @method getUserDataList
   * @param UserID - User ID
   * @return Variable list
   */
  'getUserDataList': function getUserDataList(UserID) {
    return session.getUserDataList(UserID);
  },
  /**
   * get user list from dialog database
   * @method getUserList
   * @return User list
   */
  'getUserList': function getUserList() {
    return session.getUserList();
  },
  /**
   * remove a user from the database
   * @method removeUserData
   * @param UserID - User ID
   * @return null
   */
  'removeUserData': function removeUserData(UserID) {
    return session.removeUserData(UserID);
  },
  /**
   * clear concepts in DB
   * @method clearConcepts
   * @return null
   */
  'clearConcepts': function clearConcepts() {
    return session.clearConcepts();
  },
  /**
   * callback
   * @method _speechDetected
   * @private
   * @return null
   */
  '_speechDetected': function _speechDetected() {
    return session._speechDetected();
  },
  /**
   * let the robot send log the cloud
   * @method enableSendingLogToCloud
   * @param EnableLog - Enable log
   * @return null
   */
  'enableSendingLogToCloud': function enableSendingLogToCloud(EnableLog) {
    return session.enableSendingLogToCloud(EnableLog);
  },
  /**
   * encrypt the logs sent tothe cloud
   * @method _encryptLog
   * @private
   * @param EnableLog - Remove user log
   * @return null
   */
  '_encryptLog': function _encryptLog(EnableLog) {
    return session._encryptLog(EnableLog);
  },
  /**
   * check if the robot is sending the log to the cloud
   * @method isSendingLogToCloud
   * @return True if currently logging
   */
  'isSendingLogToCloud': function isSendingLogToCloud() {
    return session.isSendingLogToCloud();
  },
  /**
   * check if the robot is encrypting the log sent to the cloud
   * @method _isEncryptingLog
   * @private
   * @return True if currently encrypt logging
   */
  '_isEncryptingLog': function _isEncryptingLog() {
    return session._isEncryptingLog();
  },
  /**
   * enable sending log audio (recorded conversation) to the cloud
   * @method enableLogAudio
   * @return Enable audio log
   */
  'enableLogAudio': function enableLogAudio() {
    return session.enableLogAudio();
  },
  /**
   * The deletion cost (deleting from the sentence to match the model)
   * @method _setDeletionCost
   * @private
   * @param MatchingDeletionCost - Deletion cost
   * @return null
   */
  '_setDeletionCost': function _setDeletionCost(MatchingDeletionCost) {
    return session._setDeletionCost(MatchingDeletionCost);
  },
  /**
   * The insertion cost (inserting in the sentence to match the model)
   * @method _setInsertionCost
   * @private
   * @param MatchingInsertCost - Insert cost
   * @return null
   */
  '_setInsertionCost': function _setInsertionCost(MatchingInsertCost) {
    return session._setInsertionCost(MatchingInsertCost);
  },
  /**
   * The substitution cost
   * @method _setSubstitutionCost
   * @private
   * @param MatchingSubstitutionCost - Substitution cost
   * @return null
   */
  '_setSubstitutionCost': function _setSubstitutionCost(MatchingSubstitutionCost) {
    return session._setSubstitutionCost(MatchingSubstitutionCost);
  },
  /**
   * The cost of matching an open element (such as _*)
   * @method _setStarCost
   * @private
   * @param MatchingStarCost - Wildcard cost
   * @return null
   */
  '_setStarCost': function _setStarCost(MatchingStarCost) {
    return session._setStarCost(MatchingStarCost);
  },
  /**
   * The approximate matching threshold
   * @method _setApproximateMatchingThreshold
   * @private
   * @param MatchingThreshold - Matching threshold
   * @return null
   */
  '_setApproximateMatchingThreshold': function _setApproximateMatchingThreshold(MatchingThreshold) {
    return session._setApproximateMatchingThreshold(MatchingThreshold);
  },
  /**
   * Tell to the model to use acrobatic matching
   * @method _useAcrobaticMatching
   * @private
   * @param EnableAccrobatic - Enable accrobatic matching
   * @return null
   */
  '_useAcrobaticMatching': function _useAcrobaticMatching(EnableAccrobatic) {
    return session._useAcrobaticMatching(EnableAccrobatic);
  },
  /**
   * Tell to the model to use statistical matching
   * @method _enableStatisticalMatching
   * @private
   * @param EnableSemantic - Enable semantic matching
   * @return null
   */
  '_enableStatisticalMatching': function _enableStatisticalMatching(EnableSemantic) {
    return session._enableStatisticalMatching(EnableSemantic);
  },
  /**
   * Tell to the model to use phonetic matching
   * @method _enablePhoneticMatching
   * @private
   * @param EnablePhonetic - Enable phonetic matching
   * @return null
   */
  '_enablePhoneticMatching': function _enablePhoneticMatching(EnablePhonetic) {
    return session._enablePhoneticMatching(EnablePhonetic);
  },
  /**
   * Specify the directory and language of the statistical model
   * @method _setSemanticModel
   * @private
   * @param semanticPath - Semantic matching data path
   * @return null
   */
  '_setSemanticModel': function _setSemanticModel(semanticPath) {
    return session._setSemanticModel(semanticPath);
  },
  /**
   * Is one pass enabled
   * @method _isOnePassEnabled
   * @private
   * @return Enable only one speech recognition
   */
  '_isOnePassEnabled': function _isOnePassEnabled() {
    return session._isOnePassEnabled();
  },
  /**
   * set SLM High treshold
   * @method _setSLMUpperThreshold
   * @private
   * @param SLMUpper - SLM Upper Threshold
   * @return null
   */
  '_setSLMUpperThreshold': function _setSLMUpperThreshold(SLMUpper) {
    return session._setSLMUpperThreshold(SLMUpper);
  },
  /**
   * enable use of serialized models
   * @method _enableSerialization
   * @private
   * @param enableSerialization - Enable serialization
   * @return null
   */
  '_enableSerialization': function _enableSerialization(enableSerialization) {
    return session._enableSerialization(enableSerialization);
  },
  /**
   * delete serializations files .ser .ini .bnf .lcf
   * @method _deleteSerializationFiles
   * @private
   * @return null
   */
  '_deleteSerializationFiles': function _deleteSerializationFiles() {
    return session._deleteSerializationFiles();
  },
  /**
   * Clean phonetic
   * @method _cleanPhonetic
   * @private
   * @return null
   */
  '_cleanPhonetic': function _cleanPhonetic() {
    return session._cleanPhonetic();
  },
  /**
   * mute dialog
   * @method mute
   * @return null
   */
  'mute': function mute() {
    return session.mute();
  },
  /**
   * Set if the input concepts are copied
   * @method _copyInputConcepts
   * @private
   * @param copyInput - False to optimize
   * @return null
   */
  '_copyInputConcepts': function _copyInputConcepts(copyInput) {
    return session._copyInputConcepts(copyInput);
  },
  /**
   * Set if the input concepts are copied
   * @method _copyOutputConcepts
   * @private
   * @param copyOutput - False to optimize
   * @return null
   */
  '_copyOutputConcepts': function _copyOutputConcepts(copyOutput) {
    return session._copyOutputConcepts(copyOutput);
  },
  /**
   * Generate sentences
   * @method generateSentences
   * @param destination - file destination
   * @param topic - source topic
   * @param language - source language
   * @return null
   */
  'generateSentences': function generateSentences(destination, topic, language) {
    return session.generateSentences(destination, topic, language);
  },
  /**
   * Set the sentence length to apply -after star optimization- in matching
   * @method _setLengthForAfterStarOptimization
   * @private
   * @param length - set length
   * @return null
   */
  '_setLengthForAfterStarOptimization': function _setLengthForAfterStarOptimization(length) {
    return session._setLengthForAfterStarOptimization(length);
  },
  /**
   * Set the sentence length to apply -before star optimization- in matching
   * @method _setLengthForBeforeStarOptimization
   * @private
   * @param length - set length
   * @return null
   */
  '_setLengthForBeforeStarOptimization': function _setLengthForBeforeStarOptimization(length) {
    return session._setLengthForBeforeStarOptimization(length);
  },
  /**
   * 
   * @method _onUserSessionFocused
   * @private
   * @param  - 
   * @param  - 
   * @param  - 
   * @return null
   */
  '_onUserSessionFocused': function _onUserSessionFocused(, , ) {
    return session._onUserSessionFocused(, , );
  },
  /**
   * 
   * @method _onUserDeleted
   * @private
   * @param  - 
   * @param  - 
   * @param  - 
   * @return null
   */
  '_onUserDeleted': function _onUserDeleted(, , ) {
    return session._onUserDeleted(, , );
  },
  /**
   * 
   * @method _us_getUserData
   * @private
   * @param  - 
   * @param  - 
   * @param  - 
   * @return null
   */
  '_us_getUserData': function _us_getUserData(, , ) {
    return session._us_getUserData(, , );
  },
  /**
   * Query if dialog sessions are controlled by ALUserSession
   * @method _setUserSessionObeyed
   * @private
   * @param is_obeyed - Bool. True if dialog should open/close sessions according to ALUserSession
   * @return null
   */
  '_setUserSessionObeyed': function _setUserSessionObeyed(is_obeyed) {
    return session._setUserSessionObeyed(is_obeyed);
  },
  /**
   * Query if dialog sessions are controlled by ALUserSession
   * @method _isUserSessionObeyed
   * @private
   * @return Bool. True if dialog will open/close sessions according to ALUserSession
   */
  '_isUserSessionObeyed': function _isUserSessionObeyed() {
    return session._isUserSessionObeyed();
  },
  /**
   * get language map ISO to NU format
   * @method getLanguageListISOToNU
   * @return get language map ISO to NU format
   */
  'getLanguageListISOToNU': function getLanguageListISOToNU() {
    return session.getLanguageListISOToNU();
  },
  /**
   * get language map NU to ISO format
   * @method getLanguageListNUToISO
   * @return get language map NU to ISO format
   */
  'getLanguageListNUToISO': function getLanguageListNUToISO() {
    return session.getLanguageListNUToISO();
  },
  /**
   * get language map Long to NU format
   * @method getLanguageListLongToNU
   * @return get language map Long to NU format
   */
  'getLanguageListLongToNU': function getLanguageListLongToNU() {
    return session.getLanguageListLongToNU();
  },
  /**
   * get language map NU to Long format
   * @method getLanguageListNUToLong
   * @return get language map NU to Long format
   */
  'getLanguageListNUToLong': function getLanguageListNUToLong() {
    return session.getLanguageListNUToLong();
  },
  /**
   * convert language from NU format to Long format
   * @method convertNUToLong
   * @param Language - language in NU format
   * @return language in Long format 
   */
  'convertNUToLong': function convertNUToLong(Language) {
    return session.convertNUToLong(Language);
  },
  /**
   * convert language from Long format to NU format
   * @method convertLongToNU
   * @param Language - language in Long format
   * @return language in NU format 
   */
  'convertLongToNU': function convertLongToNU(Language) {
    return session.convertLongToNU(Language);
  },
  /**
   * convert language from ISO format to NU format
   * @method convertISOToNU
   * @param Language - language in ISO format
   * @return language in NU format 
   */
  'convertISOToNU': function convertISOToNU(Language) {
    return session.convertISOToNU(Language);
  },
  /**
   * convert language from NU format to ISO format
   * @method convertNUToISO
   * @param Language - language in NU format
   * @return language in ISO format 
   */
  'convertNUToISO': function convertNUToISO(Language) {
    return session.convertNUToISO(Language);
  },
  /**
   * Define if applications will be launched or not
   * @method enableSimulatedApps
   * @param simulateApps - set simulated apps
   * @return null
   */
  'enableSimulatedApps': function enableSimulatedApps(simulateApps) {
    return session.enableSimulatedApps(simulateApps);
  },
  /**
   * Set whether to use machine learning techniques or not
   * @method _setMachineLearningEnable
   * @private
   * @param Enable - whether to enable it or not
   * @return null
   */
  '_setMachineLearningEnable': function _setMachineLearningEnable(Enable) {
    return session._setMachineLearningEnable(Enable);
  },
  /**
   * Get whether machine learning techniques are used or not
   * @method _isMachineLearningEnabled
   * @private
   * @return true if machine learning is enabled 
   */
  '_isMachineLearningEnabled': function _isMachineLearningEnabled() {
    return session._isMachineLearningEnabled();
  },
  /**
   * Remove the last misunderstood results
   * @method _clearLastMisunderstood
   * @private
   * @return null
   */
  '_clearLastMisunderstood': function _clearLastMisunderstood() {
    return session._clearLastMisunderstood();
  },
  /**
   * Get whether the last misunderstood result is stored and used to improve confidences
   * @method _isLastMisunderstoodEnabled
   * @private
   * @return null
   */
  '_isLastMisunderstoodEnabled': function _isLastMisunderstoodEnabled() {
    return session._isLastMisunderstoodEnabled();
  },
  /**
   * Set whether the last misunderstood result is stored and used to improve confidences
   * @method _setLastMisunderstoodEnable
   * @private
   * @return null
   */
  '_setLastMisunderstoodEnable': function _setLastMisunderstoodEnable() {
    return session._setLastMisunderstoodEnable();
  },
};
