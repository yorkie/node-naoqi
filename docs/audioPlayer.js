/**
 * @module audioPlayer
 */
session.audioPlayer = {
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
   * Plays a wav or mp3 file
   * @method playFile
   * @param fileName - Path of the sound file
   * @return null
   */
  'playFile': function playFile(fileName) {
    return session.playFile(fileName);
  },
  /**
   * Plays a wav or mp3 file, with specific volume and audio balance
   * @method playFile
   * @param fileName - Path of the sound file
   * @param volume - volume of the sound file (must be between 0.0 and 1.0)
   * @param pan - audio balance of the sound file (-1.0 : left / 1.0 : right / 0.0 : centered)
   * @return null
   */
  'playFile': function playFile(fileName, volume, pan) {
    return session.playFile(fileName, volume, pan);
  },
  /**
   * Plays a file contained in one of the sound sets loaded
   * @method _playSoundSetFile
   * @private
   * @param fileName - Name of the file without extension
   * @return null
   */
  '_playSoundSetFile': function _playSoundSetFile(fileName) {
    return session._playSoundSetFile(fileName);
  },
  /**
   * Plays a file contained in one of the sound sets loaded
   * @method playSoundSetFile
   * @param fileName - Name of the file without extension
   * @return null
   */
  'playSoundSetFile': function playSoundSetFile(fileName) {
    return session.playSoundSetFile(fileName);
  },
  /**
   * Plays a file contained in one of the sound sets loaded
   * @method _playSystemSoundSetFile
   * @private
   * @param fileName - Name of the file without extension
   * @return null
   */
  '_playSystemSoundSetFile': function _playSystemSoundSetFile(fileName) {
    return session._playSystemSoundSetFile(fileName);
  },
  /**
   * Plays a file contained in a given sound set
   * @method _playSoundSetFile
   * @private
   * @param soundSetName - Name of the soundset
   * @param fileName - Name of the file without extension
   * @return null
   */
  '_playSoundSetFile': function _playSoundSetFile(soundSetName, fileName) {
    return session._playSoundSetFile(soundSetName, fileName);
  },
  /**
   * Plays a file contained in a given sound set
   * @method playSoundSetFile
   * @param soundSetName - Name of the soundset
   * @param fileName - Name of the file without extension
   * @return null
   */
  'playSoundSetFile': function playSoundSetFile(soundSetName, fileName) {
    return session.playSoundSetFile(soundSetName, fileName);
  },
  /**
   * Plays a file contained in a given sound set
   * @method _playSoundSetFile
   * @private
   * @param soundSetName - Name of the soundset
   * @param fileName - Name of the file without extension
   * @param position - Position in second where the playing has to begin
   * @param volume - volume of the sound file (must be between 0.0 and 1.0)
   * @param pan - audio balance of the sound file (-1.0 : left / 1.0 : right)
   * @param loop - specify if the file must be played in loop
   * @return null
   */
  '_playSoundSetFile': function _playSoundSetFile(soundSetName, fileName, position, volume, pan, loop) {
    return session._playSoundSetFile(soundSetName, fileName, position, volume, pan, loop);
  },
  /**
   * Plays a file contained in a given sound set
   * @method playSoundSetFile
   * @param soundSetName - Name of the soundset
   * @param fileName - Name of the file without extension
   * @param position - Position in second where the playing has to begin
   * @param volume - volume of the sound file (must be between 0.0 and 1.0)
   * @param pan - audio balance of the sound file (-1.0 : left / 1.0 : right)
   * @param loop - specify if the file must be played in loop
   * @return null
   */
  'playSoundSetFile': function playSoundSetFile(soundSetName, fileName, position, volume, pan, loop) {
    return session.playSoundSetFile(soundSetName, fileName, position, volume, pan, loop);
  },
  /**
   * Plays a file contained in a given sound set
   * @method _playSoundSetFile
   * @private
   * @param fileName - Name of the file without extension
   * @param position - Position in second where the playing has to begin
   * @param volume - volume of the sound file (must be between 0.0 and 1.0)
   * @param pan - audio balance of the sound file (-1.0 : left / 1.0 : right)
   * @param loop - specify if the file must be played in loop
   * @return null
   */
  '_playSoundSetFile': function _playSoundSetFile(fileName, position, volume, pan, loop) {
    return session._playSoundSetFile(fileName, position, volume, pan, loop);
  },
  /**
   * Plays a file contained in a given sound set
   * @method playSoundSetFile
   * @param fileName - Name of the file without extension
   * @param position - Position in second where the playing has to begin
   * @param volume - volume of the sound file (must be between 0.0 and 1.0)
   * @param pan - audio balance of the sound file (-1.0 : left / 1.0 : right)
   * @param loop - specify if the file must be played in loop
   * @return null
   */
  'playSoundSetFile': function playSoundSetFile(fileName, position, volume, pan, loop) {
    return session.playSoundSetFile(fileName, position, volume, pan, loop);
  },
  /**
   * Load a sound set
   * @method _loadSoundSet
   * @private
   * @param setName - name of the set
   * @return null
   */
  '_loadSoundSet': function _loadSoundSet(setName) {
    return session._loadSoundSet(setName);
  },
  /**
   * Load a sound set
   * @method loadSoundSet
   * @param setName - name of the set
   * @return null
   */
  'loadSoundSet': function loadSoundSet(setName) {
    return session.loadSoundSet(setName);
  },
  /**
   * Unload a sound set
   * @method _unloadSoundSet
   * @private
   * @param setName - name of the set
   * @return null
   */
  '_unloadSoundSet': function _unloadSoundSet(setName) {
    return session._unloadSoundSet(setName);
  },
  /**
   * Unload a sound set
   * @method unloadSoundSet
   * @param setName - name of the set
   * @return null
   */
  'unloadSoundSet': function unloadSoundSet(setName) {
    return session.unloadSoundSet(setName);
  },
  /**
   * Load a system sound set
   * @method _loadSystemSoundSet
   * @private
   * @param setName - name of the set
   * @return null
   */
  '_loadSystemSoundSet': function _loadSystemSoundSet(setName) {
    return session._loadSystemSoundSet(setName);
  },
  /**
   * Sets the default soundset used for system sounds
   * @method _setDefaultSystemSoundSet
   * @private
   * @param setName - name of the set
   * @return null
   */
  '_setDefaultSystemSoundSet': function _setDefaultSystemSoundSet(setName) {
    return session._setDefaultSystemSoundSet(setName);
  },
  /**
   * Return the list of files contained in a sound set
   * @method _getSoundSetFileNames
   * @private
   * @param setName - name of the set
   * @return null
   */
  '_getSoundSetFileNames': function _getSoundSetFileNames(setName) {
    return session._getSoundSetFileNames(setName);
  },
  /**
   * Return the list of files contained in a sound set
   * @method getSoundSetFileNames
   * @param setName - name of the set
   * @return null
   */
  'getSoundSetFileNames': function getSoundSetFileNames(setName) {
    return session.getSoundSetFileNames(setName);
  },
  /**
   * Return the current sound set loaded
   * @method _getCurrentSystemSoundSet
   * @private
   * @return null
   */
  '_getCurrentSystemSoundSet': function _getCurrentSystemSoundSet() {
    return session._getCurrentSystemSoundSet();
  },
  /**
   * 
   * @method _getLoadedSoundSetsList
   * @private
   * @return null
   */
  '_getLoadedSoundSetsList': function _getLoadedSoundSetsList() {
    return session._getLoadedSoundSetsList();
  },
  /**
   * 
   * @method getLoadedSoundSetsList
   * @return null
   */
  'getLoadedSoundSetsList': function getLoadedSoundSetsList() {
    return session.getLoadedSoundSetsList();
  },
  /**
   * 
   * @method _getInstalledSoundSetsList
   * @private
   * @return null
   */
  '_getInstalledSoundSetsList': function _getInstalledSoundSetsList() {
    return session._getInstalledSoundSetsList();
  },
  /**
   * 
   * @method getInstalledSoundSetsList
   * @return null
   */
  'getInstalledSoundSetsList': function getInstalledSoundSetsList() {
    return session.getInstalledSoundSetsList();
  },
  /**
   * 
   * @method _isSoundSetInstalled
   * @private
   * @param setName - name of the set
   * @return null
   */
  '_isSoundSetInstalled': function _isSoundSetInstalled(setName) {
    return session._isSoundSetInstalled(setName);
  },
  /**
   * 
   * @method isSoundSetInstalled
   * @param setName - name of the set
   * @return null
   */
  'isSoundSetInstalled': function isSoundSetInstalled(setName) {
    return session.isSoundSetInstalled(setName);
  },
  /**
   * 
   * @method _isSoundSetFileInstalled
   * @private
   * @param setName - name of the set
   * @param soundName - name of the sound
   * @return null
   */
  '_isSoundSetFileInstalled': function _isSoundSetFileInstalled(setName, soundName) {
    return session._isSoundSetFileInstalled(setName, soundName);
  },
  /**
   * 
   * @method isSoundSetFileInstalled
   * @param setName - name of the set
   * @param soundName - name of the sound
   * @return null
   */
  'isSoundSetFileInstalled': function isSoundSetFileInstalled(setName, soundName) {
    return session.isSoundSetFileInstalled(setName, soundName);
  },
  /**
   * 
   * @method _getSystemSoundSetFileDuration
   * @private
   * @param soundName - name of the sound
   * @return null
   */
  '_getSystemSoundSetFileDuration': function _getSystemSoundSetFileDuration(soundName) {
    return session._getSystemSoundSetFileDuration(soundName);
  },
  /**
   * 
   * @method _getSystemSoundSetFilePath
   * @private
   * @param soundName - name of the sound
   * @return null
   */
  '_getSystemSoundSetFilePath': function _getSystemSoundSetFilePath(soundName) {
    return session._getSystemSoundSetFilePath(soundName);
  },
  /**
   * Plays a wav or mp3 file in loop
   * @method playFileInLoop
   * @param fileName - Path of the sound file
   * @return null
   */
  'playFileInLoop': function playFileInLoop(fileName) {
    return session.playFileInLoop(fileName);
  },
  /**
   * Plays a wav or mp3 file in loop, with specific volume and audio balance
   * @method playFileInLoop
   * @param fileName - Path of the sound file
   * @param volume - volume of the sound file (must be between 0.0 and 1.0)
   * @param pan - audio balance of the sound file (-1.0 : left / 1.0 : right)
   * @return null
   */
  'playFileInLoop': function playFileInLoop(fileName, volume, pan) {
    return session.playFileInLoop(fileName, volume, pan);
  },
  /**
   * Plays a wav or mp3 file from a given position in the file.
   * @method playFileFromPosition
   * @param fileName - Name of the sound file
   * @param position - Position in second where the playing has to begin
   * @return null
   */
  'playFileFromPosition': function playFileFromPosition(fileName, position) {
    return session.playFileFromPosition(fileName, position);
  },
  /**
   * Plays a wav or mp3 file from a given position in the file, with specific volume and audio balance
   * @method playFileFromPosition
   * @param fileName - Name of the sound file
   * @param position - Position in second where the playing has to begin
   * @param volume - volume of the sound file (must be between 0.0 and 1.0)
   * @param pan - audio balance of the sound file (-1.0 : left / 1.0 : right)
   * @return null
   */
  'playFileFromPosition': function playFileFromPosition(fileName, position, volume, pan) {
    return session.playFileFromPosition(fileName, position, volume, pan);
  },
  /**
   * Goes to a given position in a file which is playing.
   * @method goTo
   * @param playId - Id of the process which is playing the file
   * @param position - Position in the file (in second)
   * @return null
   */
  'goTo': function goTo(playId, position) {
    return session.goTo(playId, position);
  },
  /**
   * Stops all the files that are currently playing.
   * @method stopAll
   * @return null
   */
  'stopAll': function stopAll() {
    return session.stopAll();
  },
  /**
   * Pause a play back
   * @method pause
   * @param id - Id of the process that is playing the file you want to put in pause
   * @return null
   */
  'pause': function pause(id) {
    return session.pause(id);
  },
  /**
   * Sets the volume of the player
   * @method setVolume
   * @param id - Id of the process that is playing the file you want to put louder or less loud
   * @param volume - Volume - range 0.0 to 1.0
   * @return null
   */
  'setVolume': function setVolume(id, volume) {
    return session.setVolume(id, volume);
  },
  /**
   * Sets the master volume of the player
   * @method setMasterVolume
   * @param volume - Volume - range 0.0 to 1.0
   * @return null
   */
  'setMasterVolume': function setMasterVolume(volume) {
    return session.setMasterVolume(volume);
  },
  /**
   * Returns the volume of the player
   * @method getVolume
   * @param playId - Id of the process which is playing the file
   * @return Volume of the player - range 0.0 to 1.0.
   */
  'getVolume': function getVolume(playId) {
    return session.getVolume(playId);
  },
  /**
   * Returns the master volume of the player
   * @method getMasterVolume
   * @return Volume of the master - range 0.0 to 1.0.
   */
  'getMasterVolume': function getMasterVolume() {
    return session.getMasterVolume();
  },
  /**
   * sets the audio panorama : -1 for left speaker / 1 for right speaker
   * @method setPanorama
   * @return Volume of the player - range 0.0 to 1.0.
   */
  'setPanorama': function setPanorama() {
    return session.setPanorama();
  },
  /**
   * Loads a file for ulterior playback
   * @method loadFile
   * @param fileName - Path of the sound file (either mp3 or wav)
   * @return Id of the file which has been loaded. This file can then be played with the play function
   */
  'loadFile': function loadFile(fileName) {
    return session.loadFile(fileName);
  },
  /**
   * unloads a file previously loaded with the loadFile function
   * @method unloadFile
   * @param id - Id returned by the loadFile function
   * @return null
   */
  'unloadFile': function unloadFile(id) {
    return session.unloadFile(id);
  },
  /**
   * unloads all the files already loaded.
   * @method unloadAllFiles
   * @return null
   */
  'unloadAllFiles': function unloadAllFiles() {
    return session.unloadAllFiles();
  },
  /**
   * returns an array containing the names of the currently loaded files
   * @method getLoadedFilesNames
   * @return Array containing the names of the files which has been loaded
   */
  'getLoadedFilesNames': function getLoadedFilesNames() {
    return session.getLoadedFilesNames();
  },
  /**
   * returns an array containing the Ids of the currently loaded files
   * @method getLoadedFilesIds
   * @return Array containing the Ids of the files which has been loaded
   */
  'getLoadedFilesIds': function getLoadedFilesIds() {
    return session.getLoadedFilesIds();
  },
  /**
   * Starts the playback of a file preloaded with the loadFile function.
   * @method play
   * @param id - Id returned by the loadFile function
   * @return null
   */
  'play': function play(id) {
    return session.play(id);
  },
  /**
   * Starts the playback of a file preloaded with the loadFile function, with specific volume and audio balance
   * @method play
   * @param id - Id returned by the loadFile function
   * @param volume - volume of the sound file (must be between 0.0 and 1.0)
   * @param pan - audio balance of the sound file (-1.0 : left / 1.0 : right)
   * @return null
   */
  'play': function play(id, volume, pan) {
    return session.play(id, volume, pan);
  },
  /**
   * Starts the playback in loop of a file preloaded with the loadFile function
   * @method playInLoop
   * @param id - Id returned by the loadFile function
   * @return null
   */
  'playInLoop': function playInLoop(id) {
    return session.playInLoop(id);
  },
  /**
   * Plays a wav or mp3 file in loop, with specific volume and audio balance
   * @method playInLoop
   * @param id - Id returned by the loadFile function
   * @param volume - volume of the sound file (must be between 0.0 and 1.0)
   * @param pan - audio balance of the sound file (-1.0 : left / 1.0 : right)
   * @return null
   */
  'playInLoop': function playInLoop(id, volume, pan) {
    return session.playInLoop(id, volume, pan);
  },
  /**
   * Starts the playback of a wab audio stream
   * @method playWebStream
   * @param streamName - Path of the web audio stream
   * @return null
   */
  'playWebStream': function playWebStream(streamName) {
    return session.playWebStream(streamName);
  },
  /**
   * Returns the length of the file played
   * @method getFileLength
   * @param playId - Id of the process which is playing the file
   * @return Length of the file in seconds
   */
  'getFileLength': function getFileLength(playId) {
    return session.getFileLength(playId);
  },
  /**
   * Returns the position in the file which is currently played
   * @method getCurrentPosition
   * @param playId - Id of the process which is playing the file
   * @return Position in the file in seconds
   */
  'getCurrentPosition': function getCurrentPosition(playId) {
    return session.getCurrentPosition(playId);
  },
  /**
   * Play a sine wave which specified caracteristics.
   * @method playSine
   * @param frequence - Frequence in Hertz
   * @param gain - Volume Gain between 0 and 100
   * @param pan - Stereo Pan set to either {-1,0,+1}
   * @param duration - Duration of the sine wave in seconds
   * @return null
   */
  'playSine': function playSine(frequence, gain, pan, duration) {
    return session.playSine(frequence, gain, pan, duration);
  },
  /**
   * launch the thread to play sine
   * @method _launchSinePlaying
   * @private
   * @return null
   */
  '_launchSinePlaying': function _launchSinePlaying() {
    return session._launchSinePlaying();
  },
  /**
   * This function allows to know if the ALAudioPlayer module is currently playing the file you give in argument
   * @method _isPlayingThisFile
   * @private
   * @param fileName - file name of the file you want to test
   * @return 1 if the file is currently beeing playing / 0 otherwise
   */
  '_isPlayingThisFile': function _isPlayingThisFile(fileName) {
    return session._isPlayingThisFile(fileName);
  },
  /**
   * Say ip if there is no tts or behavior manager enable (internal use).
   * @method _saySOSIP
   * @private
   * @return null
   */
  '_saySOSIP': function _saySOSIP() {
    return session._saySOSIP();
  },
  /**
   * 
   * @method _applicationInstalled
   * @private
   * @return null
   */
  '_applicationInstalled': function _applicationInstalled() {
    return session._applicationInstalled();
  },
  /**
   * 
   * @method _applicationUninstalled
   * @private
   * @return null
   */
  '_applicationUninstalled': function _applicationUninstalled() {
    return session._applicationUninstalled();
  },
  /**
   * Remove pitch on the current file
   * @method disablePitch
   * @param id - Id returned by the loadFile function
   * @return null
   */
  'disablePitch': function disablePitch(id) {
    return session.disablePitch(id);
  },
  /**
   * Set a pith on the current playing file
   * @method setPitch
   * @param id - Id returned by the loadFile function
   * @param level - Pitch shifting to apply
   * @return null
   */
  'setPitch': function setPitch(id, level) {
    return session.setPitch(id, level);
  },
};
