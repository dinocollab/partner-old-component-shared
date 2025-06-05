import { objectSpread2 as _objectSpread2, slicedToArray as _slicedToArray, objectWithoutProperties as _objectWithoutProperties, asyncToGenerator as _asyncToGenerator, regenerator as _regenerator, toConsumableArray as _toConsumableArray } from '../../_virtual/_rollupPluginBabelHelpers.js';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import React__default, { useCallback, useRef, useState, useEffect } from 'react';
import { Box, Typography, Chip, TextField, LinearProgress, InputBase, IconButton, FormControl, InputLabel, Select, Autocomplete, Popper, MenuItem } from '@mui/material';
import { getErrorMessage } from '../Helper/index.js';
import * as SubLocal from 'partner-local-lib/SubComponents';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { KeyExtractor } from 'partner-local-lib/helper';

var _excluded = ["title"];
var ErrorAll = function ErrorAll(props) {
  return jsx(SubLocal.ErrorBox, _objectSpread2(_objectSpread2({
    position: 'Top'
  }, getErrorMessage(props.MessageError, 'All')), {}, {
    children: props.children
  }));
};
var BoxInfo = function BoxInfo(props) {
  return jsx(Box, {
    sx: _objectSpread2({
      flex: 1,
      padding: '12px',
      marginBottom: props.mb === false ? '0' : '20px',
      border: 'none!important'
    }, props.sx || {}),
    className: props.IsBorder === false ? '' : 'card',
    children: jsxs(ErrorAll, {
      MessageError: props.MessageError,
      children: [jsxs(Box, {
        sx: _objectSpread2({
          display: 'flex',
          alignItems: 'center'
        }, props.sxTitle || {}),
        children: [jsx(Box, {
          sx: {
            marginRight: '8px'
          },
          children: props.icon
        }), jsx(Typography, {
          variant: props.variant || 'h5',
          component: 'div',
          children: props.title
        }), props.TitleExtends]
      }), props.children]
    })
  });
};
var BoxGroup = function BoxGroup(props) {
  return jsxs(Box, {
    sx: _objectSpread2({
      flex: 1,
      padding: '10px',
      marginBottom: props.mb === false ? '0' : '20px'
    }, props.sx || {}),
    className: props.IsBorder === true ? 'card' : '',
    children: [jsxs(Box, {
      sx: _objectSpread2({
        display: 'flex',
        alignItems: 'center',
        gap: '6px'
      }, props.sxTitle || {}),
      children: [jsx(Box, {
        sx: {
          margin: 0
        },
        children: props.icon
      }), jsx(Typography, {
        variant: props.variant || 'h6',
        component: 'div',
        children: props.title
      }), props.TitleExtends]
    }), props.children]
  });
};
var WrapFrom = function WrapFrom(props) {
  return props.IsForm === false ? jsx(Fragment, {
    children: props.children
  }) : jsx("form", {
    id: props.Id,
    onSubmit: props.onSubmit,
    children: props.children
  });
};
var CreateSelect2 = function CreateSelect2() {
  var Select2 = function Select2(props) {
    var abortController = React__default.useRef({
      signalController: new AbortController()
    });
    var _React$useState = React__default.useState(true),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      isInitial = _React$useState2[0],
      setIsInitial = _React$useState2[1];
    var _React$useState3 = React__default.useState([]),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      data = _React$useState4[0],
      setData = _React$useState4[1];
    var _React$useState5 = React__default.useState('no items'),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      statusText = _React$useState6[0],
      setStatusText = _React$useState6[1];
    var selectedItem = React__default.useRef(props.selectedItem);
    var refInput = useRef(null);
    var timer = React__default.useRef({
      _timer: 0,
      _second: 500,
      // _isMount: true,
      // executed: function (action: any) {
      //     if (this._isMount) {
      //         action()
      //     }
      // },
      callback: function () {
        var _callback = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(value) {
          var _abortController$curr, dataTmp, _t;
          return _regenerator().w(function (_context) {
            while (1) switch (_context.n) {
              case 0:
                _context.p = 0;
                if (abortController.current) {
                  abortController.current.signalController = new AbortController();
                }
                _context.n = 1;
                return props.fetchData(value, (_abortController$curr = abortController.current) === null || _abortController$curr === void 0 ? void 0 : _abortController$curr.signalController.signal);
              case 1:
                dataTmp = _context.v;
                setData(dataTmp);
                _context.n = 3;
                break;
              case 2:
                _context.p = 2;
                _t = _context.v;
                console.log(_t);
              case 3:
                _context.p = 3;
                setStatusText('no items');
                return _context.f(3);
              case 4:
                return _context.a(2);
            }
          }, _callee, null, [[0, 2, 3, 4]]);
        }));
        function callback(_x) {
          return _callback.apply(this, arguments);
        }
        return callback;
      }(),
      start: function start(text) {
        this._timer = window.setTimeout(this.callback, this._second, text);
      },
      clear: function clear() {
        var _abortController$curr2;
        (_abortController$curr2 = abortController.current) === null || _abortController$curr2 === void 0 || _abortController$curr2.signalController.abort();
        clearTimeout(this._timer);
      }
    });
    var Onchange = React__default.useCallback(function (event) {
      var _timer$current, _timer$current2;
      setStatusText('Loading...');
      (_timer$current = timer.current) === null || _timer$current === void 0 || _timer$current.clear();
      (_timer$current2 = timer.current) === null || _timer$current2 === void 0 || _timer$current2.start(event.target.value);
    }, []);
    var OnChangeValue = React__default.useCallback(function (event, option) {
      if (refInput.current) {
        refInput.current.value = option ? props.SelectValue(option) : null;
        if (!option) {
          var _timer$current3, _timer$current4;
          (_timer$current3 = timer.current) === null || _timer$current3 === void 0 || _timer$current3.clear();
          (_timer$current4 = timer.current) === null || _timer$current4 === void 0 || _timer$current4.start('');
        }
      }
      props.Onchange && props.Onchange(option);
    }, [props]);
    React__default.useEffect(function () {
      var mounted = true;
      var fetchInitial = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
          var _abortController$curr3, _data, search, Tmp, _t2;
          return _regenerator().w(function (_context2) {
            while (1) switch (_context2.n) {
              case 0:
                _context2.p = 0;
                _context2.n = 1;
                return props.fetchData(props.defaultValue, (_abortController$curr3 = abortController.current) === null || _abortController$curr3 === void 0 ? void 0 : _abortController$curr3.signalController.signal);
              case 1:
                _data = _context2.v;
                if (!(!Array.isArray(_data) || !mounted)) {
                  _context2.n = 2;
                  break;
                }
                return _context2.a(2);
              case 2:
                setData(_data);
                search = props.searchInitial ? props.searchInitial : function (x) {
                  return props.SelectValue(x) === props.defaultValue;
                };
                Tmp = _data.find(search);
                if (Tmp) {
                  Object.assign(selectedItem.current, Tmp);
                }
                props.onReady && props.onReady(Tmp);
                _context2.n = 4;
                break;
              case 3:
                _context2.p = 3;
                _t2 = _context2.v;
                console.log(_t2);
              case 4:
                _context2.p = 4;
                if (mounted) {
                  _context2.n = 5;
                  break;
                }
                return _context2.a(2);
              case 5:
                setStatusText('no items');
                setIsInitial(false);
                return _context2.f(4);
              case 6:
                return _context2.a(2);
            }
          }, _callee2, null, [[0, 3, 4, 6]]);
        }));
        return function fetchInitial() {
          return _ref.apply(this, arguments);
        };
      }();
      if (isInitial) {
        fetchInitial();
      }
      return function () {
        mounted = false;
      };
    }, [isInitial, props]);
    return jsxs(Fragment, {
      children: [jsx(Autocomplete, {
        fullWidth: props.fullWidth,
        options: data,
        autoHighlight: true,
        disabled: isInitial || props.disabled,
        getOptionLabel: props.GenerateLabel,
        isOptionEqualToValue: props.isOptionEqualToValue,
        defaultValue: selectedItem.current,
        onChange: OnChangeValue,
        noOptionsText: statusText,
        PopperComponent: function PopperComponent(p) {
          return jsx(Popper, _objectSpread2(_objectSpread2({}, p), {}, {
            style: _objectSpread2(_objectSpread2({}, p.style || {}), props.PopperStyle || {})
          }));
        },
        renderInput: function renderInput(params) {
          return jsx(TextField, _objectSpread2(_objectSpread2({}, params), {}, {
            label: props.title || 'title',
            onChange: Onchange,
            onBlur: props.onBlur,
            error: props.error,
            helperText: props.message,
            autoComplete: 'off',
            size: props.size,
            inputProps: _objectSpread2(_objectSpread2({}, params.inputProps), {}, {
              autoComplete: 'off' // disable autocomplete and autofill,
            })
          }));
        }
      }), jsx("input", {
        ref: refInput,
        defaultValue: props.defaultValue,
        hidden: true,
        name: props.name
      })]
    });
  };
  return Select2;
};
var CreateMultipleSelect = function CreateMultipleSelect() {
  var Select2 = function Select2(props) {
    var cancelToken = React__default.useRef({
      Token: new AbortController()
    });
    var _React$useState7 = React__default.useState(true),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      isInitial = _React$useState8[0],
      setIsInitial = _React$useState8[1];
    var _React$useState9 = React__default.useState([]),
      _React$useState0 = _slicedToArray(_React$useState9, 2),
      data = _React$useState0[0],
      setData = _React$useState0[1];
    var _React$useState1 = React__default.useState('no items'),
      _React$useState10 = _slicedToArray(_React$useState1, 2),
      statusText = _React$useState10[0],
      setStatusText = _React$useState10[1];
    var selectedItem = React__default.useRef(props.selectedItem);
    var refInput = useRef(null);
    var timer = React__default.useRef({
      _timer: 0,
      _second: 500,
      // _isMount: true,
      // executed: function (action: any) {
      //     if (this._isMount) {
      //         action()
      //     }
      // },
      callback: function () {
        var _callback2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(value) {
          var _cancelToken$current, dataTmp, _t3;
          return _regenerator().w(function (_context3) {
            while (1) switch (_context3.n) {
              case 0:
                _context3.p = 0;
                if (cancelToken.current) {
                  cancelToken.current.Token = new AbortController();
                }
                _context3.n = 1;
                return props.fetchData(value, (_cancelToken$current = cancelToken.current) === null || _cancelToken$current === void 0 || (_cancelToken$current = _cancelToken$current.Token) === null || _cancelToken$current === void 0 ? void 0 : _cancelToken$current.signal);
              case 1:
                dataTmp = _context3.v;
                setData(dataTmp);
                _context3.n = 3;
                break;
              case 2:
                _context3.p = 2;
                _t3 = _context3.v;
                console.log(_t3);
              case 3:
                _context3.p = 3;
                setStatusText('no items');
                return _context3.f(3);
              case 4:
                return _context3.a(2);
            }
          }, _callee3, null, [[0, 2, 3, 4]]);
        }));
        function callback(_x2) {
          return _callback2.apply(this, arguments);
        }
        return callback;
      }(),
      start: function start(text) {
        this._timer = window.setTimeout(this.callback, this._second, text);
      },
      clear: function clear() {
        var _cancelToken$current2;
        (_cancelToken$current2 = cancelToken.current) === null || _cancelToken$current2 === void 0 || _cancelToken$current2.Token.abort();
        clearTimeout(this._timer);
      }
    });
    var Onchange = React__default.useCallback(function (event) {
      var _timer$current5, _timer$current6;
      setStatusText('Loading...');
      (_timer$current5 = timer.current) === null || _timer$current5 === void 0 || _timer$current5.clear();
      (_timer$current6 = timer.current) === null || _timer$current6 === void 0 || _timer$current6.start(event.target.value);
    }, []);
    var OnChangeValue = React__default.useCallback(function (event, option) {
      if (refInput.current) {
        refInput.current.value = option !== null && option !== void 0 && option.length ? JSON.stringify(option.map(props.SelectValue)) : '';
        if (!option) {
          var _timer$current7, _timer$current8;
          (_timer$current7 = timer.current) === null || _timer$current7 === void 0 || _timer$current7.clear();
          (_timer$current8 = timer.current) === null || _timer$current8 === void 0 || _timer$current8.start('');
        }
      }
      props.Onchange && props.Onchange(option);
    }, [props]);
    React__default.useEffect(function () {
      var mounted = true;
      var fetchInitial = /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
          var _cancelToken$current3, _data2, search, Tmp, _selectedItem$current, _t4;
          return _regenerator().w(function (_context4) {
            while (1) switch (_context4.n) {
              case 0:
                _context4.p = 0;
                _context4.n = 1;
                return props.fetchData('', (_cancelToken$current3 = cancelToken.current) === null || _cancelToken$current3 === void 0 || (_cancelToken$current3 = _cancelToken$current3.Token) === null || _cancelToken$current3 === void 0 ? void 0 : _cancelToken$current3.signal);
              case 1:
                _data2 = _context4.v;
                if (!(!Array.isArray(_data2) || !mounted)) {
                  _context4.n = 2;
                  break;
                }
                return _context4.a(2);
              case 2:
                setData(_data2);
                search = props.searchInitial ? props.searchInitial : function (x) {
                  var _props$defaultValue;
                  return (_props$defaultValue = props.defaultValue) === null || _props$defaultValue === void 0 ? void 0 : _props$defaultValue.some(function (y) {
                    return y === props.SelectValue(x);
                  });
                };
                Tmp = _data2.filter(search);
                if (Tmp) {
                  (_selectedItem$current = selectedItem.current).push.apply(_selectedItem$current, _toConsumableArray(Tmp));
                  // Object.assign(selectedItem.current, Tmp)
                }
                props.onReady && props.onReady(Tmp);
                _context4.n = 4;
                break;
              case 3:
                _context4.p = 3;
                _t4 = _context4.v;
                console.log(_t4);
              case 4:
                _context4.p = 4;
                if (mounted) {
                  _context4.n = 5;
                  break;
                }
                return _context4.a(2);
              case 5:
                setStatusText('no items');
                setIsInitial(false);
                return _context4.f(4);
              case 6:
                return _context4.a(2);
            }
          }, _callee4, null, [[0, 3, 4, 6]]);
        }));
        return function fetchInitial() {
          return _ref2.apply(this, arguments);
        };
      }();
      if (isInitial) {
        fetchInitial();
      }
      return function () {
        mounted = false;
      };
    }, [isInitial, props]);
    return jsxs(Fragment, {
      children: [jsx(Autocomplete, {
        options: data,
        autoHighlight: true,
        disabled: isInitial,
        multiple: true,
        limitTags: props.limitTags,
        getOptionLabel: props.GenerateLabel,
        isOptionEqualToValue: props.isOptionEqualToValue,
        defaultValue: selectedItem.current,
        onChange: OnChangeValue,
        noOptionsText: statusText,
        PopperComponent: function PopperComponent(p) {
          return jsx(Popper, _objectSpread2(_objectSpread2({}, p), {}, {
            style: _objectSpread2(_objectSpread2({}, p.style || {}), props.PopperStyle || {})
          }));
        },
        renderInput: function renderInput(params) {
          return jsx(TextField, _objectSpread2(_objectSpread2({}, params), {}, {
            label: props.title || 'title',
            onChange: Onchange,
            onBlur: props.onBlur,
            error: props.error,
            helperText: props.message,
            inputProps: _objectSpread2(_objectSpread2({}, params.inputProps), {}, {
              autoComplete: 'off' // disable autocomplete and autofill,
            })
          }));
        }
      }), jsx("input", {
        ref: refInput,
        defaultValue: JSON.stringify(props.defaultValue),
        hidden: true,
        name: props.name
      })]
    });
  };
  return Select2;
};
var colors = ['#880e4f', '#b388ff', '#800000', '#3f51b5', '#006064', '#5d4037', '#4a148c', '#ff5722'];
// const colors = [
//     'linear-gradient(to right,#880e4f,#cb76a3)',
//     'linear-gradient(to right,#b388ff,#ab9dc3)',
//     'linear-gradient(to right,#800000,#b15e5e)',
//     'linear-gradient(to right,#3f51b5,#777fad)',
//     'linear-gradient(to right,#006064,#72d3d7)',
//     'linear-gradient(to right,#5d4037,#cd927f)',
//     'linear-gradient(to right,#4a148c,#ad92cf)',
//     'linear-gradient(to right,#ff5722,#ebae9b)',
// ]
var hashCode = function hashCode(s) {
  return s.split('').reduce(function (a, b) {
    a = (a << 5) - a + b.charCodeAt(0);
    return a & a;
  }, 0);
};
var getColor = function getColor(index) {
  return colors[Math.abs(index) % colors.length];
};
var Chips = function Chips(_ref3) {
  var _data$map;
  var data = _ref3.data;
  return jsx(Box, {
    sx: {
      flexWrap: 'wrap',
      display: 'flex',
      justifyContent: 'center',
      flex: 1
    },
    children: (_data$map = data === null || data === void 0 ? void 0 : data.map(function (option, index) {
      return jsx(Chip, {
        size: 'small',
        sx: {
          background: getColor(hashCode(option)),
          color: 'white',
          // borderColor: colors[index % colors.length],
          // color: colors[index % colors.length],
          fontWeight: 'bold',
          fontSize: 10,
          height: '18px',
          marginRight: '2px',
          boxSizing: 'border-box'
        },
        variant: 'filled',
        label: option
      }, KeyExtractor(option, index));
    })) !== null && _data$map !== void 0 ? _data$map : ''
  });
};
var CreateMultipleTags = function CreateMultipleTags() {
  var Select2 = function Select2(props) {
    var _props$data;
    var refInput = useRef(null);
    var OnChangeValue = React__default.useCallback(function (event, option) {
      if (refInput.current) {
        refInput.current.value = option !== null && option !== void 0 && option.length ? JSON.stringify(option) : '';
      }
      props.Onchange && props.Onchange(option);
    }, [props]);
    return jsxs(Fragment, {
      children: [jsx(Autocomplete, {
        options: (_props$data = props.data) !== null && _props$data !== void 0 ? _props$data : [],
        multiple: true,
        onChange: OnChangeValue,
        PopperComponent: function PopperComponent(p) {
          return jsx(Popper, _objectSpread2(_objectSpread2({}, p), {}, {
            style: _objectSpread2(_objectSpread2({}, p.style || {}), props.PopperStyle || {})
          }));
        },
        freeSolo: true,
        defaultValue: props.defaultValue,
        renderTags: function renderTags(value, getTagProps) {
          return value.map(function (option, index) {
            var color = getColor(hashCode(option));
            return jsx(Chip, _objectSpread2({
              sx: {
                borderColor: color,
                color: color,
                fontWeight: 'bold'
              },
              variant: 'outlined',
              label: option
            }, getTagProps({
              index: index
            })));
          });
        },
        renderInput: function renderInput(params) {
          return jsx(TextField, _objectSpread2(_objectSpread2({}, params), {}, {
            label: props.title || 'title',
            onBlur: props.onBlur,
            error: props.error,
            placeholder: 'Enter tags',
            helperText: props.message,
            inputProps: _objectSpread2(_objectSpread2({}, params.inputProps), {}, {
              autoComplete: 'off' // disable autocomplete and autofill,
            })
          }));
        }
      }), jsx("input", {
        ref: refInput,
        defaultValue: props.defaultValue ? JSON.stringify(props.defaultValue) : '',
        hidden: true,
        name: props.name
      })]
    });
  };
  return Select2;
};
var DatePickers = function DatePickers(props) {
  var _React$useState11 = React__default.useState(props.defaultValue || new Date()),
    _React$useState12 = _slicedToArray(_React$useState11, 2),
    value = _React$useState12[0],
    setValue = _React$useState12[1];
  var handleChange = useCallback(function (newValue) {
    setValue(newValue);
    if (refInput.current) {
      refInput.current.value = newValue && !isNaN(newValue.getTime()) ? newValue.toISOString() : '';
    }
    props.Onchange && props.Onchange(newValue);
  }, [props]);
  var refInput = useRef(null);
  return jsxs(LocalizationProvider, {
    dateAdapter: AdapterDateFns,
    children: [jsx(DatePicker, {
      label: props.Title || 'Title',
      inputFormat: props.inputFormat || 'MM/dd/yyyy',
      views: ['day', 'month', 'year'],
      value: value,
      onChange: handleChange,
      disabled: props.disable,
      renderInput: function renderInput(params) {
        return jsx(TextField, _objectSpread2(_objectSpread2({
          onBlur: props.onBlur,
          fullWidth: true
        }, params), {}, {
          error: props.error,
          helperText: props.message
        }));
      }
    }), jsx("input", {
      ref: refInput,
      defaultValue: (props.defaultValue || new Date()).toISOString(),
      hidden: true,
      name: props.name
    })]
  });
};
var LazyView = function LazyView(props) {
  return jsxs(Box, {
    sx: _objectSpread2({
      position: 'relative'
    }, props.sx || {}),
    children: [props.children, props.IsLazy ? jsx(Box, {
      sx: {
        flex: 1,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        position: 'absolute',
        opacity: 0.8,
        background: 'rgb(0 0 0 / 0.3)'
      },
      children: props.IsLazy && props.showProgress !== false ? jsx(LinearProgress, {}) : ''
    }) : '']
  });
};
var OverlayView = function OverlayView(props) {
  var _useState = useState(props.open || false),
    _useState2 = _slicedToArray(_useState, 2),
    IsOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var configShow = {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  };
  var getConfig = useCallback(function () {
    return IsOpen ? configShow : {
      display: 'none'
    };
  }, [IsOpen, configShow]);
  useEffect(function () {
    setIsOpen(props.open || false);
  }, [props.open]);
  return jsx(Box, {
    sx: _objectSpread2(_objectSpread2({
      position: 'absolute',
      flex: 1
    }, getConfig()), {}, {
      background: 'white'
    }),
    children: props.children
  });
};
var InputSearch = function InputSearch(props) {
  var _props$placeholder, _props$placeholder2;
  var _useState3 = useState(''),
    _useState4 = _slicedToArray(_useState3, 2),
    TextSearch = _useState4[0],
    setTextSearch = _useState4[1];
  var _onSearch = useCallback(function (text, signal) {
    props.onSearch && props.onSearch(text, signal);
  }, [props]);
  var timer = React__default.useRef({
    _timer: 0,
    _second: 500,
    _controller: new AbortController(),
    callback: function callback(value) {
      try {
        this._controller = new AbortController();
        _onSearch(value, this._controller);
      } catch (error) {
        console.log(error);
      } finally {
        props.onEnd && props.onEnd();
      }
    },
    start: function start(text) {
      props.onStart && props.onStart();
      this._timer = window.setTimeout(this.callback, this._second, text);
    },
    clear: function clear() {
      this._controller.abort();
      clearTimeout(this._timer);
    }
  });
  useEffect(function () {
    var _timer = timer.current;
    return function () {
      _timer.clear();
    };
  }, []);
  var _onChange = useCallback(function (event) {
    var _timer$current9, _timer$current0;
    setTextSearch(event.target.value);
    (_timer$current9 = timer.current) === null || _timer$current9 === void 0 || _timer$current9.clear();
    (_timer$current0 = timer.current) === null || _timer$current0 === void 0 || _timer$current0.start(event.target.value);
  }, []);
  var _onAction = useCallback(function () {
    var _timer$current1;
    (_timer$current1 = timer.current) === null || _timer$current1 === void 0 || _timer$current1.clear();
    if (TextSearch) {
      setTextSearch('');
      timer.current.callback('');
    } else {
      timer.current.callback(TextSearch);
    }
  }, [TextSearch]);
  return jsxs(Box, {
    sx: _objectSpread2({
      p: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 300
    }, props.PaperSx || {}),
    children: [jsx(InputBase, {
      sx: {
        ml: 1,
        flex: 1
      },
      placeholder: (_props$placeholder = props.placeholder) !== null && _props$placeholder !== void 0 ? _props$placeholder : 'Search...',
      inputProps: {
        'aria-label': (_props$placeholder2 = props.placeholder) !== null && _props$placeholder2 !== void 0 ? _props$placeholder2 : 'Search...'
      },
      value: TextSearch,
      onChange: _onChange
    }), jsx(IconButton, {
      onClick: _onAction,
      type: 'submit',
      sx: {
        p: '10px'
      },
      "aria-label": 'search',
      children: TextSearch ? jsx(CloseIcon, {}) : jsx(SearchIcon, {})
    })]
  });
};
var PageRoute = function PageRoute(props) {
  useEffect(function () {
    document.title = (props.prefix || '') + (props.title || '');
  }, [props.prefix, props.title]);
  return jsx(Fragment, {
    children: props.children
  });
};
var WrapPageRoute = function WrapPageRoute(WrapComponent) {
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function (props) {
    var _option$title;
    var title = props.title,
      other = _objectWithoutProperties(props, _excluded);
    return jsx(PageRoute, {
      title: (_option$title = option.title) !== null && _option$title !== void 0 ? _option$title : title,
      prefix: option.prefix,
      children: jsx(WrapComponent, _objectSpread2({}, other))
    });
  };
};
var PageContent = function PageContent(props) {
  var PanelAction = props.PanelAction;
  return jsxs(Box, {
    sx: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1
    },
    children: [jsxs(Box, {
      sx: {
        minHeight: 50,
        display: 'flex',
        justifyContent: 'flex-end',
        margin: '5px'
      },
      children: [jsx(Box, {
        sx: {
          display: 'flex',
          flex: 1,
          alignItems: 'center'
        },
        children: jsx(Typography, {
          variant: 'h5',
          children: props.Title
        })
      }), jsx(Box, {
        sx: {
          display: 'flex',
          justifyContent: 'flex-end',
          flex: 1
        },
        children: PanelAction
      })]
    }), props.children]
  });
};
var SmallSelect = function SmallSelect(props) {
  var _useState5 = useState(Array.isArray(props.data) ? props.data : undefined),
    _useState6 = _slicedToArray(_useState5, 2),
    data = _useState6[0],
    setData = _useState6[1];
  var _useState7 = useState(props.value || props.defaultValue || data && data[0].value || '-1'),
    _useState8 = _slicedToArray(_useState7, 2),
    value = _useState8[0],
    setValue = _useState8[1];
  var handleChange = useCallback(function (event) {
    setValue(event.target.value);
    props.onChange && props.onChange(event.target.value);
  }, [props]);
  var renderItems = function renderItems() {
    return data === null || data === void 0 ? void 0 : data.map(function (item, index) {
      return jsx(MenuItem, {
        value: item.value,
        children: item.name
      }, item.value);
    });
  };
  useEffect(function () {
    if (typeof props.data === 'function' && data === undefined) {
      props.data().then(function (d) {
        setValue(props.value || props.defaultValue || d && d[0].value);
        setData(d);
      })["catch"](function (er) {
        return setData([]);
      });
    }
  }, [data, props]);
  return jsxs(FormControl, {
    disabled: props.disabled,
    sx: _objectSpread2({
      minWidth: 120
    }, props.sx || {}),
    size: 'small',
    children: [jsx(InputLabel, {
      id: props.id,
      children: props.title
    }), jsx(Select, {
      labelId: props.id,
      id: props.id,
      value: props.value || value,
      label: props.title,
      defaultValue: props.defaultValue,
      onChange: handleChange,
      disabled: data === undefined || props.disabled,
      children: renderItems()
    })]
  });
};
var CenterBox = function CenterBox(props) {
  return jsx(Box, {
    sx: {
      height: 0,
      margin: '0 auto'
    },
    children: jsx(Box, {
      sx: {
        display: 'flex',
        justifyContent: 'center',
        maxWidth: '1200px',
        flexDirection: 'column'
      },
      children: jsx(Box, {
        sx: props.sx,
        children: props.children
      })
    })
  });
};

export { BoxGroup, BoxInfo, CenterBox, Chips, CreateMultipleSelect, CreateMultipleTags, CreateSelect2, DatePickers, ErrorAll, InputSearch, LazyView, OverlayView, PageContent, PageRoute, SmallSelect, WrapFrom, WrapPageRoute };
//# sourceMappingURL=index.js.map
