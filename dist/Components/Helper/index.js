import { asyncToGenerator as _asyncToGenerator, typeof as _typeof, objectSpread2 as _objectSpread2, defineProperty as _defineProperty, regenerator as _regenerator, slicedToArray as _slicedToArray } from '../../_virtual/_rollupPluginBabelHelpers.js';
import ReactDOMServer from 'react-dom/server';

var Sleep = function Sleep(sec) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, sec);
  });
};
var FetchDelay = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(action, sec) {
    var _yield$Promise$all, _yield$Promise$all2, res;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          _context.n = 1;
          return Promise.all([action(), Sleep(sec)]);
        case 1:
          _yield$Promise$all = _context.v;
          _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 1);
          res = _yield$Promise$all2[0];
          return _context.a(2, res);
      }
    }, _callee);
  }));
  return function FetchDelay(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var isPromise = function isPromise(object) {
  return _typeof(object) === 'object' && typeof object.then === 'function';
};
var humanFileSize = function humanFileSize(bytes) {
  var si = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var dp = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var thresh = si ? 1000 : 1024;
  if (Math.abs(bytes) < thresh) {
    return bytes + ' B';
  }
  var units = si ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'] : ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
  var u = -1;
  var r = Math.pow(10, dp);
  do {
    bytes /= thresh;
    ++u;
  } while (Math.round(Math.abs(bytes) * r) / r >= thresh && u < units.length - 1);
  return bytes.toFixed(dp) + ' ' + units[u];
};
var humanFileSizeNoExtension = function humanFileSizeNoExtension(bytes) {
  var si = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var dp = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var thresh = si ? 1000 : 1024;
  if (Math.abs(bytes) < thresh) {
    return bytes + ' B';
  }
  var units = si ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'] : ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
  var u = -1;
  var r = Math.pow(10, dp);
  do {
    bytes /= thresh;
    ++u;
  } while (Math.round(Math.abs(bytes) * r) / r >= thresh && u < units.length - 1);
  return bytes.toFixed(dp);
};
var ConvertFormDataToJson = function ConvertFormDataToJson(form) {
  var data = Array.from(form).reduce(function (a, b) {
    if (!a[b[0]]) {
      a[b[0]] = b[1];
    } else if (Array.isArray(a[b[0]])) {
      a[b[0]].push(b[1]);
    } else {
      a[b[0]] = [a[b[0]], b[1]];
    }
    return a;
  }, {});
  Object.keys(data).forEach(function (key) {
    var value = data[key];
    if (typeof value === 'string' && (value.toString().toLocaleLowerCase() === 'true' || value.toString().toLocaleLowerCase() === 'false')) {
      data[key] = value.toString().toLocaleLowerCase() === 'true';
    }
  });
  return data;
};
var getErrorMessage = function getErrorMessage(MessageErrors, key) {
  return MessageErrors && MessageErrors[key] ? _objectSpread2(_objectSpread2({}, MessageErrors[key][0]), {}, {
    error: true
  }) : {
    error: false
  };
};
var SingleValidate = function SingleValidate(key, modelState, MessageErrors, Validator) {
  var messageErrors = Validator.run(modelState);
  if (messageErrors) {
    var errors = MessageErrors || {};
    var keys = Object.keys(modelState).filter(function (key) {
      return !!modelState[key];
    });
    keys.push(key);
    keys.forEach(function (key) {
      if (messageErrors[key]) {
        errors[key] = messageErrors[key];
      } else {
        delete errors[key];
      }
    });
    return errors;
  }
  return null;
};
var GetErrorFromResponse = function GetErrorFromResponse(error, ModelRender) {
  var _error$response;
  var data = (_error$response = error.response) === null || _error$response === void 0 ? void 0 : _error$response.data;
  if (data) {
    var keys = Object.keys(ModelRender);
    var MessageErrors = {};
    keys.forEach(function (key) {
      var messages = data[key];
      if (Array.isArray(messages) && messages.length > 0) {
        MessageErrors[key] = [{
          message: messages[0]
        }];
      }
    });
    return MessageErrors;
  }
};
var ClearFieldEmpty = function ClearFieldEmpty(model) {
  Object.keys(model).forEach(function (key) {
    if (!model[key]) delete model[key];
  });
};
var FormatNumber = new Intl.NumberFormat('en-US');
var FormatterVN = function FormatterVN(value) {
  return Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  }).format(value).replace('$', '') + ' vnđ';
};
function stringToColor(string) {
  var hash = 0;
  var i;
  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }
  var color = '#';
  for (i = 0; i < 3; i += 1) {
    var value = hash >> i * 8 & 0xff;
    color += "00".concat(value.toString(16)).slice(-2);
  }
  /* eslint-enable no-bitwise */
  return color;
}
function stringAvatar(name) {
  var _name$split, _tmps$, _tmps$2;
  var tmps = (_name$split = name === null || name === void 0 ? void 0 : name.split(' ')) !== null && _name$split !== void 0 ? _name$split : ['@'];
  var name1 = ((_tmps$ = tmps[0]) === null || _tmps$ === void 0 ? void 0 : _tmps$[0]) || '@';
  var name2 = ((_tmps$2 = tmps[1]) === null || _tmps$2 === void 0 ? void 0 : _tmps$2[0]) || '';
  return {
    sx: {
      bgcolor: stringToColor(name)
    },
    children: "".concat(name1).concat(name2)
  };
}
var _DeepClone = function DeepClone(obj) {
  if (Array.isArray(obj)) {
    return obj.map(_DeepClone);
  } else if (_typeof(obj) === 'object' && obj) {
    return Object.keys(obj).reduce(function (a, b) {
      a[b] = _DeepClone(obj[b]);
      return a;
    }, {});
  } else {
    return obj;
  }
};
function isObject(item) {
  return item && _typeof(item) === 'object' && !Array.isArray(item);
}
/**
 * Deep merge two objects.
 * @param target
 * @param ...sources
 */
