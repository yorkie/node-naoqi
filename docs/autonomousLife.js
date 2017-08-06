/**
 * @module autonomousLife
 */
session.autonomousLife = {
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
   * @method _onPreferenceChanged
   * @private
   * @param  - 
   * @param  - 
   * @param  - 
   * @return null
   */
  '_onPreferenceChanged': function _onPreferenceChanged(, , ) {
    return session._onPreferenceChanged(, , );
  },
  /**
   * 
   * @method onReady
   * @param  - 
   * @param  - 
   * @param  - 
   * @return null
   */
  'onReady': function onReady(, , ) {
    return session.onReady(, , );
  },
  /**
   * 
   * @method _onRobotHealthChanged
   * @private
   * @param  - 
   * @param  - 
   * @param  - 
   * @return null
   */
  '_onRobotHealthChanged': function _onRobotHealthChanged(, , ) {
    return session._onRobotHealthChanged(, , );
  },
  /**
   * 
   * @method _onPushRecovery
   * @private
   * @param  - 
   * @param  - 
   * @param  - 
   * @return null
   */
  '_onPushRecovery': function _onPushRecovery(, , ) {
    return session._onPushRecovery(, , );
  },
  /**
   * 
   * @method _onFallRecovery
   * @private
   * @param  - 
   * @param  - 
   * @param  - 
   * @return null
   */
  '_onFallRecovery': function _onFallRecovery(, , ) {
    return session._onFallRecovery(, , );
  },
  /**
   * 
   * @method _onRobotMoved
   * @private
   * @param  - 
   * @param  - 
   * @param  - 
   * @return null
   */
  '_onRobotMoved': function _onRobotMoved(, , ) {
    return session._onRobotMoved(, , );
  },
  /**
   * 
   * @method _setStateChangeEnabled
   * @private
   * @param enabled - Enabled/Disable the setState() method.
   * @return null
   */
  '_setStateChangeEnabled': function _setStateChangeEnabled(enabled) {
    return session._setStateChangeEnabled(enabled);
  },
  /**
   * 
   * @method _loadConfigFile
   * @private
   * @param  - 
   * @return null
   */
  '_loadConfigFile': function _loadConfigFile() {
    return session._loadConfigFile();
  },
  /**
   * Programatically control the state of Autonomous Life
   * @method setState
   * @param state - The possible states of AutonomousLife are: interactive, solitary, safeguard, disabled
   * @return null
   */
  'setState': function setState(state) {
    return session.setState(state);
  },
  /**
   * Returns the current state of AutonomousLife
   * @method getState
   * @return Can be: solitary, interactive, safeguard, disabled
   */
  'getState': function getState() {
    return session.getState();
  },
  /**
   * Returns the currently focused activity
   * @method focusedActivity
   * @return The name of the focused activity
   */
  'focusedActivity': function focusedActivity() {
    return session.focusedActivity();
  },
  /**
   * Set an activity as running with user focus
   * @method switchFocus
   * @param activity_name - The package_name/activity_name to run
   * @return null
   */
  'switchFocus': function switchFocus(activity_name) {
    return session.switchFocus(activity_name);
  },
  /**
   * Set an activity as running with user focus
   * @method switchFocus
   * @param activity_name - The package_name/activity_name to run
   * @param flags - Int flags for focus changing. STOP_CURRENT(0) or STOP_AND_STACK_CURRENT(1)
   * @return null
   */
  'switchFocus': function switchFocus(activity_name, flags) {
    return session.switchFocus(activity_name, flags);
  },
  /**
   * Set an activity as running with user focus
   * @method switchFocus
   * @param activity_name - The package_name/activity_name to run
   * @param flags - Int flags for focus changing. STOP_CURRENT(0) or STOP_AND_STACK_CURRENT(1)
   * @param parameters - AnyValue to be passed to activity
   * @return null
   */
  'switchFocus': function switchFocus(activity_name, flags, parameters) {
    return session.switchFocus(activity_name, flags, parameters);
  },
  /**
   * 
   * @method _switchFocus
   * @private
   * @return null
   */
  '_switchFocus': function _switchFocus() {
    return session._switchFocus();
  },
  /**
   * 
   * @method _switchFocus
   * @private
   * @return null
   */
  '_switchFocus': function _switchFocus() {
    return session._switchFocus();
  },
  /**
   * 
   * @method _switchFocus
   * @private
   * @return null
   */
  '_switchFocus': function _switchFocus() {
    return session._switchFocus();
  },
  /**
   * 
   * @method stopFocus
   * @return null
   */
  'stopFocus': function stopFocus() {
    return session.stopFocus();
  },
  /**
   * 
   * @method _stopFocus
   * @private
   * @return null
   */
  '_stopFocus': function _stopFocus() {
    return session._stopFocus();
  },
  /**
   * 
   * @method stopAll
   * @return null
   */
  'stopAll': function stopAll() {
    return session.stopAll();
  },
  /**
   * 
   * @method _stopAll
   * @private
   * @return null
   */
  '_stopAll': function _stopAll() {
    return session._stopAll();
  },
  /**
   * Get a value of an ALMemory key that is used in a condition, which is the value at the previous autonomous activity focus.
   * @method getFocusContext
   * @param name - Name of the ALMemory key to get.  Will throw if key is not used in any activity conditions.
   * @return An array of the ALValue of the memory key and timestamp of when it was set: [seconds, microseconds, value]
   */
  'getFocusContext': function getFocusContext(name) {
    return session.getFocusContext(name);
  },
  /**
   * Get a list of permissions that would be violated by a given activity in the current context.
   * @method getActivityContextPermissionViolations
   * @param name - The name of the activity to check.
   * @return An array of strings of the violated permissions. EG: ["nature", "canRunOnPod", "canRunInSleep"]
   */
  'getActivityContextPermissionViolations': function getActivityContextPermissionViolations(name) {
    return session.getActivityContextPermissionViolations(name);
  },
  /**
   * Returns the nature of an activity
   * @method getActivityNature
   * @param activity_name - The package_name/activity_name to check
   * @return Possible values are: solitary, interactive
   */
  'getActivityNature': function getActivityNature(activity_name) {
    return session.getActivityNature(activity_name);
  },
  /**
   * 
   * @method getActivityStatistics
   * @return null
   */
  'getActivityStatistics': function getActivityStatistics() {
    return session.getActivityStatistics();
  },
  /**
   * Get launch count, last completion time, etc for activities with autonomous launch trigger conditions.
   * @method getAutonomousActivityStatistics
   * @return A map of activity names, with a cooresponding map of  "prevStartTime", "prevCompletionTime", "startCount", "totalDuration". Times are 0 for unlaunched Activities
   */
  'getAutonomousActivityStatistics': function getAutonomousActivityStatistics() {
    return session.getAutonomousActivityStatistics();
  },
  /**
   * 
   * @method getFocusHistory
   * @return null
   */
  'getFocusHistory': function getFocusHistory() {
    return session.getFocusHistory();
  },
  /**
   * 
   * @method getFocusHistory
   * @return null
   */
  'getFocusHistory': function getFocusHistory() {
    return session.getFocusHistory();
  },
  /**
   * 
   * @method getStateHistory
   * @return null
   */
  'getStateHistory': function getStateHistory() {
    return session.getStateHistory();
  },
  /**
   * 
   * @method getStateHistory
   * @return null
   */
  'getStateHistory': function getStateHistory() {
    return session.getStateHistory();
  },
  /**
   * Get the time in seconds as life sees it.  Based on gettimeofday()
   * @method getLifeTime
   * @return The int time in seconds as Autonomous Life sees it
   */
  'getLifeTime': function getLifeTime() {
    return session.getLifeTime();
  },
  /**
   * 
   * @method setAutonomousAbilityEnabled
   * @return null
   */
  'setAutonomousAbilityEnabled': function setAutonomousAbilityEnabled() {
    return session.setAutonomousAbilityEnabled();
  },
  /**
   * Know is an Autonomous Ability is enabled or not
   * @method getAutonomousAbilityEnabled
   * @param autonomousAbility - The Autonomous Ability.
   * @return True if the Autonomous Ability is enabled, False otherwise.
   */
  'getAutonomousAbilityEnabled': function getAutonomousAbilityEnabled(autonomousAbility) {
    return session.getAutonomousAbilityEnabled(autonomousAbility);
  },
  /**
   * Get the Autonomous Abilities status (get the autonomous abilities name and booleans to know if they are enabled or running
   * @method getAutonomousAbilitiesStatus
   * @return The Autonomous Abilities status. A vector containing a status for each autonomous ability. Each status is composed of the autonomous ability name, a boolean to know if it's enabled and another boolean to know if it's running.
   */
  'getAutonomousAbilitiesStatus': function getAutonomousAbilitiesStatus() {
    return session.getAutonomousAbilitiesStatus();
  },
  /**
   * Start monitoring ALMemory and reporting conditional triggers with AutonomousLaunchpad.
   * @method startMonitoringLaunchpadConditions
   * @return null
   */
  'startMonitoringLaunchpadConditions': function startMonitoringLaunchpadConditions() {
    return session.startMonitoringLaunchpadConditions();
  },
  /**
   * Stop monitoring ALMemory and reporting conditional triggers with AutonomousLaunchpad.
   * @method stopMonitoringLaunchpadConditions
   * @return null
   */
  'stopMonitoringLaunchpadConditions': function stopMonitoringLaunchpadConditions() {
    return session.stopMonitoringLaunchpadConditions();
  },
  /**
   * Gets running status of AutonomousLaunchpad
   * @method isMonitoringLaunchpadConditions
   * @return True if AutonomousLaunchpad is monitoring ALMemory and reporting conditional triggers.
   */
  'isMonitoringLaunchpadConditions': function isMonitoringLaunchpadConditions() {
    return session.isMonitoringLaunchpadConditions();
  },
  /**
   * Temporarily enables/disables AutonomousLaunchpad Plugins
   * @method setLaunchpadPluginEnabled
   * @param plugin_name - The name of the plugin to enable/disable
   * @param enabled - Whether or not to enable this plugin
   * @return null
   */
  'setLaunchpadPluginEnabled': function setLaunchpadPluginEnabled(plugin_name, enabled) {
    return session.setLaunchpadPluginEnabled(plugin_name, enabled);
  },
  /**
   * Get a list of enabled AutonomousLaunchpad Plugins.  Enabled plugins will run when AutonomousLaunchpad is started
   * @method getEnabledLaunchpadPlugins
   * @return A list of strings of enabled plugins.
   */
  'getEnabledLaunchpadPlugins': function getEnabledLaunchpadPlugins() {
    return session.getEnabledLaunchpadPlugins();
  },
  /**
   * Get a list of AutonomousLaunchpad Plugins that belong to specified group
   * @method getLaunchpadPluginsForGroup
   * @param group - The group to search for the plugins
   * @return A list of strings of the plugins belonging to the group.
   */
  'getLaunchpadPluginsForGroup': function getLaunchpadPluginsForGroup(group) {
    return session.getLaunchpadPluginsForGroup(group);
  },
  /**
   * Set the vertical offset (in meters) of the base of the robot with respect to the floor
   * @method setRobotOffsetFromFloor
   * @param offset - The new vertical offset (in meters)
   * @return null
   */
  'setRobotOffsetFromFloor': function setRobotOffsetFromFloor(offset) {
    return session.setRobotOffsetFromFloor(offset);
  },
  /**
   * Get the vertical offset (in meters) of the base of the robot with respect to the floor
   * @method getRobotOffsetFromFloor
   * @return Current vertical offset (in meters)
   */
  'getRobotOffsetFromFloor': function getRobotOffsetFromFloor() {
    return session.getRobotOffsetFromFloor();
  },
  /**
   * 
   * @method _forbidAutonomousInteractiveStateChange
   * @private
   * @param is_forbidden - 
   * @return null
   */
  '_forbidAutonomousInteractiveStateChange': function _forbidAutonomousInteractiveStateChange(is_forbidden) {
    return session._forbidAutonomousInteractiveStateChange(is_forbidden);
  },
  /**
   * 
   * @method _forbidAutonomousActivityFocusSwitch
   * @private
   * @param is_forbidden - 
   * @return null
   */
  '_forbidAutonomousActivityFocusSwitch': function _forbidAutonomousActivityFocusSwitch(is_forbidden) {
    return session._forbidAutonomousActivityFocusSwitch(is_forbidden);
  },
  /**
   * Set if a given safeguard will be handled by Autonomous Life or not.
   * @method setSafeguardEnabled
   * @param name - Name of the safeguard to consider: RobotPushed, RobotFell,CriticalDiagnosis, CriticalTemperature
   * @param enabled - True if life handles the safeguard.
   * @return null
   */
  'setSafeguardEnabled': function setSafeguardEnabled(name, enabled) {
    return session.setSafeguardEnabled(name, enabled);
  },
  /**
   * Get if a given safeguard will be handled by Autonomous Life or not.
   * @method isSafeguardEnabled
   * @param name - Name of the safeguard to consider: RobotPushed, RobotFell,CriticalDiagnosis, CriticalTemperature
   * @return True if life handles the safeguard.
   */
  'isSafeguardEnabled': function isSafeguardEnabled(name) {
    return session.isSafeguardEnabled(name);
  },
  /**
   * Get if the movedsafeguard will be instantaneous, or end when move is stopped
   * @method _isMovedSafeguardInstantaneous
   * @private
   * @return True if safeguard is instantaneous, false if safeguard exited after move stopped.
   */
  '_isMovedSafeguardInstantaneous': function _isMovedSafeguardInstantaneous() {
    return session._isMovedSafeguardInstantaneous();
  },
  /**
   * Set how long to stay in safeguard state if robot pushed.
   * @method _setPushRecoverySafeguardDuration
   * @private
   * @param duration_ms - Time in milliseconds to stay in safeguard state.
   * @return null
   */
  '_setPushRecoverySafeguardDuration': function _setPushRecoverySafeguardDuration(duration_ms) {
    return session._setPushRecoverySafeguardDuration(duration_ms);
  },
  /**
   * Get how long to stay in safeguard state if robot pushed.
   * @method _getPushRecoverySafeguardDuration
   * @private
   * @return Time in milliseconds to stay in safeguard state.
   */
  '_getPushRecoverySafeguardDuration': function _getPushRecoverySafeguardDuration() {
    return session._getPushRecoverySafeguardDuration();
  },
  /**
   * Put the robot to sleep.
   * @method _sleep
   * @private
   * @return null
   */
  '_sleep': function _sleep() {
    return session._sleep();
  },
  /**
   * Wake the robot up.
   * @method _wakeUp
   * @private
   * @return null
   */
  '_wakeUp': function _wakeUp() {
    return session._wakeUp();
  },
  /**
   * 
   * @method _forbidStopCommands
   * @private
   * @param is_forbidden - 
   * @return null
   */
  '_forbidStopCommands': function _forbidStopCommands(is_forbidden) {
    return session._forbidStopCommands(is_forbidden);
  },
  /**
   * 
   * @method _loadModule
   * @private
   * @param module name - 
   * @return null
   */
  '_loadModule': function _loadModule(module name) {
    return session._loadModule(module name);
  },
};
