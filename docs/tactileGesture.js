/**
 * @module tactileGesture
 */
session.tactileGesture = {
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
   * 
        Computes 'Hamming distance' between the binary representations of
        numbers in pair
        
   * @method _bit_distance
   * @private
   * @return null
   */
  '_bit_distance': function _bit_distance() {
    return session._bit_distance();
  },
  /**
   * Cancel all futures
   * @method _cancel_futures
   * @private
   * @return null
   */
  '_cancel_futures': function _cancel_futures() {
    return session._cancel_futures();
  },
  /**
   * 
        Given a gesture, check if the active sequence matches it.

        Algorithm:
        1. Create a list of overlapping pairs from each gesture's sequence
        2. Loop through each pair (a,b):
           3. If the active sequence matches 'a' in the pair:
              4. Check if the active sequence contains the 'b' in the pair
                 5a. If True, check if it is within n-1 positions from where 'a'
                     was (Where 'n' is the number of bits changed between 'a'
                     and 'b')
                     6a. If True: goto Step 2 [if last pair; goto Step 7)
                     6b. Else: break; fullfill promise as None
                 5b. Else: break; fullfill promise as None
        7. If all pairs check out and they used all of the active sequence
           8. Fullfill promise with the gesture and the difference in length between the
              inputted sequence and the matched sequence (i.e. the number of
              excess frames)
        
   * @method _check_sequence
   * @private
   * @return null
   */
  '_check_sequence': function _check_sequence() {
    return session._check_sequence();
  },
  /**
   * Clean up/reset after a sequence has been completed
   * @method _clean_up
   * @private
   * @return null
   */
  '_clean_up': function _clean_up() {
    return session._clean_up();
  },
  /**
   * Clean up/reset after a hold sequence has been completed
   * @method _clean_up_hold
   * @private
   * @return null
   */
  '_clean_up_hold': function _clean_up_hold() {
    return session._clean_up_hold();
  },
  /**
   * Connect to all services required by ALTactileGesture
   * @method _connect_services
   * @private
   * @return null
   */
  '_connect_services': function _connect_services() {
    return session._connect_services();
  },
  /**
   * Init qi.Signals and memory events (for compatibility)
   * @method _connect_signals
   * @private
   * @return null
   */
  '_connect_signals': function _connect_signals() {
    return session._connect_signals();
  },
  /**
   * Create gesture name from sequence
   * @method _create_gesture_name
   * @private
   * @return null
   */
  '_create_gesture_name': function _create_gesture_name() {
    return session._create_gesture_name();
  },
  /**
   * 
        Once the hold time has expired:
          - Evaluate if the current sequence is a valid hold gesture
          - Fire gesture signal (if valid)
          - Reset for next touch input
        
   * @method _eval_hold
   * @private
   * @return null
   */
  '_eval_hold': function _eval_hold() {
    return session._eval_hold();
  },
  /**
   * 
        Once the sequence time has expired:
          - Evaluate if the current sequence is a valid gesture
          - Fire gesture signal (if valid)
          - Reset for next touch input
        
   * @method _eval_sequence
   * @private
   * @return null
   */
  '_eval_sequence': function _eval_sequence() {
    return session._eval_sequence();
  },
  /**
   * Fire signal linked to gesture
   * @method _fire_gesture_signal
   * @private
   * @return null
   */
  '_fire_gesture_signal': function _fire_gesture_signal() {
    return session._fire_gesture_signal();
  },
  /**
   * Fire signal linked to release of sensors
   * @method _fire_release_signal
   * @private
   * @return null
   */
  '_fire_release_signal': function _fire_release_signal() {
    return session._fire_release_signal();
  },
  /**
   * 
        On any head sensor change, acquire lock and starts e_sim (settling)
        timer.
        Note: Only the first signal starts the timer and all others are
        debounced.
        
   * @method _on_sensor_change
   * @private
   * @return null
   */
  '_on_sensor_change': function _on_sensor_change() {
    return session._on_sensor_change();
  },
  /**
   * 
        Once the settling time (e_sim) is over:
          - Read from head sensors.
          - Store pattern
          - Start hold and sequential timers
        
   * @method _read_sensors
   * @private
   * @return null
   */
  '_read_sensors': function _read_sensors() {
    return session._read_sensors();
  },
  /**
   * 
        Compare inputted sequence to all gestures to find match

        Algorithm:
        1. async call _check_sequence on for all gestures
           (i.e. gestures that match the current hold status and are not unset custom gestures)
              -> _check_sequence() will fullfill promise with the gesture if matched; else None
        2. Build list of all futures whose value is a matched sequence
        3. Return the gesture whose match is the closest the sequence prototype
           it matched (i.e. smallest difference)
        
   * @method _search_gestures
   * @private
   * @return null
   */
  '_search_gestures': function _search_gestures() {
    return session._search_gestures();
  },
  /**
   * 
   * @method _set_hold_time
   * @private
   * @return null
   */
  '_set_hold_time': function _set_hold_time() {
    return session._set_hold_time();
  },
  /**
   * 
   * @method _set_sequence_time
   * @private
   * @return null
   */
  '_set_sequence_time': function _set_sequence_time() {
    return session._set_sequence_time();
  },
  /**
   * 
   * @method _set_settle_time
   * @private
   * @return null
   */
  '_set_settle_time': function _set_settle_time() {
    return session._set_settle_time();
  },
  /**
   * Start subscriptions to head sensors
   * @method _start
   * @private
   * @return null
   */
  '_start': function _start() {
    return session._start();
  },
  /**
   * Starts a timer that waits for the hold period to evaluate if there is a
        valid hold sequence
   * @method _start_d_hold_timer
   * @private
   * @return null
   */
  '_start_d_hold_timer': function _start_d_hold_timer() {
    return session._start_d_hold_timer();
  },
  /**
   * Starts a timer that determines if events in a sequence happen soon
        enough for them to be considered in teh current sequence.
   * @method _start_e_seq_timer
   * @private
   * @return null
   */
  '_start_e_seq_timer': function _start_e_seq_timer() {
    return session._start_e_seq_timer();
  },
  /**
   * Starts timer that waits for a setteling time before reading the sensors
   * @method _start_e_sim_timer
   * @private
   * @return null
   */
  '_start_e_sim_timer': function _start_e_sim_timer() {
    return session._start_e_sim_timer();
  },
  /**
   * Unsubscribe from head sensors
   * @method _stop
   * @private
   * @return null
   */
  '_stop': function _stop() {
    return session._stop();
  },
  /**
   * Sync with preferences. This includes: Settle Time, Hold Time and Sequence Time
   * @method _sync_preferences
   * @private
   * @return null
   */
  '_sync_preferences': function _sync_preferences() {
    return session._sync_preferences();
  },
  /**
   * Validate a requested gesture sequence
   * @method _validate_sequence
   * @private
   * @return null
   */
  '_validate_sequence': function _validate_sequence() {
    return session._validate_sequence();
  },
  /**
   * Define touch gesture.

        :param sensor_sequence: List of strings that represent the
        sequence of the desired gesture. For example, SingleFront
        would be the following: ['000', '100', '000']. NOTE: All
        sequences must start with '000' and all non-hold sequences
        must end with '000'. Hold gestures should end with the touch
        sequence you will be holding. For example, a SingleFrontHold
        would be the following: ['000', '100'].

        :returns: If sequence is valid, the name of gesture to listen
        for, RuntimeError otherwise.
   * @method createGesture
   * @return null
   */
  'createGesture': function createGesture() {
    return session.createGesture();
  },
  /**
   * Define touch gesture.

        :param sensor_sequence: Comma-separated string that represents
        the sequence of the desired gesture. For example, SingleFront
        would be the following: "000,100,000". NOTE: All sequences
        must start with '000' and all non-hold sequences must end with
        '000'. Hold gestures should end with the touch sequence you
        will be holding. For example, a SingleFrontHold would be the
        following: "000,100".

        :returns: If sequence is valid, the name of gesture to listen
        for, RuntimeError otherwise.
   * @method createGesture
   * @return null
   */
  'createGesture': function createGesture() {
    return session.createGesture();
  },
  /**
   * Get the sequence associated with a gesture name

        :param sequence: Sequence you want the gesture name of

        :returns: Sequence (as list of strings) if it exists, None otherwise
   * @method getGesture
   * @return null
   */
  'getGesture': function getGesture() {
    return session.getGesture();
  },
  /**
   * Get the sequence associated with a gesture name

        :param sequence: Sequence you want the gesture name of

        :returns: Sequence (as list of strings) if it exists, None otherwise
   * @method getGesture
   * @return null
   */
  'getGesture': function getGesture() {
    return session.getGesture();
  },
  /**
   * Get all gestures that have been defined in the system

        :returns: Dictionary (Map<String, List<String>>) of all gestures
   * @method getGestures
   * @return null
   */
  'getGestures': function getGestures() {
    return session.getGestures();
  },
  /**
   * Get the sequence associated with a gesture name

        :param gesture_name: Name of gesture you want the sequence of

        :returns: Sequence (as list of strings) if it exists, None otherwise
        
   * @method getSequence
   * @return null
   */
  'getSequence': function getSequence() {
    return session.getSequence();
  },
  /**
   * Set length of hold time.

        :param hold_time: Desired hold time, in seconds (Default: 0.8s)

        :returns: True if hold time successfully updated, RuntimeError otherwise.
   * @method setHoldTime
   * @return null
   */
  'setHoldTime': function setHoldTime() {
    return session.setHoldTime();
  },
  /**
   * Set length of hold time.

        :param hold_time: Desired hold time, in seconds (Default: 0.8s)

        :returns: True if hold time successfully updated, RuntimeError otherwise.
   * @method setHoldTime
   * @return null
   */
  'setHoldTime': function setHoldTime() {
    return session.setHoldTime();
  },
  /**
   * Update length of sequence time.

        :param sequence_time: Desired sequence time, in seconds (Default: 0.2s)

        :returns: True if sequence time successfully updated, RuntimeError otherwise.
   * @method setSequenceTime
   * @return null
   */
  'setSequenceTime': function setSequenceTime() {
    return session.setSequenceTime();
  },
  /**
   * Set length of sequence time.

        :param sequence_time: Desired sequence time, in seconds (Default: 0.2s)

        :returns: True if sequence time successfully updated, RuntimeError otherwise.
   * @method setSequenceTime
   * @return null
   */
  'setSequenceTime': function setSequenceTime() {
    return session.setSequenceTime();
  },
  /**
   * Update length of settling time.

        :param settle_time: Desired settling time, in seconds (Default: 0.04s)

        :returns: True if settle time successfully updated, RuntimeError otherwise.
   * @method setSettleTime
   * @return null
   */
  'setSettleTime': function setSettleTime() {
    return session.setSettleTime();
  },
  /**
   * Update length of settling time.

        :param settle_time: Desired settling time, in seconds (Default: 0.04s)

        :returns: True if settle time successfully updated, RuntimeError otherwise.
   * @method setSettleTime
   * @return null
   */
  'setSettleTime': function setSettleTime() {
    return session.setSettleTime();
  },
};
