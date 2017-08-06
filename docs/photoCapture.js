/**
 * @module photoCapture
 */
session.photoCapture = {
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
   * Enables or disables the half-press mode.
   * @method setHalfPressEnabled
   * @param enable - True to enable, false to disable.
   * @return null
   */
  'setHalfPressEnabled': function setHalfPressEnabled(enable) {
    return session.setHalfPressEnabled(enable);
  },
  /**
   * Manually (un)subscribes to ALVideoDevice.
   * @method halfPress
   * @return True if eveything went well, False otherwise.
   */
  'halfPress': function halfPress() {
    return session.halfPress();
  },
  /**
   * Takes one picture.
   * @method takePicture
   * @param folderPath - Folder where the picture is saved.
   * @param fileName - Filename used to save the picture.
   * @return Full file name of the picture saved on the disk: [filename]
   */
  'takePicture': function takePicture(folderPath, fileName) {
    return session.takePicture(folderPath, fileName);
  },
  /**
   * Takes one picture.
   * @method takePicture
   * @param folderPath - Folder where the picture is saved.
   * @param fileName - Filename used to save the picture.
   * @param overwrite - If false and the filename already exists, an error is thrown.
   * @return Full file name of the picture saved on the disk: [filename]
   */
  'takePicture': function takePicture(folderPath, fileName, overwrite) {
    return session.takePicture(folderPath, fileName, overwrite);
  },
  /**
   * Takes several pictures as quickly as possible
   * @method takePictures
   * @param numberOfPictures - Number of pictures to take
   * @param folderPath - Folder where the pictures are saved.
   * @param fileName - Filename used to save the pictures.
   * @return List of all saved files: [[filename1, filename2...]]
   */
  'takePictures': function takePictures(numberOfPictures, folderPath, fileName) {
    return session.takePictures(numberOfPictures, folderPath, fileName);
  },
  /**
   * Takes several pictures as quickly as possible
   * @method takePictures
   * @param numberOfPictures - Number of pictures to take
   * @param folderPath - Folder where the pictures are saved.
   * @param fileName - Filename used to save the pictures.
   * @param overwrite - If false and the filename already exists, an error is thrown.
   * @return List of all saved files: [[filename1, filename2...]]
   */
  'takePictures': function takePictures(numberOfPictures, folderPath, fileName, overwrite) {
    return session.takePictures(numberOfPictures, folderPath, fileName, overwrite);
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
   * Sets delay between two captures.
   * @method setCaptureInterval
   * @param captureInterval - New delay (in ms) between two pictures.
   * @return null
   */
  'setCaptureInterval': function setCaptureInterval(captureInterval) {
    return session.setCaptureInterval(captureInterval);
  },
  /**
   * Sets picture extension.
   * @method setPictureFormat
   * @param pictureFormat - New extension used to save pictures.
   * @return null
   */
  'setPictureFormat': function setPictureFormat(pictureFormat) {
    return session.setPictureFormat(pictureFormat);
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
   * @return Current frame resolution.
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
   * Returns current delay between captures.
   * @method getCaptureInterval
   * @return Current delay (in ms) between two pictures.
   */
  'getCaptureInterval': function getCaptureInterval() {
    return session.getCaptureInterval();
  },
  /**
   * Returns current picture format.
   * @method getPictureFormat
   * @return Current picture format.
   */
  'getPictureFormat': function getPictureFormat() {
    return session.getPictureFormat();
  },
  /**
   * Returns True if the "half press" mode is on.
   * @method isHalfPressEnabled
   * @return True or False.
   */
  'isHalfPressEnabled': function isHalfPressEnabled() {
    return session.isHalfPressEnabled();
  },
  /**
   * Returns True if the "half press" mode is on.
   * @method isHalfPressed
   * @return True or False.
   */
  'isHalfPressed': function isHalfPressed() {
    return session.isHalfPressed();
  },
};
