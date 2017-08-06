/**
 * @module audioDevice
 */
session.audioDevice = {
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
   * This function allows a module to subscribe to the ALAudioDevice module.For more informations see the audio part of the red documentation
   * @method subscribe
   * @param pModule - Name of the module
   * @return null
   */
  'subscribe': function subscribe(pModule) {
    return session.subscribe(pModule);
  },
  /**
   * This function allows a module to subscribe to the ALAudioDevice module.For more informations see the audio part of the red documentation
   * @method unsubscribe
   * @param pModule - Name of the module
   * @return null
   */
  'unsubscribe': function unsubscribe(pModule) {
    return session.unsubscribe(pModule);
  },
  /**
   * This function allows a local module to send sound onto the nao's loudpseakers
You must pass to this function a pointer to the stereo buffer to send, and the number of frames per channel. The buffer must contain 16bits stereo interleaved samples, and the number of frames does not exceed 16384
   * @method sendLocalBufferToOutput
   * @param nbOfFrames - Number of 16 bits samples per channel to send.
   * @param pBuffer - Buffer to send
   * @return True if the operation is successfull - False otherwise
   */
  'sendLocalBufferToOutput': function sendLocalBufferToOutput(nbOfFrames, pBuffer) {
    return session.sendLocalBufferToOutput(nbOfFrames, pBuffer);
  },
  /**
   * This function allows a remote module to send sound onto the nao's loudpseakers
You must pass to this function the stereo buffer you want to send as an ALValue converted to binary, and the number of frames per channel. The number of frames does not exceed 16384. For more information please see the red documentation
   * @method sendRemoteBufferToOutput
   * @param nbOfFrames - Number of 16 bits samples per channel to send.
   * @param pBuffer - Buffer to send
   * @return True if the operation is successfull - False otherwise
   */
  'sendRemoteBufferToOutput': function sendRemoteBufferToOutput(nbOfFrames, pBuffer) {
    return session.sendRemoteBufferToOutput(nbOfFrames, pBuffer);
  },
  /**
   * This method allows to send sound samples contained in a sound file at the input of ALAudioDevice, instead of the nao's microphones sound data. The sound file must be a .wav file containing 16bits / 4 channels / interleaved samples. Once the file has been read, microphones sound data will again taken as input
   * @method setFileAsInput
   * @param pFileName - Name of the input file.
   * @return null
   */
  'setFileAsInput': function setFileAsInput(pFileName) {
    return session.setFileAsInput(pFileName);
  },
  /**
   * This method sets the specified internal parameter ('outputSampleRate' or 'inputBufferSize')
inputBufferSize can bet set to 8192 or 16384. Warning: when speech recognition is running, a buffer size of 8192 is used. Don't change it during the recognition process.
outputSampleRate can bet set to 16000 Hz, 22050 Hz, 44100 Hz or 48000 Hz. Warning: if speech synthesis is running, a sample rate of 16000 Hz or 22050 Hz is used (depending of the language). Don't change it during the synthesis process
   * @method setParameter
   * @param pParamName - Name of the parameter to set ('outputSampleRate' or 'inputBufferSize').
   * @param pParamValue - The value to which the specified parameter should be set.
   * @return null
   */
  'setParameter': function setParameter(pParamName, pParamValue) {
    return session.setParameter(pParamName, pParamValue);
  },
  /**
   * This method returns the specified internal parameter ('outputSampleRate' or 'inputBufferSize'). The value -1 is returned if the specified parameter is not valid.
   * @method getParameter
   * @param pParamName - Name of the parameter to get ('outputSampleRate' or 'inputBufferSize').
   * @return value of the specified parameter
   */
  'getParameter': function getParameter(pParamName) {
    return session.getParameter(pParamName);
  },
  /**
   * This method allows to record the signal collected on the nao's microphones. You can choose to record only the front microphone in a ogg file, or the 4 microphones in a wav file. In this last case the format of the file is 4 channels, 16 bits little endian, 48 KHz
   * @method startMicrophonesRecording
   * @param pFileName - Name of the file where to record the sound.
   * @return null
   */
  'startMicrophonesRecording': function startMicrophonesRecording(pFileName) {
    return session.startMicrophonesRecording(pFileName);
  },
  /**
   * This method stops the recording of the sound collected by the microphones.
   * @method stopMicrophonesRecording
   * @return null
   */
  'stopMicrophonesRecording': function stopMicrophonesRecording() {
    return session.stopMicrophonesRecording();
  },
  /**
   * Sets the output sound level of the system.
   * @method setOutputVolume
   * @param volume - Volume [0-100].
   * @return null
   */
  'setOutputVolume': function setOutputVolume(volume) {
    return session.setOutputVolume(volume);
  },
  /**
   * Gets the output sound level of the system.
   * @method getOutputVolume
   * @return outputVolume of the system
   */
  'getOutputVolume': function getOutputVolume() {
    return session.getOutputVolume();
  },
  /**
   * Opens the audio device for capture. If you closed the audio inputs with the closeAudioInputs method, you must call this method to be able to access to the sound data of the nao's microphones. 
   * @method openAudioInputs
   * @return null
   */
  'openAudioInputs': function openAudioInputs() {
    return session.openAudioInputs();
  },
  /**
   * Opens the audio device for playback. If you closed the audio outputs with the closeAudioOutputs method, you must call this method to ear or send sound onto the nao's loudspeakers.
   * @method openAudioOutputs
   * @return null
   */
  'openAudioOutputs': function openAudioOutputs() {
    return session.openAudioOutputs();
  },
  /**
   * Closes the audio device for capture. You can call this method if you want to have access to the alsa input buffers in another program than naoqi while naoqi is running (with arecord for example)
   * @method closeAudioInputs
   * @return null
   */
  'closeAudioInputs': function closeAudioInputs() {
    return session.closeAudioInputs();
  },
  /**
   * Closes the audio device for playback. close the audio device for capture. You can call this method if you want to send sound to alsa in another program than naoqi while naoqi is running (with aplay for example)
   * @method closeAudioOutputs
   * @return null
   */
  'closeAudioOutputs': function closeAudioOutputs() {
    return session.closeAudioOutputs();
  },
  /**
   * Flush the audio device for playback. close the audio device for capture. You can call this method if you want to send sound to alsa in another program than naoqi while naoqi is running (with aplay for example)
   * @method flushAudioOutputs
   * @return null
   */
  'flushAudioOutputs': function flushAudioOutputs() {
    return session.flushAudioOutputs();
  },
  /**
   * Allows to know if audio ouputs are closed or not
   * @method isOutputClosed
   * @return True if audio outputs are closed / False otherwise
   */
  'isOutputClosed': function isOutputClosed() {
    return session.isOutputClosed();
  },
  /**
   * Allows to know if audio inputs are closed or not
   * @method isInputClosed
   * @return True if audio inputs are closed / False otherwise
   */
  'isInputClosed': function isInputClosed() {
    return session.isInputClosed();
  },
  /**
   * return the list of available outputs
   * @method _listOutputs
   * @private
   * @return A list of AudioDeviceInfo
   */
  '_listOutputs': function _listOutputs() {
    return session._listOutputs();
  },
  /**
   * return the output matching the index
   * @method _output
   * @private
   * @param index - The output index
   * @return An AudioDeviceInfo
   */
  '_output': function _output(index) {
    return session._output(index);
  },
  /**
   * return the default output
   * @method _defaultOutput
   * @private
   * @return The default output index
   */
  '_defaultOutput': function _defaultOutput() {
    return session._defaultOutput();
  },
  /**
   * set the default output
   * @method _setDefaultOutput
   * @private
   * @param index - The output index
   * @return null
   */
  '_setDefaultOutput': function _setDefaultOutput(index) {
    return session._setDefaultOutput(index);
  },
  /**
   * return the list of available inputs
   * @method _listInputs
   * @private
   * @return A list of AudioDeviceInfo
   */
  '_listInputs': function _listInputs() {
    return session._listInputs();
  },
  /**
   * return the input matching the index
   * @method _input
   * @private
   * @param index - The input index
   * @return An AudioDeviceInfo
   */
  '_input': function _input(index) {
    return session._input(index);
  },
  /**
   * return the default input
   * @method _defaultInput
   * @private
   * @return The default input index
   */
  '_defaultInput': function _defaultInput() {
    return session._defaultInput();
  },
  /**
   * set the default input
   * @method _setDefaultInput
   * @private
   * @param index - The input index
   * @return null
   */
  '_setDefaultInput': function _setDefaultInput(index) {
    return session._setDefaultInput(index);
  },
  /**
   * Play a sine wave which specified caracteristics.
   * @method playSine
   * @param frequence - Frequence in Hertz
   * @param gain - Volume Gain between 0 and 100
   * @param pan - Stereo Pan set to either {-1,0,+1}
   * @param duration - Duration of the sine wave in seconds
   * @return null
   */
  'playSine': function playSine(frequence, gain, pan, duration) {
    return session.playSine(frequence, gain, pan, duration);
  },
  /**
   * Enables the computation of the energy of each microphone signal
   * @method enableEnergyComputation
   * @return null
   */
  'enableEnergyComputation': function enableEnergyComputation() {
    return session.enableEnergyComputation();
  },
  /**
   * Disables the computation of the energy of each microphone signal
   * @method disableEnergyComputation
   * @return null
   */
  'disableEnergyComputation': function disableEnergyComputation() {
    return session.disableEnergyComputation();
  },
  /**
   * Returns the energy of the left microphone signal
   * @method getLeftMicEnergy
   * @return energy of the left microphone signal
   */
  'getLeftMicEnergy': function getLeftMicEnergy() {
    return session.getLeftMicEnergy();
  },
  /**
   * Returns the energy of the right microphone signal
   * @method getRightMicEnergy
   * @return energy of the right microphone signal
   */
  'getRightMicEnergy': function getRightMicEnergy() {
    return session.getRightMicEnergy();
  },
  /**
   * Returns the energy of the front microphone signal
   * @method getFrontMicEnergy
   * @return energy of the front microphone signal
   */
  'getFrontMicEnergy': function getFrontMicEnergy() {
    return session.getFrontMicEnergy();
  },
  /**
   * Returns the energy of the rear microphone signal
   * @method getRearMicEnergy
   * @return energy of the rear microphone signal
   */
  'getRearMicEnergy': function getRearMicEnergy() {
    return session.getRearMicEnergy();
  },
  /**
   * Sets the input level of Nao's microphones.
   * @method _setInputVolume
   * @private
   * @param volume - Volume [0-100].
   * @return null
   */
  '_setInputVolume': function _setInputVolume(volume) {
    return session._setInputVolume(volume);
  },
  /**
   * Set AudioDevice Client preferences
   * @method setClientPreferences
   * @param name - name of the client
   * @param sampleRate - sample rate of the microphones data sent to the process function - must be 16000 or 48000
   * @param channelsConfiguration - An int (defined in ALSoundExtractor) indicating which microphones data will be send to the process function. ALLCHANNELS, LEFTCHANNEL, RIGHTCHANNEL, FRONTCHANNEL, REARCHANNEL are the configuration currently supported.
   * @param deinterleaved - indicates if the microphones data sent to the process function are interleaved or not - 0 : interleaved - 1 : deinterleaved 
   * @return null
   */
  'setClientPreferences': function setClientPreferences(name, sampleRate, channelsConfiguration, deinterleaved) {
    return session.setClientPreferences(name, sampleRate, channelsConfiguration, deinterleaved);
  },
  /**
   * Set AudioDevice Client preferences. This function is deprecated, the use of the alternate 4 arguments setClientPreferences() is now prefered.
   * @method setClientPreferences
   * @param name - name of the client
   * @param sampleRate - sample rate of the microphones data sent to the processSound or processSoundRemote functions - must be 16000 or 48000
   * @param channelsVector - ALValue containing a vector of int indicating which microphones data will be send to the processSound or processSoundRemote functions
   * @param deinterleaved - indicates if the microphones data sent to the processSound or processSoundRemote functions are interleaved or not - 0 : interleaved - 1 : deinterleaved 
   * @param timeStamp - parameter indicating if audio timestamps are sent to the processSound or processSoundRemote functions - 0 : no - 1 : yes 
   * @return null
   */
  'setClientPreferences': function setClientPreferences(name, sampleRate, channelsVector, deinterleaved, timeStamp) {
    return session.setClientPreferences(name, sampleRate, channelsVector, deinterleaved, timeStamp);
  },
  /**
   * mute the loudspeakers
   * @method muteAudioOut
   * @return null
   */
  'muteAudioOut': function muteAudioOut() {
    return session.muteAudioOut();
  },
  /**
   * mute the microphones
   * @method _muteAudioIn
   * @private
   * @return null
   */
  '_muteAudioIn': function _muteAudioIn() {
    return session._muteAudioIn();
  },
  /**
   * check if loudspeakers are muted
   * @method isAudioOutMuted
   * @return 1 if true / 0 otherwise
   */
  'isAudioOutMuted': function isAudioOutMuted() {
    return session.isAudioOutMuted();
  },
  /**
   * get the number of microphones
   * @method _getNbOfMicrophones
   * @private
   * @return null
   */
  '_getNbOfMicrophones': function _getNbOfMicrophones() {
    return session._getNbOfMicrophones();
  },
};
