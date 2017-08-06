/**
 * @module robotPosture
 */
session.robotPosture = {
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
   * Returns the posture family for example Standing, LyingBelly,...
   * @method getPostureFamily
   * @return Returns the posture family, e.g. Standing.
   */
  'getPostureFamily': function getPostureFamily() {
    return session.getPostureFamily();
  },
  /**
   * Make the robot go to the choosenposture.
   * @method goToPosture
   * @param postureName - Name of the desired posture. Use getPostureList to get the list of posture name available.
   * @param maxSpeedFraction - A fraction.
   * @return Returns if the posture was reached or not.
   */
  'goToPosture': function goToPosture(postureName, maxSpeedFraction) {
    return session.goToPosture(postureName, maxSpeedFraction);
  },
  /**
   * Set the angle of the joints of the  robot to the choosen posture.
   * @method applyPosture
   * @param postureName - Name of the desired posture. Use getPostureList to get the list of posture name available.
   * @param maxSpeedFraction - A fraction.
   * @return Returns if the posture was reached or not.
   */
  'applyPosture': function applyPosture(postureName, maxSpeedFraction) {
    return session.applyPosture(postureName, maxSpeedFraction);
  },
  /**
   * Stop the posture move.
   * @method stopMove
   * @return null
   */
  'stopMove': function stopMove() {
    return session.stopMove();
  },
  /**
   * Get the list of posture names available.
   * @method getPostureList
   * @return null
   */
  'getPostureList': function getPostureList() {
    return session.getPostureList();
  },
  /**
   * Get the list of posture family names available.
   * @method getPostureFamilyList
   * @return null
   */
  'getPostureFamilyList': function getPostureFamilyList() {
    return session.getPostureFamilyList();
  },
  /**
   * Set maximum of tries ongoToPosture fail.
   * @method setMaxTryNumber
   * @param pMaxTryNumber - Number of retry if goToPosture fail.
   * @return null
   */
  'setMaxTryNumber': function setMaxTryNumber(pMaxTryNumber) {
    return session.setMaxTryNumber(pMaxTryNumber);
  },
  /**
   * Determine posture.
   * @method getPosture
   * @return null
   */
  'getPosture': function getPosture() {
    return session.getPosture();
  },
  /**
   * Articular distance
   * @method _isRobotInPosture
   * @private
   * @return null
   */
  '_isRobotInPosture': function _isRobotInPosture() {
    return session._isRobotInPosture();
  },
  /**
   * Articular distance
   * @method _isRobotInPostureId
   * @private
   * @return null
   */
  '_isRobotInPostureId': function _isRobotInPostureId() {
    return session._isRobotInPostureId();
  },
  /**
   * Determine posture id.
   * @method _getPosture
   * @private
   * @return null
   */
  '_getPosture': function _getPosture() {
    return session._getPosture();
  },
  /**
   * Set the angle of the joints.
   * @method _setPostureId
   * @private
   * @return null
   */
  '_setPostureId': function _setPostureId() {
    return session._setPostureId();
  },
  /**
   * Set the angle of thejoints and of the inertial unit
   * @method _goToPostureId
   * @private
   * @return null
   */
  '_goToPostureId': function _goToPostureId() {
    return session._goToPostureId();
  },
  /**
   * Name posture from id.
   * @method _namePosture
   * @private
   * @return null
   */
  '_namePosture': function _namePosture() {
    return session._namePosture();
  },
  /**
   * Rename posture from name.
   * @method _renamePosture
   * @private
   * @return null
   */
  '_renamePosture': function _renamePosture() {
    return session._renamePosture();
  },
  /**
   * Resave posture joints, inertial, family. Keep neighbours.
   * @method _resavePosture
   * @private
   * @return null
   */
  '_resavePosture': function _resavePosture() {
    return session._resavePosture();
  },
  /**
   * Set slow factorbetween two postures.
   * @method _setSlowFactor
   * @private
   * @return null
   */
  '_setSlowFactor': function _setSlowFactor() {
    return session._setSlowFactor();
  },
  /**
   * Set anti collisionbetween two postures.
   * @method _setAntiCollision
   * @private
   * @return null
   */
  '_setAntiCollision': function _setAntiCollision() {
    return session._setAntiCollision();
  },
  /**
   * Enables/Disables anti collision management by RobotPosture.
   * @method _setUseAntiCollision
   * @private
   * @param enable - A bool that enable anticollision management.
   * @return null
   */
  '_setUseAntiCollision': function _setUseAntiCollision(enable) {
    return session._setUseAntiCollision(enable);
  },
  /**
   * Enables/Disables auto balance management by RobotPosture.
   * @method _setUseAutoBalance
   * @private
   * @param enable - A bool that enable auto balance management.
   * @return null
   */
  '_setUseAutoBalance': function _setUseAutoBalance(enable) {
    return session._setUseAutoBalance(enable);
  },
  /**
   * Set cost between two postures.
   * @method _setCost
   * @private
   * @return null
   */
  '_setCost': function _setCost() {
    return session._setCost();
  },
  /**
   * Save current posture.
   * @method _saveCurrentPosture
   * @private
   * @return null
   */
  '_saveCurrentPosture': function _saveCurrentPosture() {
    return session._saveCurrentPosture();
  },
  /**
   * Save with a namecurrent posture.
   * @method _saveCurrentPostureWithName
   * @private
   * @return null
   */
  '_saveCurrentPostureWithName': function _saveCurrentPostureWithName() {
    return session._saveCurrentPostureWithName();
  },
  /**
   * Apply postures.
   * @method _applyPostures
   * @private
   * @return null
   */
  '_applyPostures': function _applyPostures() {
    return session._applyPostures();
  },
  /**
   * Erase all postures.
   * @method _eraseAllPostures
   * @private
   * @return null
   */
  '_eraseAllPostures': function _eraseAllPostures() {
    return session._eraseAllPostures();
  },
  /**
   * Bind two postures.
   * @method _bindPostures
   * @private
   * @return null
   */
  '_bindPostures': function _bindPostures() {
    return session._bindPostures();
  },
  /**
   * Add a neighbour to a postures.
   * @method _addNeighbourToPosture
   * @private
   * @return null
   */
  '_addNeighbourToPosture': function _addNeighbourToPosture() {
    return session._addNeighbourToPosture();
  },
  /**
   * Remove a neighbour from postures.
   * @method _removeNeighbourFromPosture
   * @private
   * @return null
   */
  '_removeNeighbourFromPosture': function _removeNeighbourFromPosture() {
    return session._removeNeighbourFromPosture();
  },
  /**
   * Unbind two postures.
   * @method _unBindPostures
   * @private
   * @return null
   */
  '_unBindPostures': function _unBindPostures() {
    return session._unBindPostures();
  },
  /**
   * Erase the posture and unBind theneighbours.
   * @method _erasePosture
   * @private
   * @return null
   */
  '_erasePosture': function _erasePosture() {
    return session._erasePosture();
  },
  /**
   * Get library size.
   * @method _getLibrarySize
   * @private
   * @return null
   */
  '_getLibrarySize': function _getLibrarySize() {
    return session._getLibrarySize();
  },
  /**
   * Load a new library file.
   * @method _loadPostureLibraryFromName
   * @private
   * @return null
   */
  '_loadPostureLibraryFromName': function _loadPostureLibraryFromName() {
    return session._loadPostureLibraryFromName();
  },
  /**
   * Get current graph path.
   * @method _getCurrentPath
   * @private
   * @return null
   */
  '_getCurrentPath': function _getCurrentPath() {
    return session._getCurrentPath();
  },
  /**
   * .
   * @method _isStandCallBack
   * @private
   * @return null
   */
  '_isStandCallBack': function _isStandCallBack() {
    return session._isStandCallBack();
  },
  /**
   * .
   * @method _savePostureLibrary
   * @private
   * @return null
   */
  '_savePostureLibrary': function _savePostureLibrary() {
    return session._savePostureLibrary();
  },
  /**
   * .
   * @method _getArticularDistanceToPosture
   * @private
   * @return null
   */
  '_getArticularDistanceToPosture': function _getArticularDistanceToPosture() {
    return session._getArticularDistanceToPosture();
  },
  /**
   * .
   * @method _getCartesianDistanceToPosture
   * @private
   * @return null
   */
  '_getCartesianDistanceToPosture': function _getCartesianDistanceToPosture() {
    return session._getCartesianDistanceToPosture();
  },
  /**
   * .
   * @method _getCartesianDistanceVector
   * @private
   * @return null
   */
  '_getCartesianDistanceVector': function _getCartesianDistanceVector() {
    return session._getCartesianDistanceVector();
  },
  /**
   * .
   * @method _getPostureIdList
   * @private
   * @return null
   */
  '_getPostureIdList': function _getPostureIdList() {
    return session._getPostureIdList();
  },
  /**
   * .
   * @method _isReachable
   * @private
   * @return null
   */
  '_isReachable': function _isReachable() {
    return session._isReachable();
  },
  /**
   * .
   * @method _generateCartesianMap
   * @private
   * @return null
   */
  '_generateCartesianMap': function _generateCartesianMap() {
    return session._generateCartesianMap();
  },
  /**
   * .
   * @method _getPostureZ
   * @private
   * @return null
   */
  '_getPostureZ': function _getPostureZ() {
    return session._getPostureZ();
  },
  /**
   * .
   * @method _getPostureNoZ
   * @private
   * @return null
   */
  '_getPostureNoZ': function _getPostureNoZ() {
    return session._getPostureNoZ();
  },
  /**
   * .
   * @method _getIdFromName
   * @private
   * @return null
   */
  '_getIdFromName': function _getIdFromName() {
    return session._getIdFromName();
  },
  /**
   * .
   * @method _activeDiagnosisCallBack
   * @private
   * @return null
   */
  '_activeDiagnosisCallBack': function _activeDiagnosisCallBack() {
    return session._activeDiagnosisCallBack();
  },
  /**
   * .
   * @method _eraseFamily
   * @private
   * @return null
   */
  '_eraseFamily': function _eraseFamily() {
    return session._eraseFamily();
  },
};
