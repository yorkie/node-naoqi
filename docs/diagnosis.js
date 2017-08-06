/**
 * @module diagnosis
 */
session.diagnosis = {
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
   * The actual state of the passive diagnosis.
   * @method getPassiveDiagnosis
   * @return Return the passive diagnosis last result.
   */
  'getPassiveDiagnosis': function getPassiveDiagnosis() {
    return session.getPassiveDiagnosis();
  },
  /**
   * The actual state of the active diagnosis.
   * @method getActiveDiagnosis
   * @return Return the active diagnosis last result.
   */
  'getActiveDiagnosis': function getActiveDiagnosis() {
    return session.getActiveDiagnosis();
  },
  /**
   * The actual state of the active and passive diagnosis.
   * @method getDiagnosisStatus
   * @return Return the active and passive last result.
   */
  'getDiagnosisStatus': function getDiagnosisStatus() {
    return session.getDiagnosisStatus();
  },
  /**
   * Enable / Disable diagnosis notification.
   * @method setEnableNotification
   * @param enable - If True enable diagnosis notification. If False disable diagnosis notification.
   * @return null
   */
  'setEnableNotification': function setEnableNotification(enable) {
    return session.setEnableNotification(enable);
  },
  /**
   * Return true if notification is active.
   * @method isNotificationEnabled
   * @return Return True if notifications is active.
   */
  'isNotificationEnabled': function isNotificationEnabled() {
    return session.isNotificationEnabled();
  },
  /**
   * This function runs the diagnosis.
   * @method _run
   * @private
   * @return null
   */
  '_run': function _run() {
    return session._run();
  },
  /**
   * This function runs the diagnosis.
   * @method _run
   * @private
   * @param diagnosisFamily - The family of tests to be run by the diagnosis.
   * @return null
   */
  '_run': function _run(diagnosisFamily) {
    return session._run(diagnosisFamily);
  },
  /**
   * Returns a vector of available diagnosis families
   * @method _getFamilyNames
   * @private
   * @return null
   */
  '_getFamilyNames': function _getFamilyNames() {
    return session._getFamilyNames();
  },
  /**
   * The summary of the active diagnosis.This Hide API is dedicated for RhM.
   * @method _getActiveDiagnosisSummary
   * @private
   * @return null
   */
  '_getActiveDiagnosisSummary': function _getActiveDiagnosisSummary() {
    return session._getActiveDiagnosisSummary();
  },
  /**
   * The summary of the passive diagnosis.This Hide API is dedicated for RhM.
   * @method _getPassiveDiagnosisSummary
   * @private
   * @param clearBuffers - If True buffers are cleared.
   * @return null
   */
  '_getPassiveDiagnosisSummary': function _getPassiveDiagnosisSummary(clearBuffers) {
    return session._getPassiveDiagnosisSummary(clearBuffers);
  },
  /**
   * Callback method at wakeUp started.
   * @method _wakeUpStartedCallBack
   * @private
   * @return null
   */
  '_wakeUpStartedCallBack': function _wakeUpStartedCallBack() {
    return session._wakeUpStartedCallBack();
  },
  /**
   * Callback method at wakeUp finished.
   * @method _wakeUpFinishedCallBack
   * @private
   * @return null
   */
  '_wakeUpFinishedCallBack': function _wakeUpFinishedCallBack() {
    return session._wakeUpFinishedCallBack();
  },
  /**
   * Callback method at rest started.
   * @method _restStartedCallBack
   * @private
   * @return null
   */
  '_restStartedCallBack': function _restStartedCallBack() {
    return session._restStartedCallBack();
  },
  /**
   * Callback method at rest finished.
   * @method _restFinishedCallBack
   * @private
   * @return null
   */
  '_restFinishedCallBack': function _restFinishedCallBack() {
    return session._restFinishedCallBack();
  },
  /**
   * Callback method at naoqi ready.
   * @method _naoqiReadyCallBack
   * @private
   * @return null
   */
  '_naoqiReadyCallBack': function _naoqiReadyCallBack() {
    return session._naoqiReadyCallBack();
  },
  /**
   * Callback method at robot is falling.
   * @method _robotIsFallingCallBack
   * @private
   * @return null
   */
  '_robotIsFallingCallBack': function _robotIsFallingCallBack() {
    return session._robotIsFallingCallBack();
  },
  /**
   * Clear all active diagnosis.
   * @method _clearActiveDiagnosis
   * @private
   * @return null
   */
  '_clearActiveDiagnosis': function _clearActiveDiagnosis() {
    return session._clearActiveDiagnosis();
  },
  /**
   * Enables/Disables file logging active diagnosis.
   * @method _setLogToFileEnabled
   * @private
   * @return null
   */
  '_setLogToFileEnabled': function _setLogToFileEnabled() {
    return session._setLogToFileEnabled();
  },
  /**
   * Run the passive diagnosis tests once.
   * @method _runPassiveDiagnosis
   * @private
   * @return null
   */
  '_runPassiveDiagnosis': function _runPassiveDiagnosis() {
    return session._runPassiveDiagnosis();
  },
};
