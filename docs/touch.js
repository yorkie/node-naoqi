/**
 * @module touch
 */
session.touch = {
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
   * Internal Use.
   * @method _setTouchConfig
   * @private
   * @param config - Internal: An array of ALValues [i][0]: name, [i][1]: value
   * @return null
   */
  '_setTouchConfig': function _setTouchConfig(config) {
    return session._setTouchConfig(config);
  },
  /**
   * Return the list of sensors managed by touch module and return by TouchChangedevent.
   * @method getSensorList
   * @return A vector<std::string> of sensor names manage by ALTouch.
   */
  'getSensorList': function getSensorList() {
    return session.getSensorList();
  },
  /**
   * Return the current status of all Touch groups.
   * @method getStatus
   * @return A vector of pair [name, bool], similar to TouchChanged event.
   */
  'getStatus': function getStatus() {
    return session.getStatus();
  },
  /**
   * Internal Use.
   * @method _createGroup
   * @private
   * @param groupName - The name of the group to create.
   * @param jointNames - A vector of joint and actuator names constituting the group.
   * @return true if the group was created, false otherwise.
   */
  '_createGroup': function _createGroup(groupName, jointNames) {
    return session._createGroup(groupName, jointNames);
  },
  /**
   * Internal Use.
   * @method _deleteGroup
   * @private
   * @param groupName - The name of the group to delete
   * @return true if the group was deleted, false otherwise
   */
  '_deleteGroup': function _deleteGroup(groupName) {
    return session._deleteGroup(groupName);
  },
  /**
   * Internal Use.
   * @method _getGroupList
   * @private
   * @return The list of groups used for sending touch events
   */
  '_getGroupList': function _getGroupList() {
    return session._getGroupList();
  },
  /**
   * Internal Use.
   * @method _getDetectionTypeName
   * @private
   * @param type - Touch detection type enum
   * @return The name of a touch detection type
   */
  '_getDetectionTypeName': function _getDetectionTypeName(type) {
    return session._getDetectionTypeName(type);
  },
  /**
   * Internal Use.
   * @method _triggerMotionReflex
   * @private
   * @param groupName - The name of the touched group
   * @return null
   */
  '_triggerMotionReflex': function _triggerMotionReflex(groupName) {
    return session._triggerMotionReflex(groupName);
  },
  /**
   * Internal Use.
   * @method _notifyTouchStopped
   * @private
   * @param groupName - The name of the touched group
   * @return null
   */
  '_notifyTouchStopped': function _notifyTouchStopped(groupName) {
    return session._notifyTouchStopped(groupName);
  },
  /**
   * Callback when robot is falling
   * @method _robotFallingCallback
   * @private
   * @return null
   */
  '_robotFallingCallback': function _robotFallingCallback() {
    return session._robotFallingCallback();
  },
  /**
   * Callback when robot has fallen
   * @method _robotFallenCallback
   * @private
   * @return null
   */
  '_robotFallenCallback': function _robotFallenCallback() {
    return session._robotFallenCallback();
  },
  /**
   * Callback when diagnosis change.
   * @method _diagnosisCallback
   * @private
   * @return null
   */
  '_diagnosisCallback': function _diagnosisCallback() {
    return session._diagnosisCallback();
  },
  /**
   * Callback when temperature diagnosis change.
   * @method _temperatureCallback
   * @private
   * @return null
   */
  '_temperatureCallback': function _temperatureCallback() {
    return session._temperatureCallback();
  },
};
