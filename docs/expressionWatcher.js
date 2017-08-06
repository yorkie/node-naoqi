/**
 * @module expressionWatcher
 */
session.expressionWatcher = {
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
   * @method _start
   * @private
   * @return null
   */
  '_start': function _start() {
    return session._start();
  },
  /**
   * 
   * @method _stop
   * @private
   * @return null
   */
  '_stop': function _stop() {
    return session._stop();
  },
  /**
   * 
   * @method _isStarted
   * @private
   * @return null
   */
  '_isStarted': function _isStarted() {
    return session._isStarted();
  },
  /**
   * Adds a condition expression to ALExpressionWatcher engine
   * @method add
   * @param expression - Condition expression in ConditionChecker language
   * @param report_mode - ALExpressionWatcher report mode, available modes: { REPORT_CHANGE = 0, REPORT_EDGE = 1, REPORT_EDGE_TRUE = 2 }
   * @return Corresponding ExpressionObject
   */
  'add': function add(expression, report_mode) {
    return session.add(expression, report_mode);
  },
  /**
   * 
   * @method _list
   * @private
   * @return null
   */
  '_list': function _list() {
    return session._list();
  },
  /**
   * 
   * @method _listReactor
   * @private
   * @return null
   */
  '_listReactor': function _listReactor() {
    return session._listReactor();
  },
  /**
   * 
   * @method _purgeAll
   * @private
   * @return null
   */
  '_purgeAll': function _purgeAll() {
    return session._purgeAll();
  },
};
