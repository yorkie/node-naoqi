/**
 * @module navigation
 */
session.navigation = {
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
   * Makes the robot navigate to a relative metrical target pose2D expressed in FRAME_ROBOT. The robot computes a path to avoid obstacles.
   * @method navigateTo
   * @param x - The position along x axis [m].
   * @param y - The position along y axis [m].
   * @return null
   */
  'navigateTo': function navigateTo(x, y) {
    return session.navigateTo(x, y);
  },
  /**
   * Makes the robot navigate to a relative metrical target pose2D expressed in FRAME_ROBOT. The robot computes a path to avoid obstacles.
   * @method navigateTo
   * @param x - The position along x axis [m].
   * @param y - The position along y axis [m].
   * @param config - Configuration ALValue. For example, [["SpeedFactor", 0.5]] sets speedFactor to 0.5
   * @return null
   */
  'navigateTo': function navigateTo(x, y, config) {
    return session.navigateTo(x, y, config);
  },
  /**
   * Makes the robot navigate to a relative metrical target pose2D expressed in FRAME_ROBOT. The robot computes a path to avoid obstacles.
   * @method navigateTo
   * @param x - The position along x axis [m].
   * @param y - The position along y axis [m].
   * @param theta - Orientation of the robot (rad).
   * @return null
   */
  'navigateTo': function navigateTo(x, y, theta) {
    return session.navigateTo(x, y, theta);
  },
  /**
   * Makes the robot navigate to a relative metrical target pose2D expressed in FRAME_ROBOT. The robot computes a path to avoid obstacles.
   * @method navigateTo
   * @param x - The position along x axis [m].
   * @param y - The position along y axis [m].
   * @param theta - Orientation of the robot (rad).
   * @param config - Configuration ALValue. For example, [["SpeedFactor", 0.5]] sets speedFactor to 0.5
   * @return null
   */
  'navigateTo': function navigateTo(x, y, theta, config) {
    return session.navigateTo(x, y, theta, config);
  },
  /**
   * Internal Use.
   * @method _setNavigationConfig
   * @private
   * @param config - Internal: An array of ALValues [i][0]: name, [i][1]: value
   * @return null
   */
  '_setNavigationConfig': function _setNavigationConfig(config) {
    return session._setNavigationConfig(config);
  },
  /**
   * Stops the navigateTo.
   * @method stopNavigateTo
   * @return null
   */
  'stopNavigateTo': function stopNavigateTo() {
    return session.stopNavigateTo();
  },
  /**
   * Stops the navigateTo but no stop move.
   * @method _stopNavigateToWithoutStopMove
   * @private
   * @return null
   */
  '_stopNavigateToWithoutStopMove': function _stopNavigateToWithoutStopMove() {
    return session._stopNavigateToWithoutStopMove();
  },
  /**
   * 
   * @method _isNavigateToRunning
   * @private
   * @return null
   */
  '_isNavigateToRunning': function _isNavigateToRunning() {
    return session._isNavigateToRunning();
  },
  /**
   * Obstacles data.ALArray formatted as follow for each ALValue : [0]:familyName[1]:name[2]:Array containing [x, y] arrays of points in robot frame.Those obstacles are the one used by the secure navigator
   * @method _getObstacleData
   * @private
   * @return null
   */
  '_getObstacleData': function _getObstacleData() {
    return session._getObstacleData();
  },
  /**
   * Get the requested occupancy grid formatted as a ROS navigation stack message.
   * @method _getOccupancyGrid
   * @private
   * @param client - Internal: 'Secure' for SecureNavigator or 'Local' for LocalNavigator.
   * @return null
   */
  '_getOccupancyGrid': function _getOccupancyGrid(client) {
    return session._getOccupancyGrid(client);
  },
  /**
   * Obstacles data.ALArray formatted as follow for each ALValue : [0]:familyName[1]:name[2]:Array containing [x, y] arrays of points in robot frame.Those obstacles are taken from sensors
   * @method _getSensorData
   * @private
   * @return null
   */
  '_getSensorData': function _getSensorData() {
    return session._getSensorData();
  },
  /**
   * Obstacles data.ALArray formatted as follow for each ALValue : [0]:familyName[1]:name[2]:Array containing [x, y] arrays of points in robot frame.Those obstacles are taken from sensors
   * @method _getSensorData
   * @private
   * @return null
   */
  '_getSensorData': function _getSensorData() {
    return session._getSensorData();
  },
  /**
   * Obstacles data.ALArray formatted as follow for each ALValue : [0]:familyName[1]:name[2]:Array containing [x, y] arrays of points in robot frame.Those obstacles are taken from sensors
   * @method _getSensorData
   * @private
   * @return null
   */
  '_getSensorData': function _getSensorData() {
    return session._getSensorData();
  },
  /**
   * .
   * @method _subscribeToAll
   * @private
   * @return null
   */
  '_subscribeToAll': function _subscribeToAll() {
    return session._subscribeToAll();
  },
  /**
   * Start active sensors.The client needs to specify its name to register.If the client is the only one to register, the sensors are turned on, otherwise they are already started.
   * @method _subscribe
   * @private
   * @param clientName - The client name.
   * @return null
   */
  '_subscribe': function _subscribe(clientName) {
    return session._subscribe(clientName);
  },
  /**
   * .
   * @method _unsubscribeFromAll
   * @private
   * @return null
   */
  '_unsubscribeFromAll': function _unsubscribeFromAll() {
    return session._unsubscribeFromAll();
  },
  /**
   * Stop active sensors.The client needs to specify its name to unregister.The active sensors are actually stopped if not client is registered anymore.
   * @method _unsubscribe
   * @private
   * @param clientName - The client name.
   * @return null
   */
  '_unsubscribe': function _unsubscribe(clientName) {
    return session._unsubscribe(clientName);
  },
  /**
   * Add a sensor family or a sensor.
   * @method _addSensor
   * @private
   * @param sensor - The sensor family name or name.
   * @return null
   */
  '_addSensor': function _addSensor(sensor) {
    return session._addSensor(sensor);
  },
  /**
   * Remove a sensor family or a sensor.
   * @method _removeSensor
   * @private
   * @param sensor - The sensor family name or name.
   * @return null
   */
  '_removeSensor': function _removeSensor(sensor) {
    return session._removeSensor(sensor);
  },
  /**
   * Get trajectory from local navigator.ALArray containing successively x, y and theta coordinates.
   * @method _getTrajectory
   * @private
   * @return null
   */
  '_getTrajectory': function _getTrajectory() {
    return session._getTrajectory();
  },
  /**
   * Set speed factor for local navigator
   * @method _setSpeedFactor
   * @private
   * @return null
   */
  '_setSpeedFactor': function _setSpeedFactor() {
    return session._setSpeedFactor();
  },
  /**
   * Get obstacle Map from localnavigator. ALValue formatted as follow for each sensor :[[SensorName1 [[x1 y1] [x2 y2] [x3 y3] ...]] [SensorName2 [[x1 y1] [x2 y2] [x3 y3] ...]] ... ]
   * @method _getObstacleMap
   * @private
   * @return null
   */
  '_getObstacleMap': function _getObstacleMap() {
    return session._getObstacleMap();
  },
  /**
   * .
   * @method _enableSensorDebug
   * @private
   * @return null
   */
  '_enableSensorDebug': function _enableSensorDebug() {
    return session._enableSensorDebug();
  },
  /**
   * .
   * @method _useHeadChecking
   * @private
   * @return null
   */
  '_useHeadChecking': function _useHeadChecking() {
    return session._useHeadChecking();
  },
  /**
   * .
   * @method _usePathChecking
   * @private
   * @return null
   */
  '_usePathChecking': function _usePathChecking() {
    return session._usePathChecking();
  },
  /**
   * .
   * @method _usePathCorrection
   * @private
   * @return null
   */
  '_usePathCorrection': function _usePathCorrection() {
    return session._usePathCorrection();
  },
  /**
   * .
   * @method _useArmsOnBelly
   * @private
   * @return null
   */
  '_useArmsOnBelly': function _useArmsOnBelly() {
    return session._useArmsOnBelly();
  },
  /**
   * .
   * @method _useSpeedFactor
   * @private
   * @return null
   */
  '_useSpeedFactor': function _useSpeedFactor() {
    return session._useSpeedFactor();
  },
  /**
   * .
   * @method _clearObstacleMap
   * @private
   * @return null
   */
  '_clearObstacleMap': function _clearObstacleMap() {
    return session._clearObstacleMap();
  },
  /**
   * .
   * @method _useClearNavigationMap
   * @private
   * @return null
   */
  '_useClearNavigationMap': function _useClearNavigationMap() {
    return session._useClearNavigationMap();
  },
  /**
   * .
   * @method _clearNavigationMap
   * @private
   * @return null
   */
  '_clearNavigationMap': function _clearNavigationMap() {
    return session._clearNavigationMap();
  },
  /**
   * .
   * @method _getSensorSubscribers
   * @private
   * @return null
   */
  '_getSensorSubscribers': function _getSensorSubscribers() {
    return session._getSensorSubscribers();
  },
  /**
   * .
   * @method _getSensorList
   * @private
   * @return null
   */
  '_getSensorList': function _getSensorList() {
    return session._getSensorList();
  },
  /**
   * .
   * @method _getSensorListBySubscriber
   * @private
   * @return null
   */
  '_getSensorListBySubscriber': function _getSensorListBySubscriber() {
    return session._getSensorListBySubscriber();
  },
  /**
   * .
   * @method _getActiveSensorList
   * @private
   * @return null
   */
  '_getActiveSensorList': function _getActiveSensorList() {
    return session._getActiveSensorList();
  },
  /**
   * .
   * @method _isSensorEnabled
   * @private
   * @return null
   */
  '_isSensorEnabled': function _isSensorEnabled() {
    return session._isSensorEnabled();
  },
  /**
   * .
   * @method _setController
   * @private
   * @return null
   */
  '_setController': function _setController() {
    return session._setController();
  },
  /**
   * .
   * @method _writeTree
   * @private
   * @return null
   */
  '_writeTree': function _writeTree() {
    return session._writeTree();
  },
  /**
   * .
   * @method moveAlong
   * @param trajectory - An ALValue describing a trajectory.
   * @return null
   */
  'moveAlong': function moveAlong(trajectory) {
    return session.moveAlong(trajectory);
  },
  /**
   * .
   * @method _moveAlong
   * @private
   * @param moveAlongScale - a scale factor
   * @param allowMove - true if the robot should do any move at all
   * @param trajectory - An ALValue describing a trajectory.
   * @return null
   */
  '_moveAlong': function _moveAlong(moveAlongScale, allowMove, trajectory) {
    return session._moveAlong(moveAlongScale, allowMove, trajectory);
  },
  /**
   * .
   * @method _enableSafety
   * @private
   * @return null
   */
  '_enableSafety': function _enableSafety() {
    return session._enableSafety();
  },
  /**
   * .
   * @method _isSafetyEnabled
   * @private
   * @return null
   */
  '_isSafetyEnabled': function _isSafetyEnabled() {
    return session._isSafetyEnabled();
  },
  /**
   * .
   * @method _isSafetyLoopRunning
   * @private
   * @return null
   */
  '_isSafetyLoopRunning': function _isSafetyLoopRunning() {
    return session._isSafetyLoopRunning();
  },
  /**
   * .
   * @method _wakeUpCallBack
   * @private
   * @return null
   */
  '_wakeUpCallBack': function _wakeUpCallBack() {
    return session._wakeUpCallBack();
  },
  /**
   * .
   * @method _restCallBack
   * @private
   * @return null
   */
  '_restCallBack': function _restCallBack() {
    return session._restCallBack();
  },
  /**
   * Returns [errorCode, result radius[centerWorldMotionX, centerWorldMotionY]]
   * @method getFreeZone
   * @param desiredRadius - The radius of the space we want in meters [m].
   * @param maximumDisplacement - The max distance we accept to move toreach the found place [m].
   * @return Returns [errorCode, result radius (m), [worldMotionToRobotCenterX (m), worldMotionToRobotCenterY (m)]]
   */
  'getFreeZone': function getFreeZone(desiredRadius, maximumDisplacement) {
    return session.getFreeZone(desiredRadius, maximumDisplacement);
  },
  /**
   * Returns [errorCode, result radius[centerWorldMotionX, centerWorldMotionY]]
   * @method findFreeZone
   * @param desiredRadius - The radius of the space we want in meters [m].
   * @param maximumDisplacement - The max distance we accept to move toreach the found place [m].
   * @return Returns [errorCode, result radius (m), [worldMotionToRobotCenterX (m), worldMotionToRobotCenterY (m)]]
   */
  'findFreeZone': function findFreeZone(desiredRadius, maximumDisplacement) {
    return session.findFreeZone(desiredRadius, maximumDisplacement);
  },
  /**
   * .
   * @method _getFreeZoneCenter
   * @private
   * @return null
   */
  '_getFreeZoneCenter': function _getFreeZoneCenter() {
    return session._getFreeZoneCenter();
  },
  /**
   * .
   * @method _getFreeZoneWithConstraints
   * @private
   * @return null
   */
  '_getFreeZoneWithConstraints': function _getFreeZoneWithConstraints() {
    return session._getFreeZoneWithConstraints();
  },
  /**
   * .
   * @method _updateFreeZone
   * @private
   * @return null
   */
  '_updateFreeZone': function _updateFreeZone() {
    return session._updateFreeZone();
  },
  /**
   *  Starts a loop to update the mapping of the free space around the robot. 
   * @method startFreeZoneUpdate
   * @return null
   */
  'startFreeZoneUpdate': function startFreeZoneUpdate() {
    return session.startFreeZoneUpdate();
  },
  /**
   * .
   * @method _startFreeZoneUpdateWithTimeout
   * @private
   * @return null
   */
  '_startFreeZoneUpdateWithTimeout': function _startFreeZoneUpdateWithTimeout() {
    return session._startFreeZoneUpdateWithTimeout();
  },
  /**
   * Stops and returns free zone.
   * @method stopAndComputeFreeZone
   * @param desiredRadius - The radius of the space we want in meters [m].
   * @param maximumDisplacement - The max distance we accept to move toreach the found place [m].
   * @return Returns [errorCode, result radius (m), [worldMotionToRobotCenterX (m), worldMotionToRobotCenterY (m)]]
   */
  'stopAndComputeFreeZone': function stopAndComputeFreeZone(desiredRadius, maximumDisplacement) {
    return session.stopAndComputeFreeZone(desiredRadius, maximumDisplacement);
  },
  /**
   * .
   * @method _moveToFreeZoneCenter
   * @private
   * @return null
   */
  '_moveToFreeZoneCenter': function _moveToFreeZoneCenter() {
    return session._moveToFreeZoneCenter();
  },
  /**
   * .
   * @method _stopFreeZoneTasks
   * @private
   * @return null
   */
  '_stopFreeZoneTasks': function _stopFreeZoneTasks() {
    return session._stopFreeZoneTasks();
  },
  /**
   * .
   * @method _writeFreeZone
   * @private
   * @return null
   */
  '_writeFreeZone': function _writeFreeZone() {
    return session._writeFreeZone();
  },
  /**
   * .
   * @method _clearFreeZone
   * @private
   * @return null
   */
  '_clearFreeZone': function _clearFreeZone() {
    return session._clearFreeZone();
  },
  /**
   * .
   * @method _getFreeZoneMap
   * @private
   * @return null
   */
  '_getFreeZoneMap': function _getFreeZoneMap() {
    return session._getFreeZoneMap();
  },
  /**
   * .
   * @method _writeDilatedMaps
   * @private
   * @return null
   */
  '_writeDilatedMaps': function _writeDilatedMaps() {
    return session._writeDilatedMaps();
  },
  /**
   * .
   * @method _startDiagnosis
   * @private
   * @return null
   */
  '_startDiagnosis': function _startDiagnosis() {
    return session._startDiagnosis();
  },
  /**
   * .
   * @method _stopDiagnosis
   * @private
   * @return null
   */
  '_stopDiagnosis': function _stopDiagnosis() {
    return session._stopDiagnosis();
  },
  /**
   * .
   * @method _passiveDiagnosisCallBack
   * @private
   * @return null
   */
  '_passiveDiagnosisCallBack': function _passiveDiagnosisCallBack() {
    return session._passiveDiagnosisCallBack();
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
   * @method _getCollisionObstacleDistance
   * @private
   * @return null
   */
  '_getCollisionObstacleDistance': function _getCollisionObstacleDistance() {
    return session._getCollisionObstacleDistance();
  },
  /**
   * .
   * @method _setCollisionObstacleDistance
   * @private
   * @return null
   */
  '_setCollisionObstacleDistance': function _setCollisionObstacleDistance() {
    return session._setCollisionObstacleDistance();
  },
  /**
   * .
   * @method _getCollisionObstacleRadius
   * @private
   * @return null
   */
  '_getCollisionObstacleRadius': function _getCollisionObstacleRadius() {
    return session._getCollisionObstacleRadius();
  },
  /**
   * .
   * @method _setCollisionObstacleRadius
   * @private
   * @return null
   */
  '_setCollisionObstacleRadius': function _setCollisionObstacleRadius() {
    return session._setCollisionObstacleRadius();
  },
  /**
   * .
   * @method _get3DMap
   * @private
   * @return null
   */
  '_get3DMap': function _get3DMap() {
    return session._get3DMap();
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
   * @method _setFreeZoneTimeout
   * @private
   * @return null
   */
  '_setFreeZoneTimeout': function _setFreeZoneTimeout() {
    return session._setFreeZoneTimeout();
  },
  /**
   * .
   * @method _setObstaclesNumber
   * @private
   * @return null
   */
  '_setObstaclesNumber': function _setObstaclesNumber() {
    return session._setObstaclesNumber();
  },
  /**
   * .
   * @method _getObstaclesNumber
   * @private
   * @return null
   */
  '_getObstaclesNumber': function _getObstaclesNumber() {
    return session._getObstaclesNumber();
  },
  /**
   * .
   * @method _setDiagnosisLogEnabled
   * @private
   * @return null
   */
  '_setDiagnosisLogEnabled': function _setDiagnosisLogEnabled() {
    return session._setDiagnosisLogEnabled();
  },
  /**
   * .
   * @method _isDiagnosisLogEnabled
   * @private
   * @return null
   */
  '_isDiagnosisLogEnabled': function _isDiagnosisLogEnabled() {
    return session._isDiagnosisLogEnabled();
  },
  /**
   * .
   * @method _initLogger
   * @private
   * @return null
   */
  '_initLogger': function _initLogger() {
    return session._initLogger();
  },
  /**
   * .
   * @method _enableTouchType
   * @private
   * @return null
   */
  '_enableTouchType': function _enableTouchType() {
    return session._enableTouchType();
  },
  /**
   * .
   * @method _disableTouchType
   * @private
   * @return null
   */
  '_disableTouchType': function _disableTouchType() {
    return session._disableTouchType();
  },
  /**
   * .
   * @method _getEnabledTouchTypes
   * @private
   * @return null
   */
  '_getEnabledTouchTypes': function _getEnabledTouchTypes() {
    return session._getEnabledTouchTypes();
  },
  /**
   * .
   * @method _onTouchChanged
   * @private
   * @return null
   */
  '_onTouchChanged': function _onTouchChanged() {
    return session._onTouchChanged();
  },
  /**
   * .
   * @method _onPeopleDetected
   * @private
   * @return null
   */
  '_onPeopleDetected': function _onPeopleDetected() {
    return session._onPeopleDetected();
  },
  /**
   * .
   * @method _getMapperNames
   * @private
   * @return null
   */
  '_getMapperNames': function _getMapperNames() {
    return session._getMapperNames();
  },
};
