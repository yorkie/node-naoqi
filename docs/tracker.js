/**
 * @module tracker
 */
session.tracker = {
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
   * Returns the [x, y, z] position of the target in FRAME_TORSO. This is done assuming an average target size, so it might not be very accurate.
   * @method getTargetPosition
   * @param pFrame - target frame {FRAME_TORSO = 0, FRAME_WORLD = 1, FRAME_ROBOT = 2}.
   * @return Vector of 3 floats corresponding to the target position 3D. 
   */
  'getTargetPosition': function getTargetPosition(pFrame) {
    return session.getTargetPosition(pFrame);
  },
  /**
   * Only work with LandMarks target name. Returns the [x, y, z, wx, wy, wz] position of the robot in coordinate system setted with setMap API. This is done assuming an average target size, so it might not be very accurate.
   * @method getRobotPosition
   * @return Vector of 6 floats corresponding to the robot position 6D.
   */
  'getRobotPosition': function getRobotPosition() {
    return session.getRobotPosition();
  },
  /**
   * Return true if Tracker is running.
   * @method isActive
   * @return True if Tracker is running.
   */
  'isActive': function isActive() {
    return session.isActive();
  },
  /**
   * Return true if a new target was detected.
   * @method isNewTargetDetected
   * @return True if a new target was detected since the last getTargetPosition().
   */
  'isNewTargetDetected': function isNewTargetDetected() {
    return session.isNewTargetDetected();
  },
  /**
   * Set the robot position relative to target in Move mode.
   * @method setRelativePosition
   * @param target - Set the final goal of the tracking. Could be [distance, thresholdX, thresholdY] or with LandMarks target name [coordX, coordY, coordWz, thresholdX, thresholdY, thresholdWz].
   * @return null
   */
  'setRelativePosition': function setRelativePosition(target) {
    return session.setRelativePosition(target);
  },
  /**
   * Get the robot position relative to target in Move mode.
   * @method getRelativePosition
   * @return The final goal of the tracking. Could be [distance, thresholdX, thresholdY] or with LandMarks target name [coordX, coordY, coordWz, thresholdX, thresholdY, thresholdWz].
   */
  'getRelativePosition': function getRelativePosition() {
    return session.getRelativePosition();
  },
  /**
   * Only work with LandMarks target name. Set objects coordinates. Could be [[first object coordinate], [second object coordinate]] [[x1, y1, z1], [x2, y2, z2]]
   * @method setTargetCoordinates
   * @param pCoord - objects coordinates.
   * @return null
   */
  'setTargetCoordinates': function setTargetCoordinates(pCoord) {
    return session.setTargetCoordinates(pCoord);
  },
  /**
   * Only work with LandMarks target name. Get objects coordinates. Could be [[first object coordinate], [second object coordinate]] [[x1, y1, z1], [x2, y2, z2]]
   * @method getTargetCoordinates
   * @return objects coordinates.
   */
  'getTargetCoordinates': function getTargetCoordinates() {
    return session.getTargetCoordinates();
  },
  /**
   * Set the tracker in the predefined mode.Could be "Head", "WholeBody" or "Move".
   * @method setMode
   * @param pMode - a predefined mode.
   * @return null
   */
  'setMode': function setMode(pMode) {
    return session.setMode(pMode);
  },
  /**
   * Get the tracker current mode.
   * @method getMode
   * @return The current tracker mode.
   */
  'getMode': function getMode() {
    return session.getMode();
  },
  /**
   * Get the list of predefined mode.
   * @method getAvailableModes
   * @return List of predefined mode.
   */
  'getAvailableModes': function getAvailableModes() {
    return session.getAvailableModes();
  },
  /**
   * Enables/disables the target search process. Target search process occurs only when the target is lost.
   * @method toggleSearch
   * @param pSearch - If true and if the target is lost, the robot moves the head in order to find the target. If false and if the target is lost the robot does not move.
   * @return null
   */
  'toggleSearch': function toggleSearch(pSearch) {
    return session.toggleSearch(pSearch);
  },
  /**
   * Set search process fraction max speed.
   * @method setSearchFractionMaxSpeed
   * @param pFractionMaxSpeed - a fraction max speed.
   * @return null
   */
  'setSearchFractionMaxSpeed': function setSearchFractionMaxSpeed(pFractionMaxSpeed) {
    return session.setSearchFractionMaxSpeed(pFractionMaxSpeed);
  },
  /**
   * Get search process fraction max speed.
   * @method getSearchFractionMaxSpeed
   * @return a fraction max speed.
   */
  'getSearchFractionMaxSpeed': function getSearchFractionMaxSpeed() {
    return session.getSearchFractionMaxSpeed();
  },
  /**
   * Return true if the target search process is enabled.
   * @method isSearchEnabled
   * @return If true the target search process is enabled.
   */
  'isSearchEnabled': function isSearchEnabled() {
    return session.isSearchEnabled();
  },
  /**
   * Stop the tracker.
   * @method stopTracker
   * @return null
   */
  'stopTracker': function stopTracker() {
    return session.stopTracker();
  },
  /**
   * Return true if the target was lost.
   * @method isTargetLost
   * @return True if the target was lost.
   */
  'isTargetLost': function isTargetLost() {
    return session.isTargetLost();
  },
  /**
   * Set the predefided target to track and start the tracking process if not started.
   * @method track
   * @param pTarget - a predefined target to track.Could be "RedBall", "Face", "LandMark", "LandMarks", "People" or "Sound".
   * @return null
   */
  'track': function track(pTarget) {
    return session.track(pTarget);
  },
  /**
   * Track event and start the tracking process if not started.
   * @method trackEvent
   * @param pEventName - a event name to track.
   * @return null
   */
  'trackEvent': function trackEvent(pEventName) {
    return session.trackEvent(pEventName);
  },
  /**
   * Register a predefined target. Subscribe to corresponding extractor if Tracker is running..
   * @method registerTarget
   * @param pTarget - a predefined target to track.Could be "RedBall", "Face", "LandMark", "LandMarks", "People" or "Sound".
   * @param pParams - a target parameters. (RedBall : set diameter of ball.
   * @return null
   */
  'registerTarget': function registerTarget(pTarget, pParams) {
    return session.registerTarget(pTarget, pParams);
  },
  /**
   * Set a period for the corresponding target name extractor.
   * @method setExtractorPeriod
   * @param pTarget - a predefined target name.Could be "RedBall", "Face", "LandMark", "LandMarks", "People" or "Sound".
   * @param pPeriod - a period in milliseconds
   * @return null
   */
  'setExtractorPeriod': function setExtractorPeriod(pTarget, pPeriod) {
    return session.setExtractorPeriod(pTarget, pPeriod);
  },
  /**
   * Get the period of corresponding target name extractor.
   * @method getExtractorPeriod
   * @param pTarget - a predefined target name.Could be "RedBall", "Face", "LandMark", "LandMarks", "People" or "Sound".
   * @return a period in milliseconds
   */
  'getExtractorPeriod': function getExtractorPeriod(pTarget) {
    return session.getExtractorPeriod(pTarget);
  },
  /**
   * Unregister target name and stop corresponding extractor.
   * @method unregisterTarget
   * @param pTarget - a predefined target to remove.Could be "RedBall", "Face", "LandMark", "LandMarks", "People" or "Sound".
   * @return null
   */
  'unregisterTarget': function unregisterTarget(pTarget) {
    return session.unregisterTarget(pTarget);
  },
  /**
   * Unregister a list of target names and stop corresponding extractor.
   * @method unregisterTargets
   * @param pTarget - a predefined target list to remove.Could be "RedBall", "Face", "LandMark", "LandMarks", "People" or "Sound".
   * @return null
   */
  'unregisterTargets': function unregisterTargets(pTarget) {
    return session.unregisterTargets(pTarget);
  },
  /**
   * Unregister all targets except active target and stop corresponding extractor.
   * @method unregisterAllTargets
   * @return null
   */
  'unregisterAllTargets': function unregisterAllTargets() {
    return session.unregisterAllTargets();
  },
  /**
   * Return active target name.
   * @method getActiveTarget
   * @return Tracked target name.
   */
  'getActiveTarget': function getActiveTarget() {
    return session.getActiveTarget();
  },
  /**
   * Return a list of supported targets names.
   * @method getSupportedTargets
   * @return Supported targets names.
   */
  'getSupportedTargets': function getSupportedTargets() {
    return session.getSupportedTargets();
  },
  /**
   * Return a list of registered targets names.
   * @method getRegisteredTargets
   * @return Registered targets names.
   */
  'getRegisteredTargets': function getRegisteredTargets() {
    return session.getRegisteredTargets();
  },
  /**
   * Look at the target position with head.

   * @method lookAt
   * @param pPosition - position 3D [x, y, z] x position must be striclty positif.
   * @param pFrame - target frame {FRAME_TORSO = 0, FRAME_WORLD = 1, FRAME_ROBOT = 2}.
   * @param pFractionMaxSpeed - The fraction of maximum speed to use. Must be between 0 and 1.
   * @param pUseWholeBody - If true, use whole body constraints.
   * @return null
   */
  'lookAt': function lookAt(pPosition, pFrame, pFractionMaxSpeed, pUseWholeBody) {
    return session.lookAt(pPosition, pFrame, pFractionMaxSpeed, pUseWholeBody);
  },
  /**
   * Point at the target position with arms.

   * @method pointAt
   * @param pEffector - effector name. Could be "Arms", "LArm", "RArm".
   * @param pPosition - position 3D [x, y, z] to point in FRAME_TORSO. x position must be striclty positif.
   * @param pFrame - target frame {FRAME_TORSO = 0, FRAME_WORLD = 1, FRAME_ROBOT = 2}.
   * @param pFractionMaxSpeed - The fraction of maximum speed to use. Must be between 0 and 1.
   * @return null
   */
  'pointAt': function pointAt(pEffector, pPosition, pFrame, pFractionMaxSpeed) {
    return session.pointAt(pEffector, pPosition, pFrame, pFractionMaxSpeed);
  },
  /**
   * Get the config for move modes.
   * @method getMoveConfig
   * @return ALMotion GaitConfig
   */
  'getMoveConfig': function getMoveConfig() {
    return session.getMoveConfig();
  },
  /**
   * set a config for move modes.
   * @method setMoveConfig
   * @param config - ALMotion GaitConfig
   * @return null
   */
  'setMoveConfig': function setMoveConfig(config) {
    return session.setMoveConfig(config);
  },
  /**
   * get the timeout parameter for target lost.
   * @method getTimeOut
   * @return time in milliseconds.
   */
  'getTimeOut': function getTimeOut() {
    return session.getTimeOut();
  },
  /**
   * set the timeout parameter for target lost.
   * @method setTimeOut
   * @param pTimeMs - time in milliseconds.
   * @return null
   */
  'setTimeOut': function setTimeOut(pTimeMs) {
    return session.setTimeOut(pTimeMs);
  },
  /**
   * get the maximum distance for target detection in meter.
   * @method getMaximumDistanceDetection
   * @return The maximum distance for target detection in meter.
   */
  'getMaximumDistanceDetection': function getMaximumDistanceDetection() {
    return session.getMaximumDistanceDetection();
  },
  /**
   * set the maximum target detection distance in meter.
   * @method setMaximumDistanceDetection
   * @param pMaxDistance - The maximum distance for target detection in meter.
   * @return null
   */
  'setMaximumDistanceDetection': function setMaximumDistanceDetection(pMaxDistance) {
    return session.setMaximumDistanceDetection(pMaxDistance);
  },
  /**
   * Get active effector.
   * @method getEffector
   * @return Active effector name. Could be: "Arms", "LArm", "RArm" or "None". 
   */
  'getEffector': function getEffector() {
    return session.getEffector();
  },
  /**
   * Set an end-effector to move for tracking.
   * @method setEffector
   * @param pEffector - Name of effector. Could be: "Arms", "LArm", "RArm" or "None". 
   * @return null
   */
  'setEffector': function setEffector(pEffector) {
    return session.setEffector(pEffector);
  },
  /**
   * Initialize tracker parameters with default values.
   * @method initialize
   * @return null
   */
  'initialize': function initialize() {
    return session.initialize();
  },
  /**
   * Set the maximum velocity for tracking.
   * @method setMaximumVelocity
   * @param pVelocity - The maximum velocity in rad.s-1 .
   * @return null
   */
  'setMaximumVelocity': function setMaximumVelocity(pVelocity) {
    return session.setMaximumVelocity(pVelocity);
  },
  /**
   * Get the maximum velocity for tracking.
   * @method getMaximumVelocity
   * @return The maximum velocity in rad.s-1 .
   */
  'getMaximumVelocity': function getMaximumVelocity() {
    return session.getMaximumVelocity();
  },
  /**
   * Set the maximum acceleration for tracking.
   * @method setMaximumAcceleration
   * @param pAcceleration - The maximum acceleration in rad.s-2 .
   * @return null
   */
  'setMaximumAcceleration': function setMaximumAcceleration(pAcceleration) {
    return session.setMaximumAcceleration(pAcceleration);
  },
  /**
   * Get the maximum acceleration for tracking.
   * @method getMaximumAcceleration
   * @return The maximum acceleration in rad.s-2 .
   */
  'getMaximumAcceleration': function getMaximumAcceleration() {
    return session.getMaximumAcceleration();
  },
  /**
   * DEPRECATED. Use lookAt with frame instead. Look at the target position with head.

   * @method lookAt
   * @param pPosition - position 3D [x, y, z] to look in FRAME_TORSO. x position must be striclty positif.
   * @param pFractionMaxSpeed - The fraction of maximum speed to use. Must be between 0 and 1.
   * @param pUseWholeBody - If true, use whole body constraints.
   * @return null
   */
  'lookAt': function lookAt(pPosition, pFractionMaxSpeed, pUseWholeBody) {
    return session.lookAt(pPosition, pFractionMaxSpeed, pUseWholeBody);
  },
  /**
   * DEPRECATED. Use pointAt with frame instead. Point at the target position with arms.

   * @method pointAt
   * @param pEffector - effector name. Could be "Arms", "LArm", "RArm".
   * @param pPosition - position 3D [x, y, z] to point in FRAME_TORSO. x position must be striclty positif.
   * @param pFractionMaxSpeed - The fraction of maximum speed to use. Must be between 0 and 1.
   * @return null
   */
  'pointAt': function pointAt(pEffector, pPosition, pFractionMaxSpeed) {
    return session.pointAt(pEffector, pPosition, pFractionMaxSpeed);
  },
  /**
   * DEPRECATED. Use pointAt with frame instead. Returns the [x, y, z] position of the target in FRAME_TORSO. This is done assuming an average target size, so it might not be very accurate.
   * @method getTargetPosition
   * @return Vector of 3 floats corresponding to the target position 3D. 
   */
  'getTargetPosition': function getTargetPosition() {
    return session.getTargetPosition();
  },
  /**
   * DEPRECATED. Use getSupportedTargets() instead. Return a list of targets names.
   * @method getTargetNames
   * @return Valid targets names.
   */
  'getTargetNames': function getTargetNames() {
    return session.getTargetNames();
  },
  /**
   * DEPRECATED. Use getRegisteredTargets() instead. Return a list of managed targets names.
   * @method getManagedTargets
   * @return Managed targets names.
   */
  'getManagedTargets': function getManagedTargets() {
    return session.getManagedTargets();
  },
  /**
   * DEPRECATED. Use registerTarget() instead. Add a predefined target. Subscribe to corresponding extractor if Tracker is running..
   * @method addTarget
   * @param pTarget - a predefined target to track.Could be "RedBall", "Face", "LandMark", "LandMarks", "People" or "Sound".
   * @param pParams - a target parameters. (RedBall : set diameter of ball.
   * @return null
   */
  'addTarget': function addTarget(pTarget, pParams) {
    return session.addTarget(pTarget, pParams);
  },
  /**
   * DEPRECATED. Use unregisterTarget() instead. Remove target name and stop corresponding extractor.
   * @method removeTarget
   * @param pTarget - a predefined target to remove.Could be "RedBall", "Face", "LandMark", "LandMarks", "People" or "Sound".
   * @return null
   */
  'removeTarget': function removeTarget(pTarget) {
    return session.removeTarget(pTarget);
  },
  /**
   * DEPRECATED. Use unregisterTargets() instead. Remove a list of target names and stop corresponding extractor.
   * @method removeTargets
   * @param pTarget - a predefined target list to remove.Could be "RedBall", "Face", "LandMark", "LandMarks", "People" or "Sound".
   * @return null
   */
  'removeTargets': function removeTargets(pTarget) {
    return session.removeTargets(pTarget);
  },
  /**
   * DEPRECATED. Use unregisterAllTargets() instead. Remove all managed targets except active target and stop corresponding extractor.
   * @method removeAllTargets
   * @return null
   */
  'removeAllTargets': function removeAllTargets() {
    return session.removeAllTargets();
  },
  /**
   * DEPRECATED. Use setEffector instead. Add an end-effector to move for tracking.
   * @method addEffector
   * @param pEffector - Name of effector. Could be: "Arms", "LArm" or "RArm". 
   * @return null
   */
  'addEffector': function addEffector(pEffector) {
    return session.addEffector(pEffector);
  },
  /**
   * DEPRECATED. Use setEffector("None") instead. Remove an end-effector from tracking.
   * @method removeEffector
   * @param pEffector - Name of effector. Could be: "Arms", "LArm" or "RArm". 
   * @return null
   */
  'removeEffector': function removeEffector(pEffector) {
    return session.removeEffector(pEffector);
  },
  /**
   * Pause the tracking process.
   * @method _pause
   * @private
   * @return null
   */
  '_pause': function _pause() {
    return session._pause();
  },
  /**
   * Restart the tracking process.
   * @method _restart
   * @private
   * @return null
   */
  '_restart': function _restart() {
    return session._restart();
  },
  /**
   * Internal Use.
   * @method _setTrackerConfig
   * @private
   * @param config - Internal: An array of ALValues [i][0]: name, [i][1]: value
   * @return null
   */
  '_setTrackerConfig': function _setTrackerConfig(config) {
    return session._setTrackerConfig(config);
  },
  /**
   * Get the tracker configuration.
   * @method _getTrackerConfig
   * @private
   * @return map contraining all the information.
   */
  '_getTrackerConfig': function _getTrackerConfig() {
    return session._getTrackerConfig();
  },
  /**
   * Get the tracker configuration.
   * @method _getTrackerConfigStr
   * @private
   * @return string contraining all the information.
   */
  '_getTrackerConfigStr': function _getTrackerConfigStr() {
    return session._getTrackerConfigStr();
  },
  /**
   * Lost event callback.
   * @method _lostEvent
   * @private
   * @return null
   */
  '_lostEvent': function _lostEvent() {
    return session._lostEvent();
  },
  /**
   * Detected event callback.
   * @method _detectedEvent
   * @private
   * @return null
   */
  '_detectedEvent': function _detectedEvent() {
    return session._detectedEvent();
  },
  /**
   * Active debug in choregraphe 3D view.
   * @method _setDebugInView3D
   * @private
   * @return null
   */
  '_setDebugInView3D': function _setDebugInView3D() {
    return session._setDebugInView3D();
  },
  /**
   * debug event callback.
   * @method _debugCallbackEvent
   * @private
   * @return null
   */
  '_debugCallbackEvent': function _debugCallbackEvent() {
    return session._debugCallbackEvent();
  },
  /**
   * Look at the target position with head.

   * @method _lookAtWithMove
   * @private
   * @param pPosition - position 3D [x, y, z] to look in FRAME_TORSO.x position must be striclty positif.
   * @param pFractionMaxSpeed - The fraction of maximum speed to use.Must be between 0 and 1.
   * @param pUseWholeBody - If true, use whole body constraints.
   * @param pUseMove - If true, use move to look at target behind.
   * @return null
   */
  '_lookAtWithMove': function _lookAtWithMove(pPosition, pFractionMaxSpeed, pUseWholeBody, pUseMove) {
    return session._lookAtWithMove(pPosition, pFractionMaxSpeed, pUseWholeBody, pUseMove);
  },
  /**
   * Look at the target position with head.

   * @method _lookAtWithEffector
   * @private
   * @param pPosition - position 3D [x, y, z] x position must be striclty positif.
   * @param pFrame - target frame {FRAME_TORSO = 0, FRAME_WORLD = 1, FRAME_ROBOT = 2}.
   * @param pEffectorId - effector id {Middle of eyes = 0, Camera Top = 1, Camera Bottom = 2}.
   * @param pFractionMaxSpeed - The fraction of maximum speed to use. Must be between 0 and 1.
   * @param pUseWholeBody - If true, use whole body constraints.
   * @return null
   */
  '_lookAtWithEffector': function _lookAtWithEffector(pPosition, pFrame, pEffectorId, pFractionMaxSpeed, pUseWholeBody) {
    return session._lookAtWithEffector(pPosition, pFrame, pEffectorId, pFractionMaxSpeed, pUseWholeBody);
  },
  /**
   * Stop current look at

   * @method _stopLookAt
   * @private
   * @return null
   */
  '_stopLookAt': function _stopLookAt() {
    return session._stopLookAt();
  },
  /**
   * Stop current point at

   * @method _stopPointAt
   * @private
   * @return null
   */
  '_stopPointAt': function _stopPointAt() {
    return session._stopPointAt();
  },
  /**
   * Enable whole body look at during search

   * @method _searcherSetUseWholeBodyLookAt
   * @private
   * @return null
   */
  '_searcherSetUseWholeBodyLookAt': function _searcherSetUseWholeBodyLookAt() {
    return session._searcherSetUseWholeBodyLookAt();
  },
  /**
   * Set a specific event for move.
   * @method _setMoveEvent
   * @private
   * @return null
   */
  '_setMoveEvent': function _setMoveEvent() {
    return session._setMoveEvent();
  },
  /**
   * Set move hysteresis.
   * @method _setMoveHysteresis
   * @private
   * @return null
   */
  '_setMoveHysteresis': function _setMoveHysteresis() {
    return session._setMoveHysteresis();
  },
  /**
   * Get move hysteresis.
   * @method _getMoveHysteresis
   * @private
   * @return null
   */
  '_getMoveHysteresis': function _getMoveHysteresis() {
    return session._getMoveHysteresis();
  },
};
