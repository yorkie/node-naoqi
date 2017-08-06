/**
 * @module leds
 */
session.leds = {
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
   * Makes a group name for ease of setting multiple LEDs.
   * @method createGroup
   * @param groupName - The name of the group.
   * @param ledNames - A vector of the names of the LEDs in the group.
   * @return null
   */
  'createGroup': function createGroup(groupName, ledNames) {
    return session.createGroup(groupName, ledNames);
  },
  /**
   * An animation to show a direction with the ears.
   * @method earLedsSetAngle
   * @param degrees - The angle you want to show in degrees (int). 0 is up, 90 is forwards, 180 is down and 270 is back.
   * @param duration - The duration in seconds of the animation.
   * @param leaveOnAtEnd - If true the last led is left on at the end of the animation.
   * @return null
   */
  'earLedsSetAngle': function earLedsSetAngle(degrees, duration, leaveOnAtEnd) {
    return session.earLedsSetAngle(degrees, duration, leaveOnAtEnd);
  },
  /**
   * Sets the intensity of a LED or Group of LEDs within a given time.
   * @method fade
   * @param name - The name of the LED or Group.
   * @param intensity - The intensity of the LED or Group (a value between 0 and 1).
   * @param duration - The duration of the fade in seconds
   * @return null
   */
  'fade': function fade(name, intensity, duration) {
    return session.fade(name, intensity, duration);
  },
  /**
   * Chain a list of color for a device, as the motion.doMove command.
   * @method fadeListRGB
   * @param name - The name of the LED or Group.
   * @param rgbList - List of RGB led value, RGB as seen in hexa-decimal: 0x00RRGGBB.
   * @param timeList - List of time to go to given intensity.
   * @return null
   */
  'fadeListRGB': function fadeListRGB(name, rgbList, timeList) {
    return session.fadeListRGB(name, rgbList, timeList);
  },
  /**
   * Sets the color of an RGB led.
   * @method fadeRGB
   * @param name - The name of the LED or Group.
   * @param red - the intensity of red channel (0-1).
   * @param green - the intensity of green channel (0-1).
   * @param blue - the intensity of blue channel (0-1).
   * @param duration - Time used to fade in seconds.
   * @return null
   */
  'fadeRGB': function fadeRGB(name, red, green, blue, duration) {
    return session.fadeRGB(name, red, green, blue, duration);
  },
  /**
   * Sets the color of an RGB led.
   * @method fadeRGB
   * @param name - The name of the LED or Group.
   * @param colorName - the name of the color (supported colors: "white", "red", "green", "blue", "yellow", "magenta", "cyan")
   * @param duration - Time used to fade in seconds.
   * @return null
   */
  'fadeRGB': function fadeRGB(name, colorName, duration) {
    return session.fadeRGB(name, colorName, duration);
  },
  /**
   * Sets the color of an RGB led.
   * @method fadeRGB
   * @param name - The name of the LED or Group.
   * @param rgb - The RGB value led, RGB as seen in hexa-decimal: 0x00RRGGBB.
   * @param duration - Time used to fade in seconds.
   * @return null
   */
  'fadeRGB': function fadeRGB(name, rgb, duration) {
    return session.fadeRGB(name, rgb, duration);
  },
  /**
   * Sets the color of an RGB led. This private method allows to use ChestLeds.
   * @method _fadeRGB
   * @private
   * @param name - The name of the LED or Group.
   * @param red - the intensity of red channel (0-1).
   * @param green - the intensity of green channel (0-1).
   * @param blue - the intensity of blue channel (0-1).
   * @param duration - Time used to fade in seconds.
   * @return null
   */
  '_fadeRGB': function _fadeRGB(name, red, green, blue, duration) {
    return session._fadeRGB(name, red, green, blue, duration);
  },
  /**
   * Resets the state of the leds to default (for ex, eye LEDs are white and fully on by default).
   * @method reset
   * @param name - The name of the LED or Group (for now, only "AllLeds" are implemented).
   * @return null
   */
  'reset': function reset(name) {
    return session.reset(name);
  },
  /**
   * Sets an intensity ratio for the leds. If the leds are asked to be set to a specific intensity, the real intensity applied on the leds will be the specific intensity multiplied by this ratio.
   * @method _setIntensityRatio
   * @private
   * @param name - The name of the LED or Group.
   * @param intensity - The intensity ratio between 0.6 and 1.
   * @return null
   */
  '_setIntensityRatio': function _setIntensityRatio(name, intensity) {
    return session._setIntensityRatio(name, intensity);
  },
  /**
   * Gets the intensity of a LED or device
   * @method getIntensity
   * @param name - The name of the LED or Group.
   * @return The intensity of the LED or Group.
   */
  'getIntensity': function getIntensity(name) {
    return session.getIntensity(name);
  },
  /**
   * Lists the short LED names.
   * @method listLEDs
   * @return A vector of LED names.
   */
  'listLEDs': function listLEDs() {
    return session.listLEDs();
  },
  /**
   * Lists the devices aliased by a short LED name.
   * @method listLED
   * @param name - The name of the LED to list
   * @return A vector of device names.
   */
  'listLED': function listLED(name) {
    return session.listLED(name);
  },
  /**
   * Lists the devices in the group.
   * @method listGroup
   * @param groupName - The name of the Group.
   * @return A vector of string device names.
   */
  'listGroup': function listGroup(groupName) {
    return session.listGroup(groupName);
  },
  /**
   * Lists available group names.
   * @method listGroups
   * @return A vector of group names.
   */
  'listGroups': function listGroups() {
    return session.listGroups();
  },
  /**
   * Switch to a minimum intensity a LED or Group of LEDs.
   * @method off
   * @param name - The name of the LED or Group.
   * @return null
   */
  'off': function off(name) {
    return session.off(name);
  },
  /**
   * Switch to a maximum intensity a LED or Group of LEDs.
   * @method on
   * @param name - The name of the LED or Group.
   * @return null
   */
  'on': function on(name) {
    return session.on(name);
  },
  /**
   * Launch a green/yellow/red rasta animation on all body.
   * @method rasta
   * @param duration - Approximate duration of the animation in seconds.
   * @return null
   */
  'rasta': function rasta(duration) {
    return session.rasta(duration);
  },
  /**
   * Launch a rotation using the leds of the eyes.
   * @method rotateEyes
   * @param rgb - the RGB value led, RGB as seen in hexa-decimal: 0x00RRGGBB.
   * @param timeForRotation - Approximate time to make one turn.
   * @param totalDuration - Approximate duration of the animation in seconds.
   * @return null
   */
  'rotateEyes': function rotateEyes(rgb, timeForRotation, totalDuration) {
    return session.rotateEyes(rgb, timeForRotation, totalDuration);
  },
  /**
   * Launch a random animation in eyes
   * @method randomEyes
   * @param duration - Approximate duration of the animation in seconds.
   * @return null
   */
  'randomEyes': function randomEyes(duration) {
    return session.randomEyes(duration);
  },
  /**
   * Sets the intensity of a LED or Group of LEDs.
   * @method setIntensity
   * @param name - The name of the LED or Group.
   * @param intensity - The intensity of the LED or Group (a value between 0 and 1).
   * @return null
   */
  'setIntensity': function setIntensity(name, intensity) {
    return session.setIntensity(name, intensity);
  },
  /**
   * Make the eyes blink once.
   * @method _blink
   * @private
   * @return null
   */
  '_blink': function _blink() {
    return session._blink();
  },
  /**
   * Make the eyes blink once with a eyeshadow color.
   * @method _blink
   * @private
   * @return null
   */
  '_blink': function _blink() {
    return session._blink();
  },
  /**
   * Sets the intensity of a LED or Group of LEDs (even chest LED).
   * @method _setAnyLedIntensity
   * @private
   * @param name - The name of the LED or Group.
   * @param intensity - The intensity of the LED or Group (a value between 0 and 1).
   * @return null
   */
  '_setAnyLedIntensity': function _setAnyLedIntensity(name, intensity) {
    return session._setAnyLedIntensity(name, intensity);
  },
  /**
   * Start passive blinking.
   * @method _startPassiveBlinking
   * @private
   * @return null
   */
  '_startPassiveBlinking': function _startPassiveBlinking() {
    return session._startPassiveBlinking();
  },
  /**
   * Start passive blinking with a eyeshadow color.
   * @method _startPassiveBlinking
   * @private
   * @param eyeShadow - The color of the eye shadow during and after the blink.
   * @return null
   */
  '_startPassiveBlinking': function _startPassiveBlinking(eyeShadow) {
    return session._startPassiveBlinking(eyeShadow);
  },
  /**
   * Stop passive blinking.
   * @method _stopPassiveBlinking
   * @private
   * @return null
   */
  '_stopPassiveBlinking': function _stopPassiveBlinking() {
    return session._stopPassiveBlinking();
  },
  /**
   * Blink with a shadow.
   * @method _blinkWithShadow
   * @private
   * @return null
   */
  '_blinkWithShadow': function _blinkWithShadow() {
    return session._blinkWithShadow();
  },
  /**
   * Set values for minimum and maximum time waited between two passive blinks.
   * @method _setTimeBetweenTwoBlinks
   * @private
   * @param min - The minimum (should be >= 0)
   * @param max - The maximum (should be >= min)
   * @return null
   */
  '_setTimeBetweenTwoBlinks': function _setTimeBetweenTwoBlinks(min, max) {
    return session._setTimeBetweenTwoBlinks(min, max);
  },
};
