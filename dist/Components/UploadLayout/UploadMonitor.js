import { createClass as _createClass, classCallCheck as _classCallCheck, defineProperty as _defineProperty, asyncToGenerator as _asyncToGenerator, regenerator as _regenerator } from '../../_virtual/_rollupPluginBabelHelpers.js';
import EventEmitter from 'events';

var UploadMonitor = /*#__PURE__*/_createClass(function UploadMonitor(numWorker, executor, getItem) {
  var _this = this;
  _classCallCheck(this, UploadMonitor);
  _defineProperty(this, "events", void 0);
  _defineProperty(this, "_NumWorker", void 0);
  _defineProperty(this, "_lock", new Lock());
  _defineProperty(this, "_count", 0);
  _defineProperty(this, "_getItem", void 0);
  _defineProperty(this, "_executor", void 0);
  _defineProperty(this, "addEventListen", function (event, callback) {
    return _this.events.addListener(event, callback);
  });
  _defineProperty(this, "addEventListenFinished", function (event, callback) {
    return _this.events.addListener(event, callback);
  });
  _defineProperty(this, "_emit", function (event) {
    for (var _len = arguments.length, item = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      item[_key - 1] = arguments[_key];
    }
    _this.events.emit(event, item);
  });
  _defineProperty(this, "getItem", function () {
    return _this._lock.Sync(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            return _context.a(2, _this._getItem());
        }
      }, _callee);
    })));
  });
  _defineProperty(this, "clearAll", function () {
    _this.events.removeAllListeners();
    _this._poolTasks = [];
  });
  _defineProperty(this, "_worker", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
    var item, _t;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.n) {
        case 0:
          _context2.n = 1;
          return _this.getItem();
        case 1:
          item = _context2.v;
          _this._count += 1;
        case 2:
          if (!item) {
            _context2.n = 9;
            break;
          }
          _context2.p = 3;
          _this._emit('Start', item);
          item.Signal = new AbortController();
          _context2.n = 4;
          return _this._executor(item, item.Signal.signal);
        case 4:
          _this._emit('Completed', item);
          _context2.n = 6;
          break;
        case 5:
          _context2.p = 5;
          _t = _context2.v;
          _this._emit('Error', item, _t);
        case 6:
          _context2.p = 6;
          _context2.n = 7;
          return _this.getItem();
        case 7:
          item = _context2.v;
          _this._emit('Next', item);
          return _context2.f(6);
        case 8:
          _context2.n = 2;
          break;
        case 9:
          _this._count -= 1;
        case 10:
          return _context2.a(2);
      }
    }, _callee2, null, [[3, 5, 6, 8]]);
  })));
  _defineProperty(this, "_poolTasks", []);
  _defineProperty(this, "_allTask", void 0);
  _defineProperty(this, "Wait", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
    var resolve, promise;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.n) {
        case 0:
          if (_this._allTask) {
            _context3.n = 4;
            break;
          }
          resolve = Promise.resolve;
          promise = new Promise(function (res) {
            return resolve = res;
          });
          _this._allTask = {
            promise: promise,
            resolve: resolve
          };
        case 1:
          if (!_this._poolTasks.length) {
            _context3.n = 3;
            break;
          }
          _context3.n = 2;
          return _this._poolTasks.shift();
        case 2:
          _context3.n = 1;
          break;
        case 3:
          _context3.n = 5;
          break;
        case 4:
          return _context3.a(2, _this._allTask.promise);
        case 5:
          _this._allTask = undefined;
          _this._emit('Finished');
        case 6:
          return _context3.a(2);
      }
    }, _callee3);
  })));
  _defineProperty(this, "start", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
    var index;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.n) {
        case 0:
          for (index = _this._count; index < _this._NumWorker; index++) {
            _this._poolTasks.push(_this._worker());
          }
          _context4.n = 1;
          return _this.Wait();
        case 1:
          return _context4.a(2);
      }
    }, _callee4);
  })));
  this._NumWorker = numWorker;
  this._getItem = getItem;
  this._executor = executor;
  this.events = new EventEmitter();
});
var Lock = /*#__PURE__*/_createClass(function Lock() {
  var _this2 = this;
  _classCallCheck(this, Lock);
  _defineProperty(this, "_listQueue", []);
  _defineProperty(this, "_lock", false);
  _defineProperty(this, "Sync", function (action) {
    var response = new Promise(function (res, rej) {
      _this2._listQueue.push({
        res: res,
        action: action,
        rej: rej
      });
    });
    if (!_this2._lock) _this2._ProcessQueue();
    return response;
  });
  _defineProperty(this, "_ProcessQueue", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
    var item, _t2, _t3, _t4, _t5;
    return _regenerator().w(function (_context5) {
      while (1) switch (_context5.n) {
        case 0:
          _this2._lock = true;
        case 1:
          if (!_this2._listQueue.length) {
            _context5.n = 7;
            break;
          }
          item = _this2._listQueue.shift();
          _context5.p = 2;
          _t2 = item === null || item === void 0;
          if (_t2) {
            _context5.n = 4;
            break;
          }
          _t3 = item;
          _context5.n = 3;
          return item === null || item === void 0 ? void 0 : item.action();
        case 3:
          _t4 = _context5.v;
          _t3.res.call(_t3, _t4);
        case 4:
          _context5.n = 6;
          break;
        case 5:
          _context5.p = 5;
          _t5 = _context5.v;
          item === null || item === void 0 || item.rej(_t5);
        case 6:
          _context5.n = 1;
          break;
        case 7:
          _this2._lock = false;
        case 8:
          return _context5.a(2);
      }
    }, _callee5, null, [[2, 5]]);
  })));
  _defineProperty(this, "Once", /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(action) {
      var res, _t6;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.n) {
          case 0:
            if (!_this2._lock) {
              _context6.n = 2;
              break;
            }
            _context6.n = 1;
            return new Promise(function (res, rej) {
              _this2._listQueue.push({
                res: res,
                action: action,
                rej: rej
              });
            });
          case 1:
            return _context6.a(2, _context6.v);
          case 2:
            _this2._lock = true;
            _context6.p = 3;
            _context6.n = 4;
            return action();
          case 4:
            res = _context6.v;
            _this2._listQueue.forEach(function (a) {
              return a.res(res);
            });
            return _context6.a(2, res);
          case 5:
            _context6.p = 5;
            _t6 = _context6.v;
            _this2._listQueue.forEach(function (a) {
              return a.rej(_t6);
            });
            throw _t6;
          case 6:
            _context6.p = 6;
            _this2._listQueue = [];
            _this2._lock = false;
            return _context6.f(6);
          case 7:
            return _context6.a(2);
        }
      }, _callee6, null, [[3, 5, 6, 7]]);
    }));
    return function (_x) {
      return _ref6.apply(this, arguments);
    };
  }());
});

export { Lock, UploadMonitor };
//# sourceMappingURL=UploadMonitor.js.map
