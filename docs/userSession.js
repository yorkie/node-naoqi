/**
 * @module userSession
 */
session.userSession = {
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
   * @method doesUserExist
   * @return null
   */
  'doesUserExist': function doesUserExist() {
    return session.doesUserExist();
  },
  /**
   * 
   * @method doUsersExist
   * @return null
   */
  'doUsersExist': function doUsersExist() {
    return session.doUsersExist();
  },
  /**
   * 
   * @method getUserList
   * @return null
   */
  'getUserList': function getUserList() {
    return session.getUserList();
  },
  /**
   * 
   * @method getNumUsers
   * @return null
   */
  'getNumUsers': function getNumUsers() {
    return session.getNumUsers();
  },
  /**
   * 
   * @method getFocusedUser
   * @return null
   */
  'getFocusedUser': function getFocusedUser() {
    return session.getFocusedUser();
  },
  /**
   * 
   * @method getOpenUserSessions
   * @return null
   */
  'getOpenUserSessions': function getOpenUserSessions() {
    return session.getOpenUserSessions();
  },
  /**
   * 
   * @method isUserSessionOpen
   * @return null
   */
  'isUserSessionOpen': function isUserSessionOpen() {
    return session.isUserSessionOpen();
  },
  /**
   * 
   * @method areUserSessionsOpen
   * @return null
   */
  'areUserSessionsOpen': function areUserSessionsOpen() {
    return session.areUserSessionsOpen();
  },
  /**
   * 
   * @method isUserPermanent
   * @return null
   */
  'isUserPermanent': function isUserPermanent() {
    return session.isUserPermanent();
  },
  /**
   * 
   * @method areUsersPermanent
   * @return null
   */
  'areUsersPermanent': function areUsersPermanent() {
    return session.areUsersPermanent();
  },
  /**
   * 
   * @method getPermanentUserList
   * @return null
   */
  'getPermanentUserList': function getPermanentUserList() {
    return session.getPermanentUserList();
  },
  /**
   * 
   * @method _rememberUserPermanently
   * @private
   * @return null
   */
  '_rememberUserPermanently': function _rememberUserPermanently() {
    return session._rememberUserPermanently();
  },
  /**
   * 
   * @method _forgetPermanentUser
   * @private
   * @return null
   */
  '_forgetPermanentUser': function _forgetPermanentUser() {
    return session._forgetPermanentUser();
  },
  /**
   * 
   * @method getBindingList
   * @return null
   */
  'getBindingList': function getBindingList() {
    return session.getBindingList();
  },
  /**
   * 
   * @method doesBindingExist
   * @return null
   */
  'doesBindingExist': function doesBindingExist() {
    return session.doesBindingExist();
  },
  /**
   * 
   * @method getUserBinding
   * @return null
   */
  'getUserBinding': function getUserBinding() {
    return session.getUserBinding();
  },
  /**
   * 
   * @method getUserBindings
   * @return null
   */
  'getUserBindings': function getUserBindings() {
    return session.getUserBindings();
  },
  /**
   * 
   * @method findUsersWithBinding
   * @return null
   */
  'findUsersWithBinding': function findUsersWithBinding() {
    return session.findUsersWithBinding();
  },
  /**
   * 
   * @method getUsidFromPpid
   * @return null
   */
  'getUsidFromPpid': function getUsidFromPpid() {
    return session.getUsidFromPpid();
  },
  /**
   * 
   * @method getPpidFromUsid
   * @return null
   */
  'getPpidFromUsid': function getPpidFromUsid() {
    return session.getPpidFromUsid();
  },
  /**
   * 
   * @method _checkPhotoForIdentification
   * @private
   * @return null
   */
  '_checkPhotoForIdentification': function _checkPhotoForIdentification() {
    return session._checkPhotoForIdentification();
  },
  /**
   * 
   * @method _reinforceIdentificationFromPhoto
   * @private
   * @return null
   */
  '_reinforceIdentificationFromPhoto': function _reinforceIdentificationFromPhoto() {
    return session._reinforceIdentificationFromPhoto();
  },
  /**
   * 
   * @method _createUserFromPhoto
   * @private
   * @return null
   */
  '_createUserFromPhoto': function _createUserFromPhoto() {
    return session._createUserFromPhoto();
  },
  /**
   * 
   * @method _setFocusedUser
   * @private
   * @return null
   */
  '_setFocusedUser': function _setFocusedUser() {
    return session._setFocusedUser();
  },
  /**
   * 
   * @method _createUsers
   * @private
   * @return null
   */
  '_createUsers': function _createUsers() {
    return session._createUsers();
  },
  /**
   * 
   * @method _deleteUser
   * @private
   * @return null
   */
  '_deleteUser': function _deleteUser() {
    return session._deleteUser();
  },
  /**
   * 
   * @method _deleteUsers
   * @private
   * @return null
   */
  '_deleteUsers': function _deleteUsers() {
    return session._deleteUsers();
  },
  /**
   * 
   * @method _openUserSessions
   * @private
   * @return null
   */
  '_openUserSessions': function _openUserSessions() {
    return session._openUserSessions();
  },
  /**
   * 
   * @method _closeUserSessions
   * @private
   * @return null
   */
  '_closeUserSessions': function _closeUserSessions() {
    return session._closeUserSessions();
  },
  /**
   * 
   * @method _bindUser
   * @private
   * @return null
   */
  '_bindUser': function _bindUser() {
    return session._bindUser();
  },
  /**
   * 
   * @method _unbindUser
   * @private
   * @return null
   */
  '_unbindUser': function _unbindUser() {
    return session._unbindUser();
  },
  /**
   * 
   * @method _getDatabaseVersion
   * @private
   * @return null
   */
  '_getDatabaseVersion': function _getDatabaseVersion() {
    return session._getDatabaseVersion();
  },
  /**
   * 
   * @method _deleteAllUsers
   * @private
   * @return null
   */
  '_deleteAllUsers': function _deleteAllUsers() {
    return session._deleteAllUsers();
  },
  /**
   * 
   * @method getBindingSources
   * @return null
   */
  'getBindingSources': function getBindingSources() {
    return session.getBindingSources();
  },
  /**
   * 
   * @method doesBindingSourceExist
   * @return null
   */
  'doesBindingSourceExist': function doesBindingSourceExist() {
    return session.doesBindingSourceExist();
  },
  /**
   * 
   * @method getUserDataSources
   * @return null
   */
  'getUserDataSources': function getUserDataSources() {
    return session.getUserDataSources();
  },
  /**
   * 
   * @method doesUserDataSourceExist
   * @return null
   */
  'doesUserDataSourceExist': function doesUserDataSourceExist() {
    return session.doesUserDataSourceExist();
  },
  /**
   * 
   * @method _registerUserDataSource
   * @private
   * @return null
   */
  '_registerUserDataSource': function _registerUserDataSource() {
    return session._registerUserDataSource();
  },
  /**
   * 
   * @method _unregisterUserDataSource
   * @private
   * @return null
   */
  '_unregisterUserDataSource': function _unregisterUserDataSource() {
    return session._unregisterUserDataSource();
  },
  /**
   * 
   * @method getUserData
   * @return null
   */
  'getUserData': function getUserData() {
    return session.getUserData();
  },
  /**
   * 
   * @method getUserData
   * @return null
   */
  'getUserData': function getUserData() {
    return session.getUserData();
  },
  /**
   * 
   * @method setUserData
   * @return null
   */
  'setUserData': function setUserData() {
    return session.setUserData();
  },
  /**
   * 
   * @method getUserCreationDate
   * @return null
   */
  'getUserCreationDate': function getUserCreationDate() {
    return session.getUserCreationDate();
  },
  /**
   * 
   * @method getFirstEncounterDate
   * @return null
   */
  'getFirstEncounterDate': function getFirstEncounterDate() {
    return session.getFirstEncounterDate();
  },
  /**
   * 
   * @method getCurrentEncounterDate
   * @return null
   */
  'getCurrentEncounterDate': function getCurrentEncounterDate() {
    return session.getCurrentEncounterDate();
  },
  /**
   * 
   * @method getLastEncounterDate
   * @return null
   */
  'getLastEncounterDate': function getLastEncounterDate() {
    return session.getLastEncounterDate();
  },
  /**
   * 
   * @method getSecondsSinceLastEncounter
   * @return null
   */
  'getSecondsSinceLastEncounter': function getSecondsSinceLastEncounter() {
    return session.getSecondsSinceLastEncounter();
  },
  /**
   * 
   * @method _getSecondsSinceUserCreation
   * @private
   * @return null
   */
  '_getSecondsSinceUserCreation': function _getSecondsSinceUserCreation() {
    return session._getSecondsSinceUserCreation();
  },
};
