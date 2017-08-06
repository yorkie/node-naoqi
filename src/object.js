"use strict";

/**
 * @class QiObject
 */
export default class QiObject {
  /**
   * @method constructor
   * @param {String} uid - the actual pyobject from naoqi
   * @param {Object} meta - the metaobject
   * @param {QiSession} session - the `QiSession` context
   * @return {QiObject}
   */
  constructor(uid, meta, session) {
    this._uid = uid;
    this._name = meta.name;
    Object.defineProperties(this, {
      '_session': {
        value: session,
        writable: false
      },
      '_methods': {
        value: meta.methods,
        writable: false
      },
      '_signals': {
        value: meta.signals,
        writable: false
      },
      '_properties': {
        value: meta.properties,
        writable: false
      }
    });
    this._delegateQiMethods();
  }
  /**
   * @method _delegateQiMethods
   * @private
   */
  _delegateQiMethods() {
    for (let uid in this._methods) {
      const meta = this._methods[uid];
      const func = (...args) => {
        // extract the last argument if it's a function/callback
        var callback = null;
        const end = args.length - 1;
        const lastArgs = args[end];
        if (typeof lastArgs === 'function') {
          callback = lastArgs;
          args = args.slice(0, end);
        }
        // return a promise
        return new Promise((resolve, reject) => {
          var newArgs = [this._uid, this._name, meta.name];
          newArgs = newArgs.concat(args);
          newArgs.push((r) => {
            var obj = r;
            if (r && r.pyobject)
              obj = new QiObject(r.pyobject, r.metaobject, this._session);
            // if callback is given, we need to call it before
            if (typeof callback === 'function')
              callback(obj);
            resolve(obj);
          });
          this._session.remoteCall.apply(this._session, newArgs);
        });
      };
      Object.defineProperties(func, {
        'name': {
          value: meta.name
        },
        '__meta__': {
          value: meta,
          writable: false
        }
      });
      this[meta.name] = func;
    }
  }
  /**
   * @method listSignals
   * @return {Array} returned signals
   */
  listSignals() {
    var signals = [];
    for (let uid in this._signals) {
      signals.push(this._signals[uid].name);
    }
    return signals;
  }
  /**
   * @method connect
   */
  connect(signal, name, callback) {
    this._session.on(name, callback);
    this._session.remoteCall(this._uid, this._name, signal, 'connect', (link) => {
      const event = {name, link, qiobj: this};
      // FIXME(Yorkie): link & name conflicts?
      this._session._subscribedEvents[link] = event;
      this._session._subscribedEvents[name] = event;
    });
  }
  /**
   * @method disconnect
   */
  disconnect(signal, callback) {
    this._session.remoteCall(this._uid, this._name, signal, 'disconnect', callback);
  }
}
