/**
 * @module memory
 */
session.memory = {
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
   * Declares an event to allow future subscriptions to the event
   * @method declareEvent
   * @param eventName - The name of the event
   * @return null
   */
  'declareEvent': function declareEvent(eventName) {
    return session.declareEvent(eventName);
  },
  /**
   * Declares an event to allow future subscriptions to the event
   * @method declareEvent
   * @param eventName - The name of the event
   * @param extractorName - The name of the extractor capable of creating the event
   * @return null
   */
  'declareEvent': function declareEvent(eventName, extractorName) {
    return session.declareEvent(eventName, extractorName);
  },
  /**
   * Gets the value of a key-value pair stored in memory
   * @method getData
   * @param key - Name of the value.
   * @return The data as an ALValue. This can often be cast transparently into the original type.
   */
  'getData': function getData(key) {
    return session.getData(key);
  },
  /**
   * DEPRECATED - Gets the value of a key-value pair stored in memory. Please use the version of this method with no second parameter.
   * @method getData
   * @param key - Name of the value.
   * @param deprecatedParameter - DEPRECATED - This parameter has no effect, but is left for compatibility reason.
   * @return The data as an ALValue
   */
  'getData': function getData(key, deprecatedParameter) {
    return session.getData(key, deprecatedParameter);
  },
  /**
   * Get an object wrapping a signal bound to the given ALMemory event. Creates the event if it does not exist.
   * @method subscriber
   * @param eventName - Name of the ALMemory event
   * @return An AnyObject with a signal named "signal"
   */
  'subscriber': function subscriber(eventName) {
    return session.subscriber(eventName);
  },
  /**
   * Get data value and timestamp
   * @method getTimestamp
   * @param key - Name of the variable
   * @return A list of all the data key names that contain the given string.
   */
  'getTimestamp': function getTimestamp(key) {
    return session.getTimestamp(key);
  },
  /**
   * Get data value and timestamp
   * @method getEventHistory
   * @param key - Name of the variable
   * @return A list of all the data key names that contain the given string.
   */
  'getEventHistory': function getEventHistory(key) {
    return session.getEventHistory(key);
  },
  /**
   * Gets a list of all key names that contain a given string
   * @method getDataList
   * @param filter - A string used as the search term
   * @return A list of all the data key names that contain the given string.
   */
  'getDataList': function getDataList(filter) {
    return session.getDataList(filter);
  },
  /**
   * Gets the key names for all the key-value pairs in memory
   * @method getDataListName
   * @return A list containing the keys in memory
   */
  'getDataListName': function getDataListName() {
    return session.getDataListName();
  },
  /**
   * DEPRECATED - Blocks the caller until the value of a key changes
   * @method getDataOnChange
   * @param key - Name of the data.
   * @param deprecatedParameter - DEPRECATED - this parameter has no effect
   * @return an array containing all the retrieved data
   */
  'getDataOnChange': function getDataOnChange(key, deprecatedParameter) {
    return session.getDataOnChange(key, deprecatedParameter);
  },
  /**
   * Gets a pointer to 32 a bit data item. Beware, the pointer will only be valid during the lifetime of the ALMemory object. Use with care, at initialization, not every loop.
   * @method getDataPtr
   * @param key - Name of the data.
   * @return A pointer converted to int
   */
  'getDataPtr': function getDataPtr(key) {
    return session.getDataPtr(key);
  },
  /**
   * Gets a list containing the names of all the declared events
   * @method getEventList
   * @return A list containing the names of all events
   */
  'getEventList': function getEventList() {
    return session.getEventList();
  },
  /**
   * Gets the list of all events generated by a given extractor
   * @method getExtractorEvent
   * @param extractorName - The name of the extractor
   * @return A list containing the names of the events associated with the given extractor
   */
  'getExtractorEvent': function getExtractorEvent(extractorName) {
    return session.getExtractorEvent(extractorName);
  },
  /**
   * Gets the values associated with the given list of keys. This is more efficient than calling getData many times, especially over the network.
   * @method getListData
   * @param keyList - An array containing the key names.
   * @return An array containing all the values corresponding to the given keys.
   */
  'getListData': function getListData(keyList) {
    return session.getListData(keyList);
  },
  /**
   * Gets a list containing the names of all the declared micro events
   * @method getMicroEventList
   * @return A list containing the names of all the microEvents
   */
  'getMicroEventList': function getMicroEventList() {
    return session.getMicroEventList();
  },
  /**
   * Gets a list containing the names of subscribers to an event.
   * @method getSubscribers
   * @param name - Name of the event or micro-event
   * @return List of subscriber names
   */
  'getSubscribers': function getSubscribers(name) {
    return session.getSubscribers(name);
  },
  /**
   * Gets the storage class of the stored data. This is not the underlying POD type.
   * @method getType
   * @param key - Name of the variable
   * @return String type: Data, Event, MicroEvent
   */
  'getType': function getType(key) {
    return session.getType(key);
  },
  /**
   * Inserts a key-value pair into memory, where value is an int
   * @method insertData
   * @param key - Name of the value to be inserted.
   * @param value - The int to be inserted
   * @return null
   */
  'insertData': function insertData(key, value) {
    return session.insertData(key, value);
  },
  /**
   * Inserts a key-value pair into memory, where value is a float
   * @method insertData
   * @param key - Name of the value to be inserted.
   * @param value - The float to be inserted
   * @return null
   */
  'insertData': function insertData(key, value) {
    return session.insertData(key, value);
  },
  /**
   * Inserts a key-value pair into memory, where value is a string
   * @method insertData
   * @param key - Name of the value to be inserted.
   * @param value - The string to be inserted
   * @return null
   */
  'insertData': function insertData(key, value) {
    return session.insertData(key, value);
  },
  /**
   * Inserts a key-value pair into memory, where value is an ALValue
   * @method insertData
   * @param key - Name of the value to be inserted.
   * @param data - The ALValue to be inserted. This could contain a basic type, or a more complex array. See the ALValue documentation for more information.
   * @return null
   */
  'insertData': function insertData(key, data) {
    return session.insertData(key, data);
  },
  /**
   * Inserts a list of key-value pairs into memory.
   * @method insertListData
   * @param list - An ALValue list of the form [[Key, Value],...]. Each item will be inserted.
   * @return null
   */
  'insertListData': function insertListData(list) {
    return session.insertListData(list);
  },
  /**
   * Publishes the given data to all subscribers.
   * @method raiseEvent
   * @param name - Name of the event to raise.
   * @param value - The data associated with the event. This could contain a basic type, or a more complex array. See the ALValue documentation for more information.
   * @return null
   */
  'raiseEvent': function raiseEvent(name, value) {
    return session.raiseEvent(name, value);
  },
  /**
   * Publishes the given data to all subscribers.
   * @method raiseMicroEvent
   * @param name - Name of the event to raise.
   * @param value - The data associated with the event. This could contain a basic type, or a more complex array. See the ALValue documentation for more information.
   * @return null
   */
  'raiseMicroEvent': function raiseMicroEvent(name, value) {
    return session.raiseMicroEvent(name, value);
  },
  /**
   * Removes a key-value pair from memory
   * @method removeData
   * @param key - Name of the data to be removed.
   * @return null
   */
  'removeData': function removeData(key) {
    return session.removeData(key);
  },
  /**
   * Removes a event from memory and unsubscribes any exiting subscribers.
   * @method removeEvent
   * @param name - Name of the event to remove.
   * @return null
   */
  'removeEvent': function removeEvent(name) {
    return session.removeEvent(name);
  },
  /**
   * Removes a micro event from memory and unsubscribes any exiting subscribers.
   * @method removeMicroEvent
   * @param name - Name of the event to remove.
   * @return null
   */
  'removeMicroEvent': function removeMicroEvent(name) {
    return session.removeMicroEvent(name);
  },
  /**
   * Subscribes to an event and automaticaly launches the module that declared itself as the generator of the event if required.
   * @method subscribeToEvent
   * @param name - The name of the event to subscribe to
   * @param callbackModule - Name of the module to call with notifications
   * @param callbackMethod - Name of the module's method to call when a data is changed
   * @return null
   */
  'subscribeToEvent': function subscribeToEvent(name, callbackModule, callbackMethod) {
    return session.subscribeToEvent(name, callbackModule, callbackMethod);
  },
  /**
   * DEPRECATED Subscribes to event and automaticaly launches the module capable of generating the event if it is not already running. Please use the version without the callbackMessage parameter.
   * @method subscribeToEvent
   * @param name - The name of the event to subscribe to
   * @param callbackModule - Name of the module to call with notifications
   * @param callbackMessage - DEPRECATED Message included in the notification.
   * @param callbacMethod - Name of the module's method to call when a data is changed
   * @return null
   */
  'subscribeToEvent': function subscribeToEvent(name, callbackModule, callbackMessage, callbacMethod) {
    return session.subscribeToEvent(name, callbackModule, callbackMessage, callbacMethod);
  },
  /**
   * Subscribes to a microEvent. Subscribed modules are notified on theircallback method whenever the data is updated, even if the new value is the same as the old value.
   * @method subscribeToMicroEvent
   * @param name - Name of the data.
   * @param callbackModule - Name of the module to call with notifications
   * @param callbackMessage - Message included in the notification. This can be used to disambiguate multiple subscriptions.
   * @param callbackMethod - Name of the module's method to call when a data is changed
   * @return null
   */
  'subscribeToMicroEvent': function subscribeToMicroEvent(name, callbackModule, callbackMessage, callbackMethod) {
    return session.subscribeToMicroEvent(name, callbackModule, callbackMessage, callbackMethod);
  },
  /**
   * Informs ALMemory that a module doesn't exist anymore.
   * @method unregisterModuleReference
   * @param moduleName - Name of the departing module.
   * @return null
   */
  'unregisterModuleReference': function unregisterModuleReference(moduleName) {
    return session.unregisterModuleReference(moduleName);
  },
  /**
   * ALMemory performance
   * @method _perf
   * @private
   * @return null
   */
  '_perf': function _perf() {
    return session._perf();
  },
  /**
   * Unsubscribes a module from the given event. No further notifications will be received.
   * @method unsubscribeToEvent
   * @param name - The name of the event
   * @param callbackModule - The name of the module that was given when subscribing.
   * @return null
   */
  'unsubscribeToEvent': function unsubscribeToEvent(name, callbackModule) {
    return session.unsubscribeToEvent(name, callbackModule);
  },
  /**
   * Unsubscribes from the given event. No further notifications will be received.
   * @method unsubscribeToMicroEvent
   * @param name - Name of the event.
   * @param callbackModule - The name of the module that was given when subscribing.
   * @return null
   */
  'unsubscribeToMicroEvent': function unsubscribeToMicroEvent(name, callbackModule) {
    return session.unsubscribeToMicroEvent(name, callbackModule);
  },
  /**
   * Insert object in ALMemory. Please use ALMemoryFastAccess
   * @method _insertObject
   * @private
   * @param name - ALMemory data name
   * @param buffer - buffer in ALValue
   * @param bufferSize - buffer size
   * @return return an array of data's string name.
   */
  '_insertObject': function _insertObject(name, buffer, bufferSize) {
    return session._insertObject(name, buffer, bufferSize);
  },
  /**
   * Allows modules to change time policy of already subscribed data.
   * @method _subscribeOnDataSetTimePolicy
   * @private
   * @param name - Name of the data.
   * @param callbackModule - Name of the module.
   * @param nTimePolicy - time of new policy in ms. Default is 0: no time policy: called at every change/insert. If timepolicy > 0, we will not notifiy under timepolicy even if data change under timepolicy frequency
   * @return null
   */
  '_subscribeOnDataSetTimePolicy': function _subscribeOnDataSetTimePolicy(name, callbackModule, nTimePolicy) {
    return session._subscribeOnDataSetTimePolicy(name, callbackModule, nTimePolicy);
  },
  /**
   * Receives notifications in the same order that the event were sent. This is slower than
   * @method _subscribeOnDataSetSynchronizeResponse
   * @private
   * @param name - Name of the data.
   * @param callbackModule - Name of the module.
   * @param synchronizedResponse - True to receive notifications in the same order as events are sent
   * @return null
   */
  '_subscribeOnDataSetSynchronizeResponse': function _subscribeOnDataSetSynchronizeResponse(name, callbackModule, synchronizedResponse) {
    return session._subscribeOnDataSetSynchronizeResponse(name, callbackModule, synchronizedResponse);
  },
  /**
   * Describe a key
   * @method setDescription
   * @param name - Name of the key.
   * @param description - The description of the event (text format).
   * @return null
   */
  'setDescription': function setDescription(name, description) {
    return session.setDescription(name, description);
  },
  /**
   * Descriptions of all given keys
   * @method getDescriptionList
   * @param keylist - List of keys. (empty to get all descriptions)
   * @return an array of tuple (name, type, description) describing all keys.
   */
  'getDescriptionList': function getDescriptionList(keylist) {
    return session.getDescriptionList(keylist);
  },
  /**
   * Add a mapping between signal and event
   * @method addMapping
   * @param service - Name of the service
   * @param signal - Name of the signal
   * @param event - Name of the event
   * @return null
   */
  'addMapping': function addMapping(service, signal, event) {
    return session.addMapping(service, signal, event);
  },
  /**
   * Add a mapping between signal and event
   * @method addMapping
   * @param service - Name of the service
   * @param signalEvent - A map of signal corresponding to event
   * @return null
   */
  'addMapping': function addMapping(service, signalEvent) {
    return session.addMapping(service, signalEvent);
  },
};