function mergeDeep(target) {
  for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    sources[_key - 1] = arguments[_key];
  }
  if (!sources.length) return target;
  var source = sources.shift();
  if (isObject(target) && isObject(source)) {
    for (var key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, _defineProperty({}, key, {}));
        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, _defineProperty({}, key, source[key]));
      }
    }
  }
  return mergeDeep.apply(void 0, [target].concat(sources));
}
var humannumber = function humannumber(bytes) {
  var dp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var thresh = 1000;
  if (Math.abs(bytes) < thresh) {
    return bytes + '';
  }
  var units = ['k', 'M', 'B'];
  var u = -1;
  var r = Math.pow(10, dp);
  do {
    bytes /= thresh;
    ++u;
  } while (Math.round(Math.abs(bytes) * r) / r >= thresh && u < units.length - 1);
  return bytes.toFixed(dp) + ' ' + units[u];
};
var SignalMerge = function SignalMerge() {
  var controller = new AbortController();
  for (var _len2 = arguments.length, signals = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    signals[_key2] = arguments[_key2];
  }
  signals.forEach(function (x) {
    return x === null || x === void 0 ? void 0 : x.addEventListener('abort', function () {
      return controller.abort();
    });
  });
  return controller.signal;
};
var mapExtensionUri = {};
var GetSvgExtensionUri = function GetSvgExtensionUri(key, element) {
  var value = mapExtensionUri[key];
  if (!value) {
    var temp = ReactDOMServer.renderToStaticMarkup(element);
    value = URL.createObjectURL(new Blob([temp], {
      type: 'image/svg+xml'
    }));
    mapExtensionUri[key] = value;
  }
  return value;
};

export { ClearFieldEmpty, ConvertFormDataToJson, _DeepClone as DeepClone, FetchDelay, FormatNumber, FormatterVN, GetErrorFromResponse, GetSvgExtensionUri, SignalMerge, SingleValidate, Sleep, getErrorMessage, humanFileSize, humanFileSizeNoExtension, humannumber, isObject, isPromise, mergeDeep, stringAvatar, stringToColor };
//# sourceMappingURL=index.js.map
