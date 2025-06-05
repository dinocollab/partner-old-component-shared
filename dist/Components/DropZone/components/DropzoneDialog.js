import { objectSpread2 as _objectSpread2, inherits as _inherits, createClass as _createClass, classCallCheck as _classCallCheck, callSuper as _callSuper, defineProperty as _defineProperty, asyncToGenerator as _asyncToGenerator, regenerator as _regenerator } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import PropTypes from 'prop-types';
import * as React from 'react';
import { readFile, createFileFromUrl } from '../helpers.js';
import DropzoneDialogBase from './DropzoneDialogBase.js';
import { jsx } from 'react/jsx-runtime';

var DropzoneDialog = /*#__PURE__*/function (_React$PureComponent) {
  function DropzoneDialog() {
    var _this;
    _classCallCheck(this, DropzoneDialog);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, DropzoneDialog, [].concat(args));
    _defineProperty(_this, "state", {
      fileObjects: []
    });
    _defineProperty(_this, "notifyFileChange", function () {
      var onChange = _this.props.onChange;
      var fileObjects = _this.state.fileObjects;
      if (onChange) {
        onChange(fileObjects.map(function (fileObject) {
          return fileObject.file;
        }));
      }
    });
    _defineProperty(_this, "loadInitialFiles", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var initialFiles, fileObjs, _t;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            initialFiles = _this.props.initialFiles;
            _context2.p = 1;
            _context2.n = 2;
            return Promise.all(initialFiles.map(/*#__PURE__*/function () {
              var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(initialFile) {
                var file, data;
                return _regenerator().w(function (_context) {
                  while (1) switch (_context.n) {
                    case 0:
                      if (!(typeof initialFile === "string")) {
                        _context.n = 2;
                        break;
                      }
                      _context.n = 1;
                      return createFileFromUrl(initialFile);
                    case 1:
                      file = _context.v;
                      _context.n = 3;
                      break;
                    case 2:
                      file = initialFile;
                    case 3:
                      _context.n = 4;
                      return readFile(file);
                    case 4:
                      data = _context.v;
                      return _context.a(2, {
                        file: file,
                        data: data
                      });
                  }
                }, _callee);
              }));
              return function (_x) {
                return _ref2.apply(this, arguments);
              };
            }()));
          case 2:
            fileObjs = _context2.v;
            _this.setState(function (state) {
              return {
                fileObjects: [].concat(state.fileObjects, fileObjs)
              };
            }, _this.notifyFileChange);
            _context2.n = 4;
            break;
          case 3:
            _context2.p = 3;
            _t = _context2.v;
            console.log(_t);
          case 4:
            return _context2.a(2);
        }
      }, _callee2, null, [[1, 3]]);
    })));
    _defineProperty(_this, "addFiles", /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(newFileObjects) {
        var filesLimit;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              filesLimit = _this.props.filesLimit; // Update component state
              _this.setState(function (state) {
                // Handle a single file
                if (filesLimit <= 1) {
                  return {
                    fileObjects: [].concat(newFileObjects[0])
                  };
                }

                // Handle multiple files
                return {
                  fileObjects: [].concat(state.fileObjects, newFileObjects)
                };
              }, _this.notifyFileChange);
            case 1:
              return _context3.a(2);
          }
        }, _callee3);
      }));
      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
    _defineProperty(_this, "deleteFile", function (removedFileObj, removedFileObjIdx) {
      global.event.stopPropagation();
      var onDelete = _this.props.onDelete;
      var fileObjects = _this.state.fileObjects;

      // Calculate remaining fileObjects array
      var remainingFileObjs = fileObjects.filter(function (fileObject, i) {
        return i !== removedFileObjIdx;
      });

      // Notify removed file
      if (onDelete) {
        onDelete(removedFileObj.file);
      }

      // Update local state
      _this.setState({
        fileObjects: remainingFileObjs
      }, _this.notifyFileChange);
    });
    _defineProperty(_this, "handleClose", function (evt) {
      var _this$props = _this.props,
        clearOnUnmount = _this$props.clearOnUnmount,
        onClose = _this$props.onClose;
      if (onClose) {
        onClose(evt);
      }
      if (clearOnUnmount) {
        _this.setState({
          fileObjects: []
        }, _this.notifyFileChange);
      }
    });
    _defineProperty(_this, "handleSave", function (evt) {
      var _this$props2 = _this.props,
        clearOnUnmount = _this$props2.clearOnUnmount,
        onSave = _this$props2.onSave;
      var fileObjects = _this.state.fileObjects;
      if (onSave) {
        onSave(fileObjects.map(function (fileObject) {
          return fileObject.file;
        }), evt);
      }
      if (clearOnUnmount) {
        _this.setState({
          fileObjects: []
        }, _this.notifyFileChange);
      }
    });
    return _this;
  }
  _inherits(DropzoneDialog, _React$PureComponent);
  return _createClass(DropzoneDialog, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadInitialFiles();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var clearOnUnmount = this.props.clearOnUnmount;
      if (clearOnUnmount) {
        this.setState({
          fileObjects: []
        }, this.notifyFileChange);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var fileObjects = this.state.fileObjects;
      return /*#__PURE__*/jsx(DropzoneDialogBase, _objectSpread2(_objectSpread2({}, this.props), {}, {
        fileObjects: fileObjects,
        onAdd: this.addFiles,
        onDelete: this.deleteFile,
        onClose: this.handleClose,
        onSave: this.handleSave
      }));
    }
  }]);
}(React.PureComponent);
DropzoneDialog.defaultProps = {
  clearOnUnmount: true,
  filesLimit: 3,
  initialFiles: []
};
DropzoneDialog.propTypes = _objectSpread2(_objectSpread2({}, DropzoneDialogBase.propTypes), {}, {
  /** Clear uploaded files when component is unmounted. */
  clearOnUnmount: PropTypes.bool,
  /** Maximum number of files that can be loaded into the dropzone. */
  filesLimit: PropTypes.number,
  /** List containing File objects or URL strings.<br/>
   * **Note:** Please take care of CORS.
   */
  initialFiles: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.any])),
  /**
   * Fired when the user clicks the Submit button.
   *
   * @param {File[]} files All the files currently inside the Dropzone.
   * @param {SyntheticEvent} event The react `SyntheticEvent`.
   */
  onSave: PropTypes.func
});

export { DropzoneDialog as default };
//# sourceMappingURL=DropzoneDialog.js.map
