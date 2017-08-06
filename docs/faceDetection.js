/**
 * @module faceDetection
 */
session.faceDetection = {
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
   * Sets the extractor framerate for a chosen subscriber
   * @method setFrameRate
   * @param subscriberName - Name of the subcriber
   * @param framerate - New framerate
   * @return True if the update succeeded, False if not
   */
  'setFrameRate': function setFrameRate(subscriberName, framerate) {
    return session.setFrameRate(subscriberName, framerate);
  },
  /**
   * Sets the extractor framerate for all the subscribers
   * @method setFrameRate
   * @param framerate - New framerate
   * @return True if the update succeeded, False if not
   */
  'setFrameRate': function setFrameRate(framerate) {
    return session.setFrameRate(framerate);
  },
  /**
   * Sets extractor resolution
   * @method setResolution
   * @param resolution - New resolution
   * @return True if the update succeeded, False if not
   */
  'setResolution': function setResolution(resolution) {
    return session.setResolution(resolution);
  },
  /**
   * Sets extractor active camera
   * @method setActiveCamera
   * @param cameraId - Id of the camera that will become the active camera
   * @return True if the update succeeded, False if not
   */
  'setActiveCamera': function setActiveCamera(cameraId) {
    return session.setActiveCamera(cameraId);
  },
  /**
   * DEPRECATED: Sets pause and resolution
   * @method setParameter
   * @param paramName - Name of the parameter to set
   * @param value - New value
   * @return null
   */
  'setParameter': function setParameter(paramName, value) {
    return session.setParameter(paramName, value);
  },
  /**
   * Gets extractor framerate
   * @method getFrameRate
   * @return Current value of the framerate of the extractor
   */
  'getFrameRate': function getFrameRate() {
    return session.getFrameRate();
  },
  /**
   * Gets extractor resolution
   * @method getResolution
   * @return Current value of the resolution of the extractor
   */
  'getResolution': function getResolution() {
    return session.getResolution();
  },
  /**
   * Gets extractor active camera
   * @method getActiveCamera
   * @return Id of the current active camera of the extractor
   */
  'getActiveCamera': function getActiveCamera() {
    return session.getActiveCamera();
  },
  /**
   * Gets extractor pause status
   * @method isPaused
   * @return True if the extractor is paused, False if not
   */
  'isPaused': function isPaused() {
    return session.isPaused();
  },
  /**
   * Gets extractor running status
   * @method isProcessing
   * @return True if the extractor is currently processing images, False if not
   */
  'isProcessing': function isProcessing() {
    return session.isProcessing();
  },
  /**
   * Changes the pause status of the extractor
   * @method pause
   * @param paused - New pause satus
   * @return null
   */
  'pause': function pause(paused) {
    return session.pause(paused);
  },
  /**
   * 
   * @method _run
   * @private
   * @return null
   */
  '_run': function _run() {
    return session._run();
  },
  /**
   * deprecated
   * @method enableRecognition
   * @param enable - True/False
   * @return null
   */
  'enableRecognition': function enableRecognition(enable) {
    return session.enableRecognition(enable);
  },
  /**
   * enable/disable the recognition stageProcess will be faster when disabled when you don't need to recognize people
   * @method setRecognitionEnabled
   * @param enable - True/False
   * @return null
   */
  'setRecognitionEnabled': function setRecognitionEnabled(enable) {
    return session.setRecognitionEnabled(enable);
  },
  /**
   * Returns if recognition is enabled.
   * @method isRecognitionEnabled
   * @return True/False
   */
  'isRecognitionEnabled': function isRecognitionEnabled() {
    return session.isRecognitionEnabled();
  },
  /**
   * Get the current confidence threshold for face recognition.
   * @method getRecognitionConfidenceThreshold
   * @return Confidence threshold
   */
  'getRecognitionConfidenceThreshold': function getRecognitionConfidenceThreshold() {
    return session.getRecognitionConfidenceThreshold();
  },
  /**
   * Set the current confidence threshold for face recognition. Matches with lower confidence value will not be considered.
   * @method setRecognitionConfidenceThreshold
   * @param confThreshold - New confidence threshold between 0.0 and 1.0 (default 0.4).
   * @return null
   */
  'setRecognitionConfidenceThreshold': function setRecognitionConfidenceThreshold(confThreshold) {
    return session.setRecognitionConfidenceThreshold(confThreshold);
  },
  /**
   * deprecated
   * @method enableTracking
   * @param enable - True/False
   * @return null
   */
  'enableTracking': function enableTracking(enable) {
    return session.enableTracking(enable);
  },
  /**
   * (BETA) Choose to enable or disable tracking. Enabling tracking usually allows you to follow a face for a longer period of time. However, it can lead to more false detections. 
   * @method setTrackingEnabled
   * @param enable - True/False
   * @return null
   */
  'setTrackingEnabled': function setTrackingEnabled(enable) {
    return session.setTrackingEnabled(enable);
  },
  /**
   * (BETA) Returns if tracking is enabled.
   * @method isTrackingEnabled
   * @return True/False
   */
  'isTrackingEnabled': function isTrackingEnabled() {
    return session.isTrackingEnabled();
  },
  /**
   * Add a new face in the database.
   * @method learnFace
   * @param id - The name of the person to save
   * @return true if the operation succeeds
   */
  'learnFace': function learnFace(id) {
    return session.learnFace(id);
  },
  /**
   * use in a new learning process the latest images where a face has been wrongly recognized 
   * @method reLearnFace
   * @param id - The name of the person to save
   * @return true if the operation succeeds
   */
  'reLearnFace': function reLearnFace(id) {
    return session.reLearnFace(id);
  },
  /**
   * Delete from the database all faces instances of a person.
   * @method forgetPerson
   * @param id - The name of the person to forget
   * @return true if the operation succeeds
   */
  'forgetPerson': function forgetPerson(id) {
    return session.forgetPerson(id);
  },
  /**
   * Remove all faces from the database.
   * @method clearDatabase
   * @return true if the operation succeeds
   */
  'clearDatabase': function clearDatabase() {
    return session.clearDatabase();
  },
  /**
   * Changes the mode of detection
   * @method _setDetectionMode
   * @private
   * @param mode - 0 - Still Image,
Motion mode:
1 - Whole search mode,
2 - 3 Partition search mode,
3 - Gradual progress search mode.
   * @return True if success
   */
  '_setDetectionMode': function _setDetectionMode(mode) {
    return session._setDetectionMode(mode);
  },
  /**
   * Returns the current mode of detection
   * @method _getDetectionMode
   * @private
   * @return current mode of detection (0, 1, 2 or 3)
   */
  '_getDetectionMode': function _getDetectionMode() {
    return session._getDetectionMode();
  },
  /**
   * Returns the current face analysis state
   * @method _isFaceAnalysisEnabled
   * @private
   * @return True/False
   */
  '_isFaceAnalysisEnabled': function _isFaceAnalysisEnabled() {
    return session._isFaceAnalysisEnabled();
  },
  /**
   * Enables or disables the full face analysis
   * @method _setFaceAnalysisEnabled
   * @private
   * @param enabled - True to enable, False to disable
   * @return null
   */
  '_setFaceAnalysisEnabled': function _setFaceAnalysisEnabled(enabled) {
    return session._setFaceAnalysisEnabled(enabled);
  },
  /**
   * Imports the content of an old face reco DB
   * @method importOldDatabase
   * @param policy - Merging policy if an imported entry has the same name as an existing one.
It can be either:
"overwrite" to replace the existing entry by the imported one,
"merge" to merge data from both entries (if they don't relate to the same person, face recognition may fail),
"keep" to keep the existing entry and skip the imported one.
   * @return True if the import succeeded, false otherwise.
   */
  'importOldDatabase': function importOldDatabase(policy) {
    return session.importOldDatabase(policy);
  },
  /**
   * Returns the list of learned faces.
   * @method getLearnedFacesList
   * @return List of names
   */
  'getLearnedFacesList': function getLearnedFacesList() {
    return session.getLearnedFacesList();
  },
};
