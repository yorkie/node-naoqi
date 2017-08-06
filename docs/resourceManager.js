/**
 * @module resourceManager
 */
session.resourceManager = {
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
   * Wait resource
   * @method waitForResource
   * @param resourceName - Resource name
   * @param ownerName - Module name
   * @param callbackName - callback name
   * @param timeoutSeconds - Timeout in seconds
   * @return null
   */
  'waitForResource': function waitForResource(resourceName, ownerName, callbackName, timeoutSeconds) {
    return session.waitForResource(resourceName, ownerName, callbackName, timeoutSeconds);
  },
  /**
   * Wait and acquire a resource
   * @method acquireResource
   * @param resourceName - Resource name
   * @param moduleName - Module name
   * @param callbackName - callback name
   * @param timeoutSeconds - Timeout in seconds
   * @return null
   */
  'acquireResource': function acquireResource(resourceName, moduleName, callbackName, timeoutSeconds) {
    return session.acquireResource(resourceName, moduleName, callbackName, timeoutSeconds);
  },
  /**
   * Wait resource
   * @method waitForOptionalResourcesTree
   * @return null
   */
  'waitForOptionalResourcesTree': function waitForOptionalResourcesTree() {
    return session.waitForOptionalResourcesTree();
  },
  /**
   * Wait for resource tree. Parent and children are not in conflict. Local function
   * @method waitForResourcesTree
   * @param resourceName - Resource name
   * @param moduleName - Module name
   * @param callbackName - callback name
   * @param timeoutSeconds - Timeout in seconds
   * @return null
   */
  'waitForResourcesTree': function waitForResourcesTree(resourceName, moduleName, callbackName, timeoutSeconds) {
    return session.waitForResourcesTree(resourceName, moduleName, callbackName, timeoutSeconds);
  },
  /**
   * Wait for resource tree. Parent and children are not in conflict. Local function
   * @method acquireResourcesTree
   * @param resourceName - Resource name
   * @param moduleName - Module name
   * @param callbackName - callback name
   * @param timeoutSeconds - Timeout in seconds
   * @return null
   */
  'acquireResourcesTree': function acquireResourcesTree(resourceName, moduleName, callbackName, timeoutSeconds) {
    return session.acquireResourcesTree(resourceName, moduleName, callbackName, timeoutSeconds);
  },
  /**
   * True if all the specified resources are owned by the owner
   * @method areResourcesOwnedBy
   * @param resourceNameList - Resource name
   * @param ownerName - Owner pointer with hierarchy
   * @return True if all the specify resources are owned by the owner
   */
  'areResourcesOwnedBy': function areResourcesOwnedBy(resourceNameList, ownerName) {
    return session.areResourcesOwnedBy(resourceNameList, ownerName);
  },
  /**
   * Release resource
   * @method releaseResource
   * @param resourceName - Resource name
   * @param ownerName - Existing owner name
   * @return null
   */
  'releaseResource': function releaseResource(resourceName, ownerName) {
    return session.releaseResource(resourceName, ownerName);
  },
  /**
   * Release  resources list
   * @method releaseResources
   * @param resourceNames - Resource names
   * @param ownerName - Owner name
   * @return null
   */
  'releaseResources': function releaseResources(resourceNames, ownerName) {
    return session.releaseResources(resourceNames, ownerName);
  },
  /**
   * Enable or disable a state resource
   * @method enableStateResource
   * @param resourceName - The name of the resource that you wish enable of disable. e.g. Standing
   * @param enabled - True to enable, false to disable
   * @return null
   */
  'enableStateResource': function enableStateResource(resourceName, enabled) {
    return session.enableStateResource(resourceName, enabled);
  },
  /**
   * check if all the state resource in the list are free
   * @method checkStateResourceFree
   * @param resourceName - Resource name
   * @return null
   */
  'checkStateResourceFree': function checkStateResourceFree(resourceName) {
    return session.checkStateResourceFree(resourceName);
  },
  /**
   * True if all resources are free
   * @method areResourcesFree
   * @param resourceNames - Resource names
   * @return True if all the specify resources are free
   */
  'areResourcesFree': function areResourcesFree(resourceNames) {
    return session.areResourcesFree(resourceNames);
  },
  /**
   * True if the resource is free
   * @method isResourceFree
   * @param resourceNames - Resource name
   * @return True if the specify resources is free
   */
  'isResourceFree': function isResourceFree(resourceNames) {
    return session.isResourceFree(resourceNames);
  },
  /**
   * Create a resource
   * @method createResource
   * @param resourceName - Resource name to create
   * @param parentResourceName - Parent resource name or empty string for root resource
   * @return null
   */
  'createResource': function createResource(resourceName, parentResourceName) {
    return session.createResource(resourceName, parentResourceName);
  },
  /**
   * Delete a root resource
   * @method deleteResource
   * @param resourceName - Resource name to delete
   * @param deleteChildResources - DEPRECATED: Delete child resources if true
   * @return null
   */
  'deleteResource': function deleteResource(resourceName, deleteChildResources) {
    return session.deleteResource(resourceName, deleteChildResources);
  },
  /**
   * True if a resource is in another parent resource
   * @method isInGroup
   * @param resourceGroupName - Group name. Ex: Arm
   * @param resourceName - Resource name
   * @return null
   */
  'isInGroup': function isInGroup(resourceGroupName, resourceName) {
    return session.isInGroup(resourceGroupName, resourceName);
  },
  /**
   * True if a resource is in another parent resource
   * @method createResourcesList
   * @param resourceGroupName - Group name. Ex: Arm
   * @param resourceName - Resource name
   * @return null
   */
  'createResourcesList': function createResourcesList(resourceGroupName, resourceName) {
    return session.createResourcesList(resourceGroupName, resourceName);
  },
  /**
   * Get tree of resources
   * @method getResources
   * @return null
   */
  'getResources': function getResources() {
    return session.getResources();
  },
  /**
   * The tree of the resources owners.
   * @method ownersGet
   * @return null
   */
  'ownersGet': function ownersGet() {
    return session.ownersGet();
  },
};
