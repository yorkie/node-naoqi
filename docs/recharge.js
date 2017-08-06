/**
 * @module recharge
 */
session.recharge = {
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
   * .
   * @method goToStation
   * @return null
   */
  'goToStation': function goToStation() {
    return session.goToStation();
  },
  /**
   * .
   * @method leaveStation
   * @return null
   */
  'leaveStation': function leaveStation() {
    return session.leaveStation();
  },
  /**
   * .
   * @method getStationPosition
   * @return null
   */
  'getStationPosition': function getStationPosition() {
    return session.getStationPosition();
  },
  /**
   * .
   * @method stopAll
   * @return null
   */
  'stopAll': function stopAll() {
    return session.stopAll();
  },
  /**
   * .
   * @method subscribe
   * @return null
   */
  'subscribe': function subscribe() {
    return session.subscribe();
  },
  /**
   * .
   * @method unsubscribe
   * @return null
   */
  'unsubscribe': function unsubscribe() {
    return session.unsubscribe();
  },
  /**
   * .
   * @method getStatus
   * @return null
   */
  'getStatus': function getStatus() {
    return session.getStatus();
  },
  /**
   * .
   * @method lookForStation
   * @return null
   */
  'lookForStation': function lookForStation() {
    return session.lookForStation();
  },
  /**
   * .
   * @method moveInFrontOfStation
   * @return null
   */
  'moveInFrontOfStation': function moveInFrontOfStation() {
    return session.moveInFrontOfStation();
  },
  /**
   * .
   * @method dockOnStation
   * @return null
   */
  'dockOnStation': function dockOnStation() {
    return session.dockOnStation();
  },
  /**
   * .
   * @method setUseTrackerSearcher
   * @return null
   */
  'setUseTrackerSearcher': function setUseTrackerSearcher() {
    return session.setUseTrackerSearcher();
  },
  /**
   * .
   * @method getUseTrackerSearcher
   * @return null
   */
  'getUseTrackerSearcher': function getUseTrackerSearcher() {
    return session.getUseTrackerSearcher();
  },
  /**
   * .
   * @method setMaxNumberOfTries
   * @return null
   */
  'setMaxNumberOfTries': function setMaxNumberOfTries() {
    return session.setMaxNumberOfTries();
  },
  /**
   * .
   * @method getMaxNumberOfTries
   * @return null
   */
  'getMaxNumberOfTries': function getMaxNumberOfTries() {
    return session.getMaxNumberOfTries();
  },
  /**
   * .
   * @method adjustDockingPosition
   * @return null
   */
  'adjustDockingPosition': function adjustDockingPosition() {
    return session.adjustDockingPosition();
  },
  /**
   * .
   * @method adjustDockingPosition
   * @return null
   */
  'adjustDockingPosition': function adjustDockingPosition() {
    return session.adjustDockingPosition();
  },
  /**
   * .
   * @method _stop
   * @private
   * @return null
   */
  '_stop': function _stop() {
    return session._stop();
  },
  /**
   * .
   * @method _getConfidenceIndex
   * @private
   * @return null
   */
  '_getConfidenceIndex': function _getConfidenceIndex() {
    return session._getConfidenceIndex();
  },
  /**
   * .
   * @method _allowTrackerNavigateTo
   * @private
   * @return null
   */
  '_allowTrackerNavigateTo': function _allowTrackerNavigateTo() {
    return session._allowTrackerNavigateTo();
  },
  /**
   * .
   * @method _setFinalApproachDistance
   * @private
   * @return null
   */
  '_setFinalApproachDistance': function _setFinalApproachDistance() {
    return session._setFinalApproachDistance();
  },
  /**
   * .
   * @method _getFinalApproachDistance
   * @private
   * @return null
   */
  '_getFinalApproachDistance': function _getFinalApproachDistance() {
    return session._getFinalApproachDistance();
  },
  /**
   * .
   * @method _setFinalApproachYOffset
   * @private
   * @return null
   */
  '_setFinalApproachYOffset': function _setFinalApproachYOffset() {
    return session._setFinalApproachYOffset();
  },
  /**
   * .
   * @method _getFinalApproachYOffset
   * @private
   * @return null
   */
  '_getFinalApproachYOffset': function _getFinalApproachYOffset() {
    return session._getFinalApproachYOffset();
  },
  /**
   * .
   * @method _setFinalApproachThreshold
   * @private
   * @return null
   */
  '_setFinalApproachThreshold': function _setFinalApproachThreshold() {
    return session._setFinalApproachThreshold();
  },
  /**
   * .
   * @method _getFinalApproachThreshold
   * @private
   * @return null
   */
  '_getFinalApproachThreshold': function _getFinalApproachThreshold() {
    return session._getFinalApproachThreshold();
  },
  /**
   * .
   * @method _setStationDetectionConfidenceThreshold
   * @private
   * @return null
   */
  '_setStationDetectionConfidenceThreshold': function _setStationDetectionConfidenceThreshold() {
    return session._setStationDetectionConfidenceThreshold();
  },
  /**
   * .
   * @method _getStationDetectionConfidenceThreshold
   * @private
   * @return null
   */
  '_getStationDetectionConfidenceThreshold': function _getStationDetectionConfidenceThreshold() {
    return session._getStationDetectionConfidenceThreshold();
  },
  /**
   * .
   * @method _startLogging
   * @private
   * @return null
   */
  '_startLogging': function _startLogging() {
    return session._startLogging();
  },
  /**
   * .
   * @method _stopLogging
   * @private
   * @return null
   */
  '_stopLogging': function _stopLogging() {
    return session._stopLogging();
  },
  /**
   * .
   * @method _getFinalConnectionMoves
   * @private
   * @return null
   */
  '_getFinalConnectionMoves': function _getFinalConnectionMoves() {
    return session._getFinalConnectionMoves();
  },
  /**
   * .
   * @method _setFinalConnectionMoves
   * @private
   * @return null
   */
  '_setFinalConnectionMoves': function _setFinalConnectionMoves() {
    return session._setFinalConnectionMoves();
  },
  /**
   * .
   * @method _setFinalConnectionMovesDelay
   * @private
   * @return null
   */
  '_setFinalConnectionMovesDelay': function _setFinalConnectionMovesDelay() {
    return session._setFinalConnectionMovesDelay();
  },
  /**
   * .
   * @method _getFinalConnectionMovesDelay
   * @private
   * @return null
   */
  '_getFinalConnectionMovesDelay': function _getFinalConnectionMovesDelay() {
    return session._getFinalConnectionMovesDelay();
  },
  /**
   * .
   * @method _setEnableCheckDisconnectionTask
   * @private
   * @return null
   */
  '_setEnableCheckDisconnectionTask': function _setEnableCheckDisconnectionTask() {
    return session._setEnableCheckDisconnectionTask();
  },
  /**
   * .
   * @method _getEnableCheckDisconnectionTask
   * @private
   * @return null
   */
  '_getEnableCheckDisconnectionTask': function _getEnableCheckDisconnectionTask() {
    return session._getEnableCheckDisconnectionTask();
  },
  /**
   * .
   * @method _getLastHopeMaxRetries
   * @private
   * @return null
   */
  '_getLastHopeMaxRetries': function _getLastHopeMaxRetries() {
    return session._getLastHopeMaxRetries();
  },
  /**
   * .
   * @method _setLastHopeMaxRetries
   * @private
   * @return null
   */
  '_setLastHopeMaxRetries': function _setLastHopeMaxRetries() {
    return session._setLastHopeMaxRetries();
  },
  /**
   * .
   * @method _getDockingMaxRetries
   * @private
   * @return null
   */
  '_getDockingMaxRetries': function _getDockingMaxRetries() {
    return session._getDockingMaxRetries();
  },
  /**
   * .
   * @method _setDockingMaxRetries
   * @private
   * @return null
   */
  '_setDockingMaxRetries': function _setDockingMaxRetries() {
    return session._setDockingMaxRetries();
  },
  /**
   * .
   * @method _getLookMaxRetries
   * @private
   * @return null
   */
  '_getLookMaxRetries': function _getLookMaxRetries() {
    return session._getLookMaxRetries();
  },
  /**
   * .
   * @method _setLookMaxRetries
   * @private
   * @return null
   */
  '_setLookMaxRetries': function _setLookMaxRetries() {
    return session._setLookMaxRetries();
  },
  /**
   * .
   * @method _updateStationDetection
   * @private
   * @return null
   */
  '_updateStationDetection': function _updateStationDetection() {
    return session._updateStationDetection();
  },
  /**
   * .
   * @method _eventTrackerSearcherLoopCallback
   * @private
   * @return null
   */
  '_eventTrackerSearcherLoopCallback': function _eventTrackerSearcherLoopCallback() {
    return session._eventTrackerSearcherLoopCallback();
  },
  /**
   * .
   * @method _eventTrackerTargetReachedCallback
   * @private
   * @return null
   */
  '_eventTrackerTargetReachedCallback': function _eventTrackerTargetReachedCallback() {
    return session._eventTrackerTargetReachedCallback();
  },
  /**
   * .
   * @method _eventTrackerTargetLostCallback
   * @private
   * @return null
   */
  '_eventTrackerTargetLostCallback': function _eventTrackerTargetLostCallback() {
    return session._eventTrackerTargetLostCallback();
  },
  /**
   * .
   * @method _eventTrackerActiveTargetChangedCallback
   * @private
   * @return null
   */
  '_eventTrackerActiveTargetChangedCallback': function _eventTrackerActiveTargetChangedCallback() {
    return session._eventTrackerActiveTargetChangedCallback();
  },
  /**
   * .
   * @method _eventTrackerSearcherScanStartedCallback
   * @private
   * @return null
   */
  '_eventTrackerSearcherScanStartedCallback': function _eventTrackerSearcherScanStartedCallback() {
    return session._eventTrackerSearcherScanStartedCallback();
  },
  /**
   * .
   * @method _eventMoveFailedCallback
   * @private
   * @return null
   */
  '_eventMoveFailedCallback': function _eventMoveFailedCallback() {
    return session._eventMoveFailedCallback();
  },
  /**
   * .
   * @method _eventBatteryConnectedToChargingStationCallback
   * @private
   * @return null
   */
  '_eventBatteryConnectedToChargingStationCallback': function _eventBatteryConnectedToChargingStationCallback() {
    return session._eventBatteryConnectedToChargingStationCallback();
  },
  /**
   * .
   * @method _eventNavigationStatusChangedCallback
   * @private
   * @return null
   */
  '_eventNavigationStatusChangedCallback': function _eventNavigationStatusChangedCallback() {
    return session._eventNavigationStatusChangedCallback();
  },
  /**
   * .
   * @method _eventSlopeDetectedChangedCallback
   * @private
   * @return null
   */
  '_eventSlopeDetectedChangedCallback': function _eventSlopeDetectedChangedCallback() {
    return session._eventSlopeDetectedChangedCallback();
  },
};
