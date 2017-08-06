/**
 * @module preferenceManager
 */
session.preferenceManager = {
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
   * Get specified preference
   * @method getValue
   * @param domain - Preference domain
   * @param setting - Preference setting
   * @return corresponding preferences value
   */
  'getValue': function getValue(domain, setting) {
    return session.getValue(domain, setting);
  },
  /**
   * Set specified preference
   * @method setValue
   * @param domain - Preference domain
   * @param setting - Preference setting
   * @param value - Preference value
   * @return null
   */
  'setValue': function setValue(domain, setting, value) {
    return session.setValue(domain, setting, value);
  },
  /**
   * Get preferences names and values for a given domain
   * @method getValueList
   * @param domain - Preference domain
   * @return a list of preferences names and values associated to the domain
   */
  'getValueList': function getValueList(domain) {
    return session.getValueList(domain);
  },
  /**
   * Get available preferences domain
   * @method getDomainList
   * @return a list containing all the available domain names
   */
  'getDomainList': function getDomainList() {
    return session.getDomainList();
  },
  /**
   * Remove specified preference
   * @method removeValue
   * @param domain - Preference domain
   * @param setting - Preference setting
   * @return null
   */
  'removeValue': function removeValue(domain, setting) {
    return session.removeValue(domain, setting);
  },
  /**
   * Add many values at once.
   * @method setValues
   * @param values - A map (domain as index) of map (setting name as index) of values.
   * @return null
   */
  'setValues': function setValues(values) {
    return session.setValues(values);
  },
  /**
   * Remove an entire preference domain
   * @method removeDomainValues
   * @param domain - Preference domain
   * @return null
   */
  'removeDomainValues': function removeDomainValues(domain) {
    return session.removeDomainValues(domain);
  },
  /**
   * Import a preferences XML file
   * @method importPrefFile
   * @param domain - Preference domain: all preferences values found in XML file will be imported in that domain.
   * @param applicationName - Application name: will be used to search for preference file on disk (in location of type <configurationdirectory>/applicationName/filename).
   * @param filename - Preference XML filename
   * @param override - Set this to true if you want to override preferences that already exist with preferences in imported XML file
   * @return null
   */
  'importPrefFile': function importPrefFile(domain, applicationName, filename, override) {
    return session.importPrefFile(domain, applicationName, filename, override);
  },
  /**
   * Synchronizes local preferences with preferences stored on a server.
   * @method update
   * @return null
   */
  'update': function update() {
    return session.update();
  },
  /**
   * Update local preference from version store on Cloud (usefull when preference was updated on Cloud)
   * @method _setFromCloud
   * @private
   * @param domain - Preference domain
   * @param setting - Preference setting
   * @param value - Preference value
   * @return null
   */
  '_setFromCloud': function _setFromCloud(domain, setting, value) {
    return session._setFromCloud(domain, setting, value);
  },
  /**
   * Restart preferences module
   * @method _restart
   * @private
   * @param url - Preference server url
   * @param path - Path to sqlite database
   * @return null
   */
  '_restart': function _restart(url, path) {
    return session._restart(url, path);
  },
  /**
   * Internal callback.
   * @method _onConnectivityChanged
   * @private
   * @param string - variable
   * @param string - value
   * @param string - message
   * @return null
   */
  '_onConnectivityChanged': function _onConnectivityChanged(string, string, string) {
    return session._onConnectivityChanged(string, string, string);
  },
  /**
   * Remove all robot preferences from cloud, resynchronise
   * @method _factoryReset
   * @private
   * @return null
   */
  '_factoryReset': function _factoryReset() {
    return session._factoryReset();
  },
};
