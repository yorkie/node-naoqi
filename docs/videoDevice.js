/**
 * @module videoDevice
 */
session.videoDevice = {
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
   * @method subscribeCamera
   * @param name - Name of the subscribing vision module
   * @param cameraIndex - Camera requested.
   * @param resolution - Resolution requested.{0=kQQVGA, 1=kQVGA, 2=kVGA, 3=k4VGA}
   * @param colorSpace - Colorspace requested.{0=kYuv, 9=kYUV422, 10=kYUV, 11=kRGB, 12=kHSY, 13=kBGR}
   * @param fps - Fps (frames per second) requested.{5, 10, 15, 30}
   * @return Name under which the vision module is known from ALVideoDevice
   */
  'subscribeCamera': function subscribeCamera(name, cameraIndex, resolution, colorSpace, fps) {
    return session.subscribeCamera(name, cameraIndex, resolution, colorSpace, fps);
  },
  /**
   * 
   * @method subscribeCameras
   * @param name - Name of the subscribing vision module
   * @param cameraIndexes - Cameras requested.
   * @param resolutions - Resolutions requested.{0=kQQVGA, 1=kQVGA, 2=kVGA, 3=k4VGA}
   * @param colorSpaces - Colorspaces requested.{0=kYuv, 9=kYUV422, 10=kYUV, 11=kRGB, 12=kHSY, 13=kBGR}
   * @param fps - Fps (frames per second) requested.{5, 10, 15, 30}
   * @return Name under which the vision module is known from ALVideoDevice
   */
  'subscribeCameras': function subscribeCameras(name, cameraIndexes, resolutions, colorSpaces, fps) {
    return session.subscribeCameras(name, cameraIndexes, resolutions, colorSpaces, fps);
  },
  /**
   * 
   * @method unsubscribe
   * @param nameId - Name under which the vision module is known from ALVideoDevice.
   * @return True if success, false otherwise
   */
  'unsubscribe': function unsubscribe(nameId) {
    return session.unsubscribe(nameId);
  },
  /**
   * 
   * @method getSubscribers
   * @return null
   */
  'getSubscribers': function getSubscribers() {
    return session.getSubscribers();
  },
  /**
   * 
   * @method getCameraIndexes
   * @return null
   */
  'getCameraIndexes': function getCameraIndexes() {
    return session.getCameraIndexes();
  },
  /**
   * Tells which camera is the default one
   * @method getActiveCamera
   * @return  0: top camera - 1: bottom camera
   */
  'getActiveCamera': function getActiveCamera() {
    return session.getActiveCamera();
  },
  /**
   * Set the active camera
   * @method setActiveCamera
   * @param activeCamera -  0: top camera - 1: bottom camera
   * @return null
   */
  'setActiveCamera': function setActiveCamera(activeCamera) {
    return session.setActiveCamera(activeCamera);
  },
  /**
   * 
   * @method getCameraModel
   * @param cameraIndex - Camera requested.
   * @return  1(kOV7670): VGA camera - 2(kMT9M114): HD camera
   */
  'getCameraModel': function getCameraModel(cameraIndex) {
    return session.getCameraModel(cameraIndex);
  },
  /**
   * 
   * @method isCameraSimulated
   * @param cameraIndex - Camera requested.
   * @return  True: Camera is simulated - False: Camera is real
   */
  'isCameraSimulated': function isCameraSimulated(cameraIndex) {
    return session.isCameraSimulated(cameraIndex);
  },
  /**
   * 
   * @method getCameraName
   * @param cameraIndex - Camera requested.
   * @return CameraTop - CameraBottom - CameraDepth
   */
  'getCameraName': function getCameraName(cameraIndex) {
    return session.getCameraName(cameraIndex);
  },
  /**
   * 
   * @method getFrameRate
   * @param cameraIndex - Camera requested.
   * @return null
   */
  'getFrameRate': function getFrameRate(cameraIndex) {
    return session.getFrameRate(cameraIndex);
  },
  /**
   * 
   * @method getResolution
   * @param cameraIndex - Camera requested.
   * @return null
   */
  'getResolution': function getResolution(cameraIndex) {
    return session.getResolution(cameraIndex);
  },
  /**
   * 
   * @method getColorSpace
   * @param cameraIndex - Camera requested.
   * @return null
   */
  'getColorSpace': function getColorSpace(cameraIndex) {
    return session.getColorSpace(cameraIndex);
  },
  /**
   * 
   * @method getHorizontalFOV
   * @param cameraIndex - Camera requested.
   * @return null
   */
  'getHorizontalFOV': function getHorizontalFOV(cameraIndex) {
    return session.getHorizontalFOV(cameraIndex);
  },
  /**
   * 
   * @method getVerticalFOV
   * @param cameraIndex - Camera requested.
   * @return null
   */
  'getVerticalFOV': function getVerticalFOV(cameraIndex) {
    return session.getVerticalFOV(cameraIndex);
  },
  /**
   * 
   * @method getParameterList
   * @param cameraIndex - Camera requested.
   * @return null
   */
  'getParameterList': function getParameterList(cameraIndex) {
    return session.getParameterList(cameraIndex);
  },
  /**
   * 
   * @method getParameter
   * @param cameraIndex - Camera requested.
   * @param parameterId - Camera parameter requested.
   * @return null
   */
  'getParameter': function getParameter(cameraIndex, parameterId) {
    return session.getParameter(cameraIndex, parameterId);
  },
  /**
   * 
   * @method getParameterRange
   * @param cameraIndex - Camera requested.
   * @param parameterId - Camera parameter requested.
   * @return null
   */
  'getParameterRange': function getParameterRange(cameraIndex, parameterId) {
    return session.getParameterRange(cameraIndex, parameterId);
  },
  /**
   * 
   * @method getParameterInfo
   * @param cameraIndex - Camera requested.
   * @param parameterId - Camera parameter requested.
   * @return null
   */
  'getParameterInfo': function getParameterInfo(cameraIndex, parameterId) {
    return session.getParameterInfo(cameraIndex, parameterId);
  },
  /**
   * 
   * @method setParameter
   * @param cameraIndex - Camera requested.
   * @param parameterId - Camera parameter requested.
   * @param value - value requested.
   * @return null
   */
  'setParameter': function setParameter(cameraIndex, parameterId, value) {
    return session.setParameter(cameraIndex, parameterId, value);
  },
  /**
   * 
   * @method setParameterToDefault
   * @param cameraIndex - Camera requested.
   * @param parameterId - Camera parameter requested.
   * @return null
   */
  'setParameterToDefault': function setParameterToDefault(cameraIndex, parameterId) {
    return session.setParameterToDefault(cameraIndex, parameterId);
  },
  /**
   * 
   * @method setAllParametersToDefault
   * @param cameraIndex - Camera requested.
   * @return null
   */
  'setAllParametersToDefault': function setAllParametersToDefault(cameraIndex) {
    return session.setAllParametersToDefault(cameraIndex);
  },
  /**
   * 
   * @method openCamera
   * @return null
   */
  'openCamera': function openCamera() {
    return session.openCamera();
  },
  /**
   * 
   * @method closeCamera
   * @return null
   */
  'closeCamera': function closeCamera() {
    return session.closeCamera();
  },
  /**
   * 
   * @method isCameraOpen
   * @return null
   */
  'isCameraOpen': function isCameraOpen() {
    return session.isCameraOpen();
  },
  /**
   * 
   * @method startCamera
   * @return null
   */
  'startCamera': function startCamera() {
    return session.startCamera();
  },
  /**
   * 
   * @method stopCamera
   * @return null
   */
  'stopCamera': function stopCamera() {
    return session.stopCamera();
  },
  /**
   * 
   * @method isCameraStarted
   * @return null
   */
  'isCameraStarted': function isCameraStarted() {
    return session.isCameraStarted();
  },
  /**
   * 
   * @method resetCamera
   * @return null
   */
  'resetCamera': function resetCamera() {
    return session.resetCamera();
  },
  /**
   * 
   * @method startFrameGrabber
   * @param cameraIndex - Camera requested.
   * @return null
   */
  'startFrameGrabber': function startFrameGrabber(cameraIndex) {
    return session.startFrameGrabber(cameraIndex);
  },
  /**
   * 
   * @method stopFrameGrabber
   * @param cameraIndex - Camera requested.
   * @return null
   */
  'stopFrameGrabber': function stopFrameGrabber(cameraIndex) {
    return session.stopFrameGrabber(cameraIndex);
  },
  /**
   * 
   * @method isFrameGrabberOff
   * @param cameraIndex - Camera requested.
   * @return null
   */
  'isFrameGrabberOff': function isFrameGrabberOff(cameraIndex) {
    return session.isFrameGrabberOff(cameraIndex);
  },
  /**
   * 
   * @method hasDepthCamera
   * @return null
   */
  'hasDepthCamera': function hasDepthCamera() {
    return session.hasDepthCamera();
  },
  /**
   * 
   * @method getFrameRate
   * @param name - Name of the subscribing vision module
   * @return null
   */
  'getFrameRate': function getFrameRate(name) {
    return session.getFrameRate(name);
  },
  /**
   * 
   * @method setFrameRate
   * @param name - Name of the subscribing vision module
   * @param frameRate - Frame Rate requested.
   * @return null
   */
  'setFrameRate': function setFrameRate(name, frameRate) {
    return session.setFrameRate(name, frameRate);
  },
  /**
   * 
   * @method getActiveCamera
   * @param name - Name of the subscribing vision module
   * @return null
   */
  'getActiveCamera': function getActiveCamera(name) {
    return session.getActiveCamera(name);
  },
  /**
   * 
   * @method setActiveCamera
   * @param name - Name of the subscribing vision module
   * @param cameraIndex - Camera requested.
   * @return null
   */
  'setActiveCamera': function setActiveCamera(name, cameraIndex) {
    return session.setActiveCamera(name, cameraIndex);
  },
  /**
   * 
   * @method getResolution
   * @param name - Name of the subscribing vision module
   * @return null
   */
  'getResolution': function getResolution(name) {
    return session.getResolution(name);
  },
  /**
   * 
   * @method setResolution
   * @param name - Name of the subscribing vision module
   * @param resolution - Resolution requested.
   * @return null
   */
  'setResolution': function setResolution(name, resolution) {
    return session.setResolution(name, resolution);
  },
  /**
   * 
   * @method getColorSpace
   * @param name - Name of the subscribing vision module
   * @return null
   */
  'getColorSpace': function getColorSpace(name) {
    return session.getColorSpace(name);
  },
  /**
   * 
   * @method setColorSpace
   * @param name - Name of the subscribing vision module
   * @param colorSpace - Color Space requested.
   * @return null
   */
  'setColorSpace': function setColorSpace(name, colorSpace) {
    return session.setColorSpace(name, colorSpace);
  },
  /**
   * 
   * @method getCameraParameterList
   * @param name - Name of the subscribing vision module
   * @return null
   */
  'getCameraParameterList': function getCameraParameterList(name) {
    return session.getCameraParameterList(name);
  },
  /**
   * 
   * @method getCameraParameter
   * @param name - Name of the subscribing vision module
   * @param parameterId - Camera parameter requested.
   * @return null
   */
  'getCameraParameter': function getCameraParameter(name, parameterId) {
    return session.getCameraParameter(name, parameterId);
  },
  /**
   * 
   * @method getCameraParameterRange
   * @param name - Name of the subscribing vision module
   * @param parameterId - Camera parameter requested.
   * @return null
   */
  'getCameraParameterRange': function getCameraParameterRange(name, parameterId) {
    return session.getCameraParameterRange(name, parameterId);
  },
  /**
   * 
   * @method getCameraParameterInfo
   * @param name - Name of the subscribing vision module
   * @param parameterId - Camera parameter requested.
   * @return null
   */
  'getCameraParameterInfo': function getCameraParameterInfo(name, parameterId) {
    return session.getCameraParameterInfo(name, parameterId);
  },
  /**
   * 
   * @method setCameraParameter
   * @param name - Name of the subscribing vision module
   * @param parameterId - Camera parameter requested.
   * @param value - value requested.
   * @return null
   */
  'setCameraParameter': function setCameraParameter(name, parameterId, value) {
    return session.setCameraParameter(name, parameterId, value);
  },
  /**
   * 
   * @method setCameraParameterToDefault
   * @param name - Name of the subscribing vision module
   * @param parameterId - Camera parameter requested.
   * @return null
   */
  'setCameraParameterToDefault': function setCameraParameterToDefault(name, parameterId) {
    return session.setCameraParameterToDefault(name, parameterId);
  },
  /**
   * 
   * @method setAllCameraParametersToDefault
   * @param name - Name of the subscribing vision module
   * @return null
   */
  'setAllCameraParametersToDefault': function setAllCameraParametersToDefault(name) {
    return session.setAllCameraParametersToDefault(name);
  },
  /**
   * Retrieves the latest image from the video source and returns a pointer to the locked ALImage, with data array pointing directly to raw data. There is no format conversion and no copy of the raw buffer.
Warning: When image is not necessary anymore, a call to releaseDirectRawImage() is requested.
Warning: When using this mode for several vision module, if they need raw data for more than 25ms check that you have strictly less modules in this mode than the amount of kernel buffers!!
Warning: Release all kernel buffers before any action requesting a modification in camera running mode (e.g. resolution, switch between cameras).
   * @method getDirectRawImageLocal
   * @param name - Name of the subscribing vision module
   * @return Pointer to the locked image buffer, NULL if error.
Warning, image pointer is valid only for C++ dynamic library.
   */
  'getDirectRawImageLocal': function getDirectRawImageLocal(name) {
    return session.getDirectRawImageLocal(name);
  },
  /**
   * Fills an ALValue with data coming directly from raw buffer (no format conversion).

   * @method getDirectRawImageRemote
   * @param name - Name of the subscribing vision module
   * @return Array containing image informations : 
    [0] : width;
    [1] : height;
    [2] : number of layers;
    [3] : ColorSpace;
    [4] : time stamp (highest 32 bits);
    [5] : time stamp (lowest 32 bits);
    [6] : array of size height * width * nblayers containing image data;
    [7] : cameraID;
    [8] : left angle;
    [9] : top angle;
    [10] : right angle;
    [11] : bottom angle;

   */
  'getDirectRawImageRemote': function getDirectRawImageRemote(name) {
    return session.getDirectRawImageRemote(name);
  },
  /**
   * Release image buffer locked by getDirectRawImageLocal().

   * @method releaseDirectRawImage
   * @param name - Name of the subscribing vision module
   * @return true if success
   */
  'releaseDirectRawImage': function releaseDirectRawImage(name) {
    return session.releaseDirectRawImage(name);
  },
  /**
   * Applies transformations to the last image from video source and returns a pointer to a locked ALImage.
When image is not necessary anymore, a call to releaseImage() is requested.

   * @method getImageLocal
   * @param name - Name of the subscribing vision module
   * @return Pointer of the locked image buffer, NULL if error.Warning, image pointer is valid only for C++ dynamic library.
   */
  'getImageLocal': function getImageLocal(name) {
    return session.getImageLocal(name);
  },
  /**
   * Applies transformations to the last image from video source and fills pFrameOut.

   * @method getImageRemote
   * @param name - Name of the subscribing vision module
   * @return Array containing image informations : 
    [0] : width;
    [1] : height;
    [2] : number of layers;
    [3] : ColorSpace;
    [4] : time stamp (highest 32 bits);
    [5] : time stamp (lowest 32 bits);
    [6] : array of size height * width * nblayers containing image data;
    [7] : cameraID;
    [8] : left angle;
    [9] : top angle;
    [10] : right angle;
    [11] : bottom angle;

   */
  'getImageRemote': function getImageRemote(name) {
    return session.getImageRemote(name);
  },
  /**
   * Release image buffer locked by getImageLocal().
If G.V.M. had no locked image buffer, does nothing.
   * @method releaseImage
   * @param name - Name of the subscribing vision module
   * @return true if success
   */
  'releaseImage': function releaseImage(name) {
    return session.releaseImage(name);
  },
  /**
   * 
   * @method getActiveCameras
   * @param name - Name of the subscribing vision module
   * @return null
   */
  'getActiveCameras': function getActiveCameras(name) {
    return session.getActiveCameras(name);
  },
  /**
   * 
   * @method setActiveCameras
   * @param name - Name of the subscribing vision module
   * @param cameraIndexes - Cameras requested.
   * @return null
   */
  'setActiveCameras': function setActiveCameras(name, cameraIndexes) {
    return session.setActiveCameras(name, cameraIndexes);
  },
  /**
   * 
   * @method getResolutions
   * @param name - Name of the subscribing vision module
   * @return null
   */
  'getResolutions': function getResolutions(name) {
    return session.getResolutions(name);
  },
  /**
   * 
   * @method setResolutions
   * @param name - Name of the subscribing vision module
   * @param resolutions - Resolutions requested.
   * @return null
   */
  'setResolutions': function setResolutions(name, resolutions) {
    return session.setResolutions(name, resolutions);
  },
  /**
   * 
   * @method getColorSpaces
   * @param name - Name of the subscribing vision module
   * @return null
   */
  'getColorSpaces': function getColorSpaces(name) {
    return session.getColorSpaces(name);
  },
  /**
   * 
   * @method setColorSpaces
   * @param name - Name of the subscribing vision module
   * @param colorSpaces - Color Spaces requested.
   * @return null
   */
  'setColorSpaces': function setColorSpaces(name, colorSpaces) {
    return session.setColorSpaces(name, colorSpaces);
  },
  /**
   * 
   * @method getCamerasParameter
   * @param name - Name of the subscribing vision module
   * @param parameterId - Camera parameter requested.
   * @return null
   */
  'getCamerasParameter': function getCamerasParameter(name, parameterId) {
    return session.getCamerasParameter(name, parameterId);
  },
  /**
   * 
   * @method setCamerasParameter
   * @param name - Name of the subscribing vision module
   * @param parameterId - Camera parameter requested.
   * @param values - values requested.
   * @return null
   */
  'setCamerasParameter': function setCamerasParameter(name, parameterId, values) {
    return session.setCamerasParameter(name, parameterId, values);
  },
  /**
   * 
   * @method setCamerasParameterToDefault
   * @param name - Name of the subscribing vision module
   * @param parameterId - Camera parameter requested.
   * @return null
   */
  'setCamerasParameterToDefault': function setCamerasParameterToDefault(name, parameterId) {
    return session.setCamerasParameterToDefault(name, parameterId);
  },
  /**
   * Retrieves the latest image from the video source and returns a pointer to the locked ALImage, with data array pointing directly to raw data. There is no format conversion and no copy of the raw buffer.
Warning: When image is not necessary anymore, a call to releaseDirectRawImage() is requested.
Warning: When using this mode for several vision module, if they need raw data for more than 25ms check that you have strictly less modules in this mode than the amount of kernel buffers!!
Warning: Release all kernel buffers before any action requesting a modification in camera running mode (e.g. resolution, switch between cameras).
   * @method getDirectRawImagesLocal
   * @param name - Name of the subscribing vision module
   * @return Array of pointer to the locked image buffer, NULL if error.
Warning, image pointer is valid only for C++ dynamic library.
   */
  'getDirectRawImagesLocal': function getDirectRawImagesLocal(name) {
    return session.getDirectRawImagesLocal(name);
  },
  /**
   * Fills an ALValue with data coming directly from raw buffer (no format conversion).

   * @method getDirectRawImagesRemote
   * @param name - Name of the subscribing vision module
   * @return Array containing image informations : 
    [0] : width;
    [1] : height;
    [2] : number of layers;
    [3] : ColorSpace;
    [4] : time stamp (highest 32 bits);
    [5] : time stamp (lowest 32 bits);
    [6] : array of size height * width * nblayers containing image data;
    [7] : cameraID;
    [8] : left angle;
    [9] : top angle;
    [10] : right angle;
    [11] : bottom angle;

   */
  'getDirectRawImagesRemote': function getDirectRawImagesRemote(name) {
    return session.getDirectRawImagesRemote(name);
  },
  /**
   * Release image buffer locked by getDirectRawImagesLocal().

   * @method releaseDirectRawImages
   * @param name - Name of the subscribing vision module
   * @return true if success
   */
  'releaseDirectRawImages': function releaseDirectRawImages(name) {
    return session.releaseDirectRawImages(name);
  },
  /**
   * Applies transformations to the last image from video source and returns a pointer to a locked ALImage.
When image is not necessary anymore, a call to releaseImage() is requested.

   * @method getImagesLocal
   * @param name - Name of the subscribing vision module
   * @return Array of pointer of the locked image buffer, NULL if error.Warning, image pointer is valid only for C++ dynamic library.
   */
  'getImagesLocal': function getImagesLocal(name) {
    return session.getImagesLocal(name);
  },
  /**
   * Applies transformations to the last image from video source and fills pFrameOut.

   * @method getImagesRemote
   * @param name - Name of the subscribing vision module
   * @return Array containing image informations : 
    [0] : width;
    [1] : height;
    [2] : number of layers;
    [3] : ColorSpace;
    [4] : time stamp (highest 32 bits);
    [5] : time stamp (lowest 32 bits);
    [6] : array of size height * width * nblayers containing image data;
    [7] : cameraID;
    [8] : left angle;
    [9] : top angle;
    [10] : right angle;
    [11] : bottom angle;

   */
  'getImagesRemote': function getImagesRemote(name) {
    return session.getImagesRemote(name);
  },
  /**
   * Release image buffer locked by getImageLocal().
If G.V.M. had no locked image buffer, does nothing.
   * @method releaseImages
   * @param name - Name of the subscribing vision module
   * @return true if success
   */
  'releaseImages': function releaseImages(name) {
    return session.releaseImages(name);
  },
  /**
   * Background record of an .arv raw format video from the images processed by a vision module
Actualy it take picture each time the vision module call getDirectRawImageRemote().
   * @method recordVideo
   * @param id - Name under which the G.V.M. is known from the V.I.M.
   * @param path - path/name of the video to be recorded
   * @param totalNumber - number of images to be recorded. 0xFFFFFFFF for "unlimited"
   * @param period - one image recorded every pPeriod images
   * @return true if success
   */
  'recordVideo': function recordVideo(id, path, totalNumber, period) {
    return session.recordVideo(id, path, totalNumber, period);
  },
  /**
   * Stop writing the video sequence
   * @method stopVideo
   * @param id - Name under which the G.V.M. is known from ALVideoDevice.
   * @return true if success
   */
  'stopVideo': function stopVideo(id) {
    return session.stopVideo(id);
  },
  /**
   * 
   * @method getAngularPositionFromImagePosition
   * @return null
   */
  'getAngularPositionFromImagePosition': function getAngularPositionFromImagePosition() {
    return session.getAngularPositionFromImagePosition();
  },
  /**
   * 
   * @method getImagePositionFromAngularPosition
   * @return null
   */
  'getImagePositionFromAngularPosition': function getImagePositionFromAngularPosition() {
    return session.getImagePositionFromAngularPosition();
  },
  /**
   * 
   * @method getAngularSizeFromImageSize
   * @return null
   */
  'getAngularSizeFromImageSize': function getAngularSizeFromImageSize() {
    return session.getAngularSizeFromImageSize();
  },
  /**
   * 
   * @method getImageSizeFromAngularSize
   * @return null
   */
  'getImageSizeFromAngularSize': function getImageSizeFromAngularSize() {
    return session.getImageSizeFromAngularSize();
  },
  /**
   * 
   * @method getImageInfoFromAngularInfo
   * @return null
   */
  'getImageInfoFromAngularInfo': function getImageInfoFromAngularInfo() {
    return session.getImageInfoFromAngularInfo();
  },
  /**
   * 
   * @method getImageInfoFromAngularInfoWithResolution
   * @return null
   */
  'getImageInfoFromAngularInfoWithResolution': function getImageInfoFromAngularInfoWithResolution() {
    return session.getImageInfoFromAngularInfoWithResolution();
  },
  /**
   * Allow image buffer pushing
   * @method putImage
   * @param cameraIndex - Camera requested.
   * @param timeStamp - time stamp of the image. If empty, use current time.
   * @param width - int width of image among 1280*960, 640*480, 320*240, 240*160
   * @param height - int height of image
   * @param colorSpace - colorSpace of image.
   * @param imageBuffer - Image buffer in bitmap form
   * @return true if the put succeeded
   */
  'putImage': function putImage(cameraIndex, timeStamp, width, height, colorSpace, imageBuffer) {
    return session.putImage(cameraIndex, timeStamp, width, height, colorSpace, imageBuffer);
  },
  /**
   * called by the simulator to know expected image parameters
   * @method getExpectedImageParameters
   * @param cameraIndex - Camera requested.
   * @return ALValue of expected parameters, [int resolution, int framerate]
   */
  'getExpectedImageParameters': function getExpectedImageParameters(cameraIndex) {
    return session.getExpectedImageParameters(cameraIndex);
  },
  /**
   * Get average environment luminance.
   * @method _getExternalBrightness
   * @private
   * @param cameraIndex - Camera requested.
   * @return The average brightness luminance == (15680-Texposure)*256+AverageLuminance
   */
  '_getExternalBrightness': function _getExternalBrightness(cameraIndex) {
    return session._getExternalBrightness(cameraIndex);
  },
  /**
   * Callback when client is disconnected
   * @method onClientDisconnected
   * @param eventName - The echoed event name
   * @param eventContents - The name of the client that has disconnected
   * @param message - The message give when subscribing.
   * @return null
   */
  'onClientDisconnected': function onClientDisconnected(eventName, eventContents, message) {
    return session.onClientDisconnected(eventName, eventContents, message);
  },
  /**
   * Register to ALVideoDevice (formerly Video Input Module/V.I.M.). When a General Video Module(G.V.M.) registers to ALVideoDevice, a buffer of the requested image format is added to the buffers list.
Returns the name under which the G.V.M. is registered to ALVideoDevice (useful when two G.V.M. try to register using the same name
   * @method subscribe
   * @param gvmName - Name of the subscribing G.V.M.
   * @param resolution - Resolution requested. {0: kQQVGA, 1: kQVGA, 2: kVGA}
   * @param colorSpace - Colorspace requested. {0: kYuv, 9: kYUV422, 10: kYUV, 11: kRGB, 12: kHSY, 13: kBGR}
   * @param fps - Fps (frames per second) requested. {5, 10, 15, 30}
   * @return Name under which the G.V.M. is known from ALVideoDevice, 0 if failed.
   */
  'subscribe': function subscribe(gvmName, resolution, colorSpace, fps) {
    return session.subscribe(gvmName, resolution, colorSpace, fps);
  },
  /**
   * Used to unsubscribe all instances for a given G.V.M. (e.g. VisionModule and VisionModule_5) from ALVideoDevice.
   * @method unsubscribeAllInstances
   * @param id - Root name of the G.V.M. (e.g. with the example above this will be VisionModule).
   * @return null
   */
  'unsubscribeAllInstances': function unsubscribeAllInstances(id) {
    return session.unsubscribeAllInstances(id);
  },
  /**
   * Deprecated
   * @method getVIMResolution
   * @return Resolution of the default active camera.
   */
  'getVIMResolution': function getVIMResolution() {
    return session.getVIMResolution();
  },
  /**
   * Deprecated
   * @method getVIMColorSpace
   * @return Color space of the default active camera.
   */
  'getVIMColorSpace': function getVIMColorSpace() {
    return session.getVIMColorSpace();
  },
  /**
   * Deprecated
   * @method getVIMFrameRate
   * @return Frame rate of the default active camera.
   */
  'getVIMFrameRate': function getVIMFrameRate() {
    return session.getVIMFrameRate();
  },
  /**
   * Deprecated
   * @method getGVMResolution
   * @return null
   */
  'getGVMResolution': function getGVMResolution() {
    return session.getGVMResolution();
  },
  /**
   * Deprecated
   * @method getGVMColorSpace
   * @return null
   */
  'getGVMColorSpace': function getGVMColorSpace() {
    return session.getGVMColorSpace();
  },
  /**
   * Deprecated
   * @method getGVMFrameRate
   * @return null
   */
  'getGVMFrameRate': function getGVMFrameRate() {
    return session.getGVMFrameRate();
  },
  /**
   * Deprecated
   * @method getCameraModelID
   * @return null
   */
  'getCameraModelID': function getCameraModelID() {
    return session.getCameraModelID();
  },
  /**
   * Sets the value of a specific parameter for the video source.
   * @method setParam
   * @param param - Camera parameter requested.
   * @param newValue - value requested.
   * @return null
   */
  'setParam': function setParam(param, newValue) {
    return session.setParam(param, newValue);
  },
  /**
   * Sets the value of a specific parameter for the video source.
   * @method setParam
   * @param param - Camera parameter requested.
   * @param newValue - value requested.
   * @param cameraIndex - Camera requested.
   * @return null
   */
  'setParam': function setParam(param, newValue, cameraIndex) {
    return session.setParam(param, newValue, cameraIndex);
  },
  /**
   * Deprecated
   * @method getParam
   * @param param - parameter requested for the current default camera.
   * @return value of the parameter requested.
   */
  'getParam': function getParam(param) {
    return session.getParam(param);
  },
  /**
   * Deprecated
   * @method getParam
   * @param param - Camera parameter requested.
   * @param cameraIndex - Camera requested.
   * @return value of the parameter requested.
   */
  'getParam': function getParam(param, cameraIndex) {
    return session.getParam(param, cameraIndex);
  },
  /**
   * Deprecated
   * @method setParamDefault
   * @param param - parameter to reset.
   * @return null
   */
  'setParamDefault': function setParamDefault(param) {
    return session.setParamDefault(param);
  },
  /**
   * Deprecated
   * @method getAngPosFromImgPos
   * @param imgPos - Image Position as a couple X,Y in [0.0;1.0].
   * @return Angular position (rad).
   */
  'getAngPosFromImgPos': function getAngPosFromImgPos(imgPos) {
    return session.getAngPosFromImgPos(imgPos);
  },
  /**
   * Deprecated
   * @method getImgPosFromAngPos
   * @param angPos - Angular Position in radian.
   * @return position (normalized).
   */
  'getImgPosFromAngPos': function getImgPosFromAngPos(angPos) {
    return session.getImgPosFromAngPos(angPos);
  },
  /**
   * Deprecated
   * @method getAngSizeFromImgSize
   * @param imgSize - Image size normalized.
   * @return Angular size (rad).
   */
  'getAngSizeFromImgSize': function getAngSizeFromImgSize(imgSize) {
    return session.getAngSizeFromImgSize(imgSize);
  },
  /**
   * Deprecated
   * @method getImgSizeFromAngSize
   * @param angSize - Angular size in radian.
   * @return Image size (normalized).
   */
  'getImgSizeFromAngSize': function getImgSizeFromAngSize(angSize) {
    return session.getImgSizeFromAngSize(angSize);
  },
  /**
   * Deprecated
   * @method getImgInfoFromAngInfo
   * @param angInfo - Angular info in radian.
   * @return Image info.
   */
  'getImgInfoFromAngInfo': function getImgInfoFromAngInfo(angInfo) {
    return session.getImgInfoFromAngInfo(angInfo);
  },
  /**
   * Deprecated
   * @method getImgInfoFromAngInfoWithRes
   * @param angInfo - Angular info in radian.
   * @param resolution - resolution index.
   * @return Image info.
   */
  'getImgInfoFromAngInfoWithRes': function getImgInfoFromAngInfoWithRes(angInfo, resolution) {
    return session.getImgInfoFromAngInfoWithRes(angInfo, resolution);
  },
  /**
   * Deprecated
   * @method resolutionToSizes
   * @param resolution - resolution index (e.g. 0: kQQVGA, 1: kQVGA, 2: kVGA, 3: k4VGA).
   * @return Array of value [0]: width, [1]: height.
   */
  'resolutionToSizes': function resolutionToSizes(resolution) {
    return session.resolutionToSizes(resolution);
  },
  /**
   * Deprecated
   * @method sizesToResolution
   * @param width - Image width.
   * @param height - Image height.
   * @return Resolution index {0: kQQVGA, 1: kQVGA, 2: kVGA}
   */
  'sizesToResolution': function sizesToResolution(width, height) {
    return session.sizesToResolution(width, height);
  },
  /**
   * called by the simulator to know expected image parameters
   * @method getExpectedImageParameters
   * @return ALValue of expected parameters, [int resolution, int framerate]
   */
  'getExpectedImageParameters': function getExpectedImageParameters() {
    return session.getExpectedImageParameters();
  },
  /**
   * called by the simulator to know expected image parameters
   * @method setSimCamInputSize
   * @param width - int width of image among 1280, 640, 320, 240, 120, 60
   * @param height - int height of image among 960, 480, 240, 160, 80, 40
   * @return true if setSize worked
   */
  'setSimCamInputSize': function setSimCamInputSize(width, height) {
    return session.setSimCamInputSize(width, height);
  },
  /**
   * Allow image buffer pushing
   * @method putImage
   * @param imageBuffer - Image buffer in bitmap form
   * @return true if the put succeeded
   */
  'putImage': function putImage(imageBuffer) {
    return session.putImage(imageBuffer);
  },
  /**
   * Allow image buffer pushing
   * @method putImage
   * @param cameraIndex - Camera requested.
   * @param width - int width of image among 1280*960, 640*480, 320*240, 240*160
   * @param height - int height of image
   * @param imageBuffer - Image buffer in bitmap form
   * @return true if the put succeeded
   */
  'putImage': function putImage(cameraIndex, width, height, imageBuffer) {
    return session.putImage(cameraIndex, width, height, imageBuffer);
  },
  /**
   * Advanced method that opens and initialize video source device if it was not before.
Note that the first client subscribing to ALVideoDevice will launch it automatically.
   * @method startFrameGrabber
   * @return true if success
   */
  'startFrameGrabber': function startFrameGrabber() {
    return session.startFrameGrabber();
  },
  /**
   * Advanced method that close video source device.
Note that the last client unsubscribing to ALVideoDevice will launch it automatically.
   * @method stopFrameGrabber
   * @return true if success
   */
  'stopFrameGrabber': function stopFrameGrabber() {
    return session.stopFrameGrabber();
  },
  /**
   * Advanced method that asks if the framegrabber is off.
   * @method isFrameGrabberOff
   * @return true if off
   */
  'isFrameGrabberOff': function isFrameGrabberOff() {
    return session.isFrameGrabberOff();
  },
  /**
   * Deprecated
   * @method getHorizontalAperture
   * @param cameraIndex - Camera requested.
   * @return Horizontal aperture
   */
  'getHorizontalAperture': function getHorizontalAperture(cameraIndex) {
    return session.getHorizontalAperture(cameraIndex);
  },
  /**
   * Deprecated
   * @method getVerticalAperture
   * @param cameraIndex - Camera requested.
   * @return Vertical aperture
   */
  'getVerticalAperture': function getVerticalAperture(cameraIndex) {
    return session.getVerticalAperture(cameraIndex);
  },
};
