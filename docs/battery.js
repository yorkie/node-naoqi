/**
 * @module battery
 */
session.battery = {
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
   * Enable power monitoring
   * @method enablePowerMonitoring
   * @param Enable - True activate power monitoring
   * @return null
   */
  'enablePowerMonitoring': function enablePowerMonitoring(Enable) {
    return session.enablePowerMonitoring(Enable);
  },
  /**
   * Get the battery charge in percents
   * @method getBatteryCharge
   * @return the percentage of remaining power
   */
  'getBatteryCharge': function getBatteryCharge() {
    return session.getBatteryCharge();
  },
  /**
   * Internal set the battery level for the first warning.
   * @method _setFirstWarningPercent
   * @private
   * @param Percent - Percentage of battery.
   * @return null
   */
  '_setFirstWarningPercent': function _setFirstWarningPercent(Percent) {
    return session._setFirstWarningPercent(Percent);
  },
  /**
   * Internal set the battery level for the second warning.
   * @method _setWarningPercent
   * @private
   * @param Percent - Percentage of battery.
   * @return null
   */
  '_setWarningPercent': function _setWarningPercent(Percent) {
    return session._setWarningPercent(Percent);
  },
  /**
   * Internal set the battery level for the last warning.
   * @method _setLastWarningPercent
   * @private
   * @param Percent - Percentage of battery.
   * @return null
   */
  '_setLastWarningPercent': function _setLastWarningPercent(Percent) {
    return session._setLastWarningPercent(Percent);
  },
  /**
   * Is battery detected.
   * @method _hasBattery
   * @private
   * @return Return true if battery is detected.
   */
  '_hasBattery': function _hasBattery() {
    return session._hasBattery();
  },
  /**
   * Get current battery mode.
   * @method _getBatteryMode
   * @private
   * @return Return the current battery mode. (Local = 0, robot = 1, simulation = 2)
   */
  '_getBatteryMode': function _getBatteryMode() {
    return session._getBatteryMode();
  },
  /**
   * Get current battery fully charged threshold.
   * @method _getFullyChargedThreshold
   * @private
   * @return the percentage of threshold for fully charged event.
   */
  '_getFullyChargedThreshold': function _getFullyChargedThreshold() {
    return session._getFullyChargedThreshold();
  },
  /**
   * Set battery fully charged threshold.
   * @method _setFullyChargedThreshold
   * @private
   * @param threshold - the percentage of threshold for fully charged event.
   * @return null
   */
  '_setFullyChargedThreshold': function _setFullyChargedThreshold(threshold) {
    return session._setFullyChargedThreshold(threshold);
  },
  /**
   * Set mode slave status.
   * @method _setModeSlave
   * @private
   * @param status - Enables or disables mode slave.
   * @return null
   */
  '_setModeSlave': function _setModeSlave(status) {
    return session._setModeSlave(status);
  },
};
