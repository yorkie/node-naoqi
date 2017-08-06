/**
 * @module speechRecognition
 */
session.speechRecognition = {
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
   * Enable or disable the leds animations showing the state of the recognition engine during the recognition process.
   * @method setVisualExpression
   * @param setOrNot - Enable (true) or disable it (false).
   * @return null
   */
  'setVisualExpression': function setVisualExpression(setOrNot) {
    return session.setVisualExpression(setOrNot);
  },
  /**
   * Sets the LED animation mode
   * @method setVisualExpressionMode
   * @param mode - animation mode: 0: deactivated, 1: eyes, 2: ears, 3: full
   * @return null
   */
  'setVisualExpressionMode': function setVisualExpressionMode(mode) {
    return session.setVisualExpressionMode(mode);
  },
  /**
   * Enable or disable the playing of sounds indicating the state of the recognition engine. If this option is enabled, a sound is played at the beginning of the recognition process (after a call to the subscribe method), and a sound is played when the user call the unsubscribe method
   * @method setAudioExpression
   * @param setOrNot - Enable (true) or disable it (false).
   * @return null
   */
  'setAudioExpression': function setAudioExpression(setOrNot) {
    return session.setAudioExpression(setOrNot);
  },
  /**
   * To check if audio expression is enabled or disabled.
   * @method getAudioExpression
   * @return null
   */
  'getAudioExpression': function getAudioExpression() {
    return session.getAudioExpression();
  },
  /**
   * Set the language used by the speech recognition engine. The list of the available languages can be collected through the getAvailableLanguages method. If you want to set a language as the default language (loading automatically at module launch), please refer to the web page of the robot.
   * @method setLanguage
   * @param languageName - Name of the language in English.
   * @return null
   */
  'setLanguage': function setLanguage(languageName) {
    return session.setLanguage(languageName);
  },
  /**
   * Set a language as the default language for the Speech Recognition engine
   * @method _setDefaultLanguage
   * @private
   * @param pLanguage - The language among those available on your robot as a String
   * @return null
   */
  '_setDefaultLanguage': function _setDefaultLanguage(pLanguage) {
    return session._setDefaultLanguage(pLanguage);
  },
  /**
   * Return the current language used by the speech recognition system.
   * @method getLanguage
   * @return Current language used by the speech recognition engine.
   */
  'getLanguage': function getLanguage() {
    return session.getLanguage();
  },
  /**
   * Return the list of the languages installed on the system.
   * @method getAvailableLanguages
   * @return Array of strings that contains the list of the installed languages.
   */
  'getAvailableLanguages': function getAvailableLanguages() {
    return session.getAvailableLanguages();
  },
  /**
   * Set a parameter of the speech recognition engine. Note that when the ASR engine language is set to Chinese, no parameter can be set.
The parameters that can be set and the corresponding values are:
"Sensitivity" - Values : range is [0.0; 1.0].
"Timeout" - Values :  default values 3000 ms. Timeout for the remote recognition
"MinimumTrailingSilence" : Values : 0 (no) or 1 (yes) - Applies a High-Pass filter on the input signal - default value is 0.

   * @method setParameter
   * @param paramName - Name of the parameter.
   * @param paramValue - Value of the parameter.
   * @return null
   */
  'setParameter': function setParameter(paramName, paramValue) {
    return session.setParameter(paramName, paramValue);
  },
  /**
   * Set a parameter of the speech recognition engine. Note that when the ASR engine language is set to Chinese, no parameter can be set.
The parameters that can be set and the corresponding values are:
"Sensitivity" - Values : range is [0.0; 1.0].
"Timeout" - Values :  default values 3000 ms. Timeout for the remote recognition
"MinimumTrailingSilence" : Values : 0 (no) or 1 (yes) - Applies a High-Pass filter on the input signal - default value is 0.

   * @method setParameter
   * @param paramName - Name of the parameter.
   * @param paramValue - Value of the parameter.
   * @return null
   */
  'setParameter': function setParameter(paramName, paramValue) {
    return session.setParameter(paramName, paramValue);
  },
  /**
   * Get a parameter of the speech recognition engine. Note that when the ASR engine language is set to Chinese, no parameter can be retrieved
   * @method getParameter
   * @param paramName - Name of the parameter.
   * @return Value of the parameter.
   */
  'getParameter': function getParameter(paramName) {
    return session.getParameter(paramName);
  },
  /**
   * Set the list of words (vocabulary) that should be recognized by the speech recognition engine.
   * @method setWordListAsVocabulary
   * @param vocabulary - List of words that should be recognized
   * @return null
   */
  'setWordListAsVocabulary': function setWordListAsVocabulary(vocabulary) {
    return session.setWordListAsVocabulary(vocabulary);
  },
  /**
   * Set the list of words (vocabulary) that should be recognized by the speech recognition engine.
   * @method setVocabulary
   * @param vocabulary - List of words that should be recognized
   * @param enabledWordSpotting - If disabled, the engine expects to hear one of the specified words, nothing more, nothing less. If enabled, the specified words can be pronounced in the middle of a whole speech stream, the engine will try to spot them.
   * @return null
   */
  'setVocabulary': function setVocabulary(vocabulary, enabledWordSpotting) {
    return session.setVocabulary(vocabulary, enabledWordSpotting);
  },
  /**
   * Stop and restart the speech recognition engine according to the input parameter This can be used to add contexts, activate or deactivate rules of a contex, add a words to a slot.
   * @method pause
   * @param pause - Boolean to enable or disable pause of the speech recognition engine.
   * @return null
   */
  'pause': function pause(pause) {
    return session.pause(pause);
  },
  /**
   * Convert a BNF file to a LCF file.
   * @method compile
   * @param pathToInputBNFFile - Path to a input BNF file. This BNF file is a set of rules that should be recognized by the speech recognition engine.
   * @param pathToOutputLCFFile - Binary file which contains the same content as the BNF file. Use this file for the method addContext
   * @param language - Name of the language of the BNF file.
   * @return null
   */
  'compile': function compile(pathToInputBNFFile, pathToOutputLCFFile, language) {
    return session.compile(pathToInputBNFFile, pathToOutputLCFFile, language);
  },
  /**
   * Creates a context from an LCF of FCF file.
   * @method createContext
   * @param pathToGrammarFile - Binary file containing the grammar or SLM
   * @param contextName - Name of the created context
   * @return null
   */
  'createContext': function createContext(pathToGrammarFile, contextName) {
    return session.createContext(pathToGrammarFile, contextName);
  },
  /**
   * Delete an existing context.
   * @method deleteContext
   * @param contextName - Name of the context to delete
   * @return null
   */
  'deleteContext': function deleteContext(contextName) {
    return session.deleteContext(contextName);
  },
  /**
   * Delete all existing contexts.
   * @method deleteAllContexts
   * @return null
   */
  'deleteAllContexts': function deleteAllContexts() {
    return session.deleteAllContexts();
  },
  /**
   * Add a context from a LCF file.
   * @method addContext
   * @param pathToLCFFile - Path to a LCF file. This LCF file contains the set of rules that should be recognized by the speech recognition engine.
   * @param contextName - Name of the context of your choice.
   * @return null
   */
  'addContext': function addContext(pathToLCFFile, contextName) {
    return session.addContext(pathToLCFFile, contextName);
  },
  /**
   * Add an existing context.
   * @method addContext
   * @param contextName - Name of the context of your choice.
   * @return null
   */
  'addContext': function addContext(contextName) {
    return session.addContext(contextName);
  },
  /**
   * Remove one context from the speech recognition engine.
   * @method removeContext
   * @param contextName - Name of the context to remove from the speech recognition engine.
   * @return null
   */
  'removeContext': function removeContext(contextName) {
    return session.removeContext(contextName);
  },
  /**
   * Remove all contexts from the speech recognition engine.
   * @method removeAllContext
   * @return null
   */
  'removeAllContext': function removeAllContext() {
    return session.removeAllContext();
  },
  /**
   * Disable current contexts of the speech recognition engine and save them in a  stack.
   * @method pushContexts
   * @return null
   */
  'pushContexts': function pushContexts() {
    return session.pushContexts();
  },
  /**
   * Disable current contexts and restore saved contexts of the speech recognition engine.
   * @method popContexts
   * @return null
   */
  'popContexts': function popContexts() {
    return session.popContexts();
  },
  /**
   * Save current context set of the speech recognition engine (deprecated)
   * @method saveContextSet
   * @param saveName - Name under which to save
   * @return True if a context set with the same name existed and was overwritten
   */
  'saveContextSet': function saveContextSet(saveName) {
    return session.saveContextSet(saveName);
  },
  /**
   * Load a saved context set of the speech recognition engine (deprecated)
   * @method loadContextSet
   * @param saveName - Name under which the context set is saved
   * @return null
   */
  'loadContextSet': function loadContextSet(saveName) {
    return session.loadContextSet(saveName);
  },
  /**
   * Erase a saved context set of the speech recognition engine (deprecated)
   * @method eraseContextSet
   * @param saveName - Name under which the context set is saved
   * @return null
   */
  'eraseContextSet': function eraseContextSet(saveName) {
    return session.eraseContextSet(saveName);
  },
  /**
   * Create a context set
   * @method createContextSet
   * @param contextList - List of context names to add to the context set
   * @param name - Name of the context set
   * @return True if a context set with the same name existed and was overwritten
   */
  'createContextSet': function createContextSet(contextList, name) {
    return session.createContextSet(contextList, name);
  },
  /**
   * Erase a context set
   * @method deleteContextSet
   * @param contextSetName - Name of the context set
   * @return null
   */
  'deleteContextSet': function deleteContextSet(contextSetName) {
    return session.deleteContextSet(contextSetName);
  },
  /**
   * Erase all saved contexts set of the speech recognition engine
   * @method deleteAllContextSets
   * @return null
   */
  'deleteAllContextSets': function deleteAllContextSets() {
    return session.deleteAllContextSets();
  },
  /**
   * Add a context to an existing context set
   * @method addContextToSet
   * @param contextName - Name of the context to add to the context set
   * @param contextSetName - Name of the context set
   * @return null
   */
  'addContextToSet': function addContextToSet(contextName, contextSetName) {
    return session.addContextToSet(contextName, contextSetName);
  },
  /**
   * Remove a context from an existing context set
   * @method removeContextFromSet
   * @param contextName - Name of the context to remove from the context set
   * @param contextSetName - Name of the context set
   * @return null
   */
  'removeContextFromSet': function removeContextFromSet(contextName, contextSetName) {
    return session.removeContextFromSet(contextName, contextSetName);
  },
  /**
   * Add a context set to the recognizer
   * @method addContextSet
   * @param contextSetName - Name of the context set
   * @return null
   */
  'addContextSet': function addContextSet(contextSetName) {
    return session.addContextSet(contextSetName);
  },
  /**
   * Remove a saved context set from the speech recognition engine (without deleting it)
   * @method removeContextSet
   * @param contextSetName - Name of the context set
   * @return null
   */
  'removeContextSet': function removeContextSet(contextSetName) {
    return session.removeContextSet(contextSetName);
  },
  /**
   * Get the names of all existing contexts
   * @method getContexts
   * @return List of context names
   */
  'getContexts': function getContexts() {
    return session.getContexts();
  },
  /**
   * Get the names of the contexts belonging to a given context set
   * @method getContexts
   * @param contextSetName - Name of the context set
   * @return List of context names
   */
  'getContexts': function getContexts(contextSetName) {
    return session.getContexts(contextSetName);
  },
  /**
   * Get the names of the contexts belonging to a given context set
   * @method getContextSets
   * @return List of context set names
   */
  'getContextSets': function getContextSets() {
    return session.getContextSets();
  },
  /**
   * Activate a rule contained in the specified context.
   * @method activateRule
   * @param contextName - Name of the context to modify.
   * @param ruleName - Name of the rule to activate.
   * @return null
   */
  'activateRule': function activateRule(contextName, ruleName) {
    return session.activateRule(contextName, ruleName);
  },
  /**
   * Deactivate a rule contained in the specified context.
   * @method deactivateRule
   * @param contextName - Name of the context to modify.
   * @param ruleName - Name of the rule to deactivate.
   * @return null
   */
  'deactivateRule': function deactivateRule(contextName, ruleName) {
    return session.deactivateRule(contextName, ruleName);
  },
  /**
   * Activate all rules contained in the specified context.
   * @method activateAllRules
   * @param contextName - Name of the context to modify.
   * @return null
   */
  'activateAllRules': function activateAllRules(contextName) {
    return session.activateAllRules(contextName);
  },
  /**
   * Deactivate all rules contained in the specified context.
   * @method deactivateAllRules
   * @param contextName - Name of the context to modify.
   * @return null
   */
  'deactivateAllRules': function deactivateAllRules(contextName) {
    return session.deactivateAllRules(contextName);
  },
  /**
   * Set the given parameter for the specified context.
   * @method setContextParam
   * @param contextName - Name of the context
   * @param paramName - Name of the parameter to change
   * @param value - New parameter value
   * @return null
   */
  'setContextParam': function setContextParam(contextName, paramName, value) {
    return session.setContextParam(contextName, paramName, value);
  },
  /**
   * Get the given parameter for the specified context.
   * @method getContextParam
   * @param contextName - Name of the context
   * @param paramName - Name of the parameter to get
   * @return Value of the fetched parameter
   */
  'getContextParam': function getContextParam(contextName, paramName) {
    return session.getContextParam(contextName, paramName);
  },
  /**
   * Add a list of words in a slot. A slot is a part of a context which can be modified. You can add a list of words that should be recognized by the speech recognition engine
   * @method addWordListToSlot
   * @param contextName - Name of the context to modify.
   * @param slotName - Name of the slot to modify.
   * @param wordList - List of words to insert in the slot.
   * @return null
   */
  'addWordListToSlot': function addWordListToSlot(contextName, slotName, wordList) {
    return session.addWordListToSlot(contextName, slotName, wordList);
  },
  /**
   * Remove all words from a slot.
   * @method removeWordListFromSlot
   * @param contextName - Name of the context to modify.
   * @param slotName - Name of the slot to modify.
   * @return null
   */
  'removeWordListFromSlot': function removeWordListFromSlot(contextName, slotName) {
    return session.removeWordListFromSlot(contextName, slotName);
  },
  /**
   * Get all rules contained for a specific context.
   * @method getRules
   * @param contextName - Name of the context to analyze.
   * @param typeName - Type of the required rules.
   * @return null
   */
  'getRules': function getRules(contextName, typeName) {
    return session.getRules(contextName, typeName);
  },
  /**
   * Enable free speech to text.
   * @method _isFreeSpeechToTextAvailable
   * @private
   * @return Boolean indicating whether free speech to text is available for the current language
   */
  '_isFreeSpeechToTextAvailable': function _isFreeSpeechToTextAvailable() {
    return session._isFreeSpeechToTextAvailable();
  },
  /**
   * Enable free speech to text.
   * @method _enableFreeSpeechToText
   * @private
   * @return null
   */
  '_enableFreeSpeechToText': function _enableFreeSpeechToText() {
    return session._enableFreeSpeechToText();
  },
  /**
   * Disable free speech to text.
   * @method _disableFreeSpeechToText
   * @private
   * @return null
   */
  '_disableFreeSpeechToText': function _disableFreeSpeechToText() {
    return session._disableFreeSpeechToText();
  },
  /**
   * Load an audio file and set it as the robot audio input, file must be raw format recorded with start/stopAudioInputRecording
   * @method _setFileAsInput
   * @private
   * @param fileName - Location of the file to play.
   * @param autoSwitchToMicrophones - Boolean, will automatically switch to microphones as audio input at the end of the file if set as True.
   * @return Is true if the audio input is set to the file.
   */
  '_setFileAsInput': function _setFileAsInput(fileName, autoSwitchToMicrophones) {
    return session._setFileAsInput(fileName, autoSwitchToMicrophones);
  },
  /**
   * Return true if the audio input is set to a file.
   * @method _isFileAsInput
   * @private
   * @return Is true if the audio input is set to a file.
   */
  '_isFileAsInput': function _isFileAsInput() {
    return session._isFileAsInput();
  },
  /**
   * Return true if the file set as audio input is entirely read.
   * @method _isFileRead
   * @private
   * @return Is true if the file set as audio input is entirely read.
   */
  '_isFileRead': function _isFileRead() {
    return session._isFileRead();
  },
  /**
   * Set microphones as the robot audio input.
   * @method _setMicrophonesAsInput
   * @private
   * @return Is true if microphones are correctly set as the audio input.
   */
  '_setMicrophonesAsInput': function _setMicrophonesAsInput() {
    return session._setMicrophonesAsInput();
  },
  /**
   * Return true if the audio input is set to the microphones.
   * @method _isMicrophonesAsInput
   * @private
   * @return Is true if microphones are set as the audio input.
   */
  '_isMicrophonesAsInput': function _isMicrophonesAsInput() {
    return session._isMicrophonesAsInput();
  },
  /**
   * Record all samples sent to the speech recognition in a file at wav format (16 bits le, 16Khz, 4 channels).
   * @method _startAudioInputRecording
   * @private
   * @param fileName - Location of the file to record.
   * @return Is true if file is correctly set to record audio input.
   */
  '_startAudioInputRecording': function _startAudioInputRecording(fileName) {
    return session._startAudioInputRecording(fileName);
  },
  /**
   * Stop the recording started with _startAudioInputRecording.
   * @method _stopAudioInputRecording
   * @private
   * @return Is true if audio input recording is correctly stopped.
   */
  '_stopAudioInputRecording': function _stopAudioInputRecording() {
    return session._stopAudioInputRecording();
  },
  /**
   * Get a remote consumption speed change recommendation.
   * @method _remoteConsumptionOk
   * @private
   * @return Integer indicating whether to increase, decrease or keep the remote consumption speed
   */
  '_remoteConsumptionOk': function _remoteConsumptionOk() {
    return session._remoteConsumptionOk();
  },
  /**
   * Load the vocabulary to recognized contained in a .lxd file. This method is not available with the ASR engine language set to Chinese. For more informations see the red documentation
   * @method loadVocabulary
   * @param vocabularyFile - Name of the lxd file containing the vocabulary
   * @return null
   */
  'loadVocabulary': function loadVocabulary(vocabularyFile) {
    return session.loadVocabulary(vocabularyFile);
  },
  /**
   * Reload the engine if new application installed is a language
   * @method _naoStoreApplicationInstalled
   * @private
   * @return null
   */
  '_naoStoreApplicationInstalled': function _naoStoreApplicationInstalled() {
    return session._naoStoreApplicationInstalled();
  },
  /**
   * Reload the engine if application uninstalled is a language
   * @method _naoStoreApplicationUninstalled
   * @private
   * @return null
   */
  '_naoStoreApplicationUninstalled': function _naoStoreApplicationUninstalled() {
    return session._naoStoreApplicationUninstalled();
  },
  /**
   * 
   * @method _systemSoundSetChanged
   * @private
   * @return null
   */
  '_systemSoundSetChanged': function _systemSoundSetChanged() {
    return session._systemSoundSetChanged();
  },
  /**
   * 
   * @method _silentNextBipOn
   * @private
   * @return null
   */
  '_silentNextBipOn': function _silentNextBipOn() {
    return session._silentNextBipOn();
  },
  /**
   * 
   * @method _silentNextBipOff
   * @private
   * @return null
   */
  '_silentNextBipOff': function _silentNextBipOff() {
    return session._silentNextBipOff();
  },
  /**
   * Enable audio dumps.
   * @method _enableAudioLogging
   * @private
   * @param path - Path to write the dump files to. Pass an empty string to deactivate audio logging
   * @return null
   */
  '_enableAudioLogging': function _enableAudioLogging(path) {
    return session._enableAudioLogging(path);
  },
  /**
   * Enable beamformer.
   * @method _enableBeamformer
   * @private
   * @return null
   */
  '_enableBeamformer': function _enableBeamformer() {
    return session._enableBeamformer();
  },
  /**
   * Disable beamformer.
   * @method _disableBeamformer
   * @private
   * @return null
   */
  '_disableBeamformer': function _disableBeamformer() {
    return session._disableBeamformer();
  },
  /**
   * Get beamformer status.
   * @method _beamformerEnabled
   * @private
   * @return Whether the beamformer is enabled or not
   */
  '_beamformerEnabled': function _beamformerEnabled() {
    return session._beamformerEnabled();
  },
  /**
   * get vocon version
   * @method _getVersion
   * @private
   * @return Version
   */
  '_getVersion': function _getVersion() {
    return session._getVersion();
  },
  /**
   * Start ears rotation
   * @method _startEarsRotation
   * @private
   * @return null
   */
  '_startEarsRotation': function _startEarsRotation() {
    return session._startEarsRotation();
  },
  /**
   * Start eyes rotation
   * @method _startEyesRotation
   * @private
   * @return null
   */
  '_startEyesRotation': function _startEyesRotation() {
    return session._startEyesRotation();
  },
  /**
   * Stop ears rotation
   * @method _stopEarsRotation
   * @private
   * @return null
   */
  '_stopEarsRotation': function _stopEarsRotation() {
    return session._stopEarsRotation();
  },
  /**
   * Stop eyes rotation
   * @method _stopEyesRotation
   * @private
   * @return null
   */
  '_stopEyesRotation': function _stopEyesRotation() {
    return session._stopEyesRotation();
  },
  /**
   * Play Bip Start
   * @method _playBipStart
   * @private
   * @return null
   */
  '_playBipStart': function _playBipStart() {
    return session._playBipStart();
  },
  /**
   * Play Bip Stop
   * @method _playBipStop
   * @private
   * @return null
   */
  '_playBipStop': function _playBipStop() {
    return session._playBipStop();
  },
};
