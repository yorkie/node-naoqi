"use strict";

import {EventEmitter} from 'events';
import * as SocketIO from '@ali/socket.io-client';

/**
 * @class QiSocket
 * @extends EventEmitter
 */
export default class QiSocket extends EventEmitter {
  /**
   * @method constructor
   * @param {String} host
   * @param {Object} options
   */
  constructor(host, options) {
    super();
    const uri = 'http://' + (host || '198.18.0.1');
    this._options = options || {};
    this._socket = SocketIO.connect(uri, {
      'resource': 'libs/qimessaging/2/socket.io',
      'force new connection': true
    });
    this._socket.on('reply', this._onreply.bind(this));
    this._socket.on('signal', this._onsignal.bind(this));
    this._socket.on('connect', this._onconnect.bind(this));
    this._socket.on('disconnect', this._ondisconnect.bind(this));
    this._socket.on('error', this._onerror.bind(this));
    // for meta call
    this._idm = 0;
    this._callbacks = [];
  }
  /**
   * @method _onreply
   * @private
   */
  _onreply(data) {
    const idm = data.idm;
    if (typeof idm !== 'number')
      return this.emit('error', new Error('Invalid reply data'));
    const callback = this._callbacks[idm];
    if (typeof callback === 'function')
      callback.call(this, data.result);
  }
  /**
   * @method _onreply
   * @private
   */
  _onsignal(data) {
    this.emit('signal', data);
  }
  /**
   * @method _onconnect
   * @private
   */
  _onconnect() {
    this.emit('connect');
  }
  /**
   * @method _ondisconnect
   * @private
   */
  _ondisconnect() {
    this.emit('disconnect');
  }
  /**
   * @method _onerror
   * @private
   */
  _onerror(data) {
    const err = new Error(data && data.result);
    this.emit('error', err);
  }
  /**
   * @method remoteCall
   * @param {String} obj - the object to request
   * @param {String} member - the member to request
   * @param {Array} args - the arguments of this remote call
   * @return {Promise} the result of this remote call will be attached in this promise
   */
  remoteCall(obj, name, member, ...args) {
    const idm = this._idm++;
    const lastArg = args[args.length - 1];
    if (typeof lastArg === 'function') {
      this._callbacks[idm] = lastArg;
      args = args.slice(0, -1);
    }
    this.emit('call', {
      uid: obj, name, member
    });
    this._socket.emit('call', {
      idm,
      params: {
        obj, member, args
      }
    });
  }
}
