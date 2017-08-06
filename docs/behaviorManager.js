/**
 * @module behaviorManager
 */
session.behaviorManager = {
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
   * Load a behavior
   * @method preloadBehavior
   * @param behavior - Behavior name 
   * @return Returns true if it was successfully loaded.
   */
  'preloadBehavior': function preloadBehavior(behavior) {
    return session.preloadBehavior(behavior);
  },
  /**
   * Starts a behavior, returns when started.
   * @method startBehavior
   * @param behavior - Behavior name 
   * @return null
   */
  'startBehavior': function startBehavior(behavior) {
    return session.startBehavior(behavior);
  },
  /**
   * Runs a behavior, returns when finished
   * @method runBehavior
   * @param behavior - Behavior name 
   * @return null
   */
  'runBehavior': function runBehavior(behavior) {
    return session.runBehavior(behavior);
  },
  /**
   * Stop a behavior
   * @method stopBehavior
   * @param behavior - Behavior name 
   * @return null
   */
  'stopBehavior': function stopBehavior(behavior) {
    return session.stopBehavior(behavior);
  },
  /**
   * Stop all behaviors
   * @method stopAllBehaviors
   * @return null
   */
  'stopAllBehaviors': function stopAllBehaviors() {
    return session.stopAllBehaviors();
  },
  /**
   * Tell if supplied name corresponds to a behavior that has been installed
   * @method isBehaviorInstalled
   * @param name - The behavior directory name
   * @return Returns true if it is a valid behavior
   */
  'isBehaviorInstalled': function isBehaviorInstalled(name) {
    return session.isBehaviorInstalled(name);
  },
  /**
   * Tell if the supplied namecorresponds to an existing behavior.
   * @method isBehaviorPresent
   * @param prefixedBehavior - Prefixed behavior or just behavior's name (latter usage deprecated, in this case the behavior is searched for amongst user's behaviors, then in system behaviors) DEPRECATED in favor of ALBehaviorManager.isBehaviorInstalled.
   * @return Returns true if it is an existing behavior
   */
  'isBehaviorPresent': function isBehaviorPresent(prefixedBehavior) {
    return session.isBehaviorPresent(prefixedBehavior);
  },
  /**
   * Get behaviors
   * @method getBehaviorNames
   * @return Returns the list of behaviors prefixed by their type (User/ or System/). DEPRECATED in favor of ALBehaviorManager.getInstalledBehaviors.
   */
  'getBehaviorNames': function getBehaviorNames() {
    return session.getBehaviorNames();
  },
  /**
   * Get user's behaviors
   * @method getUserBehaviorNames
   * @return Returns the list of user's behaviors prefixed by User/. DEPRECATED in favor of ALBehaviorManager.getInstalledBehaviors.
   */
  'getUserBehaviorNames': function getUserBehaviorNames() {
    return session.getUserBehaviorNames();
  },
  /**
   * Get system behaviors
   * @method getSystemBehaviorNames
   * @return Returns the list of system behaviors prefixed by System/. DEPRECATED in favor of ALBehaviorManager.getInstalledBehaviors.
   */
  'getSystemBehaviorNames': function getSystemBehaviorNames() {
    return session.getSystemBehaviorNames();
  },
  /**
   * Get installed behaviors directories names
   * @method getInstalledBehaviors
   * @return Returns the behaviors list
   */
  'getInstalledBehaviors': function getInstalledBehaviors() {
    return session.getInstalledBehaviors();
  },
  /**
   * Get installed behaviors directories names and filter it by tag.
   * @method getBehaviorsByTag
   * @param tag - A tag to filter the list with.
   * @return Returns the behaviors list
   */
  'getBehaviorsByTag': function getBehaviorsByTag(tag) {
    return session.getBehaviorsByTag(tag);
  },
  /**
   * Tell if supplied name corresponds to a running behavior
   * @method isBehaviorRunning
   * @param behavior - Behavior name 
   * @return Returns true if it is a running behavior
   */
  'isBehaviorRunning': function isBehaviorRunning(behavior) {
    return session.isBehaviorRunning(behavior);
  },
  /**
   * Tell if supplied name corresponds to a loaded behavior
   * @method isBehaviorLoaded
   * @param behavior - Behavior name 
   * @return Returns true if it is a loaded behavior
   */
  'isBehaviorLoaded': function isBehaviorLoaded(behavior) {
    return session.isBehaviorLoaded(behavior);
  },
  /**
   * Get running behaviors
   * @method getRunningBehaviors
   * @return Return running behaviors
   */
  'getRunningBehaviors': function getRunningBehaviors() {
    return session.getRunningBehaviors();
  },
  /**
   * Get loaded behaviors
   * @method getLoadedBehaviors
   * @return Return loaded behaviors
   */
  'getLoadedBehaviors': function getLoadedBehaviors() {
    return session.getLoadedBehaviors();
  },
  /**
   * Get tags found on installed behaviors.
   * @method getTagList
   * @return The list of tags found.
   */
  'getTagList': function getTagList() {
    return session.getTagList();
  },
  /**
   * Get tags found on the given behavior.
   * @method getBehaviorTags
   * @param behavior - The local path towards a behavior or a directory.
   * @return The list of tags found.
   */
  'getBehaviorTags': function getBehaviorTags(behavior) {
    return session.getBehaviorTags(behavior);
  },
  /**
   * Get the nature of the given behavior.
   * @method getBehaviorNature
   * @param behavior - The local path towards a behavior or a directory.
   * @return The nature of the behavior.
   */
  'getBehaviorNature': function getBehaviorNature(behavior) {
    return session.getBehaviorNature(behavior);
  },
  /**
   * Get the relative path of a running behavior inside its package.
   * @method _getBehaviorRelativePath
   * @private
   * @param behaviorId - The ID of the behavior.
   * @return The relative path of the behavior.
   */
  '_getBehaviorRelativePath': function _getBehaviorRelativePath(behaviorId) {
    return session._getBehaviorRelativePath(behaviorId);
  },
  /**
   * Get the package UID of a running behavior.
   * @method _getPackageUid
   * @private
   * @param behaviorId - The ID of the behavior.
   * @return The package UID of the behavior.
   */
  '_getPackageUid': function _getPackageUid(behaviorId) {
    return session._getPackageUid(behaviorId);
  },
  /**
   * Set the given behavior as default
   * @method addDefaultBehavior
   * @param behavior - Behavior name 
   * @return null
   */
  'addDefaultBehavior': function addDefaultBehavior(behavior) {
    return session.addDefaultBehavior(behavior);
  },
  /**
   * Remove the given behavior from the default behaviors
   * @method removeDefaultBehavior
   * @param behavior - Behavior name 
   * @return null
   */
  'removeDefaultBehavior': function removeDefaultBehavior(behavior) {
    return session.removeDefaultBehavior(behavior);
  },
  /**
   * Get default behaviors
   * @method getDefaultBehaviors
   * @return Return default behaviors
   */
  'getDefaultBehaviors': function getDefaultBehaviors() {
    return session.getDefaultBehaviors();
  },
  /**
   * Play default behaviors
   * @method playDefaultProject
   * @return null
   */
  'playDefaultProject': function playDefaultProject() {
    return session.playDefaultProject();
  },
  /**
   * Be notified when something we have subscribe to has changed in ALMemory
   * @method _onDataChanged
   * @private
   * @param dataName - name of the data
   * @param dataValue - value of the data
   * @param message - callback message
   * @return null
   */
  '_onDataChanged': function _onDataChanged(dataName, dataValue, message) {
    return session._onDataChanged(dataName, dataValue, message);
  },
  /**
   * get the FrameManagerID. INTERNAL
   * @method _getBehaviorFrameManagerId
   * @private
   * @param name - name of choregraphe project
   * @return null
   */
  '_getBehaviorFrameManagerId': function _getBehaviorFrameManagerId(name) {
    return session._getBehaviorFrameManagerId(name);
  },
  /**
   * Find out the actual <package>/<behavior> path behind a behavior name.
   * @method resolveBehaviorName
   * @param name - name of a behavior
   * @return The actual <package>/<behavior> path if found, else an empty string. Throws an ALERROR if two behavior names conflicted.
   */
  'resolveBehaviorName': function resolveBehaviorName(name) {
    return session.resolveBehaviorName(name);
  },
};
