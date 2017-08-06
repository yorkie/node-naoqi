/**
 * @module textToSpeech
 */
session.textToSpeech = {
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
   * Performs the text-to-speech operations : it takes a std::string as input and outputs a sound in both speakers. String encoding must be UTF8.
   * @method say
   * @param stringToSay - Text to say, encoded in UTF-8.
   * @return null
   */
  'say': function say(stringToSay) {
    return session.say(stringToSay);
  },
  /**
   * Performs the text-to-speech operations in a specific language: it takes a std::string as input and outputs a sound in both speakers. String encoding must be UTF8. Once the text is said, the language is set back to its initial value.
   * @method say
   * @param stringToSay - Text to say, encoded in UTF-8.
   * @param language - Language used to say the text.
   * @return null
   */
  'say': function say(stringToSay, language) {
    return session.say(stringToSay, language);
  },
  /**
   * Performs the text-to-speech operations: it takes a std::string as input and outputs the corresponding audio signal in the specified file.
   * @method sayToFile
   * @param pStringToSay - Text to say, encoded in UTF-8.
   * @param pFileName - RAW file where to store the generated signal. The signal is encoded with a sample rate of 22050Hz, format S16_LE, 2 channels.
   * @return Id of the task. Can be used to interrupt it.
   */
  'sayToFile': function sayToFile(pStringToSay, pFileName) {
    return session.sayToFile(pStringToSay, pFileName);
  },
  /**
   * This method stops the current and all the pending tasks immediately.
   * @method stopAll
   * @return null
   */
  'stopAll': function stopAll() {
    return session.stopAll();
  },
  /**
   * Changes the language used by the Text-to-Speech engine. It automatically changes the voice used since each of them is related to a unique language. If you want that change to take effect automatically after reboot of your robot, refer to the robot web page (setting page).
   * @method setLanguage
   * @param pLanguage - Language name. Must belong to the languages available in TTS (can be obtained with the getAvailableLanguages method).  It should be an identifier std::string.
   * @return null
   */
  'setLanguage': function setLanguage(pLanguage) {
    return session.setLanguage(pLanguage);
  },
  /**
   * Returns the language currently used by the text-to-speech engine.
   * @method getLanguage
   * @return Language of the current voice.
   */
  'getLanguage': function getLanguage() {
    return session.getLanguage();
  },
  /**
   * Outputs the languages installed on the system.
   * @method getAvailableLanguages
   * @return Array of std::string that contains the languages installed on the system.
   */
  'getAvailableLanguages': function getAvailableLanguages() {
    return session.getAvailableLanguages();
  },
  /**
   * Outputs all the languages supported (may be installed or not).
   * @method getSupportedLanguages
   * @return Array of std::string that contains all the supported languages (may be installed or not).
   */
  'getSupportedLanguages': function getSupportedLanguages() {
    return session.getSupportedLanguages();
  },
  /**
   * Changes the parameters of the voice. For now, it is only possible to reset the voice speed.
   * @method resetSpeed
   * @param pEffectName - Name of the parameter.
   * @return (int) >= 0 if successful, negative error code if failed Vincent : pas sûr que cette fonction balance un truc en sortie
   */
  'resetSpeed': function resetSpeed(pEffectName) {
    return session.resetSpeed(pEffectName);
  },
  /**
   * Changes the parameters of the voice. The available parameters are: 
 	 pitchShift: applies a pitch shifting to the voice. The value indicates the ratio between the new fundamental frequencies and the old ones (examples: 2.0: an octave above, 1.5: a quint above). Correct range is (1.0 -- 4), or 0 to disable effect.
 	 doubleVoice: adds a second voice to the first one. The value indicates the ratio between the second voice fundamental frequency and the first one. Correct range is (1.0 -- 4), or 0 to disable effect 
 	 doubleVoiceLevel: the corresponding value is the level of the double voice (1.0: equal to the main voice one). Correct range is (0 -- 4). 
 	 doubleVoiceTimeShift: the corresponding value is the delay between the double voice and the main one. Correct range is (0 -- 0.5) 
 If the effect value is not available, the effect parameter remains unchanged.
   * @method setParameter
   * @param pEffectName - Name of the parameter.
   * @param pEffectValue - Value of the parameter.
   * @return (int) >= 0 if successful, negative error code if failed Vincent : pas sûr que cette fonction balance un truc en sortie
   */
  'setParameter': function setParameter(pEffectName, pEffectValue) {
    return session.setParameter(pEffectName, pEffectValue);
  },
  /**
   * Returns the value of one of the voice parameters. The available parameters are: "pitchShift", "doubleVoice","doubleVoiceLevel" and "doubleVoiceTimeShift"
   * @method getParameter
   * @param pParameterName - Name of the parameter.
   * @return Value of the specified parameter
   */
  'getParameter': function getParameter(pParameterName) {
    return session.getParameter(pParameterName);
  },
  /**
   * Changes the voice used by the text-to-speech engine. The voice identifier must belong to the installed voices, that can be listed using the 'getAvailableVoices' method. If the voice is not available, it remains unchanged. No exception is thrown in this case. For the time being, only two voices are available by default : Kenny22Enhanced (English voice) and Julie22Enhanced (French voice)
   * @method setVoice
   * @param pVoiceID - The voice (as a std::string).
   * @return null
   */
  'setVoice': function setVoice(pVoiceID) {
    return session.setVoice(pVoiceID);
  },
  /**
   * Returns the voice currently used by the text-to-speech engine.
   * @method getVoice
   * @return Name of the current voice
   */
  'getVoice': function getVoice() {
    return session.getVoice();
  },
  /**
   * Outputs the available voices. The returned list contains the voice IDs.
   * @method getAvailableVoices
   * @return  Array of std::string containing the voices installed on the system.
   */
  'getAvailableVoices': function getAvailableVoices() {
    return session.getAvailableVoices();
  },
  /**
   * Sets the volume of text-to-speech output.
   * @method setVolume
   * @param volume - Volume (between 0.0 and 1.0).
   * @return null
   */
  'setVolume': function setVolume(volume) {
    return session.setVolume(volume);
  },
  /**
   * Fetches the current volume the text to speech.
   * @method getVolume
   * @return Volume (integer between 0 and 100).
   */
  'getVolume': function getVolume() {
    return session.getVolume();
  },
  /**
   * Get the locale associate to the current language.
   * @method locale
   * @return A string with xx_XX format (region_country)
   */
  'locale': function locale() {
    return session.locale();
  },
  /**
   * Loads a set of voice parameters defined in a xml file contained in the preferences folder.The name of the xml file must begin with ALTextToSpeech_Voice_ 
   * @method loadVoicePreference
   * @param pPreferenceName - Name of the voice preference.
   * @return null
   */
  'loadVoicePreference': function loadVoicePreference(pPreferenceName) {
    return session.loadVoicePreference(pPreferenceName);
  },
  /**
   * Sets a language as the default language for the synthesis engine
   * @method _setDefaultLanguage
   * @private
   * @param Language - The language among those available on your robot as a String
   * @return null
   */
  '_setDefaultLanguage': function _setDefaultLanguage(Language) {
    return session._setDefaultLanguage(Language);
  },
  /**
   * Sets a voice as the default voice for the corresponding language
   * @method setLanguageDefaultVoice
   * @param Language - The language among those available on your robot as a String
   * @param Voice - The voice among those available on your robot as a String
   * @return null
   */
  'setLanguageDefaultVoice': function setLanguageDefaultVoice(Language, Voice) {
    return session.setLanguageDefaultVoice(Language, Voice);
  },
  /**
   * Sets the default voice for the current language, if there's one.
   * @method _setDefaultVoice
   * @private
   * @return null
   */
  '_setDefaultVoice': function _setDefaultVoice() {
    return session._setDefaultVoice();
  },
  /**
   * reload the engine if new application installed is a language
   * @method _naoStoreApplicationInstalled
   * @private
   * @return null
   */
  '_naoStoreApplicationInstalled': function _naoStoreApplicationInstalled() {
    return session._naoStoreApplicationInstalled();
  },
  /**
   * reload the engine if application uninstalled is a language
   * @method _naoStoreApplicationUninstalled
   * @private
   * @return null
   */
  '_naoStoreApplicationUninstalled': function _naoStoreApplicationUninstalled() {
    return session._naoStoreApplicationUninstalled();
  },
  /**
   * Pause the current synthesis
   * @method _pause
   * @private
   * @return null
   */
  '_pause': function _pause() {
    return session._pause();
  },
  /**
   * Resume the current synthesis
   * @method _resume
   * @private
   * @return null
   */
  '_resume': function _resume() {
    return session._resume();
  },
  /**
   * Enables the filtering of audio output
   * @method _enableFilter
   * @private
   * @param enable - activate or not
   * @return null
   */
  '_enableFilter': function _enableFilter(enable) {
    return session._enableFilter(enable);
  },
  /**
   * Load an effect on the voice.
   * @method _loadEffect
   * @private
   * @param effectPath - path to the file of the effect to load.
   * @return null
   */
  '_loadEffect': function _loadEffect(effectPath) {
    return session._loadEffect(effectPath);
  },
  /**
   * Enables the filtering of audio output
   * @method _applyEffect
   * @private
   * @param effectName - name of the effect
   * @param enable - activate or not
   * @return null
   */
  '_applyEffect': function _applyEffect(effectName, enable) {
    return session._applyEffect(effectName, enable);
  },
  /**
   * Logs info about the current state of the TTS.
   * @method _diagnosis
   * @private
   * @return null
   */
  '_diagnosis': function _diagnosis() {
    return session._diagnosis();
  },
  /**
   * Logs voice settings.
   * @method _showVoiceSettings
   * @private
   * @return null
   */
  '_showVoiceSettings': function _showVoiceSettings() {
    return session._showVoiceSettings();
  },
  /**
   * Shows the Dictionary.
   * @method showDictionary
   * @return null
   */
  'showDictionary': function showDictionary() {
    return session.showDictionary();
  },
  /**
   * Reset ALTextToSpeech to his default state.
   * @method reset
   * @return null
   */
  'reset': function reset() {
    return session.reset();
  },
  /**
   * Unload the dictionary.
   * @method _unloadDictionary
   * @private
   * @return null
   */
  '_unloadDictionary': function _unloadDictionary() {
    return session._unloadDictionary();
  },
  /**
   * Unload the dictionary.
   * @method deleteFromDictionary
   * @param word - the word you wish to delete, does not have to be in japanese.
   * @return bool: true if succeeded, false if failed
   */
  'deleteFromDictionary': function deleteFromDictionary(word) {
    return session.deleteFromDictionary(word);
  },
  /**
   * Unload the dictionary.
   * @method deleteFromDictionary
   * @param word - the word you wish to delete, does not have to be in japanese.
   * @return bool: true if succeeded, false if failed
   */
  'deleteFromDictionary': function deleteFromDictionary(word) {
    return session.deleteFromDictionary(word);
  },
  /**
   * Add a word to the library
   * @method addToDictionary
   * @param type - the type of word you wish to insert, does not have to be in japanese.
   * @param word - the word you wish to insert, does not have to be in japanese.
   * @param priority - the priority of the word.
   * @param phonetic - the phonetic pronouciation in KATAKANA.
   * @param accent - syllabus and accentuation
   * @return bool: true if succeeded, false if failed
   */
  'addToDictionary': function addToDictionary(type, word, priority, phonetic, accent) {
    return session.addToDictionary(type, word, priority, phonetic, accent);
  },
  /**
   * Add a word to the library
   * @method addToDictionary
   * @param text - the text you wish to insert.
   * @param toReplace - text to replace.
   * @return bool: true if succeeded, false if failed
   */
  'addToDictionary': function addToDictionary(text, toReplace) {
    return session.addToDictionary(text, toReplace);
  },
  /**
   * TODO
   * @method _loadDictionary
   * @private
   * @return null
   */
  '_loadDictionary': function _loadDictionary() {
    return session._loadDictionary();
  },
};
