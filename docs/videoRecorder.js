/**
 * @module videoRecorder
 */
session.videoRecorder = {
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
   * Starts recording a video. Please note that only one record at a time can be made.
   * @method startRecording
   * @param folderPath - Folder where the video is saved.
   * @param fileName - Filename used to save the video.
   * @return null
   */
  'startRecording': function startRecording(folderPath, fileName) {
    return session.startRecording(folderPath, fileName);
  },
  /**
   * Starts recording a video. Please note that only one record at a time can be made.
   * @method startRecording
   * @param folderPath - Folder where the video is saved.
   * @param fileName - Filename used to save the video.
   * @param overwrite - If false and the filename already exists, an exception is thrown.
   * @return null
   */
  'startRecording': function startRecording(folderPath, fileName, overwrite) {
    return session.startRecording(folderPath, fileName, overwrite);
  },
  /**
   * Stops a video record that was launched with startRecording(). The function returns the number of frames that were recorded, as well as the video absolute file name.
   * @method stopRecording
   * @return Array of two elements [numRecordedFrames, recordAbsolutePath]
   */
  'stopRecording': function stopRecording() {
    return session.stopRecording();
  },
  /**
   * Are we currently recording a video
   * @method isRecording
   * @return True/False
   */
  'isRecording': function isRecording() {
    return session.isRecording();
  },
  /**
   * private
   * @method _recordVideo
   * @private
   * @return null
   */
  '_recordVideo': function _recordVideo() {
    return session._recordVideo();
  },
  /**
   * Sets camera ID.
   * @method setCameraID
   * @param cameraID - ID of the camera to use.
   * @return null
   */
  'setCameraID': function setCameraID(cameraID) {
    return session.setCameraID(cameraID);
  },
  /**
   * Sets resolution.
   * @method setResolution
   * @param resolution - New frame resolution.
   * @return null
   */
  'setResolution': function setResolution(resolution) {
    return session.setResolution(resolution);
  },
  /**
   * Sets color space.
   * @method setColorSpace
   * @param colorSpace - New color space.
   * @return null
   */
  'setColorSpace': function setColorSpace(colorSpace) {
    return session.setColorSpace(colorSpace);
  },
  /**
   * Sets frame rate.
   * @method setFrameRate
   * @param frameRate - New frame rate.
   * @return null
   */
  'setFrameRate': function setFrameRate(frameRate) {
    return session.setFrameRate(frameRate);
  },
  /**
   * Sets video format.
   * @method setVideoFormat
   * @param videoFormat - New video format.
   * @return null
   */
  'setVideoFormat': function setVideoFormat(videoFormat) {
    return session.setVideoFormat(videoFormat);
  },
  /**
   * Returns current camera ID.
   * @method getCameraID
   * @return Current camera ID.
   */
  'getCameraID': function getCameraID() {
    return session.getCameraID();
  },
  /**
   * Returns current resolution.
   * @method getResolution
   * @return Current resolution.
   */
  'getResolution': function getResolution() {
    return session.getResolution();
  },
  /**
   * Returns current color space.
   * @method getColorSpace
   * @return Current color space.
   */
  'getColorSpace': function getColorSpace() {
    return session.getColorSpace();
  },
  /**
   * Returns current frame rate.
   * @method getFrameRate
   * @return Current frame rate.
   */
  'getFrameRate': function getFrameRate() {
    return session.getFrameRate();
  },
  /**
   * Returns current video format.
   * @method getVideoFormat
   * @return Current video format.
   */
  'getVideoFormat': function getVideoFormat() {
    return session.getVideoFormat();
  },
};
