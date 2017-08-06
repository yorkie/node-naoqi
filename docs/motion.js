/**
 * @module motion
 */
session.motion = {
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
   * The robot will wake up: set Motor ON and go to initial position if needed
   * @method wakeUp
   * @return null
   */
  'wakeUp': function wakeUp() {
    return session.wakeUp();
  },
  /**
   * The robot will rest: go to a relax and safe position and set Motor OFF
   * @method rest
   * @return null
   */
  'rest': function rest() {
    return session.rest();
  },
  /**
   * The robot will rest: go to a relax and safe position on the chain and set Motor OFF
   * @method _rest
   * @private
   * @param chainName - The name of the chain to rest.
   * @return null
   */
  '_rest': function _rest(chainName) {
    return session._rest(chainName);
  },
  /**
   * The robot will immediately unstiffness the chain.
   * @method _stopChain
   * @private
   * @param chainName - The name of the chain to rest. Can be "LArm", "RArm", or "Arms".
   * @return null
   */
  '_stopChain': function _stopChain(chainName) {
    return session._stopChain(chainName);
  },
  /**
   * The robot propose several adapted rest.
   * @method _restReflex
   * @private
   * @param whyString - A string describing the root cause of the request.
   * @param stateList - An ALValue [[[name list], a string or array of angles], ...].
   * @return null
   */
  '_restReflex': function _restReflex(whyString, stateList) {
    return session._restReflex(whyString, stateList);
  },
  /**
   * Go to a stable rest posture given the blocked joints
   * @method _blockedLegReflex
   * @private
   * @return null
   */
  '_blockedLegReflex': function _blockedLegReflex() {
    return session._blockedLegReflex();
  },
  /**
   * The robot will rest: wakeUp is not allowed anymore.
   * @method _shutdown
   * @private
   * @return null
   */
  '_shutdown': function _shutdown() {
    return session._shutdown();
  },
  /**
   * Set the reference posture for fallmanager, stand init, idle posture, breath, etc.
   * @method _setMotionPosture
   * @private
   * @param postureName - The posture name
   * @param bodyAngles - The body angles. Use getBodyNames api with parameter JointActuators.
   * @return Success to set the desired motion posture.
   */
  '_setMotionPosture': function _setMotionPosture(postureName, bodyAngles) {
    return session._setMotionPosture(postureName, bodyAngles);
  },
  /**
   * 
   * @method _getMotionPosture
   * @private
   * @param postureName - The posture name
   * @return Use getBodyNames api with parameter JointActuators.
   */
  '_getMotionPosture': function _getMotionPosture(postureName) {
    return session._getMotionPosture(postureName);
  },
  /**
   * 
   * @method _getMotionPostureList
   * @private
   * @return All the postures in motion posture library
   */
  '_getMotionPostureList': function _getMotionPostureList() {
    return session._getMotionPostureList();
  },
  /**
   * return true if the robot is already wakeUp
   * @method robotIsWakeUp
   * @return True if the robot is already wakeUp.
   */
  'robotIsWakeUp': function robotIsWakeUp() {
    return session.robotIsWakeUp();
  },
  /**
   * Interpolates one or multiple joints to a target stiffness or along timed trajectories of stiffness. This is a blocking call.
   * @method stiffnessInterpolation
   * @param names - Name or names of joints, chains, "Body", "JointActuators", "Joints" or "Actuators".
   * @param stiffnessLists - An stiffness, list of stiffnesses or list of list of stiffnesses
   * @param timeLists - A time, list of times or list of list of times.
   * @return null
   */
  'stiffnessInterpolation': function stiffnessInterpolation(names, stiffnessLists, timeLists) {
    return session.stiffnessInterpolation(names, stiffnessLists, timeLists);
  },
  /**
   * Sets the stiffness of one or more joints. This is a non-blocking call.
   * @method setStiffnesses
   * @param names - Names of joints, chains, "Body", "JointActuators", "Joints" or "Actuators".
   * @param stiffnesses - One or more stiffnesses between zero and one.
   * @return null
   */
  'setStiffnesses': function setStiffnesses(names, stiffnesses) {
    return session.setStiffnesses(names, stiffnesses);
  },
  /**
   * Sets the stiffness of one or more joints. This is a non-blocking call.
   * @method _setStiffnesses
   * @private
   * @param names - Names of joints, chains, "Body", "JointActuators", "Joints" or "Actuators".
   * @param stiffnesses - One or more stiffnesses between zero and one.
   * @return null
   */
  '_setStiffnesses': function _setStiffnesses(names, stiffnesses) {
    return session._setStiffnesses(names, stiffnesses);
  },
  /**
   * Set the custom stiffnesses to maintain on the given joints and actuators to ensure safety. 
   * @method _setSafeStiffnesses
   * @private
   * @param jointIndexes - Vector of joint indexes
   * @param actuatorIndexes - Vector of actuator indexes
   * @param stiffness - The stiffness to maintain between zero and one.
   * @return null
   */
  '_setSafeStiffnesses': function _setSafeStiffnesses(jointIndexes, actuatorIndexes, stiffness) {
    return session._setSafeStiffnesses(jointIndexes, actuatorIndexes, stiffness);
  },
  /**
   * Disable the safe stiffnesses set for the given joints and actuators.
   * @method _disableSafeStiffnesses
   * @private
   * @param jointIndexes - Vector of joint indexes
   * @param actuatorIndexes - Vector of actuator indexes
   * @return null
   */
  '_disableSafeStiffnesses': function _disableSafeStiffnesses(jointIndexes, actuatorIndexes) {
    return session._disableSafeStiffnesses(jointIndexes, actuatorIndexes);
  },
  /**
   * Gets stiffness of a joint or group of joints
   * @method getStiffnesses
   * @param jointName - Name of the joints, chains, "Body", "Joints" or "Actuators".
   * @return One or more stiffnesses. 1.0 indicates maximum stiffness. 0.0 indicated minimum stiffness
   */
  'getStiffnesses': function getStiffnesses(jointName) {
    return session.getStiffnesses(jointName);
  },
  /**
   * Interpolates one or multiple joints to a target angle or along timed trajectories. This is a blocking call.
   * @method angleInterpolation
   * @param names - Name or names of joints, chains, "Body", "JointActuators", "Joints" or "Actuators". 
   * @param angleLists - An angle, list of angles or list of list of angles in radians
   * @param timeLists - A time, list of times or list of list of times in seconds
   * @param isAbsolute - If true, the movement is described in absolute angles, else the angles are relative to the current angle.
   * @return null
   */
  'angleInterpolation': function angleInterpolation(names, angleLists, timeLists, isAbsolute) {
    return session.angleInterpolation(names, angleLists, timeLists, isAbsolute);
  },
  /**
   * Interpolates one or multiple joints to a target angle, using a fraction of max speed. Only one target angle is allowed for each joint. This is a blocking call.
   * @method angleInterpolationWithSpeed
   * @param names - Name or names of joints, chains, "Body", "JointActuators", "Joints" or "Actuators".
   * @param targetAngles - An angle, or list of angles in radians
   * @param maxSpeedFraction - A fraction.
   * @return null
   */
  'angleInterpolationWithSpeed': function angleInterpolationWithSpeed(names, targetAngles, maxSpeedFraction) {
    return session.angleInterpolationWithSpeed(names, targetAngles, maxSpeedFraction);
  },
  /**
   * Interpolates a sequence of timed angles for several motors using bezier control points. This is a blocking call.
   * @method angleInterpolationBezier
   * @param jointNames - A vector of joint names
   * @param times - An ragged ALValue matrix of floats. Each line corresponding to a motor, and column element to a control point.
   * @param controlPoints - An ALValue array of arrays each containing [float angle, Handle1, Handle2], where Handle is [int InterpolationType, float dAngle, float dTime] descibing the handle offsets relative to the angle and time of the point. The first bezier param describes the handle that controls the curve preceeding the point, the second describes the curve following the point.
   * @return null
   */
  'angleInterpolationBezier': function angleInterpolationBezier(jointNames, times, controlPoints) {
    return session.angleInterpolationBezier(jointNames, times, controlPoints);
  },
  /**
   * Interpolates a sequence of timed angles for several motors using bezier control points. This is a blocking call.
   * @method animation
   * @param jointNames - A vector of joint names
   * @param times - An ragged ALValue matrix of floats. Each line corresponding to a motor, and column element to a control point.
   * @param controlPoints - An ALValue array of arrays each containing [float angle, Handle1, Handle2], where Handle is [int InterpolationType, float dAngle, float dTime] descibing the handle offsets relative to the angle and time of the point. The first bezier param describes the handle that controls the curve preceeding the point, the second describes the curve following the point.
   * @param isAbsolute - A bool or a vector of bool. If true, the movement is described in absolute angles, else the angles are relative to the current angle.
   * @param supportSequence - An alvalue containing a list of [nameEffector, timeList, isActiveList].
   * @return null
   */
  'animation': function animation(jointNames, times, controlPoints, isAbsolute, supportSequence) {
    return session.animation(jointNames, times, controlPoints, isAbsolute, supportSequence);
  },
  /**
   * Sets angles. This is a non-blocking call.
   * @method setAngles
   * @param names - The name or names of joints, chains, "Body", "JointActuators", "Joints" or "Actuators". 
   * @param angles - One or more angles in radians
   * @param fractionMaxSpeed - The fraction of maximum speed to use
   * @return null
   */
  'setAngles': function setAngles(names, angles, fractionMaxSpeed) {
    return session.setAngles(names, angles, fractionMaxSpeed);
  },
  /**
   * Sets angles. This is a non-blocking call.
   * @method setAngles
   * @param names - The name or names of joints, chains, "Body", "JointActuators", "Joints" or "Actuators". 
   * @param angles - One or more angles in radians
   * @param fractionMaxSpeeds - The vector of fraction of maximum speed to use
   * @return null
   */
  'setAngles': function setAngles(names, angles, fractionMaxSpeeds) {
    return session.setAngles(names, angles, fractionMaxSpeeds);
  },
  /**
   * Changes Angles. This is a non-blocking call.
   * @method changeAngles
   * @param names - The name or names of joints, chains, "Body", "JointActuators", "Joints" or "Actuators".
   * @param changes - One or more changes in radians
   * @param fractionMaxSpeed - The fraction of maximum speed to use
   * @return null
   */
  'changeAngles': function changeAngles(names, changes, fractionMaxSpeed) {
    return session.changeAngles(names, changes, fractionMaxSpeed);
  },
  /**
   * Gets the angles of the joints
   * @method getAngles
   * @param names - Names the joints, chains, "Body", "JointActuators", "Joints" or "Actuators". 
   * @param useSensors - If true, sensor angles will be returned
   * @return Joint angles in radians.
   */
  'getAngles': function getAngles(names, useSensors) {
    return session.getAngles(names, useSensors);
  },
  /**
   * NAO stiffens the motors of desired hand. Then, he opens the hand, then cuts motor current to conserve energy. This is a blocking call.
   * @method openHand
   * @param handName - The name of the hand. Could be: "RHand or "LHand"
   * @return null
   */
  'openHand': function openHand(handName) {
    return session.openHand(handName);
  },
  /**
   * NAO stiffens the motors of desired hand. Then, he closes the hand, then cuts motor current to conserve energy. This is a blocking call.
   * @method closeHand
   * @param handName - The name of the hand. Could be: "RHand" or "LHand"
   * @return null
   */
  'closeHand': function closeHand(handName) {
    return session.closeHand(handName);
  },
  /**
   * Makes the robot move at the given velocity. This is a non-blocking call.
   * @method move
   * @param x - The velocity along x axis [m.s-1].
   * @param y - The velocity along y axis [m.s-1].
   * @param theta - The velocity around z axis [rd.s-1].
   * @return null
   */
  'move': function move(x, y, theta) {
    return session.move(x, y, theta);
  },
  /**
   * Makes the robot move at the given velocity. This is a non-blocking call.
   * @method move
   * @param x - The velocity along x axis [m.s-1].
   * @param y - The velocity along y axis [m.s-1].
   * @param theta - The velocity around z axis [rd.s-1].
   * @param moveConfig - An ALValue with custom move configuration.
   * @return null
   */
  'move': function move(x, y, theta, moveConfig) {
    return session.move(x, y, theta, moveConfig);
  },
  /**
   * Makes the robot move at the given normalized velocity. This is a non-blocking call.
   * @method moveToward
   * @param x - The normalized velocity along x axis (between -1 and 1).
   * @param y - The normalized velocity along y axis (between -1 and 1).
   * @param theta - The normalized velocity around z axis (between -1 and 1).
   * @return null
   */
  'moveToward': function moveToward(x, y, theta) {
    return session.moveToward(x, y, theta);
  },
  /**
   * Makes the robot move at the given normalized velocity. This is a non-blocking call.
   * @method moveToward
   * @param x - The normalized velocity along x axis (between -1 and 1).
   * @param y - The normalized velocity along y axis (between -1 and 1).
   * @param theta - The normalized velocity around z axis (between -1 and 1).
   * @param moveConfig - An ALValue with custom move configuration.
   * @return null
   */
  'moveToward': function moveToward(x, y, theta, moveConfig) {
    return session.moveToward(x, y, theta, moveConfig);
  },
  /**
   * DEPRECATED. Use moveToward() function instead.
   * @method setWalkTargetVelocity
   * @param x - Fraction of MaxStepX. Use negative for backwards. [-1.0 to 1.0]
   * @param y - Fraction of MaxStepY. Use negative for right. [-1.0 to 1.0]
   * @param theta - Fraction of MaxStepTheta. Use negative for clockwise [-1.0 to 1.0]
   * @param frequency - Fraction of MaxStepFrequency [0.0 to 1.0]
   * @return null
   */
  'setWalkTargetVelocity': function setWalkTargetVelocity(x, y, theta, frequency) {
    return session.setWalkTargetVelocity(x, y, theta, frequency);
  },
  /**
   * DEPRECATED. Use moveToward() function instead.
   * @method setWalkTargetVelocity
   * @param x - Fraction of MaxStepX. Use negative for backwards. [-1.0 to 1.0]
   * @param y - Fraction of MaxStepY. Use negative for right. [-1.0 to 1.0]
   * @param theta - Fraction of MaxStepTheta. Use negative for clockwise [-1.0 to 1.0]
   * @param frequency - Fraction of MaxStepFrequency [0.0 to 1.0]
   * @param feetGaitConfig - An ALValue with the custom gait configuration for both feet
   * @return null
   */
  'setWalkTargetVelocity': function setWalkTargetVelocity(x, y, theta, frequency, feetGaitConfig) {
    return session.setWalkTargetVelocity(x, y, theta, frequency, feetGaitConfig);
  },
  /**
   * DEPRECATED. Use moveToward() function instead.
   * @method setWalkTargetVelocity
   * @param x - Fraction of MaxStepX. Use negative for backwards. [-1.0 to 1.0]
   * @param y - Fraction of MaxStepY. Use negative for right. [-1.0 to 1.0]
   * @param theta - Fraction of MaxStepTheta. Use negative for clockwise [-1.0 to 1.0]
   * @param frequency - Fraction of MaxStepFrequency [0.0 to 1.0]
   * @param leftFootMoveConfig - An ALValue with custom move configuration for the left foot
   * @param rightFootMoveConfig - An ALValue with custom move configuration for the right foot
   * @return null
   */
  'setWalkTargetVelocity': function setWalkTargetVelocity(x, y, theta, frequency, leftFootMoveConfig, rightFootMoveConfig) {
    return session.setWalkTargetVelocity(x, y, theta, frequency, leftFootMoveConfig, rightFootMoveConfig);
  },
  /**
   * Makes the robot move at the given position. This is a non-blocking call.
   * @method moveTo
   * @param x - The position along x axis [m].
   * @param y - The position along y axis [m].
   * @param theta - The position around z axis [rd].
   * @return null
   */
  'moveTo': function moveTo(x, y, theta) {
    return session.moveTo(x, y, theta);
  },
  /**
   * Makes the robot move at the given position in fixed time. This is a non-blocking call.
   * @method moveTo
   * @param x - The position along x axis [m].
   * @param y - The position along y axis [m].
   * @param theta - The position around z axis [rd].
   * @param time - The time to reach the target position [s].
   * @return null
   */
  'moveTo': function moveTo(x, y, theta, time) {
    return session.moveTo(x, y, theta, time);
  },
  /**
   * Makes the robot move at the given position. This is a non-blocking call.
   * @method moveTo
   * @param x - The position along x axis [m].
   * @param y - The position along y axis [m].
   * @param theta - The position around z axis [rd].
   * @param moveConfig - An ALValue with custom move configuration.
   * @return null
   */
  'moveTo': function moveTo(x, y, theta, moveConfig) {
    return session.moveTo(x, y, theta, moveConfig);
  },
  /**
   * Makes the robot move at the given position in fixed time. This is a non-blocking call.
   * @method moveTo
   * @param x - The position along x axis [m].
   * @param y - The position along y axis [m].
   * @param theta - The position around z axis [rd].
   * @param time - The time to reach the target position [s].
   * @param moveConfig - An ALValue with custom move configuration.
   * @return null
   */
  'moveTo': function moveTo(x, y, theta, time, moveConfig) {
    return session.moveTo(x, y, theta, time, moveConfig);
  },
  /**
   * Makes the robot move to the given relative positions. This is a blocking call.
   * @method moveTo
   * @param controlPoint - An ALValue with the control points in FRAME_ROBOT.
Each control point is relative to the previous one. [[x1, y1, theta1], ..., [xN, yN, thetaN]
   * @return null
   */
  'moveTo': function moveTo(controlPoint) {
    return session.moveTo(controlPoint);
  },
  /**
   * Makes the robot move to the given relative positions. This is a blocking call.
   * @method moveTo
   * @param controlPoint - An ALValue with all the control points in FRAME_ROBOT.
Each control point is relative to the previous one. [[x1, y1, theta1], ..., [xN, yN, thetaN]
   * @param moveConfig - An ALValue with custom move configuration.
   * @return null
   */
  'moveTo': function moveTo(controlPoint, moveConfig) {
    return session.moveTo(controlPoint, moveConfig);
  },
  /**
   * Makes the robot move at the given position, without taking into account ENABLE_MOVE_PROTECTION config
   * @method _moveToPod
   * @private
   * @param x - The position along x axis [m].
   * @param y - The position along y axis [m].
   * @param theta - The position around z axis [rd].
   * @return null
   */
  '_moveToPod': function _moveToPod(x, y, theta) {
    return session._moveToPod(x, y, theta);
  },
  /**
   * Makes the robot move at the given position, without taking into account ENABLE_MOVE_PROTECTION config
   * @method _moveToPod
   * @private
   * @param x - The position along x axis [m].
   * @param y - The position along y axis [m].
   * @param theta - The position around z axis [rd].
   * @param moveConfig - An ALValue with custom move configuration.
   * @return null
   */
  '_moveToPod': function _moveToPod(x, y, theta, moveConfig) {
    return session._moveToPod(x, y, theta, moveConfig);
  },
  /**
   * Makes the robot follow a given path. This is a non-blocking call.
   * @method _followPath
   * @private
   * @param path - An ALValue describing a 2D path.
   * @param moveConfig - An ALValue with custom move configuration.
   * @return null
   */
  '_followPath': function _followPath(path, moveConfig) {
    return session._followPath(path, moveConfig);
  },
  /**
   * Makes the robot follow a given path. This is a non-blocking call.
   * @method _followPath
   * @private
   * @param path - An ALValue describing a 2D path.
   * @return null
   */
  '_followPath': function _followPath(path) {
    return session._followPath(path);
  },
  /**
   * Makes the robot follow a given path, in world frame. This is a non-blocking call.
   * @method _followPathInWorld
   * @private
   * @param poseStart - A Pose2D setting the start frame of the path, in World.
   * @param path - An ALValue describing a 2D Path.
   * @param moveConfig - An ALValue with custom move configuration.
   * @return null
   */
  '_followPathInWorld': function _followPathInWorld(poseStart, path, moveConfig) {
    return session._followPathInWorld(poseStart, path, moveConfig);
  },
  /**
   * Makes the robot follow a given path, in world frame. This is a non-blocking call.
   * @method _followPathInWorld
   * @private
   * @param poseStart - A Pose2D setting the start frame of the path, in World.
   * @param path - An ALValue describing a 2D Path.
   * @return null
   */
  '_followPathInWorld': function _followPathInWorld(poseStart, path) {
    return session._followPathInWorld(poseStart, path);
  },
  /**
   * Changes the reference speed for trajectory following
   * @method _setFollowPathSpeedFactor
   * @private
   * @param speedFactor - Between 0 and 1, relative to max speed
   * @return null
   */
  '_setFollowPathSpeedFactor': function _setFollowPathSpeedFactor(speedFactor) {
    return session._setFollowPathSpeedFactor(speedFactor);
  },
  /**
   * Move along a trajectory
   * @method _moveAlong
   * @private
   * @param trajectory - An ALValue describing a trajectory.
   * @return null
   */
  '_moveAlong': function _moveAlong(trajectory) {
    return session._moveAlong(trajectory);
  },
  /**
   * Move along a trajectory
   * @method _moveAlong
   * @private
   * @param trajectory - An ALValue describing a trajectory.
   * @param scaleFactor - A float between 0 and 1 scaling the trajectory.
   * @return null
   */
  '_moveAlong': function _moveAlong(trajectory, scaleFactor) {
    return session._moveAlong(trajectory, scaleFactor);
  },
  /**
   * Stop current trajectory, then resync
   * @method _stopAndStitchMoveAlong
   * @private
   * @return null
   */
  '_stopAndStitchMoveAlong': function _stopAndStitchMoveAlong() {
    return session._stopAndStitchMoveAlong();
  },
  /**
   * Get a vector of samples along the current path
   * @method _getRemainingPath
   * @private
   * @param sampleStep - Distance between two samples, in m
   * @return vector of samples along trajectory
   */
  '_getRemainingPath': function _getRemainingPath(sampleStep) {
    return session._getRemainingPath(sampleStep);
  },
  /**
   * Get a vector of samples along the current trajectory
   * @method _getRemainingTrajectory
   * @private
   * @param timeStep - Time between two samples, in s
   * @param preview - Duration of the preview, in s
   * @return vector of samples along trajectory
   */
  '_getRemainingTrajectory': function _getRemainingTrajectory(timeStep, preview) {
    return session._getRemainingTrajectory(timeStep, preview);
  },
  /**
   * Get the ratio of executed trajectory, between 0 and 1
   * @method _getTrajectoryCompletion
   * @private
   * @return float between 0 and 1
   */
  '_getTrajectoryCompletion': function _getTrajectoryCompletion() {
    return session._getTrajectoryCompletion();
  },
  /**
   * DEPRECATED. Use moveTo() function instead.
   * @method walkTo
   * @param x - Distance along the X axis in meters.
   * @param y - Distance along the Y axis in meters.
   * @param theta - Rotation around the Z axis in radians [-3.1415 to 3.1415].
   * @return null
   */
  'walkTo': function walkTo(x, y, theta) {
    return session.walkTo(x, y, theta);
  },
  /**
   * DEPRECATED. Use moveTo() function instead.
   * @method walkTo
   * @param x - Distance along the X axis in meters.
   * @param y - Distance along the Y axis in meters.
   * @param theta - Rotation around the Z axis in radians [-3.1415 to 3.1415].
   * @param feetGaitConfig - An ALValue with the custom gait configuration for both feet.
   * @return null
   */
  'walkTo': function walkTo(x, y, theta, feetGaitConfig) {
    return session.walkTo(x, y, theta, feetGaitConfig);
  },
  /**
   * DEPRECATED. Use moveTo() function instead.
   * @method walkTo
   * @param controlPoint - An ALValue with all the control point in NAO SPACE[[x1,y1,theta1], ..., [xN,yN,thetaN]
   * @return null
   */
  'walkTo': function walkTo(controlPoint) {
    return session.walkTo(controlPoint);
  },
  /**
   * DEPRECATED. Use moveTo() function instead.
   * @method walkTo
   * @param controlPoint - An ALValue with all the control point in NAO SPACE[[x1,y1,theta1], ..., [xN,yN,thetaN]
   * @param feetGaitConfig - An ALValue with the custom gait configuration for both feet
   * @return null
   */
  'walkTo': function walkTo(controlPoint, feetGaitConfig) {
    return session.walkTo(controlPoint, feetGaitConfig);
  },
  /**
   * Makes Nao do foot step planner. This is a non-blocking call.
   * @method setFootSteps
   * @param legName - name of the leg to move('LLeg'or 'RLeg')
   * @param footSteps - [x, y, theta], [Position along X/Y, Orientation round Z axis] of the leg relative to the other Leg in [meters, meters, radians]. Must be less than [MaxStepX, MaxStepY, MaxStepTheta]
   * @param timeList - time list of each foot step
   * @param clearExisting - Clear existing foot steps.
   * @return null
   */
  'setFootSteps': function setFootSteps(legName, footSteps, timeList, clearExisting) {
    return session.setFootSteps(legName, footSteps, timeList, clearExisting);
  },
  /**
   * Makes Nao do foot step planner with speed. This is a blocking call.
   * @method setFootStepsWithSpeed
   * @param legName - name of the leg to move('LLeg'or 'RLeg')
   * @param footSteps - [x, y, theta], [Position along X/Y, Orientation round Z axis] of the leg relative to the other Leg in [meters, meters, radians]. Must be less than [MaxStepX, MaxStepY, MaxStepTheta]
   * @param fractionMaxSpeed - speed of each foot step. Must be between 0 and 1.
   * @param clearExisting - Clear existing foot steps.
   * @return null
   */
  'setFootStepsWithSpeed': function setFootStepsWithSpeed(legName, footSteps, fractionMaxSpeed, clearExisting) {
    return session.setFootStepsWithSpeed(legName, footSteps, fractionMaxSpeed, clearExisting);
  },
  /**
   * Get the foot steps. This is a non-blocking call.
   * @method getFootSteps
   * @return Give two list of foot steps. The first one give the unchangeable foot step. The second list give the changeable foot steps. Il you use setFootSteps or setFootStepsWithSpeed with clearExisting parmater equal true, walk engine execute unchangeable foot step and remove the other.
   */
  'getFootSteps': function getFootSteps() {
    return session.getFootSteps();
  },
  /**
   * DEPRECATED. Use moveInit function instead.
   * @method walkInit
   * @return null
   */
  'walkInit': function walkInit() {
    return session.walkInit();
  },
  /**
   * Initialize the move process. Check the robot pose and take a right posture. This is blocking called.
   * @method moveInit
   * @return null
   */
  'moveInit': function moveInit() {
    return session.moveInit();
  },
  /**
   * DEPRECATED. Use waitUntilMoveIsFinished function instead.
   * @method waitUntilWalkIsFinished
   * @return null
   */
  'waitUntilWalkIsFinished': function waitUntilWalkIsFinished() {
    return session.waitUntilWalkIsFinished();
  },
  /**
   * Waits until the move process is finished: This method can be used to block your script/code execution until the move task is totally finished.
   * @method waitUntilMoveIsFinished
   * @return null
   */
  'waitUntilMoveIsFinished': function waitUntilMoveIsFinished() {
    return session.waitUntilMoveIsFinished();
  },
  /**
   * DEPRECATED. Use moveIsActive function instead.
   * @method walkIsActive
   * @return null
   */
  'walkIsActive': function walkIsActive() {
    return session.walkIsActive();
  },
  /**
   * Check if the move process is actif.
   * @method moveIsActive
   * @return True if move is active
   */
  'moveIsActive': function moveIsActive() {
    return session.moveIsActive();
  },
  /**
   * DEPRECATED. Use stopMove function instead.
   * @method stopWalk
   * @return null
   */
  'stopWalk': function stopWalk() {
    return session.stopWalk();
  },
  /**
   * Stop Move task safely as fast as possible. The move task is ended less brutally than killMove but more quickly than move(0.0, 0.0, 0.0).
This is a blocking call.
   * @method stopMove
   * @return null
   */
  'stopMove': function stopMove() {
    return session.stopMove();
  },
  /**
   * DEPRECATED. Use getMoveConfig function instead.
Gets the foot Gait config ("MaxStepX", "MaxStepY", "MaxStepTheta",  "MaxStepFrequency", "StepHeight", "TorsoWx", "TorsoWy") 
   * @method getFootGaitConfig
   * @param config - a string should be "Max", "Min", "Default"
   * @return An ALvalue with the following form :[["MaxStepX", value],
 ["MaxStepY", value],
 ["MaxStepTheta", value],
 ["MaxStepFrequency", value],
 ["StepHeight", value],
 ["TorsoWx", value],
 ["TorsoWy", value]]

   */
  'getFootGaitConfig': function getFootGaitConfig(config) {
    return session.getFootGaitConfig(config);
  },
  /**
   * Gets the move config.
   * @method getMoveConfig
   * @param config - a string should be "Max", "Min", "Default"
   * @return An ALvalue with the move config
   */
  'getMoveConfig': function getMoveConfig(config) {
    return session.getMoveConfig(config);
  },
  /**
   * Gets the World Absolute Robot Position.
   * @method getRobotPosition
   * @param useSensors - If true, use the sensor values
   * @return A vector containing the World Absolute Robot Position. (Absolute Position X, Absolute Position Y, Absolute Angle Z)
   */
  'getRobotPosition': function getRobotPosition(useSensors) {
    return session.getRobotPosition(useSensors);
  },
  /**
   * Gets the World Absolute next Robot Position.
In fact in the walk algorithm some foot futur foot step are incompressible due to preview control, so this function give the next robot position which is incompressible.
If the robot doesn't walk this function is equivalent to getRobotPosition(false)

   * @method getNextRobotPosition
   * @return A vector containing the World Absolute next Robot position.(Absolute Position X, Absolute Position Y, Absolute Angle Z)
   */
  'getNextRobotPosition': function getNextRobotPosition() {
    return session.getNextRobotPosition();
  },
  /**
   * Gets the World Absolute Robot Velocity.
   * @method getRobotVelocity
   * @return A vector containing the World Absolute Robot Velocity. (Absolute Velocity Translation X [m.s-1], Absolute Velocity Translation Y[m.s-1], Absolute Velocity Rotation WZ [rd.s-1])
   */
  'getRobotVelocity': function getRobotVelocity() {
    return session.getRobotVelocity();
  },
  /**
   * Get the absolute cumulated displacement since robot is up, in robot frame.
   * @method _getCumulatedDisplacement
   * @private
   * @return A vector containing the absolute cumulated displacement, in robot frame. (Absolute Displacement X [m], Absolute Displacement Y[m], Absolute Displacement Theta [rd])
   */
  '_getCumulatedDisplacement': function _getCumulatedDisplacement() {
    return session._getCumulatedDisplacement();
  },
  /**
   * DEPRECATED. Gets if Arms Motions are enabled during the Walk Process.
   * @method getWalkArmsEnabled
   * @return True Arm Motions are controlled by the Walk Task.
   */
  'getWalkArmsEnabled': function getWalkArmsEnabled() {
    return session.getWalkArmsEnabled();
  },
  /**
   * DEPRECATED. Sets if Arms Motions are enabled during the Walk Process.
   * @method setWalkArmsEnabled
   * @param leftArmEnabled - if true Left Arm motions are controlled by the Walk Task
   * @param rightArmEnabled - if true Right Arm mMotions are controlled by the Walk Task
   * @return null
   */
  'setWalkArmsEnabled': function setWalkArmsEnabled(leftArmEnabled, rightArmEnabled) {
    return session.setWalkArmsEnabled(leftArmEnabled, rightArmEnabled);
  },
  /**
   * Gets if Arms Motions are enabled during the Move Process.
   * @method getMoveArmsEnabled
   * @param chainName - Name of the chain. Could be: "LArm", "RArm" or "Arms"
   * @return For LArm and RArm true if the corresponding arm is enabled. For Arms, true if both are enabled. False otherwise.
   */
  'getMoveArmsEnabled': function getMoveArmsEnabled(chainName) {
    return session.getMoveArmsEnabled(chainName);
  },
  /**
   * Sets if Arms Motions are enabled during the Move Process.
   * @method setMoveArmsEnabled
   * @param leftArmEnabled - if true Left Arm motions are controlled by the Move Task
   * @param rightArmEnabled - if true Right Arm mMotions are controlled by the Move Task
   * @return null
   */
  'setMoveArmsEnabled': function setMoveArmsEnabled(leftArmEnabled, rightArmEnabled) {
    return session.setMoveArmsEnabled(leftArmEnabled, rightArmEnabled);
  },
  /**
   * DEPRECATED. Use positionInterpolations function instead.
   * @method positionInterpolation
   * @param chainName - Name of the chain. Could be: "Head", "LArm", "RArm", "LLeg", "RLeg", "Torso" 
   * @param space - Task frame {FRAME_TORSO = 0, FRAME_WORLD = 1, FRAME_ROBOT = 2}.
   * @param path - Vector of 6D position arrays (x,y,z,wx,wy,wz) in meters and radians
   * @param axisMask - Axis mask. True for axes that you wish to control. e.g. 7 for position only, 56 for rotation only and 63 for both 
   * @param durations - Vector of times in seconds corresponding to the path points
   * @param isAbsolute - If true, the movement is absolute else relative
   * @return null
   */
  'positionInterpolation': function positionInterpolation(chainName, space, path, axisMask, durations, isAbsolute) {
    return session.positionInterpolation(chainName, space, path, axisMask, durations, isAbsolute);
  },
  /**
   * DEPRECATED. Use the other positionInterpolations function instead.
   * @method positionInterpolations
   * @param effectorNames - Vector of chain names. Could be: "Head", "LArm", "RArm", "LLeg", "RLeg", "Torso" 
   * @param taskSpaceForAllPaths - Task frame {FRAME_TORSO = 0, FRAME_WORLD = 1, FRAME_ROBOT = 2}.
   * @param paths - Vector of 6D position arrays (x,y,z,wx,wy,wz) in meters and radians
   * @param axisMasks - Vector of Axis Masks. True for axes that you wish to control. e.g. 7 for position only, 56 for rotation only and 63 for both 
   * @param relativeTimes - Vector of times in seconds corresponding to the path points
   * @param isAbsolute - If true, the movement is absolute else relative
   * @return null
   */
  'positionInterpolations': function positionInterpolations(effectorNames, taskSpaceForAllPaths, paths, axisMasks, relativeTimes, isAbsolute) {
    return session.positionInterpolations(effectorNames, taskSpaceForAllPaths, paths, axisMasks, relativeTimes, isAbsolute);
  },
  /**
   * Moves end-effectors to the given positions and orientations over time. This is a blocking call.
   * @method positionInterpolations
   * @param effectorNames - Vector of chain names. Could be: "Head", "LArm", "RArm", "LLeg", "RLeg", "Torso" 
   * @param taskSpaceForAllPaths - Task frame {FRAME_TORSO = 0, FRAME_WORLD = 1, FRAME_ROBOT = 2}.
   * @param paths - Vector of 6D position arrays (x,y,z,wx,wy,wz) in meters and radians
   * @param axisMasks - Vector of Axis Masks. True for axes that you wish to control. e.g. 7 for position only, 56 for rotation only and 63 for both 
   * @param relativeTimes - Vector of times in seconds corresponding to the path points
   * @return null
   */
  'positionInterpolations': function positionInterpolations(effectorNames, taskSpaceForAllPaths, paths, axisMasks, relativeTimes) {
    return session.positionInterpolations(effectorNames, taskSpaceForAllPaths, paths, axisMasks, relativeTimes);
  },
  /**
   * Moves an end-effector to DEPRECATED. Use setPositions function instead.
   * @method setPosition
   * @param chainName - Name of the chain. Could be: "Head", "LArm","RArm", "LLeg", "RLeg", "Torso"
   * @param space - Task frame {FRAME_TORSO = 0, FRAME_WORLD = 1, FRAME_ROBOT = 2}.
   * @param position - 6D position array (x,y,z,wx,wy,wz) in meters and radians
   * @param fractionMaxSpeed - The fraction of maximum speed to use
   * @param axisMask - Axis mask. True for axes that you wish to control. e.g. 7 for position only, 56 for rotation only and 63 for both 
   * @return null
   */
  'setPosition': function setPosition(chainName, space, position, fractionMaxSpeed, axisMask) {
    return session.setPosition(chainName, space, position, fractionMaxSpeed, axisMask);
  },
  /**
   * Moves multiple end-effectors to the given position and orientation position6d. This is a non-blocking call.
   * @method setPositions
   * @param names - The name or names of effector.
   * @param spaces - The task frame or task frames {FRAME_TORSO = 0, FRAME_WORLD = 1, FRAME_ROBOT = 2}.
   * @param positions - Position6D arrays
   * @param fractionMaxSpeed - The fraction of maximum speed to use
   * @param axisMask - Axis mask. True for axes that you wish to control. e.g. 7 for position only, 56 for rotation only and 63 for both 
   * @return null
   */
  'setPositions': function setPositions(names, spaces, positions, fractionMaxSpeed, axisMask) {
    return session.setPositions(names, spaces, positions, fractionMaxSpeed, axisMask);
  },
  /**
   * DEPRECATED. Use setPositions function instead.
   * @method changePosition
   * @param effectorName - Name of the effector.
   * @param space - Task frame {FRAME_TORSO = 0, FRAME_WORLD = 1, FRAME_ROBOT = 2}.
   * @param positionChange - 6D position change array (xd, yd, zd, wxd, wyd, wzd) in meters and radians
   * @param fractionMaxSpeed - The fraction of maximum speed to use
   * @param axisMask - Axis mask. True for axes that you wish to control. e.g. 7 for position only, 56 for rotation only and 63 for both 
   * @return null
   */
  'changePosition': function changePosition(effectorName, space, positionChange, fractionMaxSpeed, axisMask) {
    return session.changePosition(effectorName, space, positionChange, fractionMaxSpeed, axisMask);
  },
  /**
   * Gets a Position relative to the FRAME. Axis definition: the x axis is positive toward Nao's front, the y from right to left and the z is vertical. The angle convention of Position6D is Rot_z(wz).Rot_y(wy).Rot_x(wx).
   * @method getPosition
   * @param name - Name of the item. Could be: Head, LArm, RArm, LLeg, RLeg, Torso, CameraTop, CameraBottom, MicroFront, MicroRear, MicroLeft, MicroRight, Accelerometer, Gyrometer, Laser, LFsrFR, LFsrFL, LFsrRR, LFsrRL, RFsrFR, RFsrFL, RFsrRR, RFsrRL, USSensor1, USSensor2, USSensor3, USSensor4. Use getSensorNames for the list of sensors supported on your robot.
   * @param space - Task frame {FRAME_TORSO = 0, FRAME_WORLD = 1, FRAME_ROBOT = 2}.
   * @param useSensorValues - If true, the sensor values will be used to determine the position.
   * @return Vector containing the Position6D using meters and radians (x, y, z, wx, wy, wz)
   */
  'getPosition': function getPosition(name, space, useSensorValues) {
    return session.getPosition(name, space, useSensorValues);
  },
  /**
   * DEPRECATED. Use the other transformInterpolations function instead.
   * @method transformInterpolation
   * @param chainName - Name of the chain. Could be: "Head", "LArm","RArm", "LLeg", "RLeg", "Torso"
   * @param space - Task frame {FRAME_TORSO = 0, FRAME_WORLD = 1, FRAME_ROBOT = 2}.
   * @param path - Vector of Transform arrays
   * @param axisMask - Axis mask. True for axes that you wish to control. e.g. 7 for position only, 56 for rotation only and 63 for both 
   * @param duration - Vector of times in seconds corresponding to the path points
   * @param isAbsolute - If true, the movement is absolute else relative
   * @return null
   */
  'transformInterpolation': function transformInterpolation(chainName, space, path, axisMask, duration, isAbsolute) {
    return session.transformInterpolation(chainName, space, path, axisMask, duration, isAbsolute);
  },
  /**
   * DEPRECATED. Use the other transformInterpolations function instead.
   * @method transformInterpolations
   * @param effectorNames - Vector of chain names. Could be: "Head", "LArm", "RArm", "LLeg", "RLeg", "Torso" 
   * @param taskSpaceForAllPaths - Task frame {FRAME_TORSO = 0, FRAME_WORLD = 1, FRAME_ROBOT = 2}.
   * @param paths - Vector of transforms arrays.
   * @param axisMasks - Vector of Axis Masks. True for axes that you wish to control. e.g. 7 for position only, 56 for rotation only and 63 for both 
   * @param relativeTimes - Vector of times in seconds corresponding to the path points
   * @param isAbsolute - If true, the movement is absolute else relative
   * @return null
   */
  'transformInterpolations': function transformInterpolations(effectorNames, taskSpaceForAllPaths, paths, axisMasks, relativeTimes, isAbsolute) {
    return session.transformInterpolations(effectorNames, taskSpaceForAllPaths, paths, axisMasks, relativeTimes, isAbsolute);
  },
  /**
   * Moves end-effectors to the given positions and orientations over time. This is a blocking call.
   * @method transformInterpolations
   * @param effectorNames - Vector of chain names. Could be: "Head", "LArm", "RArm", "LLeg", "RLeg", "Torso" 
   * @param taskSpaceForAllPaths - Task frame {FRAME_TORSO = 0, FRAME_WORLD = 1, FRAME_ROBOT = 2}.
   * @param paths - Vector of 6D position arrays (x,y,z,wx,wy,wz) in meters and radians
   * @param axisMasks - Vector of Axis Masks. True for axes that you wish to control. e.g. 7 for position only, 56 for rotation only and 63 for both 
   * @param relativeTimes - Vector of times in seconds corresponding to the path points
   * @return null
   */
  'transformInterpolations': function transformInterpolations(effectorNames, taskSpaceForAllPaths, paths, axisMasks, relativeTimes) {
    return session.transformInterpolations(effectorNames, taskSpaceForAllPaths, paths, axisMasks, relativeTimes);
  },
  /**
   * Moves an end-effector to DEPRECATED. Use setTransforms function instead.
   * @method setTransform
   * @param chainName - Name of the chain. Could be: "Head", "LArm","RArm", "LLeg", "RLeg", "Torso"
   * @param space - Task frame {FRAME_TORSO = 0, FRAME_WORLD = 1, FRAME_ROBOT = 2}.
   * @param transform - Transform arrays
   * @param fractionMaxSpeed - The fraction of maximum speed to use
   * @param axisMask - Axis mask. True for axes that you wish to control. e.g. 7 for position only, 56 for rotation only and 63 for both 
   * @return null
   */
  'setTransform': function setTransform(chainName, space, transform, fractionMaxSpeed, axisMask) {
    return session.setTransform(chainName, space, transform, fractionMaxSpeed, axisMask);
  },
  /**
   * Moves multiple end-effectors to the given position and orientation transforms. This is a non-blocking call.
   * @method setTransforms
   * @param names - The name or names of effector.
   * @param spaces - The task frame or task frames {FRAME_TORSO = 0, FRAME_WORLD = 1, FRAME_ROBOT = 2}.
   * @param transforms - Transform arrays
   * @param fractionMaxSpeed - The fraction of maximum speed to use
   * @param axisMask - Axis mask. True for axes that you wish to control. e.g. 7 for position only, 56 for rotation only and 63 for both 
   * @return null
   */
  'setTransforms': function setTransforms(names, spaces, transforms, fractionMaxSpeed, axisMask) {
    return session.setTransforms(names, spaces, transforms, fractionMaxSpeed, axisMask);
  },
  /**
   * DEPRECATED. Use setTransforms function instead.
   * @method changeTransform
   * @param chainName - Name of the chain. Could be: "Head", "LArm","RArm", "LLeg", "RLeg", "Torso"
   * @param space - Task frame {FRAME_TORSO = 0, FRAME_WORLD = 1, FRAME_ROBOT = 2}.
   * @param transform - Transform arrays
   * @param fractionMaxSpeed - The fraction of maximum speed to use
   * @param axisMask - Axis mask. True for axes that you wish to control. e.g. 7 for position only, 56 for rotation only and 63 for both 
   * @return null
   */
  'changeTransform': function changeTransform(chainName, space, transform, fractionMaxSpeed, axisMask) {
    return session.changeTransform(chainName, space, transform, fractionMaxSpeed, axisMask);
  },
  /**
   * Gets an Homogenous Transform relative to the FRAME. Axis definition: the x axis is positive toward Nao's front, the y from right to left and the z is vertical.
   * @method getTransform
   * @param name - Name of the item. Could be: any joint or chain or sensor (Head, LArm, RArm, LLeg, RLeg, Torso, HeadYaw, ..., CameraTop, CameraBottom, MicroFront, MicroRear, MicroLeft, MicroRight, Accelerometer, Gyrometer, Laser, LFsrFR, LFsrFL, LFsrRR, LFsrRL, RFsrFR, RFsrFL, RFsrRR, RFsrRL, USSensor1, USSensor2, USSensor3, USSensor4. Use getSensorNames for the list of sensors supported on your robot.
   * @param space - Task frame {FRAME_TORSO = 0, FRAME_WORLD = 1, FRAME_ROBOT = 2}.
   * @param useSensorValues - If true, the sensor values will be used to determine the position.
   * @return Vector of 16 floats corresponding to the values of the matrix, line by line.
   */
  'getTransform': function getTransform(name, space, useSensorValues) {
    return session.getTransform(name, space, useSensorValues);
  },
  /**
   * Gets an Homogenous Transform in World. 
   * @method _getSensorTransformAtTime
   * @private
   * @param sensorName - Name of the sensor
   * @param time - A qi::ClockTimePoint
   * @return Vector of 16 floats corresponding to the values of the matrix, line by line.
   */
  '_getSensorTransformAtTime': function _getSensorTransformAtTime(sensorName, time) {
    return session._getSensorTransformAtTime(sensorName, time);
  },
  /**
   * UserFriendly Whole Body API: enable Whole Body Balancer. It's a Generalized Inverse Kinematics which deals with cartesian control, balance, redundancy and task priority. The main goal is to generate and stabilized consistent motions without precomputed trajectories and adapt nao's behaviour to the situation. The generalized inverse kinematic problem takes in account equality constraints (keep foot fix), inequality constraints (joint limits, balance, ...) and quadratic minimization (cartesian / articular desired trajectories). We solve each step a quadratic programming on the robot.
   * @method wbEnable
   * @param isEnabled - Active / Disactive Whole Body Balancer.
   * @return null
   */
  'wbEnable': function wbEnable(isEnabled) {
    return session.wbEnable(isEnabled);
  },
  /**
   * Enable autobalance on your robot.
   * @method _enableAutoBalance
   * @private
   * @param isEnabled - Enable or Disable autobalance.
   * @return Success to enable autobalance.
   */
  '_enableAutoBalance': function _enableAutoBalance(isEnabled) {
    return session._enableAutoBalance(isEnabled);
  },
  /**
   * Change the support mode to keep balance on a define leg..
   * @method _changeSupportMode
   * @private
   * @param isEnabled - Active / Disactive Whole Body Balancer.
   * @param name - The name of the support leg ("Legs", "LLeg" or "RLeg".
   * @return Successfully changed support mode.
   */
  '_changeSupportMode': function _changeSupportMode(isEnabled, name) {
    return session._changeSupportMode(isEnabled, name);
  },
  /**
   * UserFriendly Whole Body API: set the foot state: fixed foot, constrained in a plane or free.
   * @method wbFootState
   * @param stateName - Name of the foot state. "Fixed" set the foot fixed. "Plane" constrained the Foot in the plane. "Free" set the foot free.
   * @param supportLeg - Name of the foot. "LLeg", "RLeg" or "Legs".
   * @return null
   */
  'wbFootState': function wbFootState(stateName, supportLeg) {
    return session.wbFootState(stateName, supportLeg);
  },
  /**
   * UserFriendly Whole Body API: enable to keep balance in support polygon.
   * @method wbEnableBalanceConstraint
   * @param isEnable - Enable Robot to keep balance.
   * @param supportLeg - Name of the support leg: "Legs", "LLeg", "RLeg".
   * @return null
   */
  'wbEnableBalanceConstraint': function wbEnableBalanceConstraint(isEnable, supportLeg) {
    return session.wbEnableBalanceConstraint(isEnable, supportLeg);
  },
  /**
   * Advanced Whole Body API: "Com" go to a desired support polygon. This is a blocking call.
   * @method wbGoToBalance
   * @param supportLeg - Name of the support leg: "Legs", "LLeg", "RLeg".
   * @param duration - Time in seconds. Must be upper 0.5 s.
   * @return A boolean of the success of the go to balance.
   */
  'wbGoToBalance': function wbGoToBalance(supportLeg, duration) {
    return session.wbGoToBalance(supportLeg, duration);
  },
  /**
   * Advanced Whole Body API: "Com" go to a desired support polygon. This is a blocking call.
   * @method wbGoToBalanceWithSpeed
   * @param supportLeg - Name of the support leg: "Legs", "LLeg", "RLeg".
   * @param fractionMaxSpeed - The fraction of maximum speed to use.
   * @return A boolean of the success of the go to balance.
   */
  'wbGoToBalanceWithSpeed': function wbGoToBalanceWithSpeed(supportLeg, fractionMaxSpeed) {
    return session.wbGoToBalanceWithSpeed(supportLeg, fractionMaxSpeed);
  },
  /**
   * UserFriendly Whole Body API: enable whole body cartesian control of an effector.
   * @method wbEnableEffectorControl
   * @param effectorName - Name of the effector : "Head", "LArm" or "RArm". Nao goes to posture init. He manages his balance and keep foot fix. "Head" is controlled in rotation. "LArm" and "RArm" are controlled in position.
   * @param isEnabled - Active / Disactive Effector Control.
   * @return null
   */
  'wbEnableEffectorControl': function wbEnableEffectorControl(effectorName, isEnabled) {
    return session.wbEnableEffectorControl(effectorName, isEnabled);
  },
  /**
   * UserFriendly Whole Body API: set new target for controlled effector. This is a non-blocking call.
   * @method wbSetEffectorControl
   * @param effectorName - Name of the effector : "Head", "LArm" or "RArm". Nao goes to posture init. He manages his balance and keep foot fix. "Head" is controlled in rotation. "LArm" and "RArm" are controlled in position.
   * @param targetCoordinate - "Head" is controlled in rotation (WX, WY, WZ). "LArm" and "RArm" are controlled in position (X, Y, Z). TargetCoordinate must be absolute and expressed in FRAME_ROBOT. If the desired position/orientation is unfeasible, target is resize to the nearest feasible motion.
   * @return null
   */
  'wbSetEffectorControl': function wbSetEffectorControl(effectorName, targetCoordinate) {
    return session.wbSetEffectorControl(effectorName, targetCoordinate);
  },
  /**
   * Advanced Whole Body API: enable to control an effector as an optimization.
   * @method wbEnableEffectorOptimization
   * @param effectorName - Name of the effector : "All", "Arms", "Legs", "Head", "LArm", "RArm", "LLeg", "RLeg", "Torso", "Com".
   * @param isActive - if true, the effector control is taken in acount in the optimization criteria.
   * @return null
   */
  'wbEnableEffectorOptimization': function wbEnableEffectorOptimization(effectorName, isActive) {
    return session.wbEnableEffectorOptimization(effectorName, isActive);
  },
  /**
   * UserFriendly Whole Body API: get Whole Body Balance State.
   * @method _wbGetBalanceState
   * @private
   * @return Name of the Whole Body Balance State ("None", "LLeg", "RLeg" or "Legs"). 
   */
  '_wbGetBalanceState': function _wbGetBalanceState() {
    return session._wbGetBalanceState();
  },
  /**
   * UserFriendly Whole Body API: get Whole Body is active.
   * @method _wbIsActive
   * @private
   * @return Get Whole Body is active.
   */
  '_wbIsActive': function _wbIsActive() {
    return session._wbIsActive();
  },
  /**
   * UserFriendly Whole Body API: reset the default Whole Body Configuration.
   * @method _wbDefaultConfiguration
   * @private
   * @return null
   */
  '_wbDefaultConfiguration': function _wbDefaultConfiguration() {
    return session._wbDefaultConfiguration();
  },
  /**
   * UserFriendly Whole Body API: get the foot state: fixed foot, constrained in a plane or free.
   * @method _wbGetFootState
   * @private
   * @param supportLeg - Name of the foot. "LLeg", "RLeg" or "Legs".
   * @return Name of the foot state. "Fixed" set the foot fixed. "Plane" constrained the Foot in the plane. "Free" set the foot free.
   */
  '_wbGetFootState': function _wbGetFootState(supportLeg) {
    return session._wbGetFootState(supportLeg);
  },
  /**
   * Advanced Whole Body API: weighting of Joint used in Whole Body Optimization criteria. It is the priority of Joint motion in front of all the other motion task in the quadratic programming optimization.
   * @method _wbSetJointWeighting
   * @private
   * @param jointNames - Name or names of joints, chains, "Body" or "Joints".
   * @param weightings - Weight used in the Whole Body Articular Optimization.Limits : 0 &lt; weighting &lt;= 1000.0. "articularControl" default value : 1000.0.
   * @return null
   */
  '_wbSetJointWeighting': function _wbSetJointWeighting(jointNames, weightings) {
    return session._wbSetJointWeighting(jointNames, weightings);
  },
  /**
   * Advanced Whole Body API: stiffness of Joint used in Whole Body Optimization criteria. It is the stiffness of Joint motion control used in the quadratic programming optimization.
   * @method _wbSetJointStiffness
   * @private
   * @param jointName - Name or names of joints, chains, "Body" or "Joints".
   * @param stiffness - Stiffness used in the Whole Body Articular Optimization.Limits : 0 &lt; stiffness &lt;= 100.0."articularControl" default value : 30.0.
   * @return null
   */
  '_wbSetJointStiffness': function _wbSetJointStiffness(jointName, stiffness) {
    return session._wbSetJointStiffness(jointName, stiffness);
  },
  /**
   * Advanced Whole Body API: preview of Joint Inequality Constraint. It constraint the max joint velocity computed by the quadratic programming. If preview = 1, joint limits can be achieved in 1 step. If preview = 5, joint limits can be achieved in 5 steps. The more preview is, the less desired motion is realised. But the more preview is, the motion safety is increased.
   * @method _wbSetArticularLimitPreview
   * @private
   * @param jointName - Name or names of joints, chains, "Body" or "Joints".
   * @param preview - Preview used in the Whole Body Inequality Constraints. Between [1 50].articularControl" default value : 1.
   * @return null
   */
  '_wbSetArticularLimitPreview': function _wbSetArticularLimitPreview(jointName, preview) {
    return session._wbSetArticularLimitPreview(jointName, preview);
  },
  /**
   * Advanced Whole Body API: enable to control an effector as a constraint.
   * @method _wbEnableEffectorConstraint
   * @private
   * @param effectorName - Name of the effector : "All", "Arms", "Legs", "Head", "LArm", "RArm", "LLeg", "RLeg", "Torso", "Com".
   * @param isActive - if true, the effector control is taken in acount in the optimization criteria.
   * @param axisMask - True for axes that you wish to control. e.g. 7 for position only, 56 for rotation only and 63 for both.
   * @return null
   */
  '_wbEnableEffectorConstraint': function _wbEnableEffectorConstraint(effectorName, isActive, axisMask) {
    return session._wbEnableEffectorConstraint(effectorName, isActive, axisMask);
  },
  /**
   * Advanced Whole Body API: get effector constraint state.
   * @method _wbGetEffectorConstraint
   * @private
   * @param effectorName - Name of the effector : "Head", "LArm", "RArm", "LLeg", "RLeg", "Torso", "Com".
   * @return [isActive, axisMask].
   */
  '_wbGetEffectorConstraint': function _wbGetEffectorConstraint(effectorName) {
    return session._wbGetEffectorConstraint(effectorName);
  },
  /**
   * Advanced Whole Body API: enable to set the axis mask of an effector.
   * @method _wbAxisMaskEffector
   * @private
   * @param effectorName - Name of the effector : "All", "Arms", "Legs", "Head", "LArm", "RArm", "LLeg", "RLeg", "Torso", "Com".
   * @param isOptimized - if true, the optimized effector axis mask is setting, else it is the constrained effector axis mask.
   * @param axisMask - Axes that you wish to control. e.g. 7 for position only, 56 for rotation only and 63 for both.
   * @return null
   */
  '_wbAxisMaskEffector': function _wbAxisMaskEffector(effectorName, isOptimized, axisMask) {
    return session._wbAxisMaskEffector(effectorName, isOptimized, axisMask);
  },
  /**
   * Advanced Whole Body API: enable to control a joint as an optimization.
   * @method _wbEnableJointOptimization
   * @private
   * @param jointName -  "Body", name of the chain ("LLeg",...) or name of the joint : "HeadYaw", "LKneePitch".
   * @param isActive - if true, the joint control is taken in acount in the optimization criteria.
   * @return null
   */
  '_wbEnableJointOptimization': function _wbEnableJointOptimization(jointName, isActive) {
    return session._wbEnableJointOptimization(jointName, isActive);
  },
  /**
   * Advanced Whole Body API: get effector constraint state.
   * @method _wbGetEffectorOptimization
   * @private
   * @param effectorName - Name of the effector : "Head", "LArm", "RArm", "LLeg", "RLeg", "Torso", "Com".
   * @return [isActive, axisMask].
   */
  '_wbGetEffectorOptimization': function _wbGetEffectorOptimization(effectorName) {
    return session._wbGetEffectorOptimization(effectorName);
  },
  /**
   * Advanced Whole Body API: set Effector Weighting in the Whole Body Optimization. It is the priority of Effector motion in front of all the other motion task in the quadratic programming optimization.
   * @method _wbSetEffectorWeight
   * @private
   * @param effectorName - "All", "Arms", "Legs", "Head", "LArm", "RArm", "LLeg", "RLeg", "Torso", "Com".
   * @param weightingList - Weighting used in the Whole Body Cartesian Optimization. Limits : 0 &lt; weighting &lt;= 1000.0. Default value is 1000.0. We can give the 6 weights corresponding to the 6 degree of freedom of cartesian motion. (WeightX, WeightY, WeightZ, WeightWX, WeightWY, WeightWZ). We can give 2 weights corresponding to translation and rotation axis (WeightTranslation, WeightTranslation, WeightTranslation, WeightRotation, WeightRotation, WeightRotation). We can give 1 weight, it is the same weight for all the axis (Weight, Weight, Weight, Weight, Weight, Weight).
   * @return null
   */
  '_wbSetEffectorWeight': function _wbSetEffectorWeight(effectorName, weightingList) {
    return session._wbSetEffectorWeight(effectorName, weightingList);
  },
  /**
   * Advanced Whole Body API: set Effector Stiffness in Cartesian Control.
   * @method _wbSetEffectorStiffness
   * @private
   * @param effectorName - "All", "Arms", "Legs", "Head", "LArm", "RArm", "LLeg", "RLeg", "Torso", "Com".
   * @param stiffnessList - Stiffness used in the Whole Body Cartesian Optimization. Limits : 0 &lt; stiffness &lt;= 100.0. Default value is 10.0. We can give the 6 stiffnesses corresponding to the 6 degree of freedom of cartesian motion. (StiffnessX, StiffnessY, StiffnessZ, StiffnessWX, StiffnessWY, StiffnessWZ). We can give 2 weights corresponding to translation and rotation axis (StiffnessTranslation, StiffnessTranslation, StiffnessTranslation, StiffnessRotation, StiffnessRotation, StiffnessRotation). We can give 1 stiffness, it is the same stiffness for all the axis (Stiffness, Stiffness, Stiffness, Stiffness, Stiffness, Stiffness).
   * @return null
   */
  '_wbSetEffectorStiffness': function _wbSetEffectorStiffness(effectorName, stiffnessList) {
    return session._wbSetEffectorStiffness(effectorName, stiffnessList);
  },
  /**
   * Enable Anticollision protection of the arms of the robot. Use api isCollision to know if a chain is in collision and can be disactivated.
   * @method setCollisionProtectionEnabled
   * @param pChainName - The chain name {"Arms", "LArm" or "RArm"}.
   * @param pEnable - Activate or disactivate the anticollision of the desired Chain.
   * @return A bool which return always true.
   */
  'setCollisionProtectionEnabled': function setCollisionProtectionEnabled(pChainName, pEnable) {
    return session.setCollisionProtectionEnabled(pChainName, pEnable);
  },
  /**
   * Allow to know if the collision protection is activated on the given chain.
   * @method getCollisionProtectionEnabled
   * @param pChainName - The chain name {"LArm" or "RArm"}.
   * @return Return true is the collision protection of the given Arm is activated.
   */
  'getCollisionProtectionEnabled': function getCollisionProtectionEnabled(pChainName) {
    return session.getCollisionProtectionEnabled(pChainName);
  },
  /**
   * Enable Anticollision protection of the arms and base move  of the robot with external environment.
   * @method setExternalCollisionProtectionEnabled
   * @param pName - The name {"All", "Move", "Arms", "LArm" or "RArm"}.
   * @param pEnable - Activate or disactivate the anticollision of the desired name.
   * @return null
   */
  'setExternalCollisionProtectionEnabled': function setExternalCollisionProtectionEnabled(pName, pEnable) {
    return session.setExternalCollisionProtectionEnabled(pName, pEnable);
  },
  /**
   * Enable/Disable physical interaction on a chain without disabling safety completely
   * @method _enablePhysicalInteractionForChain
   * @private
   * @param pChain - The chain name {"LArm", "RArm", "Arms"}
   * @param pEnabled - True/False
   * @return null
   */
  '_enablePhysicalInteractionForChain': function _enablePhysicalInteractionForChain(pChain, pEnabled) {
    return session._enablePhysicalInteractionForChain(pChain, pEnabled);
  },
  /**
   * Gets chain closest obstacle Position .
   * @method getChainClosestObstaclePosition
   * @param pName - The Chain name {"LArm" or "RArm"}.
   * @param space - Task frame {FRAME_TORSO = 0, FRAME_WORLD = 1, FRAME_ROBOT = 2}.
   * @return Vector containing the Position3D in meters (x, y, z)
   */
  'getChainClosestObstaclePosition': function getChainClosestObstaclePosition(pName, space) {
    return session.getChainClosestObstaclePosition(pName, space);
  },
  /**
   * Allow to know if the external collision protection is activated on the given name.
   * @method getExternalCollisionProtectionEnabled
   * @param pName - The name {"All", "Move", "Arms", "LArm" or "RArm"}.
   * @return Return true is the external collision protection of the given name is activated.
   */
  'getExternalCollisionProtectionEnabled': function getExternalCollisionProtectionEnabled(pName) {
    return session.getExternalCollisionProtectionEnabled(pName);
  },
  /**
   * Defines the orthogonal security distance used with external collision protection "Move".
   * @method setOrthogonalSecurityDistance
   * @param securityDistance - The orthogonal security distance.
   * @return null
   */
  'setOrthogonalSecurityDistance': function setOrthogonalSecurityDistance(securityDistance) {
    return session.setOrthogonalSecurityDistance(securityDistance);
  },
  /**
   * Gets the current orthogonal security distance.
   * @method getOrthogonalSecurityDistance
   * @return The current orthogonal security distance.
   */
  'getOrthogonalSecurityDistance': function getOrthogonalSecurityDistance() {
    return session.getOrthogonalSecurityDistance();
  },
  /**
   * Defines the tangential security distance used with external collision protection "Move".
   * @method setTangentialSecurityDistance
   * @param securityDistance - The tangential security distance.
   * @return null
   */
  'setTangentialSecurityDistance': function setTangentialSecurityDistance(securityDistance) {
    return session.setTangentialSecurityDistance(securityDistance);
  },
  /**
   * Gets the current tangential security distance.
   * @method getTangentialSecurityDistance
   * @return The current tangential security distance.
   */
  'getTangentialSecurityDistance': function getTangentialSecurityDistance() {
    return session.getTangentialSecurityDistance();
  },
  /**
   * Give the collision state of a chain. If a chain has a collision state "none" or "near", it could be desactivated. 
   * @method isCollision
   * @param pChainName - The chain name {"Arms", "LArm" or "RArm"}.
   * @return A string which notice the collision state: "none" there are no collision, "near" the collision is taking in account in the anti-collision algorithm, "collision" the chain is in contact with an other body. If the chain asked is "Arms" the most unfavorable result is given. 

   */
  'isCollision': function isCollision(pChainName) {
    return session.isCollision(pChainName);
  },
  /**
   * Allow to know if the collision protection is activated on the given chain  and if stiffness of all chain joint is stricly positif.
   * @method _getCollisionStateForObstacleSummary
   * @private
   * @param pChainName - The chain name {"LArm" or "RArm"}.
   * @return Return true is the collision protection of the given Arm is activated.
   */
  '_getCollisionStateForObstacleSummary': function _getCollisionStateForObstacleSummary(pChainName) {
    return session._getCollisionStateForObstacleSummary(pChainName);
  },
  /**
   * DEPRECATED: use _getCollisionShapes. Gets the list of collision supported on your robot.
   * @method _getCollisionNames
   * @private
   * @param pName - The name {"static" or "dynamic"}.
   * @return Vector of collision names, radius, parent joint name and parentjoint position.
   */
  '_getCollisionNames': function _getCollisionNames(pName) {
    return session._getCollisionNames(pName);
  },
  /**
   * Gets the list of dynamic collisions in torso frame.
   * @method _getCollisionShapes
   * @private
   * @param pName - The name {"static" or "dynamic"}.
   * @return Vector of collisions name, radius, parent joint name andparent joint position.
   */
  '_getCollisionShapes': function _getCollisionShapes(pName) {
    return session._getCollisionShapes(pName);
  },
  /**
   * Set dynamic collision shape for people collision avoidance
   * @method _setCollisionShapes
   * @private
   * @param pNameList - A vector of names.
   * @param pPairList - A vector of names. "All", "Sphere", "Pill" or the collision nameof LArm or RArm.
   * @param pBodyList - A vector of body names. Dynamic collision is attached to this body.
   * @param pTypeList - A vector of names. "Sphere", "Plan", "Pill" or "Tab".
   * @param pShapeList - A vector of shape data.
   * @param pPositionList - An ALValue containing a list of position of the shape.
   * @return null
   */
  '_setCollisionShapes': function _setCollisionShapes(pNameList, pPairList, pBodyList, pTypeList, pShapeList, pPositionList) {
    return session._setCollisionShapes(pNameList, pPairList, pBodyList, pTypeList, pShapeList, pPositionList);
  },
  /**
   * Deprecated: Use setCollisionShapes with typeList. Set dynamic collision shape for people collision avoidance
   * @method _setCollisionShapes
   * @private
   * @param pNameList - A vector of names.
   * @param pPairList - A vector of names. "All", "Sphere", "Pill" or the collision nameof LArm or RArm.
   * @param pShapeList - A vector of shape data.
   * @param pPositionList - An ALValue containing a list of position of the shape.
   * @return null
   */
  '_setCollisionShapes': function _setCollisionShapes(pNameList, pPairList, pShapeList, pPositionList) {
    return session._setCollisionShapes(pNameList, pPairList, pShapeList, pPositionList);
  },
  /**
   * Gets the list of detected collisions supported on your robot.
   * @method _getDetectedCollisions
   * @private
   * @param pMinimumDistance - Distance to take into account collision pair.
   * @return Vector of collisions: [nameShape1, nameShape2, distance].
   */
  '_getDetectedCollisions': function _getDetectedCollisions(pMinimumDistance) {
    return session._getDetectedCollisions(pMinimumDistance);
  },
  /**
   * Gets the list of detected collisions supported on your robot.
   * @method _getDetectedCollisionsFull
   * @private
   * @return Vector of collisions: [nameShape1, nameShape2, distance].
   */
  '_getDetectedCollisionsFull': function _getDetectedCollisionsFull() {
    return session._getDetectedCollisionsFull();
  },
  /**
   * Gets the polygon checked for safety during move.
   * @method _getDangerousRegion
   * @private
   * @return A vector of Position2D.
   */
  '_getDangerousRegion': function _getDangerousRegion() {
    return session._getDangerousRegion();
  },
  /**
   * Enable The fall manager protection for the robot. When a fall is detected the robot adopt a joint configuration to protect himself and cut the stiffness.
. An memory event called "robotHasFallen" is generated when the fallManager have been activated.
   * @method setFallManagerEnabled
   * @param pEnable - Activate or disactivate the smart stiffness.
   * @return null
   */
  'setFallManagerEnabled': function setFallManagerEnabled(pEnable) {
    return session.setFallManagerEnabled(pEnable);
  },
  /**
   * Give the state of the fall manager.
   * @method getFallManagerEnabled
   * @return Return true is the fall manager is activated. 

   */
  'getFallManagerEnabled': function getFallManagerEnabled() {
    return session.getFallManagerEnabled();
  },
  /**
   * Enable The push recovery protection for the robot. 
   * @method setPushRecoveryEnabled
   * @param pEnable - Enable the push recovery.
   * @return null
   */
  'setPushRecoveryEnabled': function setPushRecoveryEnabled(pEnable) {
    return session.setPushRecoveryEnabled(pEnable);
  },
  /**
   * Enable The push recovery protection for the robot. 
   * @method _setPushRecoveryEnabled
   * @private
   * @param pEnable - Enable the push recovery.
   * @return null
   */
  '_setPushRecoveryEnabled': function _setPushRecoveryEnabled(pEnable) {
    return session._setPushRecoveryEnabled(pEnable);
  },
  /**
   * Give the state of the push recovery.
   * @method getPushRecoveryEnabled
   * @return Return true is the push recovery is activated. 

   */
  'getPushRecoveryEnabled': function getPushRecoveryEnabled() {
    return session.getPushRecoveryEnabled();
  },
  /**
   * Enable Smart Stiffness for all the joints (True by default), the update take one motion cycle for updating. The smart Stiffness is a gestion of joint maximum torque. More description is available on the red documentation of ALMotion module.
   * @method setSmartStiffnessEnabled
   * @param pEnable - Activate or disactivate the smart stiffness.
   * @return null
   */
  'setSmartStiffnessEnabled': function setSmartStiffnessEnabled(pEnable) {
    return session.setSmartStiffnessEnabled(pEnable);
  },
  /**
   * Give the state of the smart Stiffness.
   * @method getSmartStiffnessEnabled
   * @return Return true is the smart Stiffnes is activated. 

   */
  'getSmartStiffnessEnabled': function getSmartStiffnessEnabled() {
    return session.getSmartStiffnessEnabled();
  },
  /**
   * Enable or disable the diagnosis effect into ALMotion
   * @method setDiagnosisEffectEnabled
   * @param pEnable - Enable or disable the diagnosis effect.
   * @return null
   */
  'setDiagnosisEffectEnabled': function setDiagnosisEffectEnabled(pEnable) {
    return session.setDiagnosisEffectEnabled(pEnable);
  },
  /**
   * Give the state of the diagnosis effect.
   * @method getDiagnosisEffectEnabled
   * @return Return true is the diagnosis reflex is activated. 

   */
  'getDiagnosisEffectEnabled': function getDiagnosisEffectEnabled() {
    return session.getDiagnosisEffectEnabled();
  },
  /**
   * DEPRECATED. Use getBodyNames function instead.
   * @method getJointNames
   * @param name - Name of a chain, "Arms", "Legs", "Body", "Chains", "JointActuators", "Joints" or "Actuators".
   * @return Vector of strings, one for each joint in the collection
   */
  'getJointNames': function getJointNames(name) {
    return session.getJointNames(name);
  },
  /**
   * Gets the names of all the joints and actuators in the collection.
   * @method getBodyNames
   * @param name - Name of a chain, "Arms", "Legs", "Body", "Chains", "JointActuators", "Joints" or "Actuators".
   * @return Vector of strings, one for each joint and actuator in the collection
   */
  'getBodyNames': function getBodyNames(name) {
    return session.getBodyNames(name);
  },
  /**
   * Gets the list of sensors supported on your robot.
   * @method getSensorNames
   * @return Vector of sensor names
   */
  'getSensorNames': function getSensorNames() {
    return session.getSensorNames();
  },
  /**
   * Get the minAngle (rad), maxAngle (rad), and maxVelocity (rad.s-1) for a given joint or actuator in the body.
   * @method getLimits
   * @param name - Name of a joint, chain, "Body", "JointActuators", "Joints" or "Actuators". 
   * @return Array of ALValue arrays containing the minAngle, maxAngle, maxVelocity and maxTorque for all the bodies specified.
   */
  'getLimits': function getLimits(name) {
    return session.getLimits(name);
  },
  /**
   * Get the minAngle (rad), maxAngle (rad), and maxVelocity (rad.s-1) for a given joint or actuator in the body.
   * @method _getFullLimits
   * @private
   * @param name - Name of a joint, chain, "Body", "JointActuators", "Joints" or "Actuators". 
   * @return Array of ALValue arrays containing the minAngle, maxAngle, maxVelocity, maxTorque, Kc, reduction, efficiency and maxCurrent for all the bodies specified.
   */
  '_getFullLimits': function _getFullLimits(name) {
    return session._getFullLimits(name);
  },
  /**
   * Get the motion cycle time in milliseconds.
   * @method getMotionCycleTime
   * @return Expressed in milliseconds
   */
  'getMotionCycleTime': function getMotionCycleTime() {
    return session.getMotionCycleTime();
  },
  /**
   * Get the motion cycle number in int.
   * @method _getMotionCycleNumber
   * @private
   * @return Expressed in int.
   */
  '_getMotionCycleNumber': function _getMotionCycleNumber() {
    return session._getMotionCycleNumber();
  },
  /**
   * Get the robot configuration. DEPRECATED. use ALRobotModel
   * @method getRobotConfig
   * @return ALValue arrays containing the robot parameter names and the robot parameter values.
   */
  'getRobotConfig': function getRobotConfig() {
    return session.getRobotConfig();
  },
  /**
   * Returns a string representation of the Model's state
   * @method getSummary
   * @return A formated string
   */
  'getSummary': function getSummary() {
    return session.getSummary();
  },
  /**
   * Returns a string representation of the Model's state
   * @method _getSummary
   * @private
   * @return A formated string
   */
  '_getSummary': function _getSummary() {
    return session._getSummary();
  },
  /**
   * Gets the mass of a joint, chain, "Body" or "Joints".
   * @method getMass
   * @param pName - Name of the body which we want the mass. "Body", "Joints" and "Com" give the total mass of nao. For the chain, it gives the total mass of the chain.
   * @return The mass in kg.
   */
  'getMass': function getMass(pName) {
    return session.getMass(pName);
  },
  /**
   * Gets the COM of a joint, chain, "Body" or "Joints".
   * @method getCOM
   * @param pName - Name of the body which we want the mass. In chain name case, this function give the com of the chain.
   * @param pSpace - Task frame {FRAME_TORSO = 0, FRAME_WORLD = 1, FRAME_ROBOT = 2}.
   * @param pUseSensorValues - If true, the sensor values will be used to determine the position.
   * @return The COM position (meter).
   */
  'getCOM': function getCOM(pName, pSpace, pUseSensorValues) {
    return session.getCOM(pName, pSpace, pUseSensorValues);
  },
  /**
   * Gets the support polygon
   * @method getSupportPolygon
   * @param pSpace - Task frame {FRAME_TORSO = 0, FRAME_WORLD = 1, FRAME_ROBOT = 2}.
   * @param pUseSensorValues - If true, the sensor values will be used to determine the position.
   * @return A vector containing the x,y coordinates of each of the outer points of the support polygon in specified frame.
   */
  'getSupportPolygon': function getSupportPolygon(pSpace, pUseSensorValues) {
    return session.getSupportPolygon(pSpace, pUseSensorValues);
  },
  /**
   * Gets the support polygon
   * @method _getSupportPolygonBipedDebug
   * @private
   * @param pName - LLeg or RLeg
   * @return A vector containing the x,y coordinates of each of the outer points of the support polygon in specified frame.
   */
  '_getSupportPolygonBipedDebug': function _getSupportPolygonBipedDebug(pName) {
    return session._getSupportPolygonBipedDebug(pName);
  },
  /**
   * Gets the torque of the joints
   * @method _getTorque
   * @private
   * @param names - Names the joints, chains, "Body", "Joints". 
   * @param useSensor - If true, return the sensor torque.
   * @return Torques in N.m.
   */
  '_getTorque': function _getTorque(names, useSensor) {
    return session._getTorque(names, useSensor);
  },
  /**
   * Gets the inertia matrice of a joint or "Torso".
   * @method _getInertia
   * @private
   * @param pName - Name of the joint or "Torso". Inertia is given in the COM of the body, in poseZero orientation.
   * @return The inertia matrix (kg.m2).
   */
  '_getInertia': function _getInertia(pName) {
    return session._getInertia(pName);
  },
  /**
   * Internal Use.
   * @method setMotionConfig
   * @param config - Internal: An array of ALValues [i][0]: name, [i][1]: value
   * @return null
   */
  'setMotionConfig': function setMotionConfig(config) {
    return session.setMotionConfig(config);
  },
  /**
   * Callback naoqi is ready.
   * @method _naoqiIsReadyCallback
   * @private
   * @return null
   */
  '_naoqiIsReadyCallback': function _naoqiIsReadyCallback() {
    return session._naoqiIsReadyCallback();
  },
  /**
   * Callback preferences changed.
   * @method _preferenceUpdatedCallback
   * @private
   * @return null
   */
  '_preferenceUpdatedCallback': function _preferenceUpdatedCallback() {
    return session._preferenceUpdatedCallback();
  },
  /**
   * Interpolate with head with prediction.
This function is mainly use by the tracker modules.

   * @method _trackerLookAt
   * @private
   * @param pNames - list of Joints Names.
   * @param pTargetPositions - list of Joints angles.
   * @param pLimits - list of Joints limits.
   * @return null
   */
  '_trackerLookAt': function _trackerLookAt(pNames, pTargetPositions, pLimits) {
    return session._trackerLookAt(pNames, pTargetPositions, pLimits);
  },
  /**
   * lookAt in Whole Body mode.
   * @method _lookAtWbPersistent
   * @private
   * @param pTargetWy - The target position wy in FRAME_ROBOT
   * @param pTargetWz - The target position wz in FRAME_ROBOT
   * @return null
   */
  '_lookAtWbPersistent': function _lookAtWbPersistent(pTargetWy, pTargetWz) {
    return session._lookAtWbPersistent(pTargetWy, pTargetWz);
  },
  /**
   * lookAt in Whole Body mode.
   * @method _lookAtWb
   * @private
   * @param pTargetWy - The target position wy in FRAME_ROBOT
   * @param pTargetWz - The target position wz in FRAME_ROBOT
   * @return null
   */
  '_lookAtWb': function _lookAtWb(pTargetWy, pTargetWz) {
    return session._lookAtWb(pTargetWy, pTargetWz);
  },
  /**
   * Interpolate with hands with prediction.
This function is mainly use by the tracker modules.

   * @method _trackerPointAt
   * @private
   * @param pNames - list of Joints Names.
   * @param pTargetPositions - list of Joints angles.
   * @return null
   */
  '_trackerPointAt': function _trackerPointAt(pNames, pTargetPositions) {
    return session._trackerPointAt(pNames, pTargetPositions);
  },
  /**
   * Interpolate with speed without prediction.
   * @method _trackerWithSpeed
   * @private
   * @param pNames - list of Joints Names.
   * @param pTargetPositions - list of Joints angles.
   * @param pTimeSinceDetectionMs - The time in Ms since the target was detected
   * @param pMaxSpeedFraction - fraction max speed list.
   * @param pUseOfWholeBody - If true, the target is follow in cartesian space by the Head with whole Body constraints.
   * @param pIsPointAt - if true use pointAt task else lookAt task.
   * @return null
   */
  '_trackerWithSpeed': function _trackerWithSpeed(pNames, pTargetPositions, pTimeSinceDetectionMs, pMaxSpeedFraction, pUseOfWholeBody, pIsPointAt) {
    return session._trackerWithSpeed(pNames, pTargetPositions, pTimeSinceDetectionMs, pMaxSpeedFraction, pUseOfWholeBody, pIsPointAt);
  },
  /**
   * lookAt
   * @method _lookAt
   * @private
   * @param pTargetPosition - position 3D to look at.
   * @param pFrame - Target frame {FRAME_TORSO = 0, FRAME_WORLD = 1, FRAME_ROBOT = 2}.
   * @param pMaxSpeedFraction - fraction max speed.
   * @return null
   */
  '_lookAt': function _lookAt(pTargetPosition, pFrame, pMaxSpeedFraction) {
    return session._lookAt(pTargetPosition, pFrame, pMaxSpeedFraction);
  },
  /**
   * lookAt
   * @method _lookAt
   * @private
   * @param pTargetPosition - position 3D to look at.
   * @param pFrame - Target frame {FRAME_TORSO = 0, FRAME_WORLD = 1, FRAME_ROBOT = 2}.
   * @param pEffectorId - effector id {Middle of eyes = 0, Camera Top = 1, Camera Bottom = 2}.
   * @param pMaxSpeedFraction - fraction max speed.
   * @return null
   */
  '_lookAt': function _lookAt(pTargetPosition, pFrame, pEffectorId, pMaxSpeedFraction) {
    return session._lookAt(pTargetPosition, pFrame, pEffectorId, pMaxSpeedFraction);
  },
  /**
   * Stop lookAt task
This function is mainly use by the tracker modules.

   * @method _stopLookAt
   * @private
   * @param pWithSpeed - if True stop lookAtWithSpeed task.
   * @return null
   */
  '_stopLookAt': function _stopLookAt(pWithSpeed) {
    return session._stopLookAt(pWithSpeed);
  },
  /**
   * Stop PointAt task
This function is mainly use by the tracker modules.

   * @method _stopPointAt
   * @private
   * @param pWithSpeed - if True stop pointAtWithSpeed task.
   * @return null
   */
  '_stopPointAt': function _stopPointAt(pWithSpeed) {
    return session._stopPointAt(pWithSpeed);
  },
  /**
   * Update obstacles
   * @method _updateObstacles
   * @private
   * @param obstacles - List of closest obstacles [[x, y, z]...]
   * @param blindZones - List of blind zones [[Position2D, Position2D...]...]
   * @return null
   */
  '_updateObstacles': function _updateObstacles(obstacles, blindZones) {
    return session._updateObstacles(obstacles, blindZones);
  },
  /**
   * This function starts or stops breathing animation on a chain.
Chain name can be "Body", "Arms", "LArm", "RArm", "Legs" or "Head".
Head breathing animation will work only if Leg animation is active.
   * @method setBreathEnabled
   * @param pChain - Chain name.
   * @param pIsEnabled - Enables / disables the chain.
   * @return null
   */
  'setBreathEnabled': function setBreathEnabled(pChain, pIsEnabled) {
    return session.setBreathEnabled(pChain, pIsEnabled);
  },
  /**
   * This function gets the status of breathing animation on a chain.
Chain name can be "Body", "Arms", "LArm", "RArm", "Legs" or "Head".

   * @method getBreathEnabled
   * @param pChain - Chain name.
   * @return True if breathing animation is enabled on the chain.
   */
  'getBreathEnabled': function getBreathEnabled(pChain) {
    return session.getBreathEnabled(pChain);
  },
  /**
   * DEPRECATED. This function configures the breathing animation.
   * @method setBreathConfig
   * @param pConfig - Breath configuration.
An ALValue of the form [["Bpm", pBpm], ["Amplitude", pAmplitude]].
pBpm is a float between 10 and 50 setting the breathing frequency in beats per minute.
pAmplitude is a float between 0 and 1 setting the amplitude of the breathing animation.
   * @return null
   */
  'setBreathConfig': function setBreathConfig(pConfig) {
    return session.setBreathConfig(pConfig);
  },
  /**
   * DEPRECATED. This function gets the current breathing configuration.
   * @method getBreathConfig
   * @return An ALValue of the form [["Bpm", bpm], ["Amplitude", amplitude]].
bpm is the breathing frequency in beats per minute.
amplitude is the normalized amplitude of the breathing animation, between 0 and 1.
   */
  'getBreathConfig': function getBreathConfig() {
    return session.getBreathConfig();
  },
  /**
   * Starts or stops idle posture management on a chain.
Chain name can be "Body", "Arms", "LArm", "RArm", "Legs" or "Head".
   * @method setIdlePostureEnabled
   * @param pChain - Chain name.
   * @param pIsEnabled - Enables / disables the chain.
   * @return null
   */
  'setIdlePostureEnabled': function setIdlePostureEnabled(pChain, pIsEnabled) {
    return session.setIdlePostureEnabled(pChain, pIsEnabled);
  },
  /**
   * This function gets the status of idle posture management on a chain.
Chain name can be "Body", "Arms", "LArm", "RArm", "Legs" or "Head".

   * @method getIdlePostureEnabled
   * @param pChain - Chain name.
   * @return True if breathing animation is enabled on the chain.
   */
  'getIdlePostureEnabled': function getIdlePostureEnabled(pChain) {
    return session.getIdlePostureEnabled(pChain);
  },
  /**
   * This function sets the breathing animation.
   * @method _setIdleAnimation
   * @private
   * @param AnimFile - Animation file (.anim).
   * @return null
   */
  '_setIdleAnimation': function _setIdleAnimation(AnimFile) {
    return session._setIdleAnimation(AnimFile);
  },
  /**
   * This function reset the default breathing animation.
   * @method _resetIdleDefaultAnimation
   * @private
   * @return null
   */
  '_resetIdleDefaultAnimation': function _resetIdleDefaultAnimation() {
    return session._resetIdleDefaultAnimation();
  },
  /**
   * Gets an ALValue structure describing the tasks in the Task List
   * @method getTaskList
   * @return An ALValue containing an ALValue for each task. The inner ALValue contains: Name, MotionID
   */
  'getTaskList': function getTaskList() {
    return session.getTaskList();
  },
  /**
   * Returns true if all the desired resources are available. Only motion API's' blocking call takes resources.
   * @method areResourcesAvailable
   * @param resourceNames - A vector of resource names such as joints. Use getBodyNames("Body") to have the list of the available joint for your robot.
   * @return True if the resources are available
   */
  'areResourcesAvailable': function areResourcesAvailable(resourceNames) {
    return session.areResourcesAvailable(resourceNames);
  },
  /**
   * Kills a motion task.
   * @method killTask
   * @param motionTaskID - TaskID of the motion task you want to kill.
   * @return Return true if the specified motionTaskId has been killed.
   */
  'killTask': function killTask(motionTaskID) {
    return session.killTask(motionTaskID);
  },
  /**
   * Kills all tasks that use any of the resources given. Only motion API's' blocking call takes resources and can be killed. Use getBodyNames("Body") to have the list of the available joint for your robot.
   * @method killTasksUsingResources
   * @param resourceNames - A vector of resource joint names
   * @return null
   */
  'killTasksUsingResources': function killTasksUsingResources(resourceNames) {
    return session.killTasksUsingResources(resourceNames);
  },
  /**
   * DEPRECATED. Use killMove function instead.
   * @method killWalk
   * @return null
   */
  'killWalk': function killWalk() {
    return session.killWalk();
  },
  /**
   * Emergency Stop on Move task: This method will end the move task brutally, without attempting to return to a balanced state. The robot could easily fall.
   * @method killMove
   * @return null
   */
  'killMove': function killMove() {
    return session.killMove();
  },
  /**
   * Kills all tasks.
   * @method killAll
   * @return null
   */
  'killAll': function killAll() {
    return session.killAll();
  },
  /**
   * Enable / Disable notifications.
   * @method setEnableNotifications
   * @param enable - If True enable notifications. If False disable notifications.
   * @return null
   */
  'setEnableNotifications': function setEnableNotifications(enable) {
    return session.setEnableNotifications(enable);
  },
  /**
   * Return true if notifications are active.
   * @method areNotificationsEnabled
   * @return Return True if notifications are active.
   */
  'areNotificationsEnabled': function areNotificationsEnabled() {
    return session.areNotificationsEnabled();
  },
  /**
   * Gets the list of collision with the ground.
   * @method _getGroundCollision
   * @private
   * @return Vector of collision names and position in torso frame
   */
  '_getGroundCollision': function _getGroundCollision() {
    return session._getGroundCollision();
  },
  /**
   * Gets the list of collision with the ground.
   * @method _getGroundCollisionForForceContact
   * @private
   * @return Vector of collision names and position in torso frame
   */
  '_getGroundCollisionForForceContact': function _getGroundCollisionForForceContact() {
    return session._getGroundCollisionForForceContact();
  },
  /**
   * Gets the list of collision with the ground.
   * @method _getGroundCollisionForFallManager
   * @private
   * @return Vector of collision names and position in torso frame
   */
  '_getGroundCollisionForFallManager': function _getGroundCollisionForFallManager() {
    return session._getGroundCollisionForFallManager();
  },
  /**
   * Gets the ground plane transform in torso frame.
   * @method _getGroundPlaneTf
   * @private
   * @return the ground plane transform in torso frame
   */
  '_getGroundPlaneTf': function _getGroundPlaneTf() {
    return session._getGroundPlaneTf();
  },
  /**
   * Gets the Normal Force Contact.
   * @method _getNormalForceContact
   * @private
   * @return Vector of normal Force contact
   */
  '_getNormalForceContact': function _getNormalForceContact() {
    return session._getNormalForceContact();
  },
  /**
   * It's a getPosition on Torso with inertial Information.This function is used in chorgraphe in 3D View
   * @method _getRealTorsoInWorld
   * @private
   * @return a transform of the Torso position
   */
  '_getRealTorsoInWorld': function _getRealTorsoInWorld() {
    return session._getRealTorsoInWorld();
  },
  /**
   * 
   * @method _getRobotGroundConvexHullDebug
   * @private
   * @return Array of ALValue arrays containing the sphere position2D and radius.
   */
  '_getRobotGroundConvexHullDebug': function _getRobotGroundConvexHullDebug() {
    return session._getRobotGroundConvexHullDebug();
  },
  /**
   * Get the robot convex hull projected on the ground in the ROBOT_FRAME.
   * @method _getRobotGroundConvexHull
   * @private
   * @return Array of ALValue arrays containing the position2D of each convex hull points.
   */
  '_getRobotGroundConvexHull': function _getRobotGroundConvexHull() {
    return session._getRobotGroundConvexHull();
  },
  /**
   * Gets if the joints is moving
   * @method _getJointIsMoving
   * @private
   * @param useSensors - If true, sensor information will be returned
   * @return a vector of boolean.
   */
  '_getJointIsMoving': function _getJointIsMoving(useSensors) {
    return session._getJointIsMoving(useSensors);
  },
  /**
   * Gets if the chain is moving
   * @method _getChainIsMoving
   * @private
   * @param useSensors - If true, sensor information will be returned
   * @return a vector of boolean.
   */
  '_getChainIsMoving': function _getChainIsMoving(useSensors) {
    return session._getChainIsMoving(useSensors);
  },
  /**
   * In fact, it's an hide way to allow the fall manager to disable the fall manager. Note, it's inverse (true set fall to false)
   * @method _setAnimationModeEnabled
   * @private
   * @param pEnable - Activate or disactivate the animation Mode.
   * @return null
   */
  '_setAnimationModeEnabled': function _setAnimationModeEnabled(pEnable) {
    return session._setAnimationModeEnabled(pEnable);
  },
  /**
   * Get the motion configuration.
   * @method _getMotionConfig
   * @private
   * @param pName - "All", "State", "Mode", "Protection", "Collision", "Basic", "Move", "Tracker", "Walk", "OmniWheel", "Log", "RobotState", "Duration", "Control", "SmartStiffness","WB", "FallManager".
   * @return string contraining all the information.
   */
  '_getMotionConfig': function _getMotionConfig(pName) {
    return session._getMotionConfig(pName);
  },
  /**
   * Gets the center of the support polygon in frame robot.
   * @method _getSupportPolygonCenter
   * @private
   * @return A vector containing the x,y coordinates of the center of the support polygon
   */
  '_getSupportPolygonCenter': function _getSupportPolygonCenter() {
    return session._getSupportPolygonCenter();
  },
  /**
   * Gets the support polygon
   * @method _getComWorld
   * @private
   * @return A Position3D (x,y,z) coordinates of com in World Space
   */
  '_getComWorld': function _getComWorld() {
    return session._getComWorld();
  },
  /**
   * Gets the support polygon
   * @method _getWorldRotation
   * @private
   * @return A Rotation3D (wx,wy,0) coresponding to world rotation
   */
  '_getWorldRotation': function _getWorldRotation() {
    return session._getWorldRotation();
  },
  /**
   * Activate the fall task
   * @method _fall
   * @private
   * @param pFallAngle - The fall angle in degree.
   * @return null
   */
  '_fall': function _fall(pFallAngle) {
    return session._fall(pFallAngle);
  },
  /**
   * A patch to avoid to consume too much current after a SitDown.
   * @method _relaxMotorsWhenSitting
   * @private
   * @return null
   */
  '_relaxMotorsWhenSitting': function _relaxMotorsWhenSitting() {
    return session._relaxMotorsWhenSitting();
  },
  /**
   * Relax a chain.
   * @method _relax
   * @private
   * @param chainName - The name of the chain to relax.
   * @param delayInSeconds - The duration the low stiffness time.
   * @return null
   */
  '_relax': function _relax(chainName, delayInSeconds) {
    return session._relax(chainName, delayInSeconds);
  },
  /**
   * Reset to false the bool Cartesian Unfeasible: used for testing motion.
   * @method _resetCartesianUnfeasible
   * @private
   * @return null
   */
  '_resetCartesianUnfeasible': function _resetCartesianUnfeasible() {
    return session._resetCartesianUnfeasible();
  },
  /**
   * et to true the bool Cartesian Unfeasible: used for testing motion.
   * @method _setCartesianUnfeasible
   * @private
   * @return null
   */
  '_setCartesianUnfeasible': function _setCartesianUnfeasible() {
    return session._setCartesianUnfeasible();
  },
  /**
   * Get the Cartesian Unfeasible state since last reset: used for testing motion.
   * @method _getCartesianUnfeasible
   * @private
   * @return True if there are one cartesian unfeasible during one motion cycle since last reset.
   */
  '_getCartesianUnfeasible': function _getCartesianUnfeasible() {
    return session._getCartesianUnfeasible();
  },
  /**
   * Save current whole body dump
   * @method _saveWholeBodyDump
   * @private
   * @return null
   */
  '_saveWholeBodyDump': function _saveWholeBodyDump() {
    return session._saveWholeBodyDump();
  },
  /**
   * Reset the number of joint command discontinuous updates.
   * @method _resetNumJointCommandDiscontinuities
   * @private
   * @return null
   */
  '_resetNumJointCommandDiscontinuities': function _resetNumJointCommandDiscontinuities() {
    return session._resetNumJointCommandDiscontinuities();
  },
  /**
   * Get the number of joint command discontinuous updates since last reset.
   * @method _getNumJointCommandDiscontinuities
   * @private
   * @return The number of discontinuities since last reset.
   */
  '_getNumJointCommandDiscontinuities': function _getNumJointCommandDiscontinuities() {
    return session._getNumJointCommandDiscontinuities();
  },
  /**
   * Usefull function to resynchronize ALMotion and DCM 
In fact we set motion command model with sensors information
   * @method _resetMotionCommandModelToSensors
   * @private
   * @param pName - Names the joints, chains, "Body", "JointActuators", "Joints" or "Actuators". 
   * @return null
   */
  '_resetMotionCommandModelToSensors': function _resetMotionCommandModelToSensors(pName) {
    return session._resetMotionCommandModelToSensors(pName);
  },
  /**
   * Usefull function to change motion mode to simulation
   * @method _setSimulationModeEnabled
   * @private
   * @param pEnable - Enable or Disable motion simulation mode.
   * @return null
   */
  '_setSimulationModeEnabled': function _setSimulationModeEnabled(pEnable) {
    return session._setSimulationModeEnabled(pEnable);
  },
  /**
   * Get motion to dcm commands
   * @method _getMotionToDCM
   * @private
   * @return null
   */
  '_getMotionToDCM': function _getMotionToDCM() {
    return session._getMotionToDCM();
  },
  /**
   * Get the blind zones convex polygon.
   * @method _getBlindZones
   * @private
   * @return the blind zones [[[x, y], ..., [x, y]]...]
   */
  '_getBlindZones': function _getBlindZones() {
    return session._getBlindZones();
  },
  /**
   * Freeze chain movement.
   * @method _freeze
   * @private
   * @param pChainName - Name of the chain to freeze.
   * @param pDuration - Freeze duration in seconds.
   * @return A cancellable future to unfreeze the chain.
   */
  '_freeze': function _freeze(pChainName, pDuration) {
    return session._freeze(pChainName, pDuration);
  },
  /**
   * 
   * @method _dumpBlackBox
   * @private
   * @param pTime - The time at which we should dump.
   * @return null
   */
  '_dumpBlackBox': function _dumpBlackBox(pTime) {
    return session._dumpBlackBox(pTime);
  },
};
