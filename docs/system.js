/**
 * @module system
 */
session.system = {
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
   * Get the backup information of applications
   * @method appBackupInfo
   * @return A vector with all application backup infos
   */
  'appBackupInfo': function appBackupInfo() {
    return session.appBackupInfo();
  },
  /**
   * Display free disk space
   * @method diskFree
   * @param all - Show all mount partions.
   * @return A vector with all partions' infos
   */
  'diskFree': function diskFree(all) {
    return session.diskFree(all);
  },
  /**
   * System hostname
   * @method robotName
   * @return name of the robot
   */
  'robotName': function robotName() {
    return session.robotName();
  },
  /**
   * Set system hostname
   * @method setRobotName
   * @param name - name to use
   * @return whether the operation was successful
   */
  'setRobotName': function setRobotName(name) {
    return session.setRobotName(name);
  },
  /**
   * 
   * @method robotIcon
   * @return null
   */
  'robotIcon': function robotIcon() {
    return session.robotIcon();
  },
  /**
   * 
   * @method robotIcon
   * @return null
   */
  'robotIcon': function robotIcon() {
    return session.robotIcon();
  },
  /**
   * Shutdown robot
   * @method shutdown
   * @return null
   */
  'shutdown': function shutdown() {
    return session.shutdown();
  },
  /**
   * Reboot robot
   * @method reboot
   * @return null
   */
  'reboot': function reboot() {
    return session.reboot();
  },
  /**
   * Running system version
   * @method systemVersion
   * @return running system version
   */
  'systemVersion': function systemVersion() {
    return session.systemVersion();
  },
  /**
   * Running system version
   * @method systemInfo
   * @return information about the system version
   */
  'systemInfo': function systemInfo() {
    return session.systemInfo();
  },
  /**
   * Amount of available memory in heap
   * @method freeMemory
   * @return amount of available memory in heap
   */
  'freeMemory': function freeMemory() {
    return session.freeMemory();
  },
  /**
   * Amount of total memory in heap
   * @method totalMemory
   * @return amount of total memory in heap
   */
  'totalMemory': function totalMemory() {
    return session.totalMemory();
  },
  /**
   * Current timezone
   * @method timezone
   * @return current timezone
   */
  'timezone': function timezone() {
    return session.timezone();
  },
  /**
   * Set current timezone
   * @method setTimezone
   * @param timezone - timezone to use
   * @return whether the operation was successful
   */
  'setTimezone': function setTimezone(timezone) {
    return session.setTimezone(timezone);
  },
  /**
   * Set current robot icon
   * @method setRobotIcon
   * @param imageFile - Image file to use as a robot icon
   * @return null
   */
  'setRobotIcon': function setRobotIcon(imageFile) {
    return session.setRobotIcon(imageFile);
  },
  /**
   * Previous system version before software update (empty if this is not the 1st boot after a software update)
   * @method previousSystemVersion
   * @return Previous system version before software update.
   */
  'previousSystemVersion': function previousSystemVersion() {
    return session.previousSystemVersion();
  },
  /**
   * Change the user password.
   * @method changePassword
   * @param old password - The current password of the user.
   * @param new password - The new user password.
   * @return null
   */
  'changePassword': function changePassword(old password, new password) {
    return session.changePassword(old password, new password);
  },
  /**
   * Flash the system image.
   * @method upgrade
   * @param image - Local path to a valid image.
   * @param checksum - Local path to a md5 checksum file, or empty string for no verification
   * @return null
   */
  'upgrade': function upgrade(image, checksum) {
    return session.upgrade(image, checksum);
  },
  /**
   * Flash the system image and erase the user data
   * @method factoryReset
   * @param image - Local path to a valid image.
   * @param checksum - Local path to a md5 checksum file, or empty string for no verification
   * @return null
   */
  'factoryReset': function factoryReset(image, checksum) {
    return session.factoryReset(image, checksum);
  },
  /**
   * Set the robot status LED
   * @method _setStatusLed
   * @private
   * @param state - state to set
   * @return null
   */
  '_setStatusLed': function _setStatusLed(state) {
    return session._setStatusLed(state);
  },
  /**
   * Load system notification and data
   * @method _initializeSystemNotification
   * @private
   * @return null
   */
  '_initializeSystemNotification': function _initializeSystemNotification() {
    return session._initializeSystemNotification();
  },
  /**
   * List of the faulty boards
   * @method _boardFirmwareUpdateError
   * @private
   * @return A vector with the name of the faulty boards
   */
  '_boardFirmwareUpdateError': function _boardFirmwareUpdateError() {
    return session._boardFirmwareUpdateError();
  },
  /**
   * Execute operations for safe naoqi stop
   * @method _prepareNaoqiStop
   * @private
   * @return null
   */
  '_prepareNaoqiStop': function _prepareNaoqiStop() {
    return session._prepareNaoqiStop();
  },
};
