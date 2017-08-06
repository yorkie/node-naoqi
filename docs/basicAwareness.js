/**
 * @module basicAwareness
 */
session.basicAwareness = {
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
   * Population Updated (event: PeoplePerception/PopulationUpdated)
   * @method _onPeopleDetected
   * @private
   * @param name - Name of the event
   * @param populationUpdated - Boolean value for people detection event
   * @param message - Event message
   * @return null
   */
  '_onPeopleDetected': function _onPeopleDetected(name, populationUpdated, message) {
    return session._onPeopleDetected(name, populationUpdated, message);
  },
  /**
   * Movement Detected (event: MovementDetection3D/MovementDetected)
   * @method _onMovementDetected
   * @private
   * @param name - Name of the event
   * @param movementDetected - Boolean value for movement event
   * @param message - Event message
   * @return null
   */
  '_onMovementDetected': function _onMovementDetected(name, movementDetected, message) {
    return session._onMovementDetected(name, movementDetected, message);
  },
  /**
   * Navigation Motion Detected (event: Navigation/MotionDetected)
   * @method _onNavigationMotionDetected
   * @private
   * @param name - Name of the event
   * @param movementDetected - Boolean value for movement event
   * @param message - Event message
   * @return null
   */
  '_onNavigationMotionDetected': function _onNavigationMotionDetected(name, movementDetected, message) {
    return session._onNavigationMotionDetected(name, movementDetected, message);
  },
  /**
   * Close Movement Detected (event: WavingDetection/Waving)
   * @method _onCloseMovementDetected
   * @private
   * @param name - Name of the event
   * @param closeMovementDetected - Boolean value for close movement event
   * @param message - Event message
   * @return null
   */
  '_onCloseMovementDetected': function _onCloseMovementDetected(name, closeMovementDetected, message) {
    return session._onCloseMovementDetected(name, closeMovementDetected, message);
  },
  /**
   * Sound Detected (event: SoundLocated)
   * @method _onSoundDetected
   * @private
   * @param name - Name of the event
   * @param SoundLocated - Boolean value for movement event
   * @param message - Event message
   * @return null
   */
  '_onSoundDetected': function _onSoundDetected(name, SoundLocated, message) {
    return session._onSoundDetected(name, SoundLocated, message);
  },
  /**
   * Touch Detected (event: TouchDetection3D/TouchDetected)
   * @method _onTouchDetected
   * @private
   * @param name - Name of the event
   * @param touchDetected - Boolean value for touch event
   * @param message - Event message
   * @return null
   */
  '_onTouchDetected': function _onTouchDetected(name, touchDetected, message) {
    return session._onTouchDetected(name, touchDetected, message);
  },
  /**
   * Servoing event callback (event:ALTracker/FastPersonTracking)
   * @method _onFastPersonTracking
   * @private
   * @param name - Name of the event
   * @param tackerValue - Position to track.
   * @param message - Event message
   * @return null
   */
  '_onFastPersonTracking': function _onFastPersonTracking(name, tackerValue, message) {
    return session._onFastPersonTracking(name, tackerValue, message);
  },
  /**
   * No person found by fast tracking callback (event:ALFastPersonTracking/TrackedPersonNotFound)
   * @method _onNoFastPersonFound
   * @private
   * @param name - Name of the event
   * @param val - Content of the event.
   * @param message - Event message
   * @return null
   */
  '_onNoFastPersonFound': function _onNoFastPersonFound(name, val, message) {
    return session._onNoFastPersonFound(name, val, message);
  },
  /**
   * Servoing event callback (event:ALTracker/FindPersonHead)
   * @method _onHeadTracking
   * @private
   * @param name - Name of the event
   * @param tackerValue - Position to track.
   * @param message - Event message
   * @return null
   */
  '_onHeadTracking': function _onHeadTracking(name, tackerValue, message) {
    return session._onHeadTracking(name, tackerValue, message);
  },
  /**
   * HeadNotFound event callback (event:ALFindPersonHead/HeadNotFound)
   * @method _onHeadNotFound
   * @private
   * @param name - Name of the event
   * @param val - Content of the event.
   * @param message - Event message
   * @return null
   */
  '_onHeadNotFound': function _onHeadNotFound(name, val, message) {
    return session._onHeadNotFound(name, val, message);
  },
  /**
   * HeadReached event callback (event:ALFindPersonHead/HeadReached)
   * @method _onHeadReached
   * @private
   * @param name - Name of the event
   * @param val - Content of the event.
   * @param message - Event message
   * @return null
   */
  '_onHeadReached': function _onHeadReached(name, val, message) {
    return session._onHeadReached(name, val, message);
  },
  /**
   * tracking interruption
   * @method _onHeadTrackingStopped
   * @private
   * @param name - Name of the event
   * @param val - Content of the event.
   * @param message - Event message
   * @return null
   */
  '_onHeadTrackingStopped': function _onHeadTrackingStopped(name, val, message) {
    return session._onHeadTrackingStopped(name, val, message);
  },
  /**
   * Enable/Disable BasicAwareness.
   * @method setEnabled
   * @param enabled - True to enable BasicAwareness, False to disable BasicAwareness.
   * @return null
   */
  'setEnabled': function setEnabled(enabled) {
    return session.setEnabled(enabled);
  },
  /**
   * Return whether BasicAwareness is enabled or not.
   * @method isEnabled
   * @return Boolean value, true if enabled else false
   */
  'isEnabled': function isEnabled() {
    return session.isEnabled();
  },
  /**
   * Return whether BasicAwareness is running.
   * @method isRunning
   * @return Boolean value, true if running else false
   */
  'isRunning': function isRunning() {
    return session.isRunning();
  },
  /**
   * DEPRECATED since 2.4: use setEnabled instead.Start Basic Awareness.
   * @method startAwareness
   * @return null
   */
  'startAwareness': function startAwareness() {
    return session.startAwareness();
  },
  /**
   * DEPRECATED since 2.4: use setEnabled instead.Stop Basic Awareness.
   * @method stopAwareness
   * @return null
   */
  'stopAwareness': function stopAwareness() {
    return session.stopAwareness();
  },
  /**
   * DEPRECATED since 2.4: use isEnabled instead.Get the status (started or not) of the module.
   * @method isAwarenessRunning
   * @return Boolean value, true if running else false
   */
  'isAwarenessRunning': function isAwarenessRunning() {
    return session.isAwarenessRunning();
  },
  /**
   * Pause BasicAwareness.
   * @method pauseAwareness
   * @return null
   */
  'pauseAwareness': function pauseAwareness() {
    return session.pauseAwareness();
  },
  /**
   * Resume BasicAwareness.
   * @method resumeAwareness
   * @return null
   */
  'resumeAwareness': function resumeAwareness() {
    return session.resumeAwareness();
  },
  /**
   * Get the pause status of the module.
   * @method isAwarenessPaused
   * @return null
   */
  'isAwarenessPaused': function isAwarenessPaused() {
    return session.isAwarenessPaused();
  },
  /**
   * Enable/Disable Stimulus Detection.
   * @method setStimulusDetectionEnabled
   * @param stimulusName - Name of the stimulus to enable/disable
   * @param isStimulusDetectionEnabled - Boolean value: true to enable, false to disable.
   * @return null
   */
  'setStimulusDetectionEnabled': function setStimulusDetectionEnabled(stimulusName, isStimulusDetectionEnabled) {
    return session.setStimulusDetectionEnabled(stimulusName, isStimulusDetectionEnabled);
  },
  /**
   * Get status enabled/disabled for Stimulus Detection.
   * @method isStimulusDetectionEnabled
   * @param stimulusName - Name of the stimulus to check
   * @return Boolean value for status enabled/disabled
   */
  'isStimulusDetectionEnabled': function isStimulusDetectionEnabled(stimulusName) {
    return session.isStimulusDetectionEnabled(stimulusName);
  },
  /**
   * Set the specified parameter 
   * @method setParameter
   * @param paramName - "LookStimulusSpeed" : Speed of head moves when looking at a stimulus, as fraction of max speed
 "LookBackSpeed" : Speed of head moves when looking back to previous position, as fraction of max speed
 "NobodyFoundTimeOut" : timeout to send HumanLost event when no blob is found, in seconds
 "MinTimeTracking" : Minimum Time for the robot to be focused on someone, without listening to other stimuli, in seconds
 "TimeSleepBeforeResumeMS" : Slept time before automatically resuming BasicAwareness when an automatic pause has been made, in milliseconds
 "TimeOutResetHead" : Timeout to reset the head, in seconds
 "AmplitudeYawTracking" : max absolute value for head yaw in tracking, in degrees
 "PeoplePerceptionPeriod" : Period for people perception, in milliseconds
 "SlowPeoplePerceptionPeriod" : Period for people perception in FullyEngaged mode, in milliseconds
 "HeadThreshold" : Yaw threshold for tracking, in degrees
 "BodyRotationThreshold" : Angular threshold for BodyRotation tracking mode, in degrees
 "BodyRotationThresholdNao" : Angular threshold for BodyRotation tracking mode on Nao, in degrees
 "MoveDistanceX" : X Distance for the Move tracking mode, in meters
 "MoveDistanceY" : Y Distance for the Move tracking mode, in meters
 "MoveAngleTheta" : Angle for the Move tracking mode, in degrees
 "MoveThresholdX" : Threshold for the Move tracking mode, in meters
 "MoveThresholdY" : Threshold for the Move tracking mode, in meters
 "MoveThresholdTheta" : Theta Threshold for the Move tracking mode, in degrees
 "MaxDistanceFullyEngaged" : Maximum distance for someone to be tracked for FullyEngaged mode, in meters
 "MaxDistanceNotFullyEngaged" : Maximum distance for someone to be tracked for modes different from FullyEngaged, in meters
 "MaxHumanSearchTime" : Maximum time to find a human after observing stimulus, in seconds
 "DeltaPitchComfortZone" : Pitch width of the comfort zone, in degree
 "CenterPitchComfortZone" : Pitch center of the confort zone, in degree
 "SoundHeight" : Default Height for sound detection, in meters
 "MoveSpeed" : Speed of the robot moves
 "MC_Interactive_MinTime" : Minimum time between 2 contextual moves (when the robot is tracking somebody)
 "MC_Interactive_MaxOffsetTime" : Maximum time that we can add to MC_Interactive_MinTime (when the robot is tracking somebody)
 "MC_Interactive_DistanceXY" : Maximum offset distance in X and Y that the robot can apply when he tracks somebody
 "MC_Interactive_MinTheta" : Minimum theta that the robot can apply when he tracks somebody
 "MC_Interactive_MaxTheta" : Maximum theta that the robot can apply when he tracks somebody
 "MC_Interactive_DistanceHumanRobot" : Distance between the human and the robot
 "MC_Interactive_MaxDistanceHumanRobot" : Maximum distance human robot to allow the robot to move (in MoveContextually mode)
 
   * @param newVal - "LookStimulusSpeed" : Float in range [0.01;1]
 "LookBackSpeed" : Float in range [0.01;1]
 "NobodyFoundTimeOut" : Float > 0
 "MinTimeTracking" : Float in range [0;20]
 "TimeSleepBeforeResumeMS" : Int > 0
 "TimeOutResetHead" : Float in range [0;30]
 "AmplitudeYawTracking" : Float in range [10;120]
 "PeoplePerceptionPeriod" : Int > 1
 "SlowPeoplePerceptionPeriod" : Int > 1
 "HeadThreshold" : Float in range [0;180]
 "BodyRotationThreshold" : Float in range [-180;180]
 "BodyRotationThresholdNao" : Float in range [-180;180]
 "MoveDistanceX" : Float in range [-5;5]
 "MoveDistanceY" : Float in range [-5;5]
 "MoveAngleTheta" : Float in range [-180;180]
 "MoveThresholdX" : Float in range [0;5]
 "MoveThresholdY" : Float in range [0;5]
 "MoveThresholdTheta" : Float in range [-180;180]
 "MaxDistanceFullyEngaged" : Float in range [0.5;5]
 "MaxDistanceNotFullyEngaged" : Float in range [0.5;5]
 "MaxHumanSearchTime" : Float in range [0.1;10]
 "DeltaPitchComfortZone" : Float in range [0;90]
 "CenterPitchComfortZone" : Float in range [-90;90]
 "SoundHeight" : Float in range [0;2]
 "MoveSpeed" : Float in range [0.1;0.55]
 "MC_Interactive_MinTime" : Int in range [0;100]
 "MC_Interactive_MaxOffsetTime" : Int in range [0;100]
 "MC_Interactive_DistanceXY" : Float in range [0;1]
 "MC_Interactive_MinTheta" : Float in range [-40;0]
 "MC_Interactive_MaxTheta" : Float in range [0;40]
 "MC_Interactive_DistanceHumanRobot" : Float in range [0.1;2]
 "MC_Interactive_MaxDistanceHumanRobot" : Float in range [0.1;3]
 
   * @return null
   */
  'setParameter': function setParameter(paramName, newVal) {
    return session.setParameter(paramName, newVal);
  },
  /**
   * Reset all parameters, including enabled/disabled stimulus.
   * @method resetAllParameters
   * @return null
   */
  'resetAllParameters': function resetAllParameters() {
    return session.resetAllParameters();
  },
  /**
   * Get the specified parameter.
   * @method getParameter
   * @param paramName - "LookStimulusSpeed" : Speed of head moves when looking at a stimulus, as fraction of max speed
 "LookBackSpeed" : Speed of head moves when looking back to previous position, as fraction of max speed
 "NobodyFoundTimeOut" : timeout to send HumanLost event when no blob is found, in seconds
 "MinTimeTracking" : Minimum Time for the robot to be focused on someone, without listening to other stimuli, in seconds
 "TimeSleepBeforeResumeMS" : Slept time before automatically resuming BasicAwareness when an automatic pause has been made, in milliseconds
 "TimeOutResetHead" : Timeout to reset the head, in seconds
 "AmplitudeYawTracking" : max absolute value for head yaw in tracking, in degrees
 "PeoplePerceptionPeriod" : Period for people perception, in milliseconds
 "SlowPeoplePerceptionPeriod" : Period for people perception in FullyEngaged mode, in milliseconds
 "HeadThreshold" : Yaw threshold for tracking, in degrees
 "BodyRotationThreshold" : Angular threshold for BodyRotation tracking mode, in degrees
 "BodyRotationThresholdNao" : Angular threshold for BodyRotation tracking mode on Nao, in degrees
 "MoveDistanceX" : X Distance for the Move tracking mode, in meters
 "MoveDistanceY" : Y Distance for the Move tracking mode, in meters
 "MoveAngleTheta" : Angle for the Move tracking mode, in degrees
 "MoveThresholdX" : Threshold for the Move tracking mode, in meters
 "MoveThresholdY" : Threshold for the Move tracking mode, in meters
 "MoveThresholdTheta" : Theta Threshold for the Move tracking mode, in degrees
 "MaxDistanceFullyEngaged" : Maximum distance for someone to be tracked for FullyEngaged mode, in meters
 "MaxDistanceNotFullyEngaged" : Maximum distance for someone to be tracked for modes different from FullyEngaged, in meters
 "MaxHumanSearchTime" : Maximum time to find a human after observing stimulus, in seconds
 "DeltaPitchComfortZone" : Pitch width of the comfort zone, in degree
 "CenterPitchComfortZone" : Pitch center of the confort zone, in degree
 "SoundHeight" : Default Height for sound detection, in meters
 "MoveSpeed" : Speed of the robot moves
 "MC_Interactive_MinTime" : Minimum time between 2 contextual moves (when the robot is tracking somebody)
 "MC_Interactive_MaxOffsetTime" : Maximum time that we can add to MC_Interactive_MinTime (when the robot is tracking somebody)
 "MC_Interactive_DistanceXY" : Maximum offset distance in X and Y that the robot can apply when he tracks somebody
 "MC_Interactive_MinTheta" : Minimum theta that the robot can apply when he tracks somebody
 "MC_Interactive_MaxTheta" : Maximum theta that the robot can apply when he tracks somebody
 "MC_Interactive_DistanceHumanRobot" : Distance between the human and the robot
 "MC_Interactive_MaxDistanceHumanRobot" : Maximum distance human robot to allow the robot to move (in MoveContextually mode)
 
   * @return ALValue format for required parameter
   */
  'getParameter': function getParameter(paramName) {
    return session.getParameter(paramName);
  },
  /**
   * Set engagement mode.
   * @method setEngagementMode
   * @param modeName - Name of the mode
   * @return null
   */
  'setEngagementMode': function setEngagementMode(modeName) {
    return session.setEngagementMode(modeName);
  },
  /**
   * Set engagement mode.
   * @method getEngagementMode
   * @return Name of current engagement mode as a string
   */
  'getEngagementMode': function getEngagementMode() {
    return session.getEngagementMode();
  },
  /**
   * Set engagement mode.
   * @method _setCustomEngagementMode
   * @private
   * @param checkStimWhenFocused - when it is tracking someone, true makes the robot check a stimulus to see if it corresponds to a human, false makes it go back to the current track human just after watching in the stim direction (as in SemiEngaged mode)
   * @param stimuliWhenNotTracking - stimuli enabled when the robot is tracking, as a stimuli names list
   * @param stimuliWhenTracking - stimuli enabled when the robot is not tracking, as a stimuli names list
   * @return null
   */
  '_setCustomEngagementMode': function _setCustomEngagementMode(checkStimWhenFocused, stimuliWhenNotTracking, stimuliWhenTracking) {
    return session._setCustomEngagementMode(checkStimWhenFocused, stimuliWhenNotTracking, stimuliWhenTracking);
  },
  /**
   * Set tracking mode.
   * @method setTrackingMode
   * @param modeName - Name of the mode
   * @return null
   */
  'setTrackingMode': function setTrackingMode(modeName) {
    return session.setTrackingMode(modeName);
  },
  /**
   * Set tracking mode.
   * @method getTrackingMode
   * @return Name of current tracking mode as a string
   */
  'getTrackingMode': function getTrackingMode() {
    return session.getTrackingMode();
  },
  /**
   * Force Engage Person.
   * @method engagePerson
   * @param engagePerson - ID of the person as found in PeoplePerception.
   * @return true if the robot succeeded to engage the person, else false.
   */
  'engagePerson': function engagePerson(engagePerson) {
    return session.engagePerson(engagePerson);
  },
  /**
   * Set a new contextual moves type.
   * @method _setContextualMoveType
   * @private
   * @param contextualMove - The contextual move, can be 'forward', 'backward', 'sides' and 'random'.
   * @return null
   */
  '_setContextualMoveType': function _setContextualMoveType(contextualMove) {
    return session._setContextualMoveType(contextualMove);
  },
  /**
   * Trigger a custom stimulus.
   * @method triggerStimulus
   * @param stimulusPosition - Position of the stimulus, in Frame World
   * @return If someone was found, return value is its ID, else it's -1
   */
  'triggerStimulus': function triggerStimulus(stimulusPosition) {
    return session.triggerStimulus(stimulusPosition);
  },
  /**
   * DEPRECATED since 2.4: use pauseAwareness instead.
   * @method _pauseAwareness
   * @private
   * @return null
   */
  '_pauseAwareness': function _pauseAwareness() {
    return session._pauseAwareness();
  },
  /**
   * DEPRECATED since 2.4: use resumeAwareness instead.
   * @method _resumeAwareness
   * @private
   * @return null
   */
  '_resumeAwareness': function _resumeAwareness() {
    return session._resumeAwareness();
  },
  /**
   * DEPRECATED since 2.4: use isAwarenessPaused instead.
   * @method _isAwarenessPaused
   * @private
   * @return null
   */
  '_isAwarenessPaused': function _isAwarenessPaused() {
    return session._isAwarenessPaused();
  },
  /**
   * Use leds for debug
   * @method _useLedDebug
   * @private
   * @param useLeds - Boolean value: true to use leds.
   * @return null
   */
  '_useLedDebug': function _useLedDebug(useLeds) {
    return session._useLedDebug(useLeds);
  },
  /**
   * Set Led group
   * @method _setLedGroup
   * @private
   * @param ledGroupName - Name of the led group.
   * @return null
   */
  '_setLedGroup': function _setLedGroup(ledGroupName) {
    return session._setLedGroup(ledGroupName);
  },
  /**
   * Use debug display in robot view
   * @method _displayRobotViewDebug
   * @private
   * @param useDisplay - Boolean value: true to use debug display in robot view.
   * @return null
   */
  '_displayRobotViewDebug': function _displayRobotViewDebug(useDisplay) {
    return session._displayRobotViewDebug(useDisplay);
  },
  /**
   * Get parameters documentation
   * @method _getParametersInfo
   * @private
   * @return Parameters info as string
   */
  '_getParametersInfo': function _getParametersInfo() {
    return session._getParametersInfo();
  },
  /**
   * Allow the robot to detect stimuli coming from behind and to turnthe base up to 180 degrees to watch them. If it's disabled, thestimuli from behind won't be taken into account.
   * @method _setEnableStimuliFromBehind
   * @private
   * @param enable - true to enable, false to disable
   * @return null
   */
  '_setEnableStimuliFromBehind': function _setEnableStimuliFromBehind(enable) {
    return session._setEnableStimuliFromBehind(enable);
  },
  /**
   * To know if the robot can detect stimuli from behind
   * @method _getEnableStimuliFromBehind
   * @private
   * @return Boolean value: true if stimuli from behind are enabled, else false.
   */
  '_getEnableStimuliFromBehind': function _getEnableStimuliFromBehind() {
    return session._getEnableStimuliFromBehind();
  },
  /**
   * Allow the robot to check downwards for low stimuli if nobody's found.
   * @method _setEnableCheckLowStimuli
   * @private
   * @param enable - true to enable, false to disable
   * @return null
   */
  '_setEnableCheckLowStimuli': function _setEnableCheckLowStimuli(enable) {
    return session._setEnableCheckLowStimuli(enable);
  },
  /**
   * To know if the robot can detect stimuli from behind
   * @method _getEnableCheckLowStimuli
   * @private
   * @return Boolean value: true if low stimuli are enabled, else false.
   */
  '_getEnableCheckLowStimuli': function _getEnableCheckLowStimuli() {
    return session._getEnableCheckLowStimuli();
  },
  /**
   * Get the position of home
   * @method _getHomeReferencePosition
   * @private
   * @return Pose2D as vector: Pose2D of home.
   */
  '_getHomeReferencePosition': function _getHomeReferencePosition() {
    return session._getHomeReferencePosition();
  },
  /**
   * 
   * @method _onPreferenceUpdated
   * @private
   * @param  - 
   * @param  - 
   * @param  - 
   * @return null
   */
  '_onPreferenceUpdated': function _onPreferenceUpdated(, , ) {
    return session._onPreferenceUpdated(, , );
  },
  /**
   * 
   * @method _onPreferenceSynchronized
   * @private
   * @param  - 
   * @param  - 
   * @param  - 
   * @return null
   */
  '_onPreferenceSynchronized': function _onPreferenceSynchronized(, , ) {
    return session._onPreferenceSynchronized(, , );
  },
};
