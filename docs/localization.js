/**
 * @module localization
 */
session.localization = {
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
   * 
   * @method getMessageFromErrorCode
   * @return null
   */
  'getMessageFromErrorCode': function getMessageFromErrorCode() {
    return session.getMessageFromErrorCode();
  },
  /**
   * Stop all robot movements.
   * @method stopAll
   * @return null
   */
  'stopAll': function stopAll() {
    return session.stopAll();
  },
  /**
   * 
   * @method _safetyStop
   * @private
   * @return null
   */
  '_safetyStop': function _safetyStop() {
    return session._safetyStop();
  },
  /**
   * Learn the robot home.
   * @method learnHome
   * @return null
   */
  'learnHome': function learnHome() {
    return session.learnHome();
  },
  /**
   * Is the robot in its home?
   * @method isInCurrentHome
   * @return null
   */
  'isInCurrentHome': function isInCurrentHome() {
    return session.isInCurrentHome();
  },
  /**
   * Get some information about the current panorama.
   * @method getCurrentPanoramaDescriptor
   * @return null
   */
  'getCurrentPanoramaDescriptor': function getCurrentPanoramaDescriptor() {
    return session.getCurrentPanoramaDescriptor();
  },
  /**
   * Get a frame buffer.
   * @method getFrame
   * @return null
   */
  'getFrame': function getFrame() {
    return session.getFrame();
  },
  /**
   * Delete all panoramas in a directory.
   * @method clear
   * @param pDirectory - Name of the directory
   * @return null
   */
  'clear': function clear(pDirectory) {
    return session.clear(pDirectory);
  },
  /**
   * Loads panoramas from a directory in the default one.
   * @method load
   * @param pDirectory - Name of the directory
   * @return null
   */
  'load': function load(pDirectory) {
    return session.load(pDirectory);
  },
  /**
   * Save the temporary panoramas in a directory from the default one.
   * @method save
   * @param pDirectory - Name of the directory
   * @return null
   */
  'save': function save(pDirectory) {
    return session.save(pDirectory);
  },
  /**
   * 
   * @method isRelocalizationRequired
   * @return null
   */
  'isRelocalizationRequired': function isRelocalizationRequired() {
    return session.isRelocalizationRequired();
  },
  /**
   * 
   * @method getDriftPercentages
   * @return null
   */
  'getDriftPercentages': function getDriftPercentages() {
    return session.getDriftPercentages();
  },
  /**
   * 
   * @method isDataAvailable
   * @return null
   */
  'isDataAvailable': function isDataAvailable() {
    return session.isDataAvailable();
  },
  /**
   * Get the robot position in world navigation.
   * @method getRobotPosition
   * @return null
   */
  'getRobotPosition': function getRobotPosition() {
    return session.getRobotPosition();
  },
  /**
   * Get the robot position in world navigation.
   * @method getRobotPosition
   * @return null
   */
  'getRobotPosition': function getRobotPosition() {
    return session.getRobotPosition();
  },
  /**
   * Get the robot orientation.
   * @method getRobotOrientation
   * @return null
   */
  'getRobotOrientation': function getRobotOrientation() {
    return session.getRobotOrientation();
  },
  /**
   * Get the robot orientation.
   * @method getRobotOrientation
   * @return null
   */
  'getRobotOrientation': function getRobotOrientation() {
    return session.getRobotOrientation();
  },
  /**
   * 
   * @method isInGivenZone
   * @return null
   */
  'isInGivenZone': function isInGivenZone() {
    return session.isInGivenZone();
  },
  /**
   * 
   * @method _launchLocalization
   * @private
   * @return null
   */
  '_launchLocalization': function _launchLocalization() {
    return session._launchLocalization();
  },
  /**
   * Go to the robot home.
   * @method goToHome
   * @return null
   */
  'goToHome': function goToHome() {
    return session.goToHome();
  },
  /**
   * Go to a given position.
   * @method goToPosition
   * @return null
   */
  'goToPosition': function goToPosition() {
    return session.goToPosition();
  },
  /**
   * Return the list of saving directories
   * @method _getSavingDirectories
   * @private
   * @return null
   */
  '_getSavingDirectories': function _getSavingDirectories() {
    return session._getSavingDirectories();
  },
  /**
   * Return the current loaded directory name. Will be empty if there is no active panorama or if it has not been saved to a directory yet
   * @method _getLoadedDirectory
   * @private
   * @return null
   */
  '_getLoadedDirectory': function _getLoadedDirectory() {
    return session._getLoadedDirectory();
  },
  /**
   * 
   * @method _handlePush
   * @private
   * @return null
   */
  '_handlePush': function _handlePush() {
    return session._handlePush();
  },
};
