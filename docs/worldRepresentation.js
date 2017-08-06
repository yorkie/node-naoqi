/**
 * @module worldRepresentation
 */
session.worldRepresentation = {
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
   * Add an attribute to a category.
   * @method addAttributeToCategory
   * @return null
   */
  'addAttributeToCategory': function addAttributeToCategory() {
    return session.addAttributeToCategory();
  },
  /**
   * Clear an object.
   * @method clearObject
   * @return null
   */
  'clearObject': function clearObject() {
    return session.clearObject();
  },
  /**
   * Clear recording of old positions.
   * @method clearOldPositions
   * @return null
   */
  'clearOldPositions': function clearOldPositions() {
    return session.clearOldPositions();
  },
  /**
   * Create a new object category
   * @method createObjectCategory
   * @return null
   */
  'createObjectCategory': function createObjectCategory() {
    return session.createObjectCategory();
  },
  /**
   * Remove an object category
   * @method removeObjectCategory
   * @return null
   */
  'removeObjectCategory': function removeObjectCategory() {
    return session.removeObjectCategory();
  },
  /**
   * Tells if an object category exists
   * @method objectCategoryExists
   * @return null
   */
  'objectCategoryExists': function objectCategoryExists() {
    return session.objectCategoryExists();
  },
  /**
   * Delete an object attribute
   * @method deleteObjectAttribute
   * @return null
   */
  'deleteObjectAttribute': function deleteObjectAttribute() {
    return session.deleteObjectAttribute();
  },
  /**
   * Check that an object is present.
   * @method findObject
   * @return null
   */
  'findObject': function findObject() {
    return session.findObject();
  },
  /**
   * 
   * @method load
   * @return null
   */
  'load': function load() {
    return session.load();
  },
  /**
   * Get all attributes from a category if it exists.
   * @method getAttributesFromCategory
   * @return null
   */
  'getAttributesFromCategory': function getAttributesFromCategory() {
    return session.getAttributesFromCategory();
  },
  /**
   * Get the direct children of an object.
   * @method getChildrenNames
   * @return null
   */
  'getChildrenNames': function getChildrenNames() {
    return session.getChildrenNames();
  },
  /**
   * Get the name of the objects.
   * @method getObjectNames
   * @return null
   */
  'getObjectNames': function getObjectNames() {
    return session.getObjectNames();
  },
  /**
   * 
   * @method getObjectAttributes
   * @return null
   */
  'getObjectAttributes': function getObjectAttributes() {
    return session.getObjectAttributes();
  },
  /**
   * 
   * @method getObjectAttributeValues
   * @return null
   */
  'getObjectAttributeValues': function getObjectAttributeValues() {
    return session.getObjectAttributeValues();
  },
  /**
   * 
   * @method getObjectLatestAttributes
   * @return null
   */
  'getObjectLatestAttributes': function getObjectLatestAttributes() {
    return session.getObjectLatestAttributes();
  },
  /**
   * 
   * @method getObjectParentName
   * @return null
   */
  'getObjectParentName': function getObjectParentName() {
    return session.getObjectParentName();
  },
  /**
   * Get the name of the objects stored in the database.
   * @method getObjectsInCategory
   * @return null
   */
  'getObjectsInCategory': function getObjectsInCategory() {
    return session.getObjectsInCategory();
  },
  /**
   * Get the name of the database where the object is stored.
   * @method getObjectCategory
   * @return null
   */
  'getObjectCategory': function getObjectCategory() {
    return session.getObjectCategory();
  },
  /**
   * Get the position of an object with quaternion / translation.
   * @method getPosition
   * @return null
   */
  'getPosition': function getPosition() {
    return session.getPosition();
  },
  /**
   * Get the position from one object to another.
   * @method getPosition6D
   * @return null
   */
  'getPosition6D': function getPosition6D() {
    return session.getPosition6D();
  },
  /**
   * Get the interpolated position of an object
   * @method getPosition6DAtTime
   * @return null
   */
  'getPosition6DAtTime': function getPosition6DAtTime() {
    return session.getPosition6DAtTime();
  },
  /**
   * 
   * @method getRootName
   * @return null
   */
  'getRootName': function getRootName() {
    return session.getRootName();
  },
  /**
   * 
   * @method save
   * @return null
   */
  'save': function save() {
    return session.save();
  },
  /**
   * Select information from a database.
   * @method select
   * @return null
   */
  'select': function select() {
    return session.select();
  },
  /**
   * Select ordered information from a database.
   * @method selectWithOrder
   * @return null
   */
  'selectWithOrder': function selectWithOrder() {
    return session.selectWithOrder();
  },
  /**
   * 
   * @method storeObject
   * @return null
   */
  'storeObject': function storeObject() {
    return session.storeObject();
  },
  /**
   * 
   * @method storeObjectWithReference
   * @return null
   */
  'storeObjectWithReference': function storeObjectWithReference() {
    return session.storeObjectWithReference();
  },
  /**
   * 
   * @method storeObjectAttribute
   * @return null
   */
  'storeObjectAttribute': function storeObjectAttribute() {
    return session.storeObjectAttribute();
  },
  /**
   * Update the position of an object.
   * @method updatePosition
   * @return null
   */
  'updatePosition': function updatePosition() {
    return session.updatePosition();
  },
  /**
   * Update the position of an object relative to another.
   * @method updatePositionWithReference
   * @return null
   */
  'updatePositionWithReference': function updatePositionWithReference() {
    return session.updatePositionWithReference();
  },
  /**
   * 
   * @method updateAttribute
   * @return null
   */
  'updateAttribute': function updateAttribute() {
    return session.updateAttribute();
  },
  /**
   * 
   * @method _startMemoryCheck
   * @private
   * @return null
   */
  '_startMemoryCheck': function _startMemoryCheck() {
    return session._startMemoryCheck();
  },
  /**
   * 
   * @method _stopMemoryCheck
   * @private
   * @return null
   */
  '_stopMemoryCheck': function _stopMemoryCheck() {
    return session._stopMemoryCheck();
  },
  /**
   * 
   * @method _beginTransaction
   * @private
   * @return null
   */
  '_beginTransaction': function _beginTransaction() {
    return session._beginTransaction();
  },
  /**
   * 
   * @method _endTransaction
   * @private
   * @return null
   */
  '_endTransaction': function _endTransaction() {
    return session._endTransaction();
  },
};
