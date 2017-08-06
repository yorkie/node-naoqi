"use strict"

import QiSocket from './socket';
import QiObject from './object';

/**
 * @class QiSession
 * @extends QiSocket
 */
export default class QiSession extends QiSocket {
  /**
   * @method constructor
   * @param {String} host
   * @param {Object} options
   * @return {QiSession}
   */
  constructor(host, options) {
    super(host, options);
    this._defaultServices = {};
    this._loadedDone = false;
    this._onload = () => false;
    this._servicesToFetch = [];
    this._servicesFetched = {};
    this._subscribedEvents = {};
    // load default services
    this.using('ALMemory');
  }
  /**
   * @method using
   * @param {String} name - the name of service to use
   * @param {String} given - the property name if given
   */
  using(name, given) {
    if (this._loadedDone)
      throw new Error('cannot load service when onload is specific');
    if (this._servicesFetched[name]) {
      // if this service is in builtin, skip
      return;
    } else {
      // FIXME(Yorkie): make true to 'pending'?
      this._servicesFetched[name] = true;
    }
    this._servicesToFetch.push(new Promise((resolve, reject) => {
      this.remoteCall('ServiceDirectory', 'ServiceDirectory', 'service', name, (result) => {
        if (process.env.DEBUG)
          console.log('✓', name);

        result.metaobject.name = name;
        if (given) {
          name = given;
        } else {
          name = name.replace(/^AL/, '');
          name = name.slice(0, 1).toLowerCase() + name.slice(1);
        }
        this[name] = new QiObject(result.pyobject, result.metaobject, this);
        resolve(this[name]);
      });
    }));
  }
  /**
   * @method subscribe
   * @param {String} name - the event name to subscribe
   * @param {Function} callback - called when the event fires
   */
  subscribe(name, callback) {
    if (!this._loadedDone || !this.memory)
      throw new Error('set onload function to load service firstly');
    if (this._subscribedEvents[name])
      throw new Error('you have subscribed this event `' + name + '`');
    this._subscribedEvents[name] = 'pending';
    this.memory.subscriber(name).then((r) => {
      r.connect('signal', name, callback);
    });
  }
  // TODO(Yorkie): currently is not available
  /**
   * @method unsubscribe
   * @param {String} name - the event name to unsubscribe
   */
  unsubscribe(name, callback) {
    const event = this._subscribedEvents[name];
    if (!event || event === 'pending')
      throw new Error('this event is not available');
    // start disconnect from service
    event.qiobj.disconnect('signal', (...args) => {
      this.removeAllEventListeners(name);
      if (typeof callback === 'function')
        callback.apply(this, args);
    });
  }
  /**
   * When calling this setter, the session will start pulling service to use.
   * @property {Function} onload
   * @setter
   */
  set onload(fn) {
    if (typeof fn !== 'function')
      throw new TypeError('onload should be a function');
    this._onload = fn;
    Promise.all(this._servicesToFetch).then((services) => {
      this._loadedDone = true;
      // clear the promise objects
      this._servicesToFetch.length = 0;
      fn.call(this, this._loadedDone);
    });
  }
  /**
   * Fires once the remote call is created
   * @property {Function} oncall
   * @setter
   */
  set oncall(fn) {
    this.on('call', fn);
  }
  /**
   * sleep with the given timeout
   * @method sleep
   * @param {Number} seconds - the time in seconds
   */
  sleep(seconds) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(), seconds * 1000);
    });
  }
  /**
   * @method _onsignal
   * @param {Object} data
   * @private
   */
  _onsignal(data) {
    const r = data.result;
    const link = r.link;
    const event = this._subscribedEvents[link];
    if (event && event.name && r.signal)
      this.emit.apply(this, [event.name].concat(r.data));
  }
}
